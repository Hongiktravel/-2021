from django.db import models
from markdown import markdown
from markdownx.models import MarkdownxField
from markdownx.utils import markdown
from django.contrib.auth.models import User
import os

class Category(models.Model):
    name= models.CharField(max_length=50,unique=True)
    slug = models.SlugField(max_length=200,unique=True, allow_unicode=True)

    def __str__(self):  # admin에서 요거를 가지고 구분하겠다.
        return self.name

    def get_absolute_url(self):
        return f'/blog/category/{self.slug}/'

    class Meta:   # 복수형 이름 바꾸기
        verbose_name_plural='Categories'


class Tag(models.Model):
    name = models.CharField(max_length=50, unique=True)
    slug = models.SlugField(max_length=200, unique=True, allow_unicode=True)

    def __str__(self):  # admin에서 요거를 가지고 구분하겠다.
        return self.name

    def get_absolute_url(self):
        return f'/blog/tag/{self.slug}/'

class Post(models.Model):#파이썬에서 제공하는 모델 사용
    title=models.CharField(max_length=50)#장고에서 제공하는기능 (보통 짧은 내용)
    hook_text = models.CharField(max_length=100, blank=True)
    content = MarkdownxField()
    file_upload= models.FileField(upload_to='blog/files/%Y/%m/%d/',blank=True)
    head_image = models.ImageField(upload_to='blog/images/%Y/%m/%d/',blank=True)
    created_at = models.DateTimeField(auto_now_add=True) # 데이터베이스에 이런것들을 저장할수있도록 가능
    author = models.ForeignKey(User,null=True,on_delete=models.SET_NULL)
    category = models.ForeignKey(Category, blank=True,null=True,on_delete=models.SET_NULL)
    updated_at=models.DateTimeField(auto_now=True)#수정됬을때는 수정된시간만 저장, 추가됬을때는 저절로 입력
    tags=models.ManyToManyField(Tag,blank=True)

    def __str__(self):
        return f'[{self.pk}]{self.title} :: {self.author} '

    def get_absolute_url(self):
        return f'/blog/{self.pk}'

    def get_content_markdown(self):
        return markdown(self.content)

    def get_file_name(self):
        return os.path.basename(self.file_upload.name)

    def get_file_ext(self):
        return self.get_file_name().split('.')[-1]