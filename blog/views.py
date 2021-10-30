from django.shortcuts import render
from django.views.generic import ListView ,DetailView
from .models import Post


class PostList(ListView):
    model = Post
    ordering = '-pk'


class PostDetail(DetailView):
    model = Post

# def index(request):    #ListView가 얘를 대체
#     posts = Post.objects.all().order_by('-pk')
#     return render(
#         request,
#         'blog/post_list.html',
#         {
#             'abc': posts,
#         }
#     )

# def single_post_page(request,pk): #request는 항상오는거  ,DetailView가 얘를대체
#     post = Post.objects.get(pk=pk)
#
#     return render(
#         request,
#         'blog/post_detail.html',
#         {
#             'post':post,
#         }
#     )