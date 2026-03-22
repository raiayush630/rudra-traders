import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { submitContact } from '../services/api';

const INIT = { name: '', phone: '', email: '', message: '' };

export default function Contact() {
  const [form, setForm] = useState(INIT);
  const [status, setStatus] = useState(null); // 'sending' | 'success' | 'error'
  const [errors, setErrors] = useState({});

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Name is required';
    if (!form.phone.trim()) e.phone = 'Phone number is required';
    else if (!/^\d{10,12}$/.test(form.phone.replace(/\s/g,''))) e.phone = 'Enter a valid phone number';
    if (!form.message.trim()) e.message = 'Message is required';
    return e;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setErrors({});
    setStatus('sending');

    try {
      await submitContact(form);
      setStatus('success');
      setForm(INIT);
    } catch {
      setStatus('error');
    }
  };

  const handleChange = (e) => {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));
    if (errors[e.target.name]) setErrors(err => ({ ...err, [e.target.name]: '' }));
  };

  const WA_MSG = encodeURIComponent('Hello Rudra Traders, I want to inquire about your products.');

  return (
    <>
      <Helmet>
        <title>Contact Us - Rudra Traders | Buxar, Bihar</title>
        <meta name="description" content="Contact Rudra Traders in Buxar, Bihar. Call 6203860376 or WhatsApp for product inquiries and bulk orders." />
      </Helmet>

      {/* Header */}
      <section className="bg-bark-900 pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10"
          style={{backgroundImage:'repeating-linear-gradient(45deg, #c4711e 0, #c4711e 1px, transparent 0, transparent 50%)', backgroundSize:'20px 20px'}}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="section-subtitle text-wood-400">Get In Touch</p>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white">Contact Us</h1>
          <p className="text-bark-300 mt-3 text-lg">We're here to help you find the right materials</p>
        </div>
      </section>

      <section className="py-16 bg-bark-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-6">
              <div>
                <h2 className="font-display text-2xl font-bold text-bark-800 mb-2">Let's Talk</h2>
                <p className="text-bark-500">Reach out to us for product inquiries, pricing, and bulk orders.</p>
              </div>

              {[
                { icon:'📍', title:'Store Address', content:'Rambagh, Buxar\nBihar – 802101, India', href: null },
                { icon:'📞', title:'Phone / Call', content:'6203860376', href:'tel:6203860376' },
                { icon:'💬', title:'WhatsApp', content:'6203860376 (Chat Now)', href:`https://wa.me/6203860376?text=${WA_MSG}` },
                { icon:'🕐', title:'Business Hours', content:'Mon–Sat: 9:00 AM – 7:00 PM\nSunday: 10:00 AM – 4:00 PM', href: null },
              ].map(item => (
                <div key={item.title} className="bg-white rounded-2xl p-5 shadow-sm border border-bark-100 flex gap-4">
                  <div className="text-3xl">{item.icon}</div>
                  <div>
                    <h4 className="font-semibold text-bark-800 mb-1">{item.title}</h4>
                    {item.href ? (
                      <a href={item.href} target={item.href.startsWith('https') ? '_blank' : undefined} rel="noopener noreferrer" className="text-wood-600 hover:text-wood-700 font-medium transition-colors whitespace-pre-line">
                        {item.content}
                      </a>
                    ) : (
                      <p className="text-bark-500 whitespace-pre-line text-sm">{item.content}</p>
                    )}
                  </div>
                </div>
              ))}

              {/* WhatsApp CTA */}
              <a
                href={`https://wa.me/6203860376?text=${WA_MSG}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white font-bold px-6 py-4 rounded-xl transition-colors w-full justify-center"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Chat on WhatsApp
              </a>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-2xl shadow-md border border-bark-100 p-8">
                <h2 className="font-display text-2xl font-bold text-bark-800 mb-6">Send Us a Message</h2>

                {status === 'success' && (
                  <div className="bg-green-50 border border-green-200 text-green-800 rounded-xl p-4 mb-6 flex items-center gap-3">
                    <span className="text-2xl">✅</span>
                    <div>
                      <p className="font-semibold">Message Sent!</p>
                      <p className="text-sm">We'll contact you soon at the provided number.</p>
                    </div>
                  </div>
                )}
                {status === 'error' && (
                  <div className="bg-red-50 border border-red-200 text-red-800 rounded-xl p-4 mb-6 flex items-center gap-3">
                    <span className="text-2xl">❌</span>
                    <div>
                      <p className="font-semibold">Something went wrong.</p>
                      <p className="text-sm">Please call us directly at 6203860376.</p>
                    </div>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-semibold text-bark-700 mb-1.5">Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        className={`w-full px-4 py-3 rounded-xl border bg-bark-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-wood-400 transition ${errors.name ? 'border-red-400' : 'border-bark-200'}`}
                      />
                      {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-bark-700 mb-1.5">Phone Number *</label>
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="10-digit mobile number"
                        className={`w-full px-4 py-3 rounded-xl border bg-bark-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-wood-400 transition ${errors.phone ? 'border-red-400' : 'border-bark-200'}`}
                      />
                      {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-bark-700 mb-1.5">Email (Optional)</label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className="w-full px-4 py-3 rounded-xl border border-bark-200 bg-bark-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-wood-400 transition"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-bark-700 mb-1.5">Message *</label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={5}
                      placeholder="Tell us about your requirements — product type, quantity, delivery location, etc."
                      className={`w-full px-4 py-3 rounded-xl border bg-bark-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-wood-400 transition resize-none ${errors.message ? 'border-red-400' : 'border-bark-200'}`}
                    />
                    {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="w-full btn-primary justify-center py-4 text-base disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {status === 'sending' ? (
                      <><span className="animate-spin inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full" /> Sending...</>
                    ) : 'Send Message →'}
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* Google Map */}
          <div className="mt-14">
            <h2 className="font-display text-2xl font-bold text-bark-800 mb-6 text-center">Find Our Store</h2>
            <div className="rounded-2xl overflow-hidden shadow-xl border border-bark-200 h-96">
              <iframe
                title="Rudra Traders Location - Rambagh Buxar Bihar"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3601.5!2d83.9866!3d25.5669!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398d4b0000000001%3A0x1!2sRambagh%2C+Buxar%2C+Bihar+802101!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <p className="text-center text-bark-500 text-sm mt-3">📍 Rambagh, Buxar, Bihar – 802101</p>
          </div>
        </div>
      </section>
    </>
  );
}
