import { Search, Phone, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Header = () => {
  const navigationItems = [
    { label: "HEARING AIDS", href: "#" },
    { label: "HEARING HEALTH", href: "#", hasDropdown: true },
    { label: "RAPID HEARING TEST", href: "#" },
    { label: "BOOK APPOINTMENT", href: "#" },
    { label: "SHOP", href: "#", hasDropdown: true },
    { label: "FIND STORES", href: "#" },
    { label: "BLOGS", href: "#" },
  ];

  return (
    <header className="bg-background shadow-sm sticky top-0 z-50">
      {/* Top Bar */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-3 md:py-4">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-brand-blue rounded-full flex items-center justify-center">
              <svg
                className="w-5 h-5 text-primary-foreground"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <h1 className="text-xl md:text-2xl font-bold">
              <span className="text-foreground">HEAR</span>
              <span className="text-brand-blue">ZAP</span>
            </h1>
          </div>

          {/* Search Bar - Hidden on mobile */}
          <div className="hidden md:flex flex-1 max-w-xl mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search here"
                className="pl-10 w-full bg-muted/50 border-border"
              />
            </div>
          </div>

          {/* Contact & Actions */}
          <div className="flex items-center gap-2 md:gap-4">
            <a
              href="tel:+919659455455"
              className="hidden lg:flex items-center gap-2 text-foreground hover:text-primary transition-colors"
            >
              <Phone className="h-4 w-4" />
              <span className="text-sm font-medium">+91 96594 55455</span>
            </a>
            
            <Button
              size="sm"
              className="bg-whatsapp hover:bg-whatsapp/90 text-white gap-2 hidden md:flex"
            >
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              <span>Whatsapp</span>
            </Button>

            <Button variant="outline" size="sm" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              Login
            </Button>
          </div>
        </div>

        {/* Navigation */}
        <nav className="border-t border-border">
          <ul className="flex items-center justify-center gap-1 md:gap-6 py-3 overflow-x-auto scrollbar-hide">
            {navigationItems.map((item, index) => (
              <li key={index} className="flex-shrink-0">
                <a
                  href={item.href}
                  className="flex items-center gap-1 text-xs md:text-sm font-semibold text-foreground hover:text-primary transition-colors whitespace-nowrap px-2 py-1"
                >
                  {item.label}
                  {item.hasDropdown && <ChevronDown className="h-3 w-3" />}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
