from django.contrib import admin
from .models import Category, Product, ContactMessage


@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ['name', 'slug', 'product_count']
    prepopulated_fields = {'slug': ('name',)}
    search_fields = ['name']

    def product_count(self, obj):
        return obj.products.count()
    product_count.short_description = 'Products'


@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_display = ['name', 'category', 'price', 'price_unit', 'is_featured', 'in_stock', 'created_at']
    list_filter = ['category', 'is_featured', 'in_stock']
    search_fields = ['name', 'description', 'brand']
    list_editable = ['is_featured', 'in_stock']
    readonly_fields = ['created_at', 'updated_at']


@admin.register(ContactMessage)
class ContactMessageAdmin(admin.ModelAdmin):
    list_display = ['name', 'phone', 'email', 'created_at', 'is_read']
    list_filter = ['is_read', 'created_at']
    search_fields = ['name', 'phone', 'message']
    list_editable = ['is_read']
    readonly_fields = ['name', 'phone', 'email', 'message', 'created_at']
