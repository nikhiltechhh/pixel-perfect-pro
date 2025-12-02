import React, { useState } from 'react';
import { Activity, Ear, Stethoscope, Radio, Waves, Settings } from 'lucide-react';
import Acco from "@/assets/Acco.jpeg";
import BERA1 from "@/assets/BERA1.jpeg";
import SA from "@/assets/SA.jpeg";
import IMP from "@/assets/IMP.jpeg";
import HAT from "@/assets/HAT.jpeg";
import COCH from "@/assets/COCH.jpeg";
import HAF from "@/assets/HAF.jpeg";
import HAA from "@/assets/HAA.jpeg";


const Services = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const services = [
    { name: 'PTA', full: 'Pure Tone Audiometry', category: 'diagnostic', icon: Activity, image: 'https://i.ibb.co/nMQKcVhz/PTA.jpg' },
    { name: 'Speech Audiometry', full: 'Speech Assessment', category: 'diagnostic', icon: Radio, image: SA },
    { name: 'IMP', full: 'Tympanometry', category: 'diagnostic', icon: Waves, image: IMP },
    { name: 'Acoustic Reflex', full: 'Reflex Testing', category: 'diagnostic', icon: Activity, image: Acco},
    { name: 'OAE', full: 'Otoaccoustic Emissions', category: 'diagnostic', icon: Waves, image: 'https://i.ibb.co/4R2wPFH5/OAE.jpg' },
    { name: 'ECOCHG', full: 'Electrocochleography', category: 'advanced', icon: Activity, image: 'https://i.ibb.co/JRzzf3b8/ECOG.jpg' },
    { name: 'BERA', full: 'Brainstem Evoked Response', category: 'advanced', icon: Activity, image: BERA1 },
    { name: 'VEMP', full: 'Vestibular Evoked Myogenic Potential', category: 'advanced', icon: Waves, image: 'https://i.ibb.co/dstz3snR/VEMP.jpg' },
    { name: 'Hearing Aid Trial', full: 'Device Testing', category: 'advanced', icon: Ear, image: HAT },
    { name: 'Hearing Aid Fitting', full: 'Custom Fitting', category: 'advanced', icon: Settings, image: HAF },
    { name: 'Cochlear Implantation', full: 'Surgical Implant', category: 'advanced', icon: Stethoscope, image: COCH },
    { name: 'Hearing Aid Accessories', full: 'Support Products', category: 'advanced', icon: Settings, image: HAA }
  ];

  const categories = [
    { id: 'all', label: 'All Services' },
    { id: 'diagnostic', label: 'Diagnostic' },
    { id: 'advanced', label: 'Advanced' }
  ];

  const filteredServices = activeCategory === 'all' 
    ? services 
    : services.filter(s => s.category === activeCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-4 md:mb-8">
          <div className="flex items-center justify-center gap-2 mb-2 md:mb-3">
            <Ear className="w-6 h-6 md:w-8 md:h-8 text-blue-600" />
            <h1 className="text-2xl md:text-4xl font-bold text-gray-800">Audiology Services</h1>
          </div>
          <p className="text-sm md:text-base text-gray-600">Comprehensive hearing care solutions</p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-1.5 md:gap-2 mb-4 md:mb-6">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === cat.id
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-blue-50'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service, idx) => {
            const Icon = service.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 group"
              >
                {/* Image Section */}
                <div className="relative h-52 overflow-hidden bg-gradient-to-br from-blue-100 to-indigo-100">
                  <img 
                    src={service.image} 
                    alt={service.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-3 right-3">
                    <span className="bg-white/90 backdrop-blur-sm text-blue-600 px-3 py-1 rounded-full text-xs font-semibold capitalize">
                      {service.category}
                    </span>
                  </div>
                  
                  {/* Icon Overlay */}
                  <div className="absolute bottom-3 left-3">
                    <div className="bg-white/90 backdrop-blur-sm p-2.5 rounded-lg">
                      <Icon className="w-6 h-6 text-blue-600" />
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-5">
                  <h3 className="font-bold text-gray-800 text-lg mb-2 leading-tight">
                    {service.name}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed mb-4">
                    {service.full}
                  </p>

                </div>
              </div>
            );
          })}
        </div>

        {/* Footer Info */}
        <div className="mt-8 text-center bg-white rounded-xl p-6 shadow-md">
          <p className="text-gray-600 text-sm">
            All services performed by certified audiologists using state-of-the-art equipment
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;