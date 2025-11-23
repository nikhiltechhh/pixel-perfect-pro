import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

// Import images from assets
import p1 from '@/assets/p1.jpeg';
import p2 from '@/assets/p2.jpeg';
import p3 from '@/assets/p3.jpeg';
import p4 from '@/assets/p4.jpeg';
import p5 from '@/assets/p5.jpeg';
import p6 from '@/assets/p6.jpeg';
import p7 from '@/assets/p7.jpeg';
import p8 from '@/assets/p8.jpeg';
import p9 from '@/assets/p9.jpeg';
import p10 from '@/assets/p10.jpeg';

export default function Products() {
  const [selectedImage, setSelectedImage] = useState<any>(null);

  const products = [
    { id: 1, imageUrl: p1 },
    { id: 2, imageUrl: p2 },
    { id: 3, imageUrl: p3 },
    { id: 4, imageUrl: p4 },
    { id: 5, imageUrl: p5 },
    { id: 6, imageUrl: p6 },
    { id: 7, imageUrl: p7 },
    { id: 8, imageUrl: p8 },
    { id: 9, imageUrl: p9 },
    { id: 10, imageUrl: p10 },
  ];

  const openImage = (product: any) => setSelectedImage(product);
  const closeImage = () => setSelectedImage(null);

  const navigateImage = (direction: 'next' | 'prev') => {
    const currentIndex = products.findIndex(p => p.id === selectedImage.id);
    let newIndex =
      direction === 'next'
        ? (currentIndex + 1) % products.length
        : (currentIndex - 1 + products.length) % products.length;

    setSelectedImage(products[newIndex]);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      {/* Image Gallery */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="group relative bg-white rounded-lg shadow overflow-hidden cursor-pointer hover:shadow-xl transition-all"
            onClick={() => openImage(product)}
          >
            <div className="aspect-[4/3] overflow-hidden bg-gray-200">
              <img
                src={product.imageUrl}
                alt={`Product ${product.id}`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
          {/* Close Button */}
          <button
            onClick={closeImage}
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-10"
          >
            <X className="w-8 h-8" />
          </button>

          {/* Previous Button */}
          <button
            onClick={() => navigateImage('prev')}
            className="absolute left-4 text-white hover:text-gray-300 transition-colors z-10"
          >
            <ChevronLeft className="w-10 h-10" />
          </button>

          {/* Next Button */}
          <button
            onClick={() => navigateImage('next')}
            className="absolute right-4 text-white hover:text-gray-300 transition-colors z-10"
          >
            <ChevronRight className="w-10 h-10" />
          </button>

          {/* Image Container */}
          <div className="max-w-5xl w-full max-h-[90vh] flex items-center justify-center">
            <img
              src={selectedImage.imageUrl}
              alt={`Product ${selectedImage.id}`}
              className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl"
            />
          </div>
        </div>
      )}
    </div>
  );
}
