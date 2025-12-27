import React, { useState } from 'react';
import { Dialog, DialogContent } from './ui/dialog';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { X, Clock, IndianRupee, CheckCircle2, Upload, Phone, User, MessageSquare } from 'lucide-react';
import { useToast } from '../hooks/use-toast';

const ServiceDetailModal = ({ service, isOpen, onClose }) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: '',
    document: null
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    setFormData(prev => ({ ...prev, document: e.target.files[0] }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Mock submission
    toast({
      title: "Query Registered Successfully!",
      description: `We'll contact you soon regarding ${service?.title}.`,
    });
    
    // Reset form
    setFormData({
      name: '',
      phone: '',
      message: '',
      document: null
    });
    
    onClose();
  };

  if (!service) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-6xl max-h-[90vh] p-0 overflow-hidden" style={{ backgroundColor: '#1a1c1b', border: 'none' }}>
        <div className="flex flex-col md:flex-row h-full">
          {/* Left Column - Service Details */}
          <div className="w-full md:w-1/2 p-8 overflow-y-auto" style={{ backgroundColor: '#302f2c' }}>
            <div className="mb-6">
              <div className="flex items-center justify-between mb-4">
                <span 
                  className="text-xs px-3 py-1 rounded-full font-semibold uppercase"
                  style={{
                    backgroundColor: service.categoryColor,
                    color: '#1a1c1b'
                  }}
                >
                  {service.category}
                </span>
                <button 
                  onClick={onClose}
                  className="md:hidden p-2 rounded-full hover:bg-opacity-20"
                  style={{ color: '#888680' }}
                >
                  <X size={20} />
                </button>
              </div>
              
              <h2 className="text-3xl font-bold mb-4" style={{ color: '#d9fb06' }}>
                {service.title}
              </h2>
              
              <p className="text-base leading-relaxed" style={{ color: '#dfddd6' }}>
                {service.description}
              </p>
            </div>

            {/* Transparency Chips */}
            <div className="flex flex-wrap gap-3 mb-6">
              <div 
                className="flex items-center gap-2 px-4 py-2 rounded-full"
                style={{
                  backgroundColor: 'rgba(0, 115, 230, 0.2)',
                  border: '1px solid rgba(0, 115, 230, 0.4)'
                }}
              >
                <Clock size={18} style={{ color: '#0073e6' }} />
                <span className="font-semibold" style={{ color: '#0073e6' }}>
                  {service.estimatedTime}
                </span>
              </div>
              
              <div 
                className="flex items-center gap-2 px-4 py-2 rounded-full"
                style={{
                  backgroundColor: 'rgba(217, 251, 6, 0.2)',
                  border: '1px solid rgba(217, 251, 6, 0.4)'
                }}
              >
                <IndianRupee size={18} style={{ color: '#d9fb06' }} />
                <span className="font-semibold" style={{ color: '#d9fb06' }}>
                  {service.estimatedCost}
                </span>
              </div>
            </div>

            {/* What's Included */}
            <div className="mb-6">
              <h3 className="text-lg font-bold mb-3" style={{ color: '#d9fb06' }}>
                What's Included
              </h3>
              <div className="space-y-2">
                {service.included.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <CheckCircle2 size={18} className="mt-1 flex-shrink-0" style={{ color: '#d9fb06' }} />
                    <span style={{ color: '#dfddd6' }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Documents Required */}
            <div className="p-4 rounded-lg" style={{ backgroundColor: 'rgba(63, 72, 22, 0.3)', border: '1px solid #3f4816' }}>
              <h4 className="text-sm font-semibold mb-2" style={{ color: '#d9fb06' }}>
                Documents Required:
              </h4>
              <p className="text-sm" style={{ color: '#888680' }}>
                {service.documentRequired}
              </p>
            </div>
          </div>

          {/* Right Column - Registration Form */}
          <div className="w-full md:w-1/2 p-8 overflow-y-auto" style={{ backgroundColor: '#1a1c1b' }}>
            <div className="sticky top-0">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold" style={{ color: '#d9fb06' }}>
                  Get Started
                </h3>
                <button 
                  onClick={onClose}
                  className="hidden md:block p-2 rounded-full hover:bg-opacity-20"
                  style={{ color: '#888680' }}
                >
                  <X size={20} />
                </button>
              </div>
              
              <p className="mb-6" style={{ color: '#888680' }}>
                Fill in your details and we'll contact you within 24 hours to discuss your requirements.
              </p>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-semibold mb-2" style={{ color: '#dfddd6' }}>
                    <User size={16} className="inline mr-2" />
                    Full Name *
                  </label>
                  <Input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter your full name"
                    required
                    className="w-full"
                    style={{
                      backgroundColor: '#302f2c',
                      border: '1px solid #3f4816',
                      color: '#dfddd6',
                      borderRadius: '10px'
                    }}
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2" style={{ color: '#dfddd6' }}>
                    <Phone size={16} className="inline mr-2" />
                    Phone Number *
                  </label>
                  <Input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Enter your phone number"
                    required
                    className="w-full"
                    style={{
                      backgroundColor: '#302f2c',
                      border: '1px solid #3f4816',
                      color: '#dfddd6',
                      borderRadius: '10px'
                    }}
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2" style={{ color: '#dfddd6' }}>
                    <MessageSquare size={16} className="inline mr-2" />
                    Your Message (Optional)
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us about your requirements..."
                    rows={4}
                    className="w-full"
                    style={{
                      backgroundColor: '#302f2c',
                      border: '1px solid #3f4816',
                      color: '#dfddd6',
                      borderRadius: '10px',
                      resize: 'vertical'
                    }}
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2" style={{ color: '#dfddd6' }}>
                    <Upload size={16} className="inline mr-2" />
                    Upload Document (Optional)
                  </label>
                  <div 
                    className="border-2 border-dashed rounded-lg p-6 text-center cursor-pointer hover:bg-opacity-50 transition-all"
                    style={{ 
                      borderColor: '#3f4816',
                      backgroundColor: 'rgba(63, 72, 22, 0.1)'
                    }}
                    onClick={() => document.getElementById('file-upload').click()}
                  >
                    <Upload size={32} className="mx-auto mb-2" style={{ color: '#888680' }} />
                    <p className="text-sm" style={{ color: '#888680' }}>
                      {formData.document ? formData.document.name : 'Click to upload or drag and drop'}
                    </p>
                    <p className="text-xs mt-1" style={{ color: '#888680' }}>
                      PDF, DOC, JPG (Max 10MB)
                    </p>
                    <input
                      id="file-upload"
                      type="file"
                      onChange={handleFileChange}
                      className="hidden"
                      accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                    />
                  </div>
                </div>

                <Button
                  type="submit"
                  className="w-full font-semibold text-base py-6"
                  style={{
                    backgroundColor: '#d9fb06',
                    color: '#1a1c1b',
                    borderRadius: '10rem',
                    textTransform: 'uppercase',
                    letterSpacing: '-0.04em'
                  }}
                >
                  Register Query
                </Button>

                <p className="text-xs text-center" style={{ color: '#888680' }}>
                  By submitting, you agree to receive communication from us regarding your query.
                </p>
              </form>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ServiceDetailModal;
