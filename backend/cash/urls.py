from django.urls import path, include
from rest_framework import routers

from .views import PlanViewSet

router = routers.DefaultRouter()
router.register("plans", PlanViewSet)

urlpatterns = [
    path("", include(router.urls)),
]

app_name = "cash"
