from django.shortcuts import render, redirect
from .forms import CustomUserCreationForm
from django.contrib.auth import get_user_model
from django.contrib import messages
from django.contrib.auth import authenticate, login, logout

# Create your views here.
def index(request):
    context = {}
    return render(request, 'users/index.html', context)

def register(request):
    form = CustomUserCreationForm()
    if request.method == 'POST':
        form = CustomUserCreationForm(request.POST)
        if form.is_valid():
            form.save()
            messages.success(request, "Account created")
            return redirect('login')
    context = {
        'form': form
    }
    return render(request, 'users/register.html', context)

def loginPage(request):
    if request.method == 'POST':
        username = request.POST.get('username')
        password = request.POST.get('password')
        user1 = authenticate(request, username=username, password=password)

        email = request.POST.get('username')
        User = get_user_model()
        try:
            username2 = User.objects.get(email=email) #get username from email
        except User.DoesNotExist:
            username2 = None
        user2 = authenticate(request, username=username2, password=password)

        if user1 is not None:
            login(request, user1)
            return redirect('index')
        elif user2 is not None:
            login(request, user2)
            return redirect('index')
        else:
            messages.info(request, "Username or password is incorrect")
    context = {}
    return render(request, 'users/login.html', context)


def logoutUser(request):
    logout(request)
    return redirect('login')
