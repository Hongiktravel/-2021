from django.shortcuts import render
from blog.models import Post

def landing(request):
    recent_posts=Post.objects.order_by('-pk')[:3]
    return render(
        request,
        'single_pages/landing.html',
        {
            'recent_posts':recent_posts
        }
    )

def about_me(request):
    return render(
        request,
        'single_pages/about_me.html'
    )

def 군산(request):
    return render(
        request,
        'single_pages/군산.html'
    )
def 인천(request):
    return render(
        request,
        'single_pages/인천.html'
    )
def 속초(request):
    return render(
        request,
        'single_pages/속초.html'
    )
def 강릉(request):
    return render(
        request,
        'single_pages/강릉.html'
    )
def 포항(request):
    return render(
        request,
        'single_pages/포항.html'
    )
def 거제(request):
    return render(
        request,
        'single_pages/거제.html'
    )
def 여수(request):
    return render(
        request,
        'single_pages/여수.html'
    )
def 제주(request):
    return render(
        request,
        'single_pages/제주.html'
    )
def 통영(request):
    return render(
        request,
        'single_pages/통영.html'
    )
def 전주(request):
    return render(
        request,
        'single_pages/전주.html'
    )
def 서울(request):
    return render(
        request,
        'single_pages/서울.html'
    )
def 가평(request):
    return render(
        request,
        'single_pages/가평.html'
    )
def 경주(request):
    return render(
        request,
        'single_pages/경주.html'
    )