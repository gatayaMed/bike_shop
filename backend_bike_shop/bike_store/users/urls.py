    
from django.urls import path

from . views import LogoutView, CustomerRegistrationView
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
    TokenVerifyView,
)
#Simple-JWT provides built-in views for obtaining and refreshing tokens.
urlpatterns = [
    # JWT Authentication Endpoints  
    

    path('token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),  # Login
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),  # Refresh token
    path('token/verify/', TokenVerifyView.as_view(), name='token_verify'),  # Verify token

    path('logout/', LogoutView.as_view(), name='logout'),
    path('register/', CustomerRegistrationView.as_view(), name='customer_register'),
]
