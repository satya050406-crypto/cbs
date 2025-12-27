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
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section - Minimalistic Canva Style */}
      <section className="py-24 px-6 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 bg-purple-50 border border-purple-100">
              <Sparkles size={16} className="text-purple-500" />
              <span className="text-sm font-medium text-purple-700">
                Trusted by 1000+ Businesses
              </span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight text-slate-900 tracking-tight">
              Your Financial Success
              <br />
              <span className="text-purple-600">Starts Here</span>
            </h1>
            
            <p className="text-lg text-slate-600 mb-12 max-w-2xl mx-auto leading-relaxed">
              Explore our comprehensive portfolio of financial, taxation, and business services.
              Transparent pricing, expert guidance, hassle-free solutions.
            </p>

            {/* Search Bar - Clean Minimalistic Style */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <Search 
                  size={20} 
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400"
                />
                <Input
                  type="text"
                  placeholder="Search for services..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 pr-4 py-5 text-base bg-white border border-slate-200 focus:border-purple-400 focus:ring-purple-400 shadow-sm"
                  style={{
                    borderRadius: '12px'
                  }}
                />
              </div>
              
              {/* Search Results Dropdown */}
              {searchQuery.trim() && searchResults.length > 0 && (
                <div className="mt-3 rounded-xl shadow-lg max-h-96 overflow-y-auto bg-white border border-slate-200">
                  {searchResults.map((service) => (
                    <div
                      key={service.id}
                      onClick={() => {
                        handleServiceClick(service);
                        setSearchQuery('');
                      }}
                      className="p-4 cursor-pointer hover:bg-slate-50 transition-colors border-b border-slate-100 last:border-b-0"
                    >
                      <div className="flex items-center justify-between">
                        <div className="text-left">
                          <h4 className="font-semibold text-slate-900">
                            {service.title}
                          </h4>
                          <p className="text-sm text-slate-500">
                            {service.category}
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="text-sm font-semibold text-purple-600">
                            {service.estimatedCost}
                          </p>
                          <p className="text-xs text-slate-400">
                            {service.estimatedTime}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
              
              {searchQuery.trim() && searchResults.length === 0 && (
                <div className="mt-3 p-4 rounded-xl text-center bg-white border border-slate-200 shadow-sm">
                  <p className="text-slate-500">No services found. Try different keywords.</p>
                </div>
              )}
            </div>

            {/* Filter Buttons - Clean Minimalistic Style */}
            <div className="flex items-center justify-center gap-3 flex-wrap">
              <Button
                onClick={() => setFilterType('all')}
                variant={filterType === 'all' ? 'default' : 'outline'}
                className={`font-medium transition-all ${
                  filterType === 'all' 
                    ? 'bg-purple-600 text-white hover:bg-purple-700 border-purple-600' 
                    : 'bg-white text-slate-700 hover:bg-slate-50 border-slate-200'
                }`}
                style={{
                  borderRadius: '10px',
                  padding: '0.625rem 1.25rem'
                }}
              >
                <Filter size={16} className="mr-2" />
                All Services
              </Button>
              <Button
                onClick={() => setFilterType('individual')}
                variant={filterType === 'individual' ? 'default' : 'outline'}
                className={`font-medium transition-all ${
                  filterType === 'individual' 
                    ? 'bg-purple-600 text-white hover:bg-purple-700 border-purple-600' 
                    : 'bg-white text-slate-700 hover:bg-slate-50 border-slate-200'
                }`}
                style={{
                  borderRadius: '10px',
                  padding: '0.625rem 1.25rem'
                }}
              >
                Individual Services
              </Button>
              <Button
                onClick={() => setFilterType('business')}
                variant={filterType === 'business' ? 'default' : 'outline'}
                className={`font-medium transition-all ${
                  filterType === 'business' 
                    ? 'bg-purple-600 text-white hover:bg-purple-700 border-purple-600' 
                    : 'bg-white text-slate-700 hover:bg-slate-50 border-slate-200'
                }`}
                style={{
                  borderRadius: '10px',
                  padding: '0.625rem 1.25rem'
                }}
              >
                Business Services
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid Section - Clean Minimalistic */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-7xl">
          {!selectedCategory ? (
            <>
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-3 text-slate-900 tracking-tight">
                  Browse by Category
                </h2>
                <p className="text-lg text-slate-600">
                  Select a category to explore our services
                </p>
              </div>
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
              <div className="mb-12">
                <Button
                  onClick={handleBackToCategories}
                  variant="outline"
                  className="mb-6 bg-white text-slate-700 hover:bg-slate-50 border-slate-200"
                  style={{
                    borderRadius: '10px'
                  }}
                >
                  ← Back to Categories
                </Button>
                <h2 className="text-4xl font-bold mb-2 text-slate-900 tracking-tight">
                  {selectedCategory.name}
                </h2>
                <p className="text-slate-600">
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
                      className="cursor-pointer p-6 rounded-xl transition-all hover:shadow-lg bg-white border border-slate-200 hover:border-purple-200"
                      style={{
                        boxShadow: '0 1px 3px rgba(0, 0, 0, 0.05)'
                      }}
                    >
                      <h3 className="text-xl font-semibold mb-3 text-slate-900">
                        {service.title}
                      </h3>
                      <p className="text-sm mb-4 text-slate-600 leading-relaxed">
                        {service.description}
                      </p>
                      <div className="flex gap-2 flex-wrap">
                        <span className="text-xs px-3 py-1.5 rounded-full bg-slate-100 text-slate-700 font-medium">
                          {service.estimatedTime}
                        </span>
                        <span className="text-xs px-3 py-1.5 rounded-full bg-purple-50 text-purple-700 font-medium">
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
