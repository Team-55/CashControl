from rest_framework import serializers

from .models import (
    Plan,
    Revenue,
    Cost,
    Card,
    Wallet,
)


class PlanSerializer(serializers.ModelSerializer):
    class Meta:
        model = Plan()
        fields = "__all__"


class RevenueSerializer(serializers.ModelSerializer):
    class Meta:
        model = Revenue()
        fields = "id",


class CostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cost()
        fields = "id",


class CardSerializer(serializers.ModelSerializer):
    class Meta:
        model = Card()
        fields = "id",


class WalletSerializer(serializers.ModelSerializer):
    class Meta:
        model = Wallet()
        fields = "id", "cash",
