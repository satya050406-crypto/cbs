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
    
    toast({
      title: "Query Registered Successfully!",
      description: `We'll contact you soon regarding ${service?.title}.`,
    });
    
    setFormData({
      name: '',
      phone: '',
      message: '',
      document: null
    });
    
    onClose();
  };

  if (!service) return null;

  const gradients = {
    'personal-finance': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    'gst-taxation': 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    'business-setup': 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    'audit-documentation': 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
    'accounting-consulting': 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
    'utilities': 'linear-gradient(135deg, #30cfd0 0%, #330867 100%)'
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-6xl max-h-[90vh] p-0 overflow-hidden bg-white" style={{ border: 'none', borderRadius: '24px' }}>
        <div className="flex flex-col md:flex-row h-full">
          {/* Left Column - Service Details */}
          <div className="w-full md:w-1/2 p-8 overflow-y-auto bg-gray-50">
            <div className="mb-6">
              <div className="flex items-center justify-between mb-4">
                <span 
                  className="text-xs px-4 py-2 rounded-full font-semibold text-white"
                  style={{
                    background: gradients[service.categoryId] || service.categoryColor
                  }}
                >
                  {service.category}
                </span>
                <button 
                  onClick={onClose}
                  className="md:hidden p-2 rounded-full hover:bg-gray-200 transition-colors"
                >
                  <X size={20} className="text-gray-600" />
                </button>
              </div>
              
              <h2 className="text-3xl font-bold mb-4 text-gray-900">
                {service.title}
              </h2>
              
              <p className="text-base leading-relaxed text-gray-700">
                {service.description}
              </p>
            </div>

            {/* Transparency Chips */}
            <div className="flex flex-wrap gap-3 mb-6">
              <div 
                className="flex items-center gap-2 px-4 py-3 rounded-2xl bg-blue-50 border border-blue-200"
              >
                <Clock size={20} className="text-blue-600" />
                <span className="font-semibold text-blue-700">
                  {service.estimatedTime}
                </span>
              </div>
              
              <div 
                className="flex items-center gap-2 px-4 py-3 rounded-2xl bg-green-50 border border-green-200"
              >
                <IndianRupee size={20} className="text-green-600" />
                <span className="font-semibold text-green-700">
                  {service.estimatedCost}
                </span>
              </div>
            </div>

            {/* What's Included */}
            <div className="mb-6">
              <h3 className="text-lg font-bold mb-4 text-gray-900">
                What's Included
              </h3>
              <div className="space-y-3">
                {service.included.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 bg-white p-3 rounded-xl">
                    <CheckCircle2 size={20} className="mt-0.5 flex-shrink-0 text-green-600" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Documents Required */}
            <div className="p-4 rounded-xl bg-purple-50 border border-purple-200">
              <h4 className="text-sm font-semibold mb-2 text-purple-900">
                Documents Required:
              </h4>
              <p className="text-sm text-purple-700">
                {service.documentRequired}
              </p>
            </div>
          </div>

          {/* Right Column - Registration Form */}
          <div className="w-full md:w-1/2 p-8 overflow-y-auto bg-white">
            <div className="sticky top-0">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-gray-900">
                  Get Started
                </h3>
                <button 
                  onClick={onClose}
                  className="hidden md:block p-2 rounded-full hover:bg-gray-100 transition-colors"
                >
                  <X size={20} className="text-gray-600" />
                </button>
              </div>
              
              <p className="mb-6 text-gray-600">
                Fill in your details and we'll contact you within 24 hours to discuss your requirements.
              </p>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-semibold mb-2 text-gray-700">
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
                    className="w-full bg-gray-50 border-gray-200 focus:border-purple-500 focus:ring-purple-500"
                    style={{
                      borderRadius: '12px',
                      padding: '12px 16px'
                    }}
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2 text-gray-700">
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
                    className="w-full bg-gray-50 border-gray-200 focus:border-purple-500 focus:ring-purple-500"
                    style={{
                      borderRadius: '12px',
                      padding: '12px 16px'
                    }}
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2 text-gray-700">
                    <MessageSquare size={16} className="inline mr-2" />
                    Your Message (Optional)
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us about your requirements..."
                    rows={4}
                    className="w-full bg-gray-50 border-gray-200 focus:border-purple-500 focus:ring-purple-500"
                    style={{
                      borderRadius: '12px',
                      padding: '12px 16px',
                      resize: 'vertical'
                    }}
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2 text-gray-700">
                    <Upload size={16} className="inline mr-2" />
                    Upload Document (Optional)
                  </label>
                  <div 
                    className="border-2 border-dashed border-purple-200 rounded-2xl p-6 text-center cursor-pointer hover:border-purple-400 hover:bg-purple-50 transition-all"
                    onClick={() => document.getElementById('file-upload').click()}
                  >
                    <Upload size={32} className="mx-auto mb-2 text-purple-400" />
                    <p className="text-sm text-gray-700 font-medium">
                      {formData.document ? formData.document.name : 'Click to upload or drag and drop'}
                    </p>
                    <p className="text-xs mt-1 text-gray-500">
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
                  className="w-full font-semibold text-base py-6 text-white shadow-lg hover:shadow-xl transition-all"
                  style={{
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    borderRadius: '12px'
                  }}
                >
                  Register Query
                </Button>

                <p className="text-xs text-center text-gray-500">
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
