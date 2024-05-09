# Generated by Django 5.0.4 on 2024-05-09 09:40

import cash.models
import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = []

    operations = [
        migrations.CreateModel(
            name="Bank",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("name", models.CharField(max_length=255)),
                (
                    "icon",
                    models.ImageField(
                        null=True, upload_to=cash.models.create_custom_path
                    ),
                ),
            ],
        ),
        migrations.CreateModel(
            name="Category",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("name", models.CharField(max_length=255)),
                (
                    "icon",
                    models.ImageField(
                        null=True, upload_to=cash.models.create_custom_path
                    ),
                ),
                ("color", models.CharField(max_length=20, null=True)),
            ],
        ),
        migrations.CreateModel(
            name="Plan",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("title", models.CharField(max_length=255)),
                ("description", models.TextField()),
                ("start_date", models.DateField()),
                ("finish_date", models.DateField()),
                (
                    "icon",
                    models.ImageField(
                        null=True, upload_to=cash.models.create_custom_path
                    ),
                ),
                ("status", models.BooleanField(default=False)),
                ("color", models.CharField(max_length=20, null=True)),
            ],
        ),
        migrations.CreateModel(
            name="Card",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("name", models.CharField(max_length=255)),
                ("card_number", models.CharField(max_length=255)),
                ("balance", models.FloatField()),
                ("token", models.CharField(max_length=255)),
                (
                    "icon",
                    models.ImageField(
                        null=True, upload_to=cash.models.create_custom_path
                    ),
                ),
                (
                    "bank",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE, to="cash.bank"
                    ),
                ),
            ],
        ),
        migrations.CreateModel(
            name="Cost",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("name", models.CharField(max_length=255)),
                ("description", models.TextField(blank=True, null=True)),
                ("date", models.DateField(auto_now_add=True)),
                ("price", models.FloatField()),
                ("cards", models.ManyToManyField(to="cash.card")),
                (
                    "category",
                    models.ForeignKey(
                        null=True,
                        on_delete=django.db.models.deletion.SET_NULL,
                        to="cash.category",
                    ),
                ),
            ],
            options={
                "abstract": False,
            },
        ),
        migrations.CreateModel(
            name="Revenue",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("name", models.CharField(max_length=255)),
                ("description", models.TextField(blank=True, null=True)),
                ("date", models.DateField(auto_now_add=True)),
                ("amount", models.FloatField()),
                ("cards", models.ManyToManyField(to="cash.card")),
                (
                    "category",
                    models.ForeignKey(
                        null=True,
                        on_delete=django.db.models.deletion.SET_NULL,
                        to="cash.category",
                    ),
                ),
            ],
            options={
                "abstract": False,
            },
        ),
        migrations.CreateModel(
            name="Wallet",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("cash", models.FloatField()),
                (
                    "cards",
                    models.ManyToManyField(related_name="wallets", to="cash.card"),
                ),
                (
                    "costs",
                    models.ManyToManyField(related_name="wallets", to="cash.cost"),
                ),
                (
                    "plans",
                    models.ManyToManyField(related_name="wallets", to="cash.plan"),
                ),
                (
                    "revenues",
                    models.ManyToManyField(related_name="wallets", to="cash.revenue"),
                ),
            ],
        ),
    ]