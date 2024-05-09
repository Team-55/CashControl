from django.contrib import admin

from . import models

for model in (
        models.Plan,
        models.Category,
        models.Card,
        models.Revenue,
        models.Cost,
        models.Wallet,
):
    admin.site.register(model)
