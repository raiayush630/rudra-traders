import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { getProductById } from '../services/api';

const FALLBACK = {
  1: { id:1, name:'BWR Plywood 19mm', category_name:'Plywood', category_slug:'plywood', price:'1850', price_unit:'per sheet (8x4 ft)', description:'Boiling Water Resistant plywood, ideal for kitchens and bathrooms. Superior bonding with phenolic resin. Suitable for furniture, cabinets, and flooring. This plywood is manufactured under strict quality control and meets IS standards for BWR grade plywood.', brand:'Century', thickness:'19mm', size:'8x4 ft', is_featured:true, in_stock:true },
  4: { id:4, name:'Sunmica Walnut Finish', category_name:'Sunmica & Laminates', category_slug:'sunmica', price:'180', price_unit:'per sheet', description:'Premium walnut wood grain laminate. Provides realistic wood texture with durability. Scratch and heat resistant surface. Ideal for wardrobe shutters, furniture tops, and wall paneling.', brand:'Formica', thickness:'1mm', size:'8x4 ft', is_featured:true, in_stock:true },
  6: { id:6, name:'Fevicol SH - 5kg', category_name:'Adhesives & Gum', category_slug:'adhesives', price:'650', price_unit:'per can', description:"India's most trusted wood adhesive. Provides strong, durable bond for plywood, laminates, and wood joints. Water-resistant formula. Suitable for all indoor and outdoor furniture applications.", brand:'Pidilite', thickness:'', size:'5 kg', is_featured:true, in_stock:true },
};

const CATEGORY_GRADIENT = {
  plywood:'from-amber-700 to-amber-900',
  sunmica:'from-wood-400 to-wood-700',
  adhesives:'from-bark-500 to-bark-800',
  hardware:'from-gray-500 to-gray-800',
};

