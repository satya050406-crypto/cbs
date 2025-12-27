import React from 'react';
import { Card } from './ui/card';
import * as Icons from 'lucide-react';

const ServiceCard = ({ category, onClick }) => {
  const IconComponent = Icons[category.icon] || Icons.Package;
  
  return (
    <Card 
      className="service-card group cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
      style={{
        borderLeft: `4px solid ${category.color}`,
        background: '#302f2c',
        borderRadius: '20px'
      }}
      onClick={onClick}
    >
      <div className="p-6">
        <div className="flex items-center gap-3 mb-4">
          <div 
            className="p-3 rounded-full"
            style={{ 
              backgroundColor: category.color,
              opacity: 0.2
            }}
          >
            <IconComponent 
              size={24} 
              style={{ color: category.color }}
            />
          </div>
          <h3 className="text-xl font-bold" style={{ color: '#d9fb06' }}>
            {category.name}
          </h3>
        </div>
        <p className="text-sm" style={{ color: '#888680' }}>
          {category.services.length} Services Available
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {category.services.slice(0, 3).map((service, idx) => (
            <span 
              key={idx}
              className="text-xs px-3 py-1 rounded-full"
              style={{
                backgroundColor: 'rgba(217, 251, 6, 0.1)',
                color: '#d9fb06',
                border: '1px solid rgba(217, 251, 6, 0.3)'
              }}
            >
              {service.title.split(' ').slice(0, 2).join(' ')}
            </span>
          ))}
          {category.services.length > 3 && (
            <span 
              className="text-xs px-3 py-1 rounded-full"
              style={{
                backgroundColor: 'rgba(217, 251, 6, 0.1)',
                color: '#d9fb06',
                border: '1px solid rgba(217, 251, 6, 0.3)'
              }}
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
