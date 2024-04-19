from django.contrib import admin

from backend.cash import models

for model in (
        models.ToDo,
        models.Category,
        models.Card,
        models.Revenue,
        models.Cost,
        models.Wallet,
):
    admin.site.register(model)
