import React, { useState } from 'react';
import { Dialog, DialogContent } from './ui/dialog';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { X, Clock, IndianRupee, CheckCircle2, Upload } from 'lucide-react';
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

  const colorSchemes = {
    'personal-finance': { bg: 'bg-purple-50', text: 'text-purple-700', border: 'border-purple-200' },
    'gst-taxation': { bg: 'bg-pink-50', text: 'text-pink-700', border: 'border-pink-200' },
    'business-setup': { bg: 'bg-blue-50', text: 'text-blue-700', border: 'border-blue-200' },
    'audit-documentation': { bg: 'bg-emerald-50', text: 'text-emerald-700', border: 'border-emerald-200' },
    'accounting-consulting': { bg: 'bg-amber-50', text: 'text-amber-700', border: 'border-amber-200' },
    'utilities': { bg: 'bg-cyan-50', text: 'text-cyan-700', border: 'border-cyan-200' }
  };

  const scheme = colorSchemes[service.categoryId] || { bg: 'bg-slate-50', text: 'text-slate-700', border: 'border-slate-200' };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-6xl max-h-[90vh] p-0 overflow-hidden bg-white" style={{ border: 'none', borderRadius: '20px' }}>
        <div className="flex flex-col md:flex-row h-full">
          {/* Left Column - Service Details */}
          <div className="w-full md:w-1/2 p-8 overflow-y-auto bg-slate-50">
            <div className="mb-6">
              <div className="flex items-center justify-between mb-4">
                <span 
                  className={`text-xs px-3 py-1.5 rounded-lg font-medium ${scheme.bg} ${scheme.text} ${scheme.border} border`}
                >
                  {service.category}
                </span>
                <button 
                  onClick={onClose}
                  className="md:hidden p-2 rounded-lg hover:bg-slate-200 transition-colors"
                >
                  <X size={20} className="text-slate-600" />
                </button>
              </div>
              
              <h2 className="text-3xl font-bold mb-4 text-slate-900 tracking-tight">
                {service.title}
              </h2>
              
              <p className="text-base leading-relaxed text-slate-600">
                {service.description}
              </p>
            </div>

            {/* Info Chips */}
            <div className="flex flex-wrap gap-3 mb-8">
              <div className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-white border border-slate-200">
                <Clock size={18} className="text-slate-500" />
                <span className="font-medium text-slate-700">
                  {service.estimatedTime}
                </span>
              </div>
              
              <div className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-white border border-slate-200">
                <IndianRupee size={18} className="text-slate-500" />
                <span className="font-medium text-slate-700">
                  {service.estimatedCost}
                </span>
              </div>
            </div>

            {/* What's Included */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-4 text-slate-900">
                What's Included
              </h3>
              <div className="space-y-2">
                {service.included.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 bg-white p-3 rounded-lg border border-slate-100">
                    <CheckCircle2 size={18} className="mt-0.5 flex-shrink-0 text-emerald-500" />
                    <span className="text-sm text-slate-600">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Documents Required */}
            <div className="p-4 rounded-lg bg-purple-50 border border-purple-100">
              <h4 className="text-sm font-semibold mb-2 text-slate-900">
                Documents Required:
              </h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                {service.documentRequired}
              </p>
            </div>
          </div>

          {/* Right Column - Registration Form */}
          <div className="w-full md:w-1/2 p-8 overflow-y-auto bg-white">
            <div className="sticky top-0">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-slate-900 tracking-tight">
                  Get Started
                </h3>
                <button 
                  onClick={onClose}
                  className="hidden md:block p-2 rounded-lg hover:bg-slate-100 transition-colors"
                >
                  <X size={20} className="text-slate-600" />
                </button>
              </div>
              
              <p className="mb-8 text-slate-600 leading-relaxed">
                Fill in your details and we'll contact you within 24 hours to discuss your requirements.
              </p>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-medium mb-2 text-slate-700">
                    Full Name *
                  </label>
                  <Input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter your full name"
                    required
                    className="w-full bg-white border-slate-200 focus:border-purple-400 focus:ring-purple-400"
                    style={{
                      borderRadius: '10px',
                      padding: '12px 16px'
                    }}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-slate-700">
                    Phone Number *
                  </label>
                  <Input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Enter your phone number"
                    required
                    className="w-full bg-white border-slate-200 focus:border-purple-400 focus:ring-purple-400"
                    style={{
                      borderRadius: '10px',
                      padding: '12px 16px'
                    }}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-slate-700">
                    Your Message (Optional)
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us about your requirements..."
                    rows={4}
                    className="w-full bg-white border-slate-200 focus:border-purple-400 focus:ring-purple-400"
                    style={{
                      borderRadius: '10px',
                      padding: '12px 16px',
                      resize: 'vertical'
                    }}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-slate-700">
                    Upload Document (Optional)
                  </label>
                  <div 
                    className="border-2 border-dashed border-slate-200 rounded-lg p-6 text-center cursor-pointer hover:border-purple-300 hover:bg-purple-50 transition-all"
                    onClick={() => document.getElementById('file-upload').click()}
                  >
                    <Upload size={28} className="mx-auto mb-2 text-slate-400" />
                    <p className="text-sm text-slate-700 font-medium">
                      {formData.document ? formData.document.name : 'Click to upload or drag and drop'}
                    </p>
                    <p className="text-xs mt-1 text-slate-500">
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
                  className="w-full font-medium text-base py-5 text-white bg-purple-600 hover:bg-purple-700 transition-colors"
                  style={{
                    borderRadius: '10px'
                  }}
                >
                  Register Query
                </Button>

                <p className="text-xs text-center text-slate-500">
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