const CATEGORY_ICON = { plywood:'🪵', sunmica:'✨', adhesives:'🔧', hardware:'⚙️' };

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProductById(id)
      .then(res => setProduct(res.data))
      .catch(() => setProduct(FALLBACK[Number(id)] || null))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return (
    <div className="min-h-screen flex items-center justify-center pt-24 bg-bark-50">
      <div className="animate-spin w-12 h-12 border-4 border-wood-500 border-t-transparent rounded-full" />
    </div>
  );

  if (!product) return (
    <div className="min-h-screen flex flex-col items-center justify-center pt-24 bg-bark-50 text-center px-4">
      <div className="text-7xl mb-4">📦</div>
      <h1 className="font-display text-2xl font-bold text-bark-800 mb-2">Product Not Found</h1>
      <p className="text-bark-500 mb-6">The product you are looking for doesn't exist or may have been removed.</p>
      <Link to="/products" className="btn-primary">Browse All Products</Link>
    </div>
  );

  const slug = product.category_slug || 'plywood';
  const grad = CATEGORY_GRADIENT[slug] || 'from-wood-400 to-bark-700';
  const icon = CATEGORY_ICON[slug] || '📦';
  const WA_MSG = encodeURIComponent(`Hello Rudra Traders, I want to inquire about ${product.name}. Please share pricing and availability.`);

  return (
    <>
      <Helmet>
        <title>{product.name} - Rudra Traders | Buxar, Bihar</title>
        <meta name="description" content={product.description} />
      </Helmet>

      {/* Breadcrumb */}
      <div className="bg-bark-900 pt-24 pb-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-bark-400 flex items-center gap-2">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span>›</span>
            <Link to="/products" className="hover:text-white transition-colors">Products</Link>
            <span>›</span>
            <Link to={`/products?category=${slug}`} className="hover:text-white transition-colors capitalize">{product.category_name}</Link>
            <span>›</span>
            <span className="text-white">{product.name}</span>
          </nav>
        </div>
      </div>

      <section className="py-12 bg-bark-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Image */}
            <div>
              <div className={`rounded-2xl overflow-hidden h-80 md:h-96 bg-gradient-to-br ${grad} flex items-center justify-center shadow-xl`}>
                {product.image_url ? (
                  <img src={product.image_url} alt={product.name} className="w-full h-full object-cover" />
                ) : (
                  <span className="text-9xl opacity-50">{icon}</span>
                )}
              </div>
              {/* Badges */}
              <div className="flex gap-3 mt-4">
                {product.is_featured && (
                  <span className="bg-wood-100 text-wood-700 text-sm font-semibold px-3 py-1.5 rounded-full border border-wood-200">⭐ Featured Product</span>
                )}
                <span className={`text-sm font-semibold px-3 py-1.5 rounded-full border ${product.in_stock ? 'bg-green-50 text-green-700 border-green-200' : 'bg-red-50 text-red-700 border-red-200'}`}>
                  {product.in_stock ? '✓ In Stock' : '✗ Out of Stock'}
                </span>
              </div>
            </div>

            {/* Details */}
            <div>
              <span className="section-subtitle">{product.category_name}</span>
              <h1 className="font-display text-3xl md:text-4xl font-bold text-bark-900 mb-2">{product.name}</h1>
              {product.brand && <p className="text-wood-600 font-semibold text-lg mb-4">by {product.brand}</p>}

              {/* Price */}
              <div className="bg-white rounded-2xl p-6 border border-bark-200 shadow-sm mb-6">
                {product.price ? (
                  <div>
                    <p className="text-bark-500 text-sm mb-1">Price</p>
                    <div className="flex items-baseline gap-2">
                      <span className="font-display text-4xl font-bold text-wood-600">₹{Number(product.price).toLocaleString('en-IN')}</span>
                      <span className="text-bark-500 text-sm">{product.price_unit}</span>
                    </div>
                    <p className="text-bark-400 text-xs mt-1">* GST extra | Bulk discounts available</p>
                  </div>
                ) : (
                  <p className="text-xl font-bold text-wood-600">Call for Price: <a href="tel:6203860376" className="underline">6203860376</a></p>
                )}
              </div>

              {/* Specifications */}
              {(product.thickness || product.size || product.brand) && (
                <div className="bg-white rounded-2xl p-6 border border-bark-200 shadow-sm mb-6">
                  <h3 className="font-display font-bold text-lg text-bark-800 mb-4">Specifications</h3>
                  <dl className="space-y-3">
                    {product.brand && (
                      <div className="flex justify-between py-2 border-b border-bark-100">
                        <dt className="text-bark-500 text-sm">Brand</dt>
                        <dd className="font-semibold text-bark-800 text-sm">{product.brand}</dd>
                      </div>
                    )}
                    {product.thickness && (
                      <div className="flex justify-between py-2 border-b border-bark-100">
                        <dt className="text-bark-500 text-sm">Thickness</dt>
                        <dd className="font-semibold text-bark-800 text-sm">{product.thickness}</dd>
                      </div>
                    )}
                    {product.size && (
                      <div className="flex justify-between py-2">
                        <dt className="text-bark-500 text-sm">Size / Quantity</dt>
                        <dd className="font-semibold text-bark-800 text-sm">{product.size}</dd>
                      </div>
                    )}
                  </dl>
                </div>
              )}

              {/* Description */}
              <div className="bg-white rounded-2xl p-6 border border-bark-200 shadow-sm mb-6">
                <h3 className="font-display font-bold text-lg text-bark-800 mb-3">Product Description</h3>
                <p className="text-bark-600 leading-relaxed">{product.description}</p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={`https://wa.me/6203860376?text=${WA_MSG}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-6 rounded-xl transition-colors text-center flex items-center justify-center gap-2"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Enquire on WhatsApp
                </a>
                <a href="tel:6203860376" className="flex-1 btn-outline justify-center py-4">
                  📞 Call Now
                </a>
              </div>

              <Link to="/products" className="mt-4 inline-flex items-center gap-2 text-wood-600 hover:text-wood-700 text-sm font-semibold transition-colors">
                ← Back to All Products
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
