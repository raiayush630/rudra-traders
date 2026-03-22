import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { getFeaturedProducts } from '../services/api';
import ProductCard from '../components/ProductCard';
import SectionHeader from '../components/SectionHeader';

const STATS = [
  { value: '500+', label: 'Products Available' },
  { value: '1000+', label: 'Happy Customers' },
  { value: '10+', label: 'Years Experience' },
  { value: '4', label: 'Product Categories' },
];

const WHY_US = [
  { icon: '🏆', title: 'Premium Quality', desc: 'All products sourced from top manufacturers like Century, Greenply, Pidilite and more.' },
  { icon: '💰', title: 'Best Prices', desc: 'Competitive wholesale and retail pricing for contractors, carpenters, and interior designers.' },
  { icon: '🚚', title: 'Fast Delivery', desc: 'Quick dispatch and local delivery available across Buxar and surrounding areas.' },
  { icon: '🤝', title: 'Expert Guidance', desc: 'Our experienced team helps you select the right materials for every project.' },
];

const CATEGORIES = [
  { slug: 'plywood', name: 'Plywood', icon: '🪵', desc: 'BWR, Marine, Commercial plywood in all sizes' },
  { slug: 'sunmica', name: 'Sunmica & Laminates', icon: '✨', desc: 'High-gloss, matte & wood finish laminates' },
  { slug: 'adhesives', name: 'Adhesives & Gum', icon: '🔧', desc: 'Fevicol, contact cement & industrial adhesives' },
  { slug: 'hardware', name: 'Hardware Items', icon: '⚙️', desc: 'Hinges, handles, channels & accessories' },
];

