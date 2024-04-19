import os
import uuid

from django.conf import settings
from django.db import models
from django.utils.text import slugify


def create_custom_path(instance: str,
                       filename: str,
                       ) -> str:
    """ Generate custom upload path for image fields. """
    _, extension = os.path.splitext(filename)
    return os.path.join("uploads/images/",
                        f"{slugify(instance.title)}-{uuid.uuid4()}{extension}",
                        )


class ToDo(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField()
    start_date = models.DateField()
    finish_date = models.DateField()
    icon = models.ImageField(null=True, upload_to=create_custom_path)
    status = models.BooleanField(default=False)
    color = models.CharField(max_length=20, null=True)


class Category(models.Model):
    name = models.CharField(max_length=255)
    icon = models.ImageField(null=True, upload_to=create_custom_path)
    color = models.CharField(max_length=20, null=True)


class Card(models.Model):
    name = models.CharField(max_length=255)
    card_number = models.CharField(max_length=255)
    balance = models.FloatField()
    token = models.CharField(max_length=255)
    icon = models.ImageField(null=True, upload_to=create_custom_path)


class Revenue(models.Model):
    name = models.CharField(max_length=255)
    category = models.ForeignKey(Category, on_delete=models.SET_NULL, null=True)
    amount = models.FloatField()
    description = models.TextField(blank=True, null=True)
    date = models.DateField(auto_now_add=True)
    cards = models.ManyToManyField(Card)


class Cost(models.Model):
    name = models.CharField(max_length=255)
    category = models.ForeignKey(Category, on_delete=models.SET_NULL, null=True)
    price = models.FloatField()
    description = models.TextField(blank=True, null=True)
    date = models.DateField(auto_now_add=True)
    cards = models.ManyToManyField(Card)


class Wallet(models.Model):
    user = models.ForeignKey(
        settings.AUTH_USER_MODEL, on_delete=models.CASCADE
    )
    cash = models.FloatField()
    cards = models.ManyToManyField(Card, related_name='wallets')
    costs = models.ManyToManyField(Cost, related_name='wallets')
    revenues = models.ManyToManyField(Revenue, related_name='wallets')
    todos = models.ManyToManyField(ToDo, related_name='wallets')
