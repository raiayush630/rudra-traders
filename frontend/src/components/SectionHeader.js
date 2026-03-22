import React from 'react';

export default function SectionHeader({ subtitle, title, description, centered = true }) {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
      <h2 className="section-title">{title}</h2>
      {description && (
        <p className={`text-bark-500 mt-4 text-lg max-w-2xl ${centered ? 'mx-auto' : ''}`}>
          {description}
        </p>
      )}
    </div>
  );
}
