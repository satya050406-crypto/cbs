import React from 'react';
import { Card } from './ui/card';
import * as Icons from 'lucide-react';

const ServiceCard = ({ category, onClick }) => {
  const IconComponent = Icons[category.icon] || Icons.Package;
  
  // Canva-style gradient backgrounds
  const gradients = {
    'personal-finance': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    'gst-taxation': 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    'business-setup': 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    'audit-documentation': 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
    'accounting-consulting': 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
    'utilities': 'linear-gradient(135deg, #30cfd0 0%, #330867 100%)'
  };
  
  return (
    <Card 
      className="service-card group cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:shadow-xl bg-white overflow-hidden"
      style={{
        borderRadius: '20px',
        border: 'none',
        boxShadow: '0 2px 12px rgba(0, 0, 0, 0.08)'
      }}
      onClick={onClick}
    >
      <div 
        className="h-2"
        style={{ background: gradients[category.id] || category.color }}
      />
      <div className="p-6">
        <div className="flex items-center gap-3 mb-4">
          <div 
            className="w-14 h-14 rounded-2xl flex items-center justify-center"
            style={{ 
              background: gradients[category.id] || category.color
            }}
          >
            <IconComponent 
              size={28} 
              className="text-white"
            />
          </div>
          <h3 className="text-xl font-bold text-gray-900">
            {category.name}
          </h3>
        </div>
        <p className="text-sm text-gray-600 mb-4">
          {category.services.length} Services Available
        </p>
        <div className="flex flex-wrap gap-2">
          {category.services.slice(0, 3).map((service, idx) => (
            <span 
              key={idx}
              className="text-xs px-3 py-1.5 rounded-full bg-gray-100 text-gray-700 font-medium"
            >
              {service.title.split(' ').slice(0, 2).join(' ')}
            </span>
          ))}
          {category.services.length > 3 && (
            <span 
              className="text-xs px-3 py-1.5 rounded-full bg-purple-100 text-purple-700 font-medium"
            >
              +{category.services.length - 3} more
            </span>
          )}
        </div>
      </div>
    </Card>
  );
};

export default ServiceCard;
