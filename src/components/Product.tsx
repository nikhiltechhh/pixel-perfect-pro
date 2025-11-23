import React from "react";
import { useNavigate } from "react-router-dom";

export default function Product() {
  const navigate = useNavigate(); // React Router hook

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-blue-100 to-cyan-50 p-4 md:p-8 lg:p-12">
      <div className="max-w-7xl mx-auto">
        <div className="bg-gradient-to-r from-blue-100/60 to-cyan-100/60 rounded-3xl shadow-2xl overflow-hidden backdrop-blur-sm border border-white/20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center p-8 md:p-12 lg:p-16 relative">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5 pointer-events-none">
              <div className="absolute top-10 left-10 w-16 h-16 border-4 border-blue-600 rounded-full"></div>
              <div className="absolute top-32 left-32 w-12 h-12 border-4 border-blue-600 rounded-lg"></div>
              <div className="absolute bottom-20 left-20 w-20 h-20 border-4 border-blue-600 rounded-full"></div>
              <div className="absolute top-20 right-40 w-14 h-14 border-4 border-blue-600 rounded-lg"></div>
              <div className="absolute bottom-32 right-20 w-16 h-16 border-4 border-blue-600 rounded-full"></div>
            </div>

            {/* Content Section */}
            <div className="space-y-6 md:space-y-8 relative z-10">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-blue-900 leading-tight">
                  Find The Right
                  <br />
                  Hearing Aid
                </h1>
                <p className="text-lg md:text-xl text-blue-700 font-medium max-w-md">
                  The ideal hearing aid that matches your lifestyle
                </p>
              </div>

              {/* TRY NOW button navigates to /Products */}
              <button
                onClick={() => navigate("/Products")}
                className="group bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 active:scale-95"
              >
                TRY NOW
                <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform duration-200">
                  →
                </span>
              </button>
            </div>

            {/* Product Image Section */}
            <div className="relative z-10 flex justify-center lg:justify-end">
              <div className="relative group">
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400/30 to-cyan-400/30 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500 scale-105"></div>

                {/* Product container */}
                <div className="relative w-64 h-48 md:w-80 md:h-56 rounded-2xl overflow-hidden">
                  <img
                    src="https://i.ibb.co/230nCBfy/Oticon-Opn-S-recharger-removebg-preview.png"
                    alt="Product"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Feature badges */}
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {["Wireless Charging", "Crystal Clear Sound", "All-Day Battery", "Discreet Design"].map(
            (feature, index) => (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-sm rounded-xl p-4 text-center shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-200"
              >
                <p className="text-sm md:text-base font-semibold text-blue-900">{feature}</p>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}
