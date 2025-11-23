import React from 'react';
import { Award, UserCheck, Home, Store, Gift, Ear, ShoppingBag, Wrench } from 'lucide-react';

export default function Pic() {
  const features = [
    {
      icon: Award,
      title: 'Quality',
      subtitle: 'Assurance'
    },
    {
      icon: UserCheck,
      title: 'Certified',
      subtitle: 'Audiologists'
    },
    {
      icon: Home,
      title: 'Home',
      subtitle: 'Visit'
    },
    {
      icon: Store,
      title: 'Experience',
      subtitle: 'Stores'
    },
    {
      icon: Gift,
      title: 'Guaranteed',
      subtitle: 'Discount'
    },
    {
      icon: Ear,
      title: 'Free Hearing',
      subtitle: 'Aid Trial'
    },
    {
      icon: ShoppingBag,
      title: 'Hearing Aid',
      subtitle: 'e-Store'
    },
    {
      icon: Wrench,
      title: 'In-House',
      subtitle: 'Service Lab'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-blue-200 to-blue-300 py-12  md:py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Section - Features */}
          <div className="space-y-8 md:space-y-12">
            {/* Header */}
            <div className="space-y-2">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-blue-900">
                Sri Raga Pranitha Difference
              </h1>
              <p className="text-lg md:text-xl text-blue-700 font-medium">
                Why shop with us.
              </p>
            </div>

            {/* Feature Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 md:gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center text-center space-y-3 group"
                >
                  {/* Icon Circle */}
                  <div className="relative">
                    <div className="absolute inset-0 bg-blue-400/30 rounded-full blur-lg group-hover:blur-xl transition-all duration-300"></div>
                    <div className="relative w-20 h-20 md:w-24 md:h-24 bg-white rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300 border-4 border-blue-100">
                      <feature.icon className="w-10 h-10 md:w-12 md:h-12 text-blue-500 group-hover:text-blue-600 transition-colors" strokeWidth={1.5} />
                    </div>
                  </div>

                  {/* Text */}
                  <div className="space-y-0.5">
                    <p className="text-sm md:text-base font-semibold text-blue-800 leading-tight">
                      {feature.title}
                    </p>
                    <p className="text-sm md:text-base font-semibold text-blue-700 leading-tight">
                      {feature.subtitle}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Section - Team Illustration */}
          <div className="flex justify-center lg:justify-end">
  <div className="relative w-full max-w-lg">
    <img
      src="https://i.ibb.co/Y7D6cnNg/ephone-removebg-preview.png"
      alt="Team"
      className="w-full h-auto object-contain"
    />
  </div>
</div>

        </div>
      </div>

      <style >{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}