from django.shortcuts import render, get_object_or_404
from django.http import HttpResponse, HttpResponseForbidden
from .models import Canvas
from notes.models import Note
from django.views.decorators.csrf import csrf_exempt

def get(request, canvas_id):
    # First, ensure the user is authenticated
    if not request.user.is_authenticated:
        return HttpResponseForbidden("You must be logged in to view this page.")

    # Fetch the canvas by ID and ensure it belongs to the current user or return 404 if not found
    canvas = get_object_or_404(Canvas, id=canvas_id, user=request.user)

    # Retrieve all notes associated with this canvas
    notes = Note.objects.filter(canvas=canvas)


    notes_str = "Notes on Canvas '{}':\n\n".format(canvas.name)
    for note in notes:
        notes_str += "Title: {}\nBody: {}\n---\n".format(note.notesBody, note.posX, note.posY, note.height, note.width, note.pinned, note.color)

    # Return the notes as HttpResponse
    return HttpResponse(notes_str, content_type="text/plain")

@csrf_exempt
def create_canvas(request):
    # First, ensure the user is authenticated
    print(request.user)
    if not request.user.is_authenticated:
        return HttpResponseForbidden("You must be logged in to view this page.")

    # Create a new canvas for the current user
    canvas = Canvas.objects.create(user=request.user, title="New Canvas")

    # Return the canvas ID as HttpResponse
    return HttpResponse("Canvas created with ID: {}".format(canvas.id))

# def update(request, canvas_id):
#     # First, ensure the user is authenticated
#     if not request.user.is_authenticated:
#         return HttpResponseForbidden("You must be logged in to view this page.")
#
#     # Fetch the canvas by ID and ensure it belongs to the current user or return 404 if not found
#     canvas = get_object_or_404(Canvas, id=canvas_id, user=request.user)
#
#     # Update the canvas title
#     canvas.title = request.POST.get('title', canvas.title)
#     canvas.save()
#
#     # Return a success message
#     return HttpResponse("Canvas updated successfully.")