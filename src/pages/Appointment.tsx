import React, { useState } from 'react';
import { Calendar, MapPin } from 'lucide-react';

export default function Appointment() {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    date: '',
    time: ''
  });
  const [loading, setLoading] = useState(false);

  const timeSlots = [];
  for (let i = 9; i < 21; i++) {
    const hour = i % 12 || 12;
    const period = i < 12 ? 'AM' : 'PM';
    timeSlots.push(`${hour}:00 ${period}`);
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    // Only allow numbers for mobile input
    if (name === 'mobile') {
      const numericValue = value.replace(/\D/g, '');
      setFormData(prev => ({
        ...prev,
        [name]: numericValue
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.mobile || !formData.date || !formData.time) {
      alert('Please fill in all fields');
      return;
    }

    if (formData.mobile.length !== 10) {
      alert('Mobile number must be 10 digits');
      return;
    }

    setLoading(true);

    const message = `Hello, I would like to book an appointment.\n\nDetails:\nName: ${formData.name}\nMobile: ${formData.mobile}\nDate: ${formData.date}\nTime: ${formData.time}`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappLink = `https://wa.me/918801229982?text=${encodedMessage}`;

    setTimeout(() => {
      window.open(whatsappLink, '_blank');
      setFormData({ name: '', mobile: '', date: '', time: '' });
      setLoading(false);
    }, 500);
  };

  const today = new Date().toISOString().split('T')[0];

  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-blue-100 via-blue-50 to-cyan-50 py-8 md:py-12 px-4 relative overflow-hidden">
      {/* Decorative Waves */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-cyan-400/40 via-blue-400/20 to-transparent rounded-full blur-3xl -z-10"></div>
      <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-cyan-300/20 to-transparent rounded-full blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">

          {/* Left - Image */}
          <div className="order-2 lg:order-1 flex justify-center">
            <div className="relative w-full max-w-xs lg:max-w-sm">
              <img 
                src="https://i.ibb.co/Y7D6cnNg/ephone-removebg-preview.png"
                alt="Professional"
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* Right - Form */}
          <div className="order-1 lg:order-2">
            {/* Header */}
            <div className="flex items-center gap-4 mb-8">
              <div className="flex items-center justify-center w-20 h-20 bg-white rounded-full shadow-lg flex-shrink-0">
                <Calendar className="w-10 h-10 text-blue-600" strokeWidth={1.5} />
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-slate-900">Book</h1>
                <h2 className="text-4xl md:text-5xl font-bold text-slate-900">Appointment</h2>
              </div>
            </div>

            {/* Form Card */}
            <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-10 border border-blue-100">
              <div className="space-y-6">
                {/* Name */}
                <div>
                  <label className="block text-slate-900 font-semibold mb-2 text-base">Enter Your Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border-b-2 border-slate-300 text-base focus:outline-none focus:border-blue-500 transition-all bg-transparent"
                    required
                  />
                </div>

                {/* Mobile */}
                <div>
                  <label className="block text-slate-900 font-semibold mb-2 text-base">Enter Your Mobile Number</label>
                  <div className="flex items-center gap-3 border-b-2 border-slate-300 pb-3">
                    <div className="flex items-center gap-2 px-2">
                      <span className="text-xl">🇮🇳</span>
                      <span className="text-slate-700 font-semibold">+91</span>
                      <span className="text-slate-400">▼</span>
                    </div>
                    <input
                      type="tel"
                      name="mobile"
                      value={formData.mobile}
                      onChange={handleInputChange}
                      pattern="[0-9]{10}"
                      maxLength={10}
                      className="flex-1 py-2 text-base focus:outline-none focus:ring-0 bg-transparent"
                      required
                    />
                  </div>
                </div>

                {/* Date */}
                <div>
                  <label className="block text-slate-900 font-semibold mb-2 text-base">Select Date</label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleInputChange}
                    min={today}
                    className="w-full px-4 py-3 border-b-2 border-slate-300 text-base focus:outline-none focus:border-blue-500 transition-all bg-transparent"
                    required
                  />
                </div>

                {/* Time */}
                <div>
                  <label className="block text-slate-900 font-semibold mb-2 text-base">Select Time (9 AM - 9 PM)</label>
                  <select
                    name="time"
                    value={formData.time}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border-b-2 border-slate-300 text-base focus:outline-none focus:border-blue-500 transition-all appearance-none bg-transparent cursor-pointer"
                    required
                  >
                    <option value="">Select Time</option>
                    {timeSlots.map((time, index) => (
                      <option key={index} value={time}>{time}</option>
                    ))}
                  </select>
                </div>

                {/* Submit */}
                <button
                  onClick={handleSubmit}
                  disabled={loading}
                  className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-bold py-3 rounded-lg transition-all duration-300 text-base disabled:opacity-70 disabled:cursor-not-allowed shadow-lg hover:shadow-xl mt-4"
                >
                  {loading ? 'Sending...' : 'SUBMIT'}
                </button>
              </div>
            </div>

            {/* Address */}
            <div className="mt-6 bg-white rounded-xl shadow-md p-6 border border-blue-100">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-slate-900 text-sm mb-2">Our Location</h3>
                  <p className="text-slate-700 text-xs leading-relaxed">
                    D No-10-3-203c, Beside Prameela Hospital, Beside NTR Blood Bank, Kotakommala Street, Reddy & Reddy Colony, Tirupati - 517501, Andhra Pradesh
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
