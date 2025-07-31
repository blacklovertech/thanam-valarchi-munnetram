import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";

const Index = () => {
  const [language, setLanguage] = useState<'ta' | 'en'>('ta');

  useEffect(() => {
    const saved = localStorage.getItem('language') as 'ta' | 'en';
    if (saved) setLanguage(saved);
  }, []);

  const handleLanguageChange = (lang: 'ta' | 'en') => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header language={language} onLanguageChange={handleLanguageChange} />
      <Hero language={language} />
      <Footer language={language} />
    </div>
  );
};

export default Index;