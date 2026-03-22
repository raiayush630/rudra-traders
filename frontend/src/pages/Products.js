import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { getProducts, getCategories } from '../services/api';
import ProductCard from '../components/ProductCard';

const FALLBACK_PRODUCTS = [
  { id:1, name:'BWR Plywood 19mm', category_name:'Plywood', category_slug:'plywood', price:'1850', price_unit:'per sheet (8x4 ft)', description:'Boiling Water Resistant plywood, ideal for kitchens and bathrooms.', brand:'Century', is_featured:true, in_stock:true },
  { id:2, name:'Commercial Plywood 12mm', category_name:'Plywood', category_slug:'plywood', price:'950', price_unit:'per sheet (8x4 ft)', description:'High-quality commercial grade plywood for general purpose use.', brand:'Greenply', is_featured:true, in_stock:true },
  { id:3, name:'Marine Plywood 18mm', category_name:'Plywood', category_slug:'plywood', price:'2200', price_unit:'per sheet (8x4 ft)', description:'Waterproof marine-grade plywood for outdoor and high moisture areas.', brand:'National', is_featured:false, in_stock:true },
  { id:4, name:'Sunmica Walnut Finish', category_name:'Sunmica & Laminates', category_slug:'sunmica', price:'180', price_unit:'per sheet', description:'Premium walnut wood grain laminate, scratch and heat resistant.', brand:'Formica', is_featured:true, in_stock:true },
  { id:5, name:'High Gloss White Laminate', category_name:'Sunmica & Laminates', category_slug:'sunmica', price:'210', price_unit:'per sheet', description:'Ultra-high gloss white laminate for modern kitchen and wardrobe fronts.', brand:'Merino', is_featured:true, in_stock:true },
  { id:6, name:'Fevicol SH - 5kg', category_name:'Adhesives & Gum', category_slug:'adhesives', price:'650', price_unit:'per can', description:"India's most trusted wood adhesive, provides strong durable bond.", brand:'Pidilite', is_featured:true, in_stock:true },
  { id:7, name:'Contact Cement Adhesive', category_name:'Adhesives & Gum', category_slug:'adhesives', price:'420', price_unit:'per litre', description:'High-strength contact adhesive for bonding laminates to substrates.', brand:'Araldite', is_featured:false, in_stock:true },
  { id:8, name:'Concealed Hinges Set', category_name:'Hardware Items', category_slug:'hardware', price:'850', price_unit:'per pack of 10', description:'Heavy-duty concealed cabinet hinges with soft-close mechanism.', brand:'Ebco', is_featured:false, in_stock:true },
  { id:9, name:'Drawer Channel Slides 18 inch', category_name:'Hardware Items', category_slug:'hardware', price:'320', price_unit:'per pair', description:'Premium ball-bearing drawer slides with full extension.', brand:'Hettich', is_featured:false, in_stock:true },
];

const FALLBACK_CATEGORIES = [
  { id:1, name:'Plywood', slug:'plywood', icon:'🪵' },
  { id:2, name:'Sunmica & Laminates', slug:'sunmica', icon:'✨' },
  { id:3, name:'Adhesives & Gum', slug:'adhesives', icon:'🔧' },
  { id:4, name:'Hardware Items', slug:'hardware', icon:'⚙️' },
];

export default function Products() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');

  const activeCategory = searchParams.get('category') || '';

  useEffect(() => {
    Promise.all([getCategories(), getProducts({ category: activeCategory || undefined })])
      .then(([catRes, prodRes]) => {
        setCategories(catRes.data);
        setProducts(prodRes.data);
      })
      .catch(() => {
        setCategories(FALLBACK_CATEGORIES);
        const filtered = activeCategory
          ? FALLBACK_PRODUCTS.filter(p => p.category_slug === activeCategory)
          : FALLBACK_PRODUCTS;
        setProducts(filtered);
      })
      .finally(() => setLoading(false));
  }, [activeCategory]);

  const displayed = search
    ? products.filter(p => p.name.toLowerCase().includes(search.toLowerCase()) || p.description.toLowerCase().includes(search.toLowerCase()))
    : products;

  const setCategory = (slug) => {
    if (slug) setSearchParams({ category: slug });
    else setSearchParams({});
  };

  return (
    <>
      <Helmet>
        <title>Products - Rudra Traders | Plywood, Sunmica, Hardware Buxar</title>
        <meta name="description" content="Browse our complete range of plywood, sunmica laminates, adhesives and hardware items at Rudra Traders, Buxar Bihar." />
      </Helmet>

      {/* Header */}
      <section className="bg-bark-900 pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10"
          style={{backgroundImage:'repeating-linear-gradient(45deg, #c4711e 0, #c4711e 1px, transparent 0, transparent 50%)', backgroundSize:'20px 20px'}}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="section-subtitle text-wood-400">Explore Our Range</p>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white">Our Products</h1>
          <p className="text-bark-300 mt-3 text-lg">Premium quality materials for every project</p>
        </div>
      </section>

      <section className="py-12 bg-bark-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filters */}
          <div className="flex flex-col md:flex-row gap-4 mb-10">
            {/* Search */}
            <div className="relative flex-grow">
              <input
                type="text"
                placeholder="Search products..."
                value={search}
                onChange={e => setSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-bark-200 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-wood-400 focus:border-transparent"
              />
              <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-bark-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>

            {/* Category pills */}
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setCategory('')}
                className={`px-4 py-2 rounded-xl font-semibold text-sm transition-all ${!activeCategory ? 'bg-wood-600 text-white shadow-md' : 'bg-white text-bark-600 border border-bark-200 hover:border-wood-400'}`}
              >
                All
              </button>
              {(categories.length ? categories : FALLBACK_CATEGORIES).map(cat => (
                <button
                  key={cat.slug}
                  onClick={() => setCategory(cat.slug)}
                  className={`px-4 py-2 rounded-xl font-semibold text-sm transition-all ${activeCategory === cat.slug ? 'bg-wood-600 text-white shadow-md' : 'bg-white text-bark-600 border border-bark-200 hover:border-wood-400'}`}
                >
                  {cat.icon} {cat.name}
                </button>
              ))}
            </div>
          </div>

          {/* Results count */}
          <p className="text-bark-500 text-sm mb-6">
            Showing <strong>{displayed.length}</strong> product{displayed.length !== 1 ? 's' : ''}
            {activeCategory && ` in ${activeCategory}`}
          </p>

          {/* Grid */}
          {loading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...Array(6)].map((_, i) => <div key={i} className="bg-bark-200 rounded-xl h-72 animate-pulse" />)}
            </div>
          ) : displayed.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {displayed.map(p => <ProductCard key={p.id} product={p} />)}
            </div>
          ) : (
            <div className="text-center py-20 text-bark-400">
              <div className="text-6xl mb-4">🔍</div>
              <p className="text-xl font-semibold">No products found</p>
              <p className="mt-2">Try adjusting your search or category filter</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
