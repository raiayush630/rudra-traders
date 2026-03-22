import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';

const GALLERY_ITEMS = [
  { id:1, title:'Plywood Section', desc:'Our extensive plywood collection with all grades', icon:'🪵', gradient:'from-amber-700 to-amber-900', category:'Plywood' },
  { id:2, title:'Sunmica Display', desc:'Hundreds of laminate designs and finishes', icon:'✨', gradient:'from-wood-400 to-wood-700', category:'Sunmica' },
  { id:3, title:'Hardware Corner', desc:'Hinges, handles, channels and accessories', icon:'⚙️', gradient:'from-gray-600 to-gray-900', category:'Hardware' },
  { id:4, title:'Adhesives & Gum', desc:'All major brands of adhesives stocked', icon:'🔧', gradient:'from-bark-500 to-bark-800', category:'Adhesives' },
  { id:5, title:'Store Interior', desc:'Well-organized showroom for easy browsing', icon:'🏪', gradient:'from-wood-600 to-bark-800', category:'Store' },
  { id:6, title:'Premium Plywood Stack', desc:'BWR and marine grade plywood in stock', icon:'📐', gradient:'from-amber-600 to-amber-900', category:'Plywood' },
  { id:7, title:'Laminate Samples', desc:'Touch and feel our laminate collection', icon:'🎨', gradient:'from-rose-700 to-bark-800', category:'Sunmica' },
  { id:8, title:'Bulk Storage', desc:'Large stock maintained for quick dispatch', icon:'📦', gradient:'from-bark-600 to-bark-900', category:'Store' },
  { id:9, title:'Cabinet Hardware', desc:'Soft-close hinges and premium channels', icon:'🪛', gradient:'from-slate-600 to-slate-900', category:'Hardware' },
];

const CATS = ['All', 'Plywood', 'Sunmica', 'Hardware', 'Adhesives', 'Store'];

export default function Gallery() {
  const [active, setActive] = useState('All');
  const [lightbox, setLightbox] = useState(null);

  const shown = active === 'All' ? GALLERY_ITEMS : GALLERY_ITEMS.filter(g => g.category === active);

  return (
    <>
      <Helmet>
        <title>Gallery - Rudra Traders | Hardware & Interior Materials Buxar</title>
        <meta name="description" content="View our gallery of plywood, sunmica laminates, adhesives and hardware products at Rudra Traders, Buxar Bihar." />
      </Helmet>

      {/* Header */}
      <section className="bg-bark-900 pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10"
          style={{backgroundImage:'repeating-linear-gradient(45deg, #c4711e 0, #c4711e 1px, transparent 0, transparent 50%)', backgroundSize:'20px 20px'}}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="section-subtitle text-wood-400">Visual Tour</p>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white">Our Gallery</h1>
          <p className="text-bark-300 mt-3 text-lg">Explore our showroom and product range</p>
        </div>
      </section>

      <section className="py-14 bg-bark-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {CATS.map(cat => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-5 py-2 rounded-full font-semibold text-sm transition-all ${active === cat ? 'bg-wood-600 text-white shadow-md' : 'bg-white text-bark-600 border border-bark-200 hover:border-wood-400'}`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {shown.map((item) => (
              <div
                key={item.id}
                onClick={() => setLightbox(item)}
                className="group relative rounded-2xl overflow-hidden cursor-pointer shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className={`h-60 bg-gradient-to-br ${item.gradient} flex items-center justify-center group-hover:scale-105 transition-transform duration-500`}>
                  <span className="text-8xl opacity-50 group-hover:opacity-70 transition-opacity">{item.icon}</span>
                </div>
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                  <span className="bg-wood-500 text-white text-xs font-bold px-2 py-1 rounded-full w-fit mb-2">{item.category}</span>
                  <h3 className="font-display font-bold text-white text-lg">{item.title}</h3>
                  <p className="text-bark-200 text-sm">{item.desc}</p>
                </div>
                {/* Static bottom bar */}
                <div className="bg-white p-4 group-hover:bg-wood-50 transition-colors">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-display font-bold text-bark-800 group-hover:text-wood-600 transition-colors">{item.title}</h3>
                      <p className="text-bark-500 text-xs">{item.category}</p>
                    </div>
                    <span className="text-wood-600 text-sm font-semibold">View ›</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Lightbox */}
          {lightbox && (
            <div
              className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
              onClick={() => setLightbox(null)}
            >
              <div
                className="bg-white rounded-2xl overflow-hidden max-w-lg w-full shadow-2xl"
                onClick={e => e.stopPropagation()}
              >
                <div className={`h-64 bg-gradient-to-br ${lightbox.gradient} flex items-center justify-center`}>
                  <span className="text-9xl opacity-50">{lightbox.icon}</span>
                </div>
                <div className="p-6">
                  <span className="bg-wood-100 text-wood-700 text-xs font-bold px-2 py-1 rounded-full">{lightbox.category}</span>
                  <h3 className="font-display font-bold text-2xl text-bark-800 mt-3 mb-2">{lightbox.title}</h3>
                  <p className="text-bark-500">{lightbox.desc}</p>
                  <div className="flex gap-3 mt-6">
                    <a href="tel:6203860376" className="btn-primary flex-1 justify-center">📞 Inquire Now</a>
                    <button onClick={() => setLightbox(null)} className="btn-outline flex-1 justify-center">Close</button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* WhatsApp CTA */}
          <div className="mt-14 text-center bg-wood-600 rounded-2xl py-10 px-6">
            <h2 className="font-display text-2xl font-bold text-white mb-2">Want to Visit Our Showroom?</h2>
            <p className="text-wood-100 mb-6">Come see our full range in person at Rambagh, Buxar</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:6203860376" className="bg-white text-wood-700 font-bold px-6 py-3 rounded-xl hover:bg-wood-50 transition-colors">
                📞 Call: 6203860376
              </a>
              <a
                href={`https://wa.me/6203860376?text=${encodeURIComponent('Hello Rudra Traders, I want to inquire about your products.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-400 text-white font-bold px-6 py-3 rounded-xl transition-colors"
              >
                💬 WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
