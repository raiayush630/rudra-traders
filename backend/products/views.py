from rest_framework import generics, status
from rest_framework.response import Response
from rest_framework.views import APIView
from django.db.models import Q
from .models import Category, Product, ContactMessage
from .serializers import CategorySerializer, ProductSerializer, ContactMessageSerializer


class CategoryListView(generics.ListAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer


class ProductListView(generics.ListAPIView):
    serializer_class = ProductSerializer

    def get_queryset(self):
        queryset = Product.objects.select_related('category').all()
        category = self.request.query_params.get('category')
        featured = self.request.query_params.get('featured')
        search = self.request.query_params.get('search')

        if category:
            queryset = queryset.filter(category__slug=category)
        if featured == 'true':
            queryset = queryset.filter(is_featured=True)
        if search:
            queryset = queryset.filter(
                Q(name__icontains=search) | Q(description__icontains=search)
            )
        return queryset

    def get_serializer_context(self):
        return {'request': self.request}


class ProductDetailView(generics.RetrieveAPIView):
    queryset = Product.objects.select_related('category').all()
    serializer_class = ProductSerializer

    def get_serializer_context(self):
        return {'request': self.request}


class ContactMessageCreateView(generics.CreateAPIView):
    queryset = ContactMessage.objects.all()
    serializer_class = ContactMessageSerializer

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(
                {'success': True, 'message': 'Thank you! We will contact you soon.'},
                status=status.HTTP_201_CREATED
            )
        return Response(
            {'success': False, 'errors': serializer.errors},
            status=status.HTTP_400_BAD_REQUEST
        )


class FeaturedProductsView(generics.ListAPIView):
    serializer_class = ProductSerializer

    def get_queryset(self):
        return Product.objects.filter(is_featured=True).select_related('category')[:6]

    def get_serializer_context(self):
        return {'request': self.request}
