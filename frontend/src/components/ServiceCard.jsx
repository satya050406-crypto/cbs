import React from 'react';
import { Card } from './ui/card';
import * as Icons from 'lucide-react';

const ServiceCard = ({ category, onClick }) => {
  const IconComponent = Icons[category.icon] || Icons.Package;
  
  // Minimalistic soft color palette
  const colorSchemes = {
    'personal-finance': { bg: 'bg-purple-50', icon: 'bg-purple-500', text: 'text-purple-700' },
    'gst-taxation': { bg: 'bg-pink-50', icon: 'bg-pink-500', text: 'text-pink-700' },
    'business-setup': { bg: 'bg-blue-50', icon: 'bg-blue-500', text: 'text-blue-700' },
    'audit-documentation': { bg: 'bg-emerald-50', icon: 'bg-emerald-500', text: 'text-emerald-700' },
    'accounting-consulting': { bg: 'bg-amber-50', icon: 'bg-amber-500', text: 'text-amber-700' },
    'utilities': { bg: 'bg-cyan-50', icon: 'bg-cyan-500', text: 'text-cyan-700' }
  };
  
  const scheme = colorSchemes[category.id] || { bg: 'bg-slate-50', icon: 'bg-slate-500', text: 'text-slate-700' };
  
  return (
    <Card 
      className="group cursor-pointer transition-all duration-200 hover:shadow-md bg-white border border-slate-200 hover:border-purple-200"
      style={{
        borderRadius: '16px',
        boxShadow: '0 1px 3px rgba(0, 0, 0, 0.05)'
      }}
      onClick={onClick}
    >
      <div className="p-6">
        <div className="flex items-start gap-4 mb-4">
          <div 
            className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${scheme.icon}`}
          >
            <IconComponent 
              size={24} 
              className="text-white"
            />
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-slate-900 mb-1">
              {category.name}
            </h3>
            <p className="text-sm text-slate-500">
              {category.services.length} Services Available
            </p>
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          {category.services.slice(0, 3).map((service, idx) => (
            <span 
              key={idx}
              className="text-xs px-3 py-1.5 rounded-full bg-slate-100 text-slate-600 font-medium"
            >
              {service.title.split(' ').slice(0, 2).join(' ')}
            </span>
          ))}
          {category.services.length > 3 && (
            <span 
              className="text-xs px-3 py-1.5 rounded-full bg-purple-50 text-purple-600 font-medium"
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
