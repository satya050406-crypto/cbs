import React, { useState } from 'react';
import { Search, Filter } from 'lucide-react';
import { Input } from '../components/ui/input';
import { Button } from '../components/ui/button';
import ServiceCard from '../components/ServiceCard';
import ServiceDetailModal from '../components/ServiceDetailModal';
import Header from '../components/Header';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import { serviceCategories, getAllServices } from '../data/mockServices';

const HomePage = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterType, setFilterType] = useState('all'); // 'all', 'individual', 'business'
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleServiceClick = (service) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const handleBackToCategories = () => {
    setSelectedCategory(null);
  };

  const filteredCategories = serviceCategories.filter(category => {
    if (filterType === 'all') return true;
    return category.type === filterType;
  });

  const allServices = getAllServices();
  const searchResults = searchQuery.trim() 
    ? allServices.filter(service => 
        service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.category.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  return (
    <div style={{ backgroundColor: '#1a1c1b', minHeight: '100vh' }}>
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 px-6" style={{ background: 'linear-gradient(135deg, rgba(217, 251, 6, 0.05), transparent)' }}>
        <div className="container mx-auto text-center">
          <h1 
            className="text-5xl md:text-7xl font-black mb-6 leading-tight"
            style={{ 
              color: '#d9fb06',
              fontFamily: 'Inter, Arial, sans-serif',
              textTransform: 'uppercase',
              letterSpacing: '-0.02em'
            }}
          >
            Your Financial Success
            <br />
            <span style={{ color: '#dfddd6' }}>Starts Here</span>
          </h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto" style={{ color: '#888680' }}>
            Explore our comprehensive portfolio of financial, taxation, and business services.
            <br />
            Transparent pricing, expert guidance, and hassle-free solutions.
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-6">
            <div className="relative">
              <Search 
                size={20} 
                className="absolute left-4 top-1/2 transform -translate-y-1/2" 
                style={{ color: '#888680' }}
              />
              <Input
                type="text"
                placeholder="Search for services (e.g., GST Registration, Tax Planning, Company Setup...)"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 pr-4 py-6 text-base"
                style={{
                  backgroundColor: '#302f2c',
                  border: '1px solid #3f4816',
                  color: '#dfddd6',
                  borderRadius: '10rem'
                }}
              />
            </div>
            
            {/* Search Results Dropdown */}
            {searchQuery.trim() && searchResults.length > 0 && (
              <div 
                className="mt-2 rounded-2xl shadow-xl max-h-96 overflow-y-auto"
                style={{ 
                  backgroundColor: '#302f2c',
                  border: '1px solid #3f4816'
                }}
              >
                {searchResults.map((service) => (
                  <div
                    key={service.id}
                    onClick={() => {
                      handleServiceClick(service);
                      setSearchQuery('');
                    }}
                    className="p-4 cursor-pointer hover:bg-opacity-80 transition-all border-b"
                    style={{ borderColor: '#3f4816' }}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-semibold" style={{ color: '#d9fb06' }}>
                          {service.title}
                        </h4>
                        <p className="text-sm" style={{ color: '#888680' }}>
                          {service.category}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-semibold" style={{ color: '#d9fb06' }}>
                          {service.estimatedCost}
                        </p>
                        <p className="text-xs" style={{ color: '#888680' }}>
                          {service.estimatedTime}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
            
            {searchQuery.trim() && searchResults.length === 0 && (
              <div 
                className="mt-2 p-4 rounded-2xl text-center"
                style={{ 
                  backgroundColor: '#302f2c',
                  border: '1px solid #3f4816'
                }}
              >
                <p style={{ color: '#888680' }}>No services found. Try different keywords.</p>
              </div>
            )}
          </div>

          {/* Filter Buttons */}
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <Button
              onClick={() => setFilterType('all')}
              className="font-semibold"
              style={{
                backgroundColor: filterType === 'all' ? '#d9fb06' : 'transparent',
                color: filterType === 'all' ? '#1a1c1b' : '#d9fb06',
                border: `2px solid ${filterType === 'all' ? '#d9fb06' : '#3f4816'}`,
                borderRadius: '10rem',
                textTransform: 'uppercase',
                fontSize: '0.875rem',
                padding: '0.75rem 1.5rem'
              }}
            >
              <Filter size={16} className="mr-2" />
              All Services
            </Button>
            <Button
              onClick={() => setFilterType('individual')}
              className="font-semibold"
              style={{
                backgroundColor: filterType === 'individual' ? '#d9fb06' : 'transparent',
                color: filterType === 'individual' ? '#1a1c1b' : '#d9fb06',
                border: `2px solid ${filterType === 'individual' ? '#d9fb06' : '#3f4816'}`,
                borderRadius: '10rem',
                textTransform: 'uppercase',
                fontSize: '0.875rem',
                padding: '0.75rem 1.5rem'
              }}
            >
              Individual Services
            </Button>
            <Button
              onClick={() => setFilterType('business')}
              className="font-semibold"
              style={{
                backgroundColor: filterType === 'business' ? '#d9fb06' : 'transparent',
                color: filterType === 'business' ? '#1a1c1b' : '#d9fb06',
                border: `2px solid ${filterType === 'business' ? '#d9fb06' : '#3f4816'}`,
                borderRadius: '10rem',
                textTransform: 'uppercase',
                fontSize: '0.875rem',
                padding: '0.75rem 1.5rem'
              }}
            >
              Business Services
            </Button>
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          {!selectedCategory ? (
            // Show Category Grid
            <>
              <h2 className="text-3xl font-bold mb-8 text-center" style={{ color: '#d9fb06' }}>
                Browse by Category
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredCategories.map((category) => (
                  <ServiceCard
                    key={category.id}
                    category={category}
                    onClick={() => handleCategoryClick(category)}
                  />
                ))}
              </div>
            </>
          ) : (
            // Show Services List for Selected Category
            <>
              <div className="mb-8">
                <Button
                  onClick={handleBackToCategories}
                  className="mb-4"
                  style={{
                    backgroundColor: 'transparent',
                    color: '#d9fb06',
                    border: '1px solid #3f4816',
                    borderRadius: '10rem'
                  }}
                >
                  ← Back to Categories
                </Button>
                <h2 className="text-4xl font-bold mb-2" style={{ color: '#d9fb06' }}>
                  {selectedCategory.name}
                </h2>
                <p style={{ color: '#888680' }}>
                  {selectedCategory.services.length} services available
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {selectedCategory.services.map((service) => {
                  const fullService = {
                    ...service,
                    category: selectedCategory.name,
                    categoryId: selectedCategory.id,
                    categoryColor: selectedCategory.color,
                    type: selectedCategory.type
                  };
                  
                  return (
                    <div
                      key={service.id}
                      onClick={() => handleServiceClick(fullService)}
                      className="cursor-pointer p-6 rounded-2xl transition-all hover:scale-[1.02] hover:shadow-lg"
                      style={{
                        backgroundColor: '#302f2c',
                        border: '1px solid #3f4816'
                      }}
                    >
                      <h3 className="text-xl font-bold mb-2" style={{ color: '#d9fb06' }}>
                        {service.title}
                      </h3>
                      <p className="text-sm mb-4" style={{ color: '#888680' }}>
                        {service.description}
                      </p>
                      <div className="flex gap-2 flex-wrap">
                        <span 
                          className="text-xs px-3 py-1 rounded-full"
                          style={{
                            backgroundColor: 'rgba(0, 115, 230, 0.2)',
                            color: '#0073e6',
                            border: '1px solid rgba(0, 115, 230, 0.4)'
                          }}
                        >
                          {service.estimatedTime}
                        </span>
                        <span 
                          className="text-xs px-3 py-1 rounded-full font-semibold"
                          style={{
                            backgroundColor: 'rgba(217, 251, 6, 0.2)',
                            color: '#d9fb06',
                            border: '1px solid rgba(217, 251, 6, 0.4)'
                          }}
                        >
                          {service.estimatedCost}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </>
          )}
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
      
      <ServiceDetailModal
        service={selectedService}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};

export default HomePage;
