from django.shortcuts import render
from django.http import HttpResponse
# Create your views here.

def homepage(request):
    return render(request, 'task_tracker_app/index.html', context = {'demo':'Malboro: A great Day'})
  # return HttpResponse("<h1>Hello</h1>")