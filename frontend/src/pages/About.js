import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import SectionHeader from '../components/SectionHeader';

export default function About() {
  return (
    <>
      <Helmet>
        <title>About Us - Rudra Traders | Hardware & Interior Materials Buxar</title>
        <meta name="description" content="Learn about Rudra Traders, Buxar's trusted supplier of plywood, sunmica, adhesives and hardware materials since years." />
      </Helmet>

      {/* Page Header */}
      <section className="bg-bark-900 pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10"
          style={{backgroundImage:'repeating-linear-gradient(45deg, #c4711e 0, #c4711e 1px, transparent 0, transparent 50%)', backgroundSize:'20px 20px'}}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="section-subtitle text-wood-400">Our Story</p>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white">About Rudra Traders</h1>
          <p className="text-bark-300 mt-4 text-lg max-w-2xl mx-auto">
            Buxar's most trusted name in hardware and interior building materials.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <p className="section-subtitle">Who We Are</p>
              <h2 className="section-title mb-6">A Legacy of Quality & Trust</h2>
              <div className="space-y-4 text-bark-600 leading-relaxed">
                <p>
                  Rudra Traders is a leading supplier of premium hardware and interior materials based in Rambagh, Buxar, Bihar. We have been serving the construction and interior design community with high-quality products at the best prices.
                </p>
                <p>
                  Our store is a one-stop destination for contractors, carpenters, interior designers, and wholesalers who demand quality they can rely on. From international brands like Century, Greenply, Pidilite, Hettich, and Ebco — we bring the best to your doorstep.
                </p>
                <p>
                  We believe every project deserves the best materials. That's why we carefully curate our product range, ensuring each item meets our strict quality standards while remaining affordable.
                </p>
              </div>
              <div className="mt-8 flex gap-4">
                <Link to="/products" className="btn-primary">Browse Products</Link>
                <Link to="/contact" className="btn-outline">Contact Us</Link>
              </div>
            </div>

            {/* Visual card */}
            <div className="relative">
              <div className="bg-gradient-to-br from-bark-800 to-wood-700 rounded-3xl p-10 text-white text-center">
                <div className="text-8xl mb-6">🏪</div>
                <h3 className="font-display text-2xl font-bold mb-2">Rudra Traders</h3>
                <p className="text-wood-200 mb-6">Rambagh, Buxar, Bihar 802101</p>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { v: '500+', l: 'Products' },
                    { v: '1000+', l: 'Customers' },
                    { v: '10+', l: 'Years' },
                    { v: '4', l: 'Categories' },
                  ].map(s => (
                    <div key={s.l} className="bg-white/10 rounded-xl py-4">
                      <div className="font-display font-bold text-2xl text-wood-300">{s.v}</div>
                      <div className="text-sm text-bark-200">{s.l}</div>
                    </div>
                  ))}
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-wood-400/30 rounded-2xl -z-10" />
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-bark-200 rounded-xl -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-bark-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader subtitle="Our Values" title="Mission & Vision" centered />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon:'🎯', title:'Our Mission', text:"To provide the highest quality hardware and interior materials at fair prices, empowering builders and designers across Bihar to create exceptional spaces." },
              { icon:'👁️', title:'Our Vision', text:'To become Bihar\'s most trusted and comprehensive hardware solutions provider, known for quality, reliability, and outstanding customer service.' },
              { icon:'💎', title:'Our Values', text:'Integrity in every transaction, quality in every product, and commitment to every customer — these principles guide everything we do at Rudra Traders.' },
            ].map(v => (
              <div key={v.title} className="bg-white rounded-2xl p-8 shadow-md text-center border border-bark-100">
                <div className="text-5xl mb-5">{v.icon}</div>
                <h3 className="font-display font-bold text-xl text-bark-800 mb-4">{v.title}</h3>
                <p className="text-bark-500 leading-relaxed">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brands We Carry */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader subtitle="Trusted Brands" title="Products We Carry" centered />
          <div className="flex flex-wrap justify-center gap-4">
            {['Century Ply', 'Greenply', 'National Ply', 'Pidilite', 'Fevicol', 'Formica', 'Merino', 'Hettich', 'Ebco', 'Araldite', 'Asian Paints', 'BWR Grade'].map(b => (
              <div key={b} className="bg-bark-50 border border-bark-200 text-bark-700 font-semibold px-5 py-3 rounded-xl hover:bg-wood-50 hover:border-wood-300 transition-colors text-sm">
                {b}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-20 bg-wood-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Find Us in Buxar</h2>
          <p className="text-wood-100 text-lg mb-2">📍 Rambagh, Buxar, Bihar – 802101</p>
          <p className="text-wood-200 mb-8">Open Monday–Saturday 9 AM – 7 PM | Sunday 10 AM – 4 PM</p>
          <Link to="/contact" className="bg-white text-wood-700 font-bold px-8 py-4 rounded-lg hover:bg-wood-50 transition-colors inline-block">
            Get Directions & Contact
          </Link>
        </div>
      </section>
    </>
  );
}
