import React, { useState } from 'react';
import { Search, Filter, Sparkles } from 'lucide-react';
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
  const [filterType, setFilterType] = useState('all');
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
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section - Canva Style with Fluid Glass Background */}
      <section 
        className="py-20 px-6 relative overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 25%, #f093fb 50%, #4facfe 75%, #00f2fe 100%)',
          backgroundSize: '400% 400%',
          animation: 'gradient 15s ease infinite'
        }}
      >
        {/* Glassmorphism overlay */}
        <div 
          className="absolute inset-0 backdrop-blur-3xl"
          style={{
            background: 'rgba(255, 255, 255, 0.3)',
            backdropFilter: 'blur(100px)'
          }}
        />
        
        {/* Floating blobs for fluid effect */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-300 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000" />
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000" />
        
        <div className="container mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 rounded-full mb-6">
            <Sparkles size={18} className="text-purple-600" />
            <span className="text-sm font-semibold text-purple-700">
              Trusted by 1000+ Businesses
            </span>
          </div>
          
          <h1 
            className="text-5xl md:text-7xl font-black mb-6 leading-tight"
            style={{ 
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            Your Financial Success
            <br />
            Starts Here
          </h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-600">
            Explore our comprehensive portfolio of financial, taxation, and business services.
            <br />
            <span className="font-semibold text-gray-800">Transparent pricing, expert guidance, hassle-free solutions.</span>
          </p>

          {/* Search Bar - Canva Style */}
          <div className="max-w-2xl mx-auto mb-6">
            <div className="relative">
              <Search 
                size={20} 
                className="absolute left-5 top-1/2 transform -translate-y-1/2 text-gray-400"
              />
              <Input
                type="text"
                placeholder="Search for services (e.g., GST Registration, Tax Planning...)"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-14 pr-4 py-6 text-base bg-white border-2 border-gray-200 focus:border-purple-500 focus:ring-purple-500 shadow-sm"
                style={{
                  borderRadius: '16px'
                }}
              />
            </div>
            
            {/* Search Results Dropdown */}
            {searchQuery.trim() && searchResults.length > 0 && (
              <div 
                className="mt-3 bg-white rounded-2xl shadow-xl max-h-96 overflow-y-auto border border-gray-200"
              >
                {searchResults.map((service) => (
                  <div
                    key={service.id}
                    onClick={() => {
                      handleServiceClick(service);
                      setSearchQuery('');
                    }}
                    className="p-4 cursor-pointer hover:bg-purple-50 transition-all border-b border-gray-100 last:border-b-0"
                  >
                    <div className="flex items-center justify-between">
                      <div className="text-left">
                        <h4 className="font-semibold text-gray-900">
                          {service.title}
                        </h4>
                        <p className="text-sm text-gray-500">
                          {service.category}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-semibold text-green-600">
                          {service.estimatedCost}
                        </p>
                        <p className="text-xs text-gray-500">
                          {service.estimatedTime}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
            
            {searchQuery.trim() && searchResults.length === 0 && (
              <div className="mt-3 p-4 bg-white rounded-2xl text-center border border-gray-200">
                <p className="text-gray-500">No services found. Try different keywords.</p>
              </div>
            )}
          </div>

          {/* Filter Buttons - Canva Style */}
          <div className="flex items-center justify-center gap-3 flex-wrap">
            <Button
              onClick={() => setFilterType('all')}
              className={`font-semibold shadow-sm transition-all ${
                filterType === 'all' 
                  ? 'text-white' 
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
              style={{
                background: filterType === 'all' 
                  ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' 
                  : 'white',
                border: filterType === 'all' ? 'none' : '2px solid #e5e7eb',
                borderRadius: '12px',
                padding: '0.75rem 1.5rem'
              }}
            >
              <Filter size={16} className="mr-2" />
              All Services
            </Button>
            <Button
              onClick={() => setFilterType('individual')}
              className={`font-semibold shadow-sm transition-all ${
                filterType === 'individual' 
                  ? 'text-white' 
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
              style={{
                background: filterType === 'individual' 
                  ? 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)' 
                  : 'white',
                border: filterType === 'individual' ? 'none' : '2px solid #e5e7eb',
                borderRadius: '12px',
                padding: '0.75rem 1.5rem'
              }}
            >
              Individual Services
            </Button>
            <Button
              onClick={() => setFilterType('business')}
              className={`font-semibold shadow-sm transition-all ${
                filterType === 'business' 
                  ? 'text-white' 
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
              style={{
                background: filterType === 'business' 
                  ? 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)' 
                  : 'white',
                border: filterType === 'business' ? 'none' : '2px solid #e5e7eb',
                borderRadius: '12px',
                padding: '0.75rem 1.5rem'
              }}
            >
              Business Services
            </Button>
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="container mx-auto">
          {!selectedCategory ? (
            <>
              <h2 className="text-4xl font-bold mb-2 text-center text-gray-900">
                Browse by Category
              </h2>
              <p className="text-center text-gray-600 mb-12">
                Select a category to explore our services
              </p>
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
            <>
              <div className="mb-8">
                <Button
                  onClick={handleBackToCategories}
                  className="mb-4 bg-white text-gray-700 hover:bg-gray-100 border-2 border-gray-200 shadow-sm"
                  style={{
                    borderRadius: '12px'
                  }}
                >
                  ← Back to Categories
                </Button>
                <h2 className="text-4xl font-bold mb-2 text-gray-900">
                  {selectedCategory.name}
                </h2>
                <p className="text-gray-600">
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
                      className="cursor-pointer p-6 rounded-2xl transition-all hover:scale-[1.02] hover:shadow-xl bg-white"
                      style={{
                        boxShadow: '0 2px 12px rgba(0, 0, 0, 0.08)'
                      }}
                    >
                      <h3 className="text-xl font-bold mb-2 text-gray-900">
                        {service.title}
                      </h3>
                      <p className="text-sm mb-4 text-gray-600">
                        {service.description}
                      </p>
                      <div className="flex gap-2 flex-wrap">
                        <span 
                          className="text-xs px-3 py-1.5 rounded-full bg-blue-50 text-blue-700 font-medium border border-blue-200"
                        >
                          {service.estimatedTime}
                        </span>
                        <span 
                          className="text-xs px-3 py-1.5 rounded-full bg-green-50 text-green-700 font-semibold border border-green-200"
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
