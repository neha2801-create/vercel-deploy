from django.shortcuts import render, redirect
from django.contrib.auth import get_user_model
from django.contrib import messages
from django.contrib.auth import authenticate, login, logout
from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse
from .models import CustomUser
from django.contrib.auth.hashers import make_password
import json

@csrf_exempt
def register(request):
    if request.user.is_authenticated:
        return redirect('index')
    if request.method == 'POST':
        try:
            # Assuming you receive JSON data
            data = json.loads(request.body)
            print(request.body)
            user = CustomUser.objects.create(
                username=data['signUpUsername'],
                email=data['signUpEmail'],
                full_name=data['signUpFullName'],
                password=make_password(data['signUpPassword']),
                # profile_picture=data['signUpProfilePic'] # todo: check if data contains signupProfilepic key then only access it
            )
            user.save()
            return JsonResponse({'message': 'User created successfully'}, status=201)
        except Exception as e:
            return JsonResponse({'error': str(e)}, status=400)
    else:
        return JsonResponse({'error': 'Invalid HTTP method'}, status=405)

@csrf_exempt
def loginPage(request):
    if request.user.is_authenticated:
        return redirect('index')
    if request.method == 'POST':
        try:
            data = json.loads(request.body)
            email = data.get('email')
            password = data.get('password')
            User = get_user_model()
            try:
                username = User.objects.get(email=email) #get username from email
            except User.DoesNotExist:
                username = None
            user = authenticate(request, username=username, password=password)
            if user is not None:
                login(request, user)
                return JsonResponse({'message': 'Login successful'}, status=200)
            else:
                return JsonResponse({'error': 'Invalid credentials'}, status=400)

        except Exception as e:
            return JsonResponse({'error': str(e)}, status=400)
    else:
        return JsonResponse({'error': 'Invalid HTTP method'}, status=405)

@csrf_exempt
def logoutUser(request):
    logout(request)
    return JsonResponse({'message': 'Logged out successfully'}, status=200)
