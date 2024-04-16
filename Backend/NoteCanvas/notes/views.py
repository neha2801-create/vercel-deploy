from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.http import require_http_methods
from django.core.exceptions import ObjectDoesNotExist
from .models import Note
from canvas.models import Canvas
import json
from django.views.decorators.csrf import csrf_exempt

@csrf_exempt
@require_http_methods(["POST"])
def create_note(request, canvas_id):
    try:
        data = json.loads(request.body)
        try:
            canvas = Canvas.objects.get(id=canvas_id)
        except ObjectDoesNotExist:
            return JsonResponse({"error": f"Canvas with id {canvas_id} does not exist."}, status=404)
        note = Note.objects.create(
            canvas=canvas,
            # notesBody=data['notesBody'], # this will be blank in create so change model accordingly
            posX=data['posX'],
            posY=data['posY'],
            height=data['height'],
            width=data['width'],
            pinned=data['pinned'],
            color=data['color']
        )
        return JsonResponse({"message": "Note created successfully.", "note_id": note.id}, status=201)
    except Exception as e:
        return JsonResponse({"error": str(e)}, status=400)

@csrf_exempt
@require_http_methods(["DELETE"])
def delete_note(request, note_id):
    try:
        note = Note.objects.get(id=note_id)
        note.delete()
        return JsonResponse({"message": "Note deleted successfully."}, status=200)
    except ObjectDoesNotExist:
        return JsonResponse({"error": "Note not found."}, status=404)

@csrf_exempt
@require_http_methods(["PUT"])
def update_note(request, note_id):
    try:
        data = json.loads(request.body)
        note = Note.objects.get(id=note_id)
        note.notesBody = data.get('notesBody', note.notesBody)
        note.posX = data.get('posX', note.posX)
        note.posY = data.get('posY', note.posY)
        note.height = data.get('height', note.height)
        note.width = data.get('width', note.width)
        note.pinned = data.get('pinned', note.pinned)
        note.color = data.get('color', note.color)
        note.save()
        return JsonResponse({"message": "Note updated successfully."}, status=200)
    except ObjectDoesNotExist:
        return JsonResponse({"error": "Note not found."}, status=404)
    except Exception as e:
        return JsonResponse({"error": str(e)}, status=400)

@csrf_exempt
@require_http_methods(["POST"])
def pin_note(request, note_id):
    try:
        note = Note.objects.get(id=note_id)
        note.pinned = not note.pinned  # Toggle the pinned status
        note.save()
        return JsonResponse({"message": "Note pinned status toggled successfully."}, status=200)
    except ObjectDoesNotExist:
        return JsonResponse({"error": "Note not found."}, status=404)
    except Exception as e:
        return JsonResponse({"error": str(e)}, status=400)
