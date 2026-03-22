import React from 'react';
import { Link } from 'react-router-dom';

const PLACEHOLDER_COLORS = {
  plywood: 'from-amber-700 to-amber-900',
  sunmica: 'from-wood-400 to-wood-700',
  adhesives: 'from-bark-500 to-bark-800',
  hardware: 'from-gray-500 to-gray-800',
};

const CATEGORY_ICONS = {
  plywood: '🪵',
  sunmica: '✨',
  adhesives: '🔧',
  hardware: '⚙️',
};

export default function ProductCard({ product }) {
  const slug = product.category_slug || 'plywood';
  const gradClass = PLACEHOLDER_COLORS[slug] || 'from-wood-400 to-bark-700';
  const icon = CATEGORY_ICONS[slug] || '📦';

  return (
    <Link to={`/products/${product.id}`} className="card group block">
      {/* Image / Placeholder */}
      <div className="relative h-52 overflow-hidden">
        {product.image_url ? (
          <img
            src={product.image_url}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className={`w-full h-full bg-gradient-to-br ${gradClass} flex items-center justify-center group-hover:scale-105 transition-transform duration-500`}>
            <span className="text-6xl opacity-60">{icon}</span>
          </div>
        )}
        {/* Badges */}
        <div className="absolute top-3 left-3 flex gap-2">
          {product.is_featured && (
            <span className="bg-wood-500 text-white text-xs font-bold px-2 py-1 rounded-full">Featured</span>
          )}
          {!product.in_stock && (
            <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">Out of Stock</span>
          )}
        </div>
        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm text-xs font-semibold text-bark-700 px-2 py-1 rounded-full">
          {product.category_name}
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="font-display font-bold text-lg text-bark-800 group-hover:text-wood-600 transition-colors line-clamp-1">
          {product.name}
        </h3>
        {product.brand && (
          <p className="text-xs text-wood-500 font-semibold uppercase tracking-wide mt-1">{product.brand}</p>
        )}
        <p className="text-bark-500 text-sm mt-2 line-clamp-2">{product.description}</p>

        <div className="flex items-center justify-between mt-4 pt-4 border-t border-bark-100">
          <div>
            {product.price ? (
              <>
                <span className="text-xl font-bold text-wood-600">₹{Number(product.price).toLocaleString('en-IN')}</span>
                <span className="text-xs text-bark-400 ml-1">{product.price_unit}</span>
              </>
            ) : (
              <span className="text-sm font-semibold text-wood-600">Call for Price</span>
            )}
          </div>
          <span className="text-wood-600 font-semibold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
            View <span>→</span>
          </span>
        </div>
      </div>
    </Link>
  );
}
