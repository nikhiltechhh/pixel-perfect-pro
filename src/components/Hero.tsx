import { Calendar, Headphones, Video, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import heroImage from "@/assets/hero-hearing-test.jpg";
import rapidTestImg from "@/assets/rapid-test-card.jpg";
import appointmentImg from "@/assets/appointment-card.jpg";
import videoConsultImg from "@/assets/video-consultation-card.jpg";

const Hero = () => {
  const quickActions = [
    {
      icon: <Headphones className="h-6 w-6 md:h-8 md:w-8 text-brand-blue" />,
      title: "Rapid",
      subtitle: "Hearing Test",
      buttonText: "TRY NOW",
      bgColor: "bg-card-bg-peach",
      image: rapidTestImg,
    },
    {
      icon: <Calendar className="h-6 w-6 md:h-8 md:w-8 text-brand-blue" />,
      title: "Book",
      subtitle: "Appointment",
      buttonText: "BOOK NOW",
      bgColor: "bg-card-bg-cyan",
      image: appointmentImg,
    },
    {
      icon: <Video className="h-6 w-6 md:h-8 md:w-8 text-brand-blue" />,
      title: "Video",
      subtitle: "Consultation",
      buttonText: "BOOK NOW",
      bgColor: "bg-card-bg-light-blue",
      image: videoConsultImg,
    },
  ];

  return (
    <div className="w-full">
      {/* Quick Action Cards */}
      <section className="container mx-auto px-4 py-4 md:py-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
          {quickActions.map((action, index) => (
            <Card
              key={index}
              className={`${action.bgColor} border-0 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden group`}
            >
              <div className="grid grid-cols-2 md:grid-cols-1 gap-4 h-full">
                {/* Text Content */}
                <div className="p-4 md:p-6 flex flex-col justify-between">
                  <div>
                    <div className="mb-3 md:mb-4">{action.icon}</div>
                    <h3 className="text-lg md:text-2xl font-bold text-brand-blue-dark mb-1">
                      {action.title}
                    </h3>
                    <h3 className="text-lg md:text-2xl font-bold text-brand-blue-dark mb-3 md:mb-4">
                      {action.subtitle}
                    </h3>
                  </div>
                  <Button
                    className="bg-brand-blue hover:bg-brand-blue-dark text-white font-semibold shadow-md w-full md:w-auto"
                    size="default"
                  >
                    {action.buttonText}
                  </Button>
                </div>
                
                {/* Image */}
                <div className="relative overflow-hidden md:h-48">
                  <img
                    src={action.image}
                    alt={`${action.title} ${action.subtitle}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Hero Banner */}
      <section className="relative w-full overflow-hidden bg-gradient-to-br from-[hsl(var(--hero-gradient-start))] to-[hsl(var(--hero-gradient-end))]">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center min-h-[400px] md:min-h-[500px] lg:min-h-[600px] py-8 md:py-12">
            {/* Left Side - Image */}
            <div className="relative order-2 md:order-1">
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={heroImage}
                  alt="Professional hearing test with healthcare worker and patient"
                  className="w-full h-auto object-cover"
                />
              </div>
              {/* Decorative circles */}
              <div className="absolute top-10 right-10 w-32 h-32 bg-white/5 rounded-full blur-2xl"></div>
              <div className="absolute bottom-10 left-10 w-40 h-40 bg-white/5 rounded-full blur-3xl"></div>
            </div>

            {/* Right Side - Content */}
            <div className="text-center md:text-left z-10 order-1 md:order-2">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6 leading-tight">
                Advanced Hearing Tests
                <br />
                <span className="text-white/95">With Accurate Results</span>
              </h1>
              <p className="text-base md:text-lg lg:text-xl text-white/90 mb-6 md:mb-8 max-w-xl mx-auto md:mx-0">
                Professional hearing assessments using state-of-the-art technology for precise diagnosis
              </p>
              <Button
                size="lg"
                className="bg-white text-brand-blue hover:bg-white/90 font-semibold text-base md:text-lg px-6 md:px-8 py-5 md:py-6 shadow-xl hover:shadow-2xl transition-all"
              >
                Get Started Today
              </Button>
            </div>
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110"
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-5 w-5 md:h-6 md:w-6" />
        </button>
        <button
          className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110"
          aria-label="Next slide"
        >
          <ChevronRight className="h-5 w-5 md:h-6 md:w-6" />
        </button>

        {/* Decorative background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-1/4 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        </div>
      </section>

      {/* Floating Chat Button */}
      <button
        className="fixed bottom-4 right-4 md:bottom-6 md:right-6 w-12 h-12 md:w-14 md:h-14 bg-brand-blue hover:bg-brand-blue-dark text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 z-50"
        aria-label="Chat support"
      >
        <div className="w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden">
          <svg
            className="h-6 w-6 mx-auto mt-3"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
            />
          </svg>
        </div>
      </button>

      {/* Download Prices - Side Button */}
      <div className="fixed left-0 top-1/2 -translate-y-1/2 z-40 hidden lg:block">
        <button className="bg-brand-blue hover:bg-brand-blue-dark text-white px-3 py-6 text-sm font-semibold shadow-lg transition-all duration-300 hover:px-4 writing-mode-vertical">
          Download Prices
        </button>
      </div>
    </div>
  );
};

export default Hero;
