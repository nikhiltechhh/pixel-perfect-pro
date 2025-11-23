import React from 'react';
import { Volume2, Mic, Zap, Headphones, Wifi, Battery, Radio, RefreshCw, Heart, Users, Brain, Phone, CheckCircle } from 'lucide-react';

export default function Hearingaid() {
  const features = [
    {
      icon: <Volume2 className="w-6 h-6" />,
      title: "Noise Reduction",
      description: "Identifies and reduces background noise by applying less amplification to noise than speech, resulting in better listening comfort and less effort."
    },
    {
      icon: <Mic className="w-6 h-6" />,
      title: "Directional Microphones",
      description: "Focuses on sounds from specific directions, especially the front, eliminating background sounds for clearer listening in noisy environments."
    },
    {
      icon: <Battery className="w-6 h-6" />,
      title: "Rechargeable Batteries",
      description: "No need for frequent battery replacements. Enjoy all-day confidence with reliable, long-lasting rechargeable power."
    },
    {
      icon: <Wifi className="w-6 h-6" />,
      title: "Wireless Connectivity",
      description: "Seamlessly channels auditory signals from external sources to your inner ear without cables or wires."
    },
    {
      icon: <Radio className="w-6 h-6" />,
      title: "Remote Controls",
      description: "Easily adjust volume, switch programs, and fine-tune your hearing aids without physically handling them."
    },
    {
      icon: <Headphones className="w-6 h-6" />,
      title: "Direct Audio Input",
      description: "Connect directly to TVs, music players, or phones for improved sound quality with minimal interference."
    },
    {
      icon: <RefreshCw className="w-6 h-6" />,
      title: "Synchronization",
      description: "Both hearing aids work together seamlessly, with adjustments on one automatically applied to the other."
    }
  ];

  const benefits = [
    { icon: <CheckCircle className="w-5 h-5" />, text: "Hear sounds that were not previously heard" },
    { icon: <Users className="w-5 h-5" />, text: "Improved communication with family, friends, and surroundings" },
    { icon: <Phone className="w-5 h-5" />, text: "Better conversation quality over phone" },
    { icon: <Volume2 className="w-5 h-5" />, text: "Enhanced communication in noisy environments" },
    { icon: <Heart className="w-5 h-5" />, text: "Reduced stress and improved well-being" },
    { icon: <Brain className="w-5 h-5" />, text: "Helps delay dementia and cognitive decline" },
    { icon: <CheckCircle className="w-5 h-5" />, text: "Overall improved quality of life" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-blue-600 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Sri Raga Pranitha Hospital</h1>
          <h2 className="text-xl md:text-2xl font-semibold mt-6">Hearing Aid Solutions</h2>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* What are Hearing Aids */}
        <section className="mb-12">
          <div className="bg-white rounded-lg shadow p-8 border-l-4 border-blue-600">
            <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-3">
              <Headphones className="w-7 h-7 text-blue-600" />
              What are Hearing Aids?
            </h3>
            <div className="space-y-4 text-gray-700">
              <p>
                Hearing aids are small electronic devices that amplify sound and help you hear better in both quiet and noisy situations. They can be highly customized to address different types of hearing loss.
              </p>
              <p>
                These sophisticated devices contain microphones, amplifiers, receivers, and advanced electronic components that work together to filter out noise and provide high intelligibility.
              </p>
              <div className="bg-blue-50 border-l-4 border-blue-600 p-4 mt-4 rounded">
                <p className="font-semibold text-gray-800 mb-2">Important Health Benefits:</p>
                <p className="text-gray-700">
                  Hearing plays a vital role in brain health by helping people remain active and engaged. Research shows that maintaining good hearing can reduce the risk of dementia and Alzheimer's disease, significantly improving quality of life.
                </p>
              </div>
              <p>
                The impacts of hearing loss are broad and profound, including loss of communication ability, delayed language development in children, and can lead to social isolation, loneliness, and frustration, particularly among older adults.
              </p>
            </div>
          </div>
        </section>

        {/* How Hearing Aids Work */}
        <section className="mb-12">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">How Hearing Aids Work</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow p-6 border-t-4 border-blue-600">
              <div className="bg-blue-100 w-14 h-14 rounded-full flex items-center justify-center mb-4 mx-auto">
                <Mic className="w-7 h-7 text-blue-600" />
              </div>
              <h4 className="text-lg font-bold text-gray-800 mb-2 text-center">Microphone</h4>
              <p className="text-gray-600 text-center text-sm">
                Captures sound waves and converts them into electrical signals
              </p>
            </div>

            <div className="bg-white rounded-lg shadow p-6 border-t-4 border-blue-600">
              <div className="bg-blue-100 w-14 h-14 rounded-full flex items-center justify-center mb-4 mx-auto">
                <Zap className="w-7 h-7 text-blue-600" />
              </div>
              <h4 className="text-lg font-bold text-gray-800 mb-2 text-center">Amplifier</h4>
              <p className="text-gray-600 text-center text-sm">
                Increases the strength of the electrical signals
              </p>
            </div>

            <div className="bg-white rounded-lg shadow p-6 border-t-4 border-blue-600">
              <div className="bg-blue-100 w-14 h-14 rounded-full flex items-center justify-center mb-4 mx-auto">
                <Volume2 className="w-7 h-7 text-blue-600" />
              </div>
              <h4 className="text-lg font-bold text-gray-800 mb-2 text-center">Speaker/Receiver</h4>
              <p className="text-gray-600 text-center text-sm">
                Produces the amplified sound waves into the ear
              </p>
            </div>
          </div>
          <div className="bg-gray-100 rounded-lg p-5 mt-6">
            <p className="text-gray-700 text-center">
              Modern hearing aids come with a wide variety of technologies and features, broadly classified into <span className="font-semibold">Analogue (Non-Digital)</span> and <span className="font-semibold">Digital</span> hearing aids.
            </p>
          </div>
        </section>

        {/* Features */}
        <section className="mb-12">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">Advanced Features</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-lg shadow p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-600 text-white p-3 rounded-lg flex-shrink-0">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-800 mb-2">{feature.title}</h4>
                    <p className="text-gray-600 text-sm">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Benefits */}
        <section className="mb-12">
          <div className="bg-blue-600 rounded-lg shadow p-8 text-white">
            <h3 className="text-2xl font-bold mb-6 text-center">Benefits of Using Hearing Aids</h3>
            <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="text-white flex-shrink-0 mt-1">
                    {benefit.icon}
                  </div>
                  <p className="text-white">{benefit.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

       
      </div>

    </div>
  );
}