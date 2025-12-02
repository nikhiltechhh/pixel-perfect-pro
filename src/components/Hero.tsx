import { Calendar, Ear, Video } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Hero = () => {
  const quickActions = [
    {
      icon: <Ear className="h-6 w-6 md:h-8 md:w-8 text-brand-blue" />,
      title: "Rapid",
      subtitle: "Hearing Test",
      buttonText: "TRY NOW",
      bgColor: "bg-card-bg-peach",
      image: "https://i.ibb.co/Y7D6cnNg/ephone-removebg-preview.png",
      link: "/appointment",
    },
    {
      icon: <Calendar className="h-6 w-6 md:h-8 md:w-8 text-brand-blue" />,
      title: "Book",
      subtitle: "Appointment",
      buttonText: "BOOK NOW",
      bgColor: "bg-card-bg-cyan",
      image: "https://i.ibb.co/7x45QGNx/appointment-card-removebg-preview.png",
      link: "/appointment",
    },
    {
      icon: <Video className="h-6 w-6 md:h-8 md:w-8 text-brand-blue" />,
      title: "Video",
      subtitle: "Consultation",
      buttonText: "BOOK NOW",
      bgColor: "bg-card-bg-light-blue",
      image: "https://i.ibb.co/cSvvsgjd/Doc-removebg-preview.png",
      link: "/appointment",
    },
  ];

  const heroSlides = [
    {
      title: "Advanced Hearing Tests",
      subtitle: "With Accurate Results",
      description:
        "Professional hearing assessments using state-of-the-art technology for precise diagnosis",
      image: "https://i.ibb.co/sphK9t5r/Adv.jpg",
    },
    {
      title: "Expert Audiologists",
      subtitle: "Personalized Care",
      description:
        "Experienced professionals dedicated to your hearing health and wellbeing",
      image: "https://i.ibb.co/NdJQH2g4/Per.jpg",
    },
    {
      title: "Modern Technology",
      subtitle: "Latest Equipment",
      description:
        "Cutting-edge diagnostic tools for comprehensive hearing evaluations",
      image: "https://i.ibb.co/9k14MbpN/Mod.jpg",
    },
  ];

  // Simple navigation function
  const handleNavigate = (url: string) => {
    window.location.href = url;
  };

  return (
    <div className="w-full">
      {/* Quick Action Cards */}
      <section className="container mx-auto px-4 py-2 md:py-4">
        <div>
  <p className=" sm:block text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-700 mb-2">
    Welcome to Sri Raga Pranitha Speech and Hearing Centre
  </p>
</div>

        <div className="grid grid-cols-3 sm:grid-cols-3 gap-2 md:gap-4">
          {quickActions.map((action, index) => (
            <Card
              key={index}
              className={`${action.bgColor} border-0 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden group h-full cursor-pointer`}
              onClick={() => handleNavigate(action.link)}
            >
              {/* Mobile Layout - Icon and Text Side by Side */}
              <div className="sm:hidden p-2 flex items-center gap-2 min-h-[60px]">
                <div className="flex-shrink-0">
                  <div className="h-5 w-5 flex items-center justify-center">
                    {action.icon}
                  </div>
                </div>
                <div className="flex flex-col text-left">
                  <h3 className="text-[10px] font-bold text-brand-blue-dark leading-tight">
                    {action.title}
                  </h3>
                  <h3 className="text-[10px] font-bold text-brand-blue-dark leading-tight">
                    {action.subtitle}
                  </h3>
                </div>
              </div>

              {/* Desktop Layout - Original Grid with Image */}
              <div className="hidden sm:grid grid-cols-2 h-full">
                {/* Text Section */}
                <div className="p-4 md:p-6 flex flex-col justify-between h-full">
                  <div>
                    <div className="mb-3 md:mb-4">{action.icon}</div>
                    <h3 className="text-lg md:text-2xl font-bold text-brand-blue-dark mb-1">
                      {action.title}
                    </h3>
                    <h3 className="text-lg md:text-2xl font-bold text-brand-blue-dark mb-3 md:mb-4">
                      {action.subtitle}
                    </h3>
                  </div>

                  {/* Button - visible but not needed for click */}
                  <Button
                    className="bg-brand-blue hover:bg-brand-blue-dark text-white font-semibold shadow-md w-full md:w-auto pointer-events-none"
                    size="default"
                  >
                    {action.buttonText}
                  </Button>
                </div>

                {/* Image Section */}
                <div className="relative overflow-hidden h-full">
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

      {/* Hero Carousel */}
      <section className="relative w-full overflow-hidden bg-gradient-to-br from-[hsl(var(--hero-gradient-start))] to-[hsl(var(--hero-gradient-end))]">
        <Carousel className="w-full" opts={{ loop: true }}>
          <CarouselContent>
            {heroSlides.map((slide, index) => (
              <CarouselItem key={index}>
                <div className="container mx-auto px-4">
                  <div className="grid md:grid-cols-2 gap-8 items-center min-h-[400px] md:min-h-[500px] lg:min-h-[600px] py-8 md:py-12">
                    {/* Image */}
                    <div className="relative order-2 md:order-1">
                      <div className="relative z-10 overflow-hidden ">
                        <img
                          src={slide.image}
                          alt={slide.title}
                          className="w-full h-auto object-cover"
                        />
                      </div>
                      <div className="absolute top-10 right-10 w-32 h-32 bg-white/5 rounded-full blur-2xl"></div>
                      <div className="absolute bottom-10 left-10 w-40 h-40 bg-white/5 rounded-full blur-3xl"></div>
                    </div>

                    {/* Content */}
                    <div className="text-center md:text-left z-10 order-1 md:order-2">
                      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6 leading-tight">
                        {slide.title}
                        <br />
                        <span className="text-white/95">{slide.subtitle}</span>
                      </h1>

                      <p className="text-base md:text-lg lg:text-xl text-white/90 mb-6 md:mb-8 max-w-xl mx-auto md:mx-0">
                        {slide.description}
                      </p>

                      <Button
                        size="lg"
                        className="bg-white text-brand-blue hover:bg-white/90 font-semibold text-base md:text-lg px-6 md:px-8 py-5 md:py-6 shadow-xl hover:shadow-2xl transition-all"
                        onClick={() => handleNavigate("/appointment")}
                      >
                        Get Started Today
                      </Button>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious className="left-2 md:left-4 w-10 h-10 md:w-12 md:h-12 bg-white/20 hover:bg-white/30 backdrop-blur-sm border-0 text-white" />
          <CarouselNext className="right-2 md:right-4 w-10 h-10 md:w-12 md:h-12 bg-white/20 hover:bg-white/30 backdrop-blur-sm border-0 text-white" />
        </Carousel>

        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-1/4 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        </div>
      </section>
    </div>
  );
};

export default Hero;