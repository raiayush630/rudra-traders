from django.urls import path
from . import views

urlpatterns = [
    path('categories/', views.CategoryListView.as_view(), name='category-list'),
    path('products/', views.ProductListView.as_view(), name='product-list'),
    path('products/featured/', views.FeaturedProductsView.as_view(), name='featured-products'),
    path('products/<int:pk>/', views.ProductDetailView.as_view(), name='product-detail'),
    path('contact/', views.ContactMessageCreateView.as_view(), name='contact-message'),
]
