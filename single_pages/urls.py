from django.urls import path
from . import views

urlpatterns = [
    path('about_me/', views.about_me),
    path('',views.landing),
    path('군산/', views.군산),
    path('인천/', views.인천),
    path('속초/', views.속초),
    path('강릉/', views.강릉),
    path('포항/', views.포항),
    path('거제/', views.거제),
    path('제주/', views.제주),
    path('통영/', views.통영),
    path('여수/', views.여수),
    path('서울/', views.서울),
    path('가평/', views.가평),
    path('전주/', views.전주),
    path('경주/', views.경주),
]