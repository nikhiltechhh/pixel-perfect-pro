import { Calendar, Headphones, Video, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Hero = () => {
  const quickActions = [
    {
      icon: <Headphones className="h-8 w-8 text-brand-blue" />,
      title: "Rapid Hearing Test",
      subtitle: "Quick & accurate assessment",
      buttonText: "TRY NOW",
      bgColor: "bg-card-bg-peach",
      buttonVariant: "default" as const,
    },
    {
      icon: <Calendar className="h-8 w-8 text-brand-blue" />,
      title: "Book Appointment",
      subtitle: "Schedule your visit",
      buttonText: "BOOK NOW",
      bgColor: "bg-card-bg-cyan",
      buttonVariant: "default" as const,
    },
    {
      icon: <Video className="h-8 w-8 text-brand-blue" />,
      title: "Video Consultation",
      subtitle: "Connect from anywhere",
      buttonText: "BOOK NOW",
      bgColor: "bg-card-bg-light-blue",
      buttonVariant: "default" as const,
    },
  ];

  return (
    <div className="w-full">
      {/* Quick Action Cards */}
      <section className="container mx-auto px-4 py-6 md:py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {quickActions.map((action, index) => (
            <Card
              key={index}
              className={`${action.bgColor} border-0 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1`}
            >
              <div className="p-6 md:p-8">
                <div className="flex flex-col h-full">
                  <div className="mb-4">{action.icon}</div>
                  <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2">
                    {action.title.split(" ").map((word, i) => (
                      <span key={i}>
                        {word}
                        <br />
                      </span>
                    ))}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-6">
                    {action.subtitle}
                  </p>
                  <Button
                    className="mt-auto bg-brand-blue hover:bg-brand-blue-dark text-white font-semibold shadow-md"
                    size="lg"
                  >
                    {action.buttonText}
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Hero Banner */}
      <section className="relative w-full overflow-hidden bg-gradient-to-br from-[hsl(var(--hero-gradient-start))] to-[hsl(var(--hero-gradient-end))]">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center min-h-[400px] md:min-h-[500px] py-12 md:py-16">
            {/* Left Side - Image */}
            <div className="relative hidden md:block">
              <div className="relative z-10">
                <div className="w-full aspect-square max-w-md mx-auto bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <div className="text-white/60 text-center">
                    <Headphones className="h-32 w-32 mx-auto mb-4" />
                    <p className="text-sm">Professional hearing care</p>
                  </div>
                </div>
              </div>
              {/* Decorative circles */}
              <div className="absolute top-10 right-10 w-32 h-32 bg-white/5 rounded-full blur-2xl"></div>
              <div className="absolute bottom-10 left-10 w-40 h-40 bg-white/5 rounded-full blur-3xl"></div>
            </div>

            {/* Right Side - Content */}
            <div className="text-center md:text-left z-10">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Advanced Hearing Tests
                <br />
                <span className="text-white/95">With Accurate Results</span>
              </h1>
              <p className="text-lg md:text-xl text-white/90 mb-8 max-w-xl">
                Professional hearing assessments using state-of-the-art technology
              </p>
              <Button
                size="lg"
                className="bg-white text-brand-blue hover:bg-white/90 font-semibold text-lg px-8 shadow-xl"
              >
                Get Started Today
              </Button>
            </div>
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all duration-300"
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all duration-300"
          aria-label="Next slide"
        >
          <ChevronRight className="h-6 w-6" />
        </button>

        {/* Decorative background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-1/4 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        </div>
      </section>

      {/* Floating Chat Button */}
      <button
        className="fixed bottom-6 right-6 w-14 h-14 bg-brand-blue hover:bg-brand-blue-dark text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 z-50"
        aria-label="Chat support"
      >
        <svg
          className="h-6 w-6"
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
      </button>
    </div>
  );
};

export default Hero;
