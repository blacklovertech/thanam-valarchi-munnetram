import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";

interface HeaderProps {
  language: 'ta' | 'en';
  onLanguageChange: (lang: 'ta' | 'en') => void;
}

const Header = ({ language, onLanguageChange }: HeaderProps) => {
  const text = {
    ta: {
      title: "மாவீரன் துர்கைமுத்து நல அறக்கட்டளை",
      subtitle: "கல்வி • பொருளாதாரம் • அரசியல் விழிப்புணர்வு",
      nav: {
        home: "முகப்பு",
        about: "பற்றி",
        services: "சேவைகள்",
        members: "உறுப்பினர்கள்",
        contact: "தொடர்பு"
      }
    },
    en: {
      title: "Maveeran Durgaimuthu Welfare Trust",
      subtitle: "Education • Economy • Political Awareness",
      nav: {
        home: "Home",
        about: "About",
        services: "Services", 
        members: "Members",
        contact: "Contact"
      }
    }
  };

  return (
    <header className="bg-gradient-trust text-white shadow-trust">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <img 
              src="/lovable-uploads/e81e5880-a85f-4f06-a114-27f6445b04a3.png" 
              alt="Trust Logo" 
              className="h-16 w-16 rounded-full shadow-gold"
            />
            <div>
              <h1 className="text-xl font-bold">{text[language].title}</h1>
              <p className="text-sm opacity-90">{text[language].subtitle}</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <nav className="hidden md:flex space-x-6">
              <a href="/" className="hover:text-trust-gold-light transition-colors">{text[language].nav.home}</a>
              <a href="/about" className="hover:text-trust-gold-light transition-colors">{text[language].nav.about}</a>
              <a href="/services" className="hover:text-trust-gold-light transition-colors">{text[language].nav.services}</a>
              <a href="/members" className="hover:text-trust-gold-light transition-colors">{text[language].nav.members}</a>
              <a href="/contact" className="hover:text-trust-gold-light transition-colors">{text[language].nav.contact}</a>
            </nav>
            <Button
              variant="outline"
              size="sm"
              onClick={() => onLanguageChange(language === 'ta' ? 'en' : 'ta')}
              className="bg-white/10 border-white/20 text-white hover:bg-white/20"
            >
              <Globe className="h-4 w-4 mr-2" />
              {language === 'ta' ? 'EN' : 'தமிழ்'}
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;