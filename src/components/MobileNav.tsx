import { Menu } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { useNavigate } from "react-router-dom";

const MobileNav = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const navigationItems = [
    { label: "HOME", href: "/" },
    { label: "HEARING AIDS", href: "/hearingaid" },
    { label: "HEARING HEALTH", href: "/Health" },
    { label: "RAPID HEARING TEST", href: "/Appointment" },
    { label: "BOOK APPOINTMENT", href: "/Appointment" },
    { label: "PRODUCTS", href: "/Products" },
  ];

  const handleNavigation = (href: string) => {
    navigate(href);
    setOpen(false); // Close the mobile menu after navigation
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
     <SheetTrigger asChild>
  <Button
    className="md:hidden !w-10 !h-10 p-0 flex items-center justify-center"
    aria-label="Toggle menu"
  >
    <Menu className="!w-8 !h-8" /> {/* Force bigger size */}
  </Button>
</SheetTrigger>


      <SheetContent side="left" className="w-[300px] sm:w-[400px]">
        <SheetHeader>
          <SheetTitle
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => {
              navigate("/"); // Go home when logo is tapped
              setOpen(false); // Close the sheet
            }}
          >
            <div className="w-10 h-10">
    <img
      src="https://i.ibb.co/C5gQPDNN/Screenshot-2025-11-23-at-11-12-50-AM.png" // Placeholder image
      alt="Logo"
      className="w-full h-full object-contain"
    />
  </div>
            <span className="text-xl font-bold">
              <span className="text-foreground">SRI </span>
              <span className="text-brand-blue">RAGA PRANITHA</span>
            </span>
          </SheetTitle>
        </SheetHeader>

        <nav className="mt-8">
          <ul className="space-y-2">
            {navigationItems.map((item, index) => (
              <li key={index}>
                <button
                  className="block w-full text-left px-4 py-3 text-sm font-semibold text-foreground hover:bg-muted rounded-lg transition-colors"
                  onClick={() => handleNavigation(item.href)}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <div className="mt-8 space-y-3 px-4">
          <a
            href="tel:+918801229982"
            className="flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
          >
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            +91 88012 29982
          </a>
          <Button
            className="w-full bg-whatsapp hover:bg-whatsapp/90 text-white mt-4 gap-2"
            onClick={() => window.open("https://wa.me/918801229982", "_blank")}
          >
            WhatsApp
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
