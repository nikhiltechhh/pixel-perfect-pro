import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

// Import images from assets
import BTE1 from '@/assets/BTE1.jpeg';
import RIC1 from '@/assets/RIC1.jpeg';
import CIC1 from '@/assets/CIC1.jpeg';
import ITC1 from '@/assets/ITC1.jpeg';
import BTE2 from '@/assets/BTE2.jpeg';
import RIC2 from '@/assets/RIC2.jpeg';
import ITC2 from '@/assets/ITC2.jpeg';
import BTE3 from '@/assets/BTE3.jpeg';
import RIC3 from '@/assets/RIC3.jpeg';
import RIC4 from '@/assets/RIC4.jpeg';



export default function Products() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    {
      id: 'ric',
      name: 'RIC',
      fullName: '(Receiver-in-Canal)',
      description: 'Discreet design with the speaker in the ear canal',
      products: [
        { id: 1, imageUrl: RIC1, name: 'RIC Model Pro' },
        { id: 2, imageUrl: RIC2, name: 'RIC Advanced' },
        { id: 3, imageUrl: RIC3, name: 'RIC Premium' },
      ]
    },
    {
      id: 'bte',
      name: 'BTE',
      fullName: '(Behind-the-Ear)',
      description: 'Powerful and durable for all hearing loss levels',
      products: [
        { id: 4, imageUrl: BTE1, name: 'BTE Power Plus' },
        { id: 5, imageUrl: BTE2, name: 'BTE Classic' },
        { id: 6, imageUrl: BTE3, name: 'BTE Ultra' },
       
      ]
    },
    {
      id: 'cic',
      name: 'CIC',
      fullName: '(Completely-in-Canal)',
      description: 'Nearly invisible and custom-fitted',
      products: [
        { id: 8, imageUrl: CIC1, name: 'CIC Invisible' },
       
      ]
    },
    {
      id: 'itc',
      name: 'ITC',
      fullName: '(In-the-Canal)',
      description: 'Balanced performance and discretion',
      products: [
        { id: 1, imageUrl: ITC1, name: 'ITC Standard' },
        { id: 2, imageUrl: ITC2, name: 'ITC , CIC' },
       
      ]
    }
  ];

  const allProducts = categories.flatMap(cat => 
    cat.products.map(p => ({ ...p, category: cat.id, categoryName: cat.name }))
  );

  const filteredCategories = activeCategory === 'all' 
    ? categories 
    : categories.filter(cat => cat.id === activeCategory);

  const openImage = (product) => setSelectedImage(product);
  const closeImage = () => setSelectedImage(null);

  const navigateImage = (direction) => {
    const currentIndex = allProducts.findIndex(p => p.id === selectedImage.id && p.category === selectedImage.category);
    let newIndex =
      direction === 'next'
        ? (currentIndex + 1) % allProducts.length
        : (currentIndex - 1 + allProducts.length) % allProducts.length;

    setSelectedImage(allProducts[newIndex]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Hearing Aid Collection</h1>
          <p className="text-gray-600">Explore our range of advanced hearing solutions</p>
        </div>
      </div>

      {/* Category Filter */}
      <div className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                activeCategory === 'all'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              All Products
            </button>
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  activeCategory === category.id
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Product Categories */}
      <div className="max-w-7xl mx-auto px-4 py-12 space-y-16">
        {filteredCategories.map((category) => (
          <div key={category.id} className="space-y-6">
            {/* Category Header */}
            <div className="border-l-4 border-blue-600 pl-4">
              <div className="flex items-baseline gap-3 mb-2">
                <h2 className="text-3xl font-bold text-gray-900">{category.name}</h2>
                <span className="text-lg text-gray-600">{category.fullName}</span>
              </div>
              <p className="text-gray-600">{category.description}</p>
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {category.products.map((product) => (
                <div
                  key={`${category.id}-${product.id}`}
                  className="group relative bg-white rounded-xl shadow-md overflow-hidden cursor-pointer hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
                  onClick={() => openImage({ ...product, category: category.id, categoryName: category.name })}
                >
                  <div className="aspect-[4/3] overflow-hidden bg-gray-200">
                    <img
                      src={product.imageUrl}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-4 bg-gradient-to-t from-white to-gray-50">
                    <h3 className="font-semibold text-gray-900 text-lg mb-1">{product.name}</h3>
                    <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded-full">
                      {category.name}
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-blue-600 bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300 pointer-events-none" />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-95 z-50 flex items-center justify-center p-4">
          {/* Close Button */}
          <button
            onClick={closeImage}
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-10 bg-black bg-opacity-50 rounded-full p-2"
            aria-label="Close"
          >
            <X className="w-8 h-8" />
          </button>

          {/* Previous Button */}
          <button
            onClick={() => navigateImage('prev')}
            className="absolute left-4 text-white hover:text-gray-300 transition-colors z-10 bg-black bg-opacity-50 rounded-full p-2"
            aria-label="Previous"
          >
            <ChevronLeft className="w-10 h-10" />
          </button>

          {/* Next Button */}
          <button
            onClick={() => navigateImage('next')}
            className="absolute right-4 text-white hover:text-gray-300 transition-colors z-10 bg-black bg-opacity-50 rounded-full p-2"
            aria-label="Next"
          >
            <ChevronRight className="w-10 h-10" />
          </button>

          {/* Image Container */}
          <div className="max-w-6xl w-full max-h-[90vh] flex flex-col items-center justify-center">
            <img
              src={selectedImage.imageUrl}
              alt={selectedImage.name}
              className="max-w-full max-h-[75vh] object-contain rounded-lg shadow-2xl"
            />
            <div className="mt-6 text-center bg-black bg-opacity-60 px-6 py-4 rounded-lg">
              <h3 className="text-white text-2xl font-bold mb-1">{selectedImage.name}</h3>
              <p className="text-gray-300 text-sm">
                {selectedImage.categoryName} - {categories.find(c => c.id === selectedImage.category)?.fullName}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}