export default function Home() {
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getFeaturedProducts()
      .then(res => setFeaturedProducts(res.data))
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  const WA_MSG = encodeURIComponent('Hello Rudra Traders, I want to inquire about your products.');

  return (
    <>
      <Helmet>
        <title>Rudra Traders - Premium Hardware & Interior Materials | Buxar, Bihar</title>
        <meta name="description" content="Rudra Traders offers premium plywood, sunmica, adhesives and hardware items in Buxar, Bihar. Trusted by contractors, carpenters and interior designers." />
      </Helmet>

      {/* ─── HERO ─── */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-bark-900 via-bark-800 to-wood-800" />
        {/* Wood grain pattern overlay */}
        <div className="absolute inset-0 opacity-10"
          style={{backgroundImage: `repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(255,255,255,0.03) 2px, rgba(255,255,255,0.03) 4px)`}}
        />
        {/* Decorative circle */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-wood-600/20 blur-3xl" />
        <div className="absolute left-20 bottom-20 w-[300px] h-[300px] rounded-full bg-wood-400/10 blur-2xl" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-wood-500/20 border border-wood-400/30 text-wood-300 text-sm font-semibold px-4 py-2 rounded-full mb-8 animate-fade-in">
              <span className="w-2 h-2 bg-wood-400 rounded-full animate-pulse" />
              Buxar's Trusted Hardware Store
            </div>

            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6 animate-fade-up">
              Build Better with{' '}
              <span className="text-wood-400">Premium</span>{' '}
              Materials
            </h1>

            <p className="text-bark-200 text-xl leading-relaxed mb-10 animate-fade-up animate-delay-100">
              From plywood to sunmica, adhesives to hardware — Rudra Traders is your one-stop destination for all interior and construction material needs in Buxar, Bihar.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 animate-fade-up animate-delay-200">
              <Link to="/products" className="btn-primary text-base px-8 py-4">
                Explore Products →
              </Link>
              <a
                href={`https://wa.me/6203860376?text=${WA_MSG}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 border-2 border-green-400 text-green-400 hover:bg-green-400 hover:text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                WhatsApp Enquiry
              </a>
            </div>

            {/* Contact quick info */}
            <div className="mt-10 flex flex-col sm:flex-row gap-6 text-bark-300 text-sm animate-fade-up animate-delay-300">
              <span className="flex items-center gap-2">
                <span className="text-wood-400">📍</span> Rambagh, Buxar, Bihar 802101
              </span>
              <span className="flex items-center gap-2">
                <span className="text-wood-400">📞</span>
                <a href="tel:6203860376" className="hover:text-white transition-colors">6203860376</a>
              </span>
            </div>
          </div>
        </div>

        {/* Stats bar */}
        <div className="absolute bottom-0 left-0 right-0 bg-wood-600/90 backdrop-blur-sm py-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {STATS.map(s => (
                <div key={s.label} className="text-center">
                  <div className="font-display font-bold text-2xl text-white">{s.value}</div>
                  <div className="text-wood-200 text-xs uppercase tracking-wide">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── CATEGORIES ─── */}
      <section className="py-20 bg-bark-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            subtitle="What We Offer"
            title="Our Product Categories"
            description="Explore our wide range of high-quality hardware and interior materials."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {CATEGORIES.map((cat, i) => (
              <Link
                key={cat.slug}
                to={`/products?category=${cat.slug}`}
                className="group bg-white rounded-2xl p-6 shadow-md hover:shadow-xl border border-bark-100 hover:border-wood-300 transition-all duration-300 hover:-translate-y-1"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="text-5xl mb-4">{cat.icon}</div>
                <h3 className="font-display font-bold text-lg text-bark-800 mb-2 group-hover:text-wood-600 transition-colors">{cat.name}</h3>
                <p className="text-bark-500 text-sm">{cat.desc}</p>
                <div className="mt-4 text-wood-600 text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                  Shop Now <span>→</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FEATURED PRODUCTS ─── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            subtitle="Best Sellers"
            title="Featured Products"
            description="Our most popular items, trusted by professionals across the region."
          />
          {loading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="bg-bark-100 rounded-xl h-72 animate-pulse" />
              ))}
            </div>
          ) : featuredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredProducts.map(p => <ProductCard key={p.id} product={p} />)}
            </div>
          ) : (
            /* Fallback static cards when API is not connected */
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { id:1, name:'BWR Plywood 19mm', category_name:'Plywood', category_slug:'plywood', price:'1850', price_unit:'per sheet', description:'Boiling Water Resistant plywood ideal for kitchens and bathrooms.', brand:'Century', is_featured:true, in_stock:true },
                { id:4, name:'Sunmica Walnut Finish', category_name:'Sunmica', category_slug:'sunmica', price:'180', price_unit:'per sheet', description:'Premium walnut wood grain laminate, scratch and heat resistant.', brand:'Formica', is_featured:true, in_stock:true },
                { id:6, name:'Fevicol SH - 5kg', category_name:'Adhesives', category_slug:'adhesives', price:'650', price_unit:'per can', description:"India's most trusted wood adhesive, strong durable bond.", brand:'Pidilite', is_featured:true, in_stock:true },
              ].map(p => <ProductCard key={p.id} product={p} />)}
            </div>
          )}
          <div className="text-center mt-10">
            <Link to="/products" className="btn-primary text-base px-8 py-4">View All Products →</Link>
          </div>
        </div>
      </section>

      {/* ─── WHY CHOOSE US ─── */}
      <section className="py-20 bg-bark-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5"
          style={{backgroundImage:'repeating-linear-gradient(45deg, #c4711e 0, #c4711e 1px, transparent 0, transparent 50%)', backgroundSize:'20px 20px'}}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            subtitle="Why Rudra Traders"
            title="The Professional's Choice"
            description="Thousands of contractors and designers trust us for their material needs."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {WHY_US.map((item, i) => (
              <div key={i} className="text-center p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="font-display font-bold text-xl mb-3 text-wood-300">{item.title}</h3>
                <p className="text-bark-300 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TARGET CUSTOMERS ─── */}
      <section className="py-20 bg-wood-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            subtitle="Who We Serve"
            title="Built for Professionals"
          />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon:'👷', label:'Contractors', desc:'Bulk materials at competitive rates' },
              { icon:'🔨', label:'Carpenters', desc:'Quality wood products & adhesives' },
              { icon:'🎨', label:'Interior Designers', desc:'Premium laminates & finishes' },
              { icon:'🏪', label:'Wholesalers', desc:'Trade pricing for bulk orders' },
            ].map(c => (
              <div key={c.label} className="bg-white rounded-2xl p-6 text-center shadow-md border border-wood-100">
                <div className="text-5xl mb-3">{c.icon}</div>
                <h4 className="font-display font-bold text-bark-800 mb-1">{c.label}</h4>
                <p className="text-bark-500 text-sm">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA BAND ─── */}
      <section className="py-16 bg-wood-600">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-wood-100 text-lg mb-8">
            Contact us today for a free consultation and best price quotes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="bg-white text-wood-700 font-bold px-8 py-4 rounded-lg hover:bg-wood-50 transition-colors">
              Get in Touch
            </Link>
            <a
              href={`https://wa.me/6203860376?text=${WA_MSG}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-400 text-white font-bold px-8 py-4 rounded-lg transition-colors flex items-center justify-center gap-2"
            >
              WhatsApp Now
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
