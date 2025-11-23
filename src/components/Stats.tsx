import React, { useState } from 'react';
import { Shield, Building2, Download, Users, Award, Star, Send } from 'lucide-react';

export default function Stats() {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    state: ''
  });
  const [loading, setLoading] = useState(false);

  const stats = [
    {
      icon: Shield,
      value: '10+',
      label: 'Years of Trust'
    },
    {
      icon: Building2,
      value: '10+',
      label: 'Experience Stores'
    },
    {
      icon: Download,
      value: '1K +',
      label: 'Products'
    },
    {
      icon: Users,
      value: '30K+',
      label: 'Happy Customers'
    },
    {
      icon: Award,
      value: '200+',
      label: 'Certified Audiologists'
    },
    {
      icon: Star,
      value: '15K',
      label: 'Google Reviews'
    }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.mobile || !formData.state) {
      alert('Please fill in all fields');
      return;
    }

    setLoading(true);

    const message = `Hi, I'm ${formData.name} from ${formData.state}. I'm interested in learning more about hearing aids. Contact: ${formData.mobile}`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappLink = `https://wa.me/918801229982?text=${encodedMessage}`;
    
    setTimeout(() => {
      window.open(whatsappLink, '_blank');
      setFormData({ name: '', mobile: '', state: '' });
      setLoading(false);
    }, 500);
  };

  const states = [
    'Select State', 'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh',
    'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jharkhand', 'Karnataka', 'Kerala',
    'Madhya Pradesh', 'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram', 'Nagaland', 'Odisha',
    'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Telangana', 'Tripura', 'Uttar Pradesh',
    'Uttarakhand', 'West Bengal'
  ];

  return (
    <div className="w-full bg-gradient-to-b from-slate-50 to-white py-12 px-4">
      {/* Stats Grid */}
      <div className="max-w-7xl mx-auto mb-12">
        <div className="grid grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-3 md:gap-4 lg:gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-6 md:p-8 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <div className="flex flex-col items-center text-center">
                  <Icon className="w-8 h-8 md:w-10 md:h-10 mb-3 md:mb-4 text-blue-400" />
                  <h3 className="text-2xl md:text-3xl font-bold mb-1 md:mb-2">{stat.value}</h3>
                  <p className="text-xs md:text-sm text-slate-300 leading-tight">{stat.label}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Form Section */}
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-10 border border-slate-100">
          <div className="mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">Have any queries?</h2>
            <p className="text-slate-600">Request a call back.</p>
          </div>

          <div className="space-y-4 md:space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6">
              {/* Name Input */}
              <div className="md:col-span-1">
                <input
                  type="text"
                  name="name"
                  placeholder="Name*"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 md:px-5 py-3 md:py-4 border border-slate-300 rounded-lg text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  required
                />
              </div>

              {/* Mobile Input */}
              <div className="md:col-span-1">
                <input
                  type="tel"
                  name="mobile"
                  placeholder="Mobile Number*"
                  value={formData.mobile}
                  onChange={handleInputChange}
                  pattern="[0-9]{10}"
                  className="w-full px-4 md:px-5 py-3 md:py-4 border border-slate-300 rounded-lg text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  required
                />
              </div>

              {/* State Dropdown */}
              <div className="md:col-span-1">
                <select
                  name="state"
                  value={formData.state}
                  onChange={handleInputChange}
                  className="w-full px-4 md:px-5 py-3 md:py-4 border border-slate-300 rounded-lg text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all appearance-none bg-white cursor-pointer"
                  required
                >
                  {states.map((state, index) => (
                    <option key={index} value={state} disabled={index === 0}>
                      {index === 0 ? 'Select State*' : state}
                    </option>
                  ))}
                </select>
              </div>

              {/* Submit Button */}
              <div className="md:col-span-1">
                <button
                  onClick={handleSubmit}
                  disabled={loading}
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold py-3 md:py-4 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 text-sm md:text-base disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  <Send className="w-4 h-4" />
                  {loading ? 'Sending...' : 'SUBMIT'}
                </button>
              </div>
            </div>
          </div>

          <p className="text-xs md:text-sm text-slate-500 mt-6">
            By submitting this form, you consent to receive calls or messages from us.
          </p>
        </div>
      </div>
    </div>
  );
}