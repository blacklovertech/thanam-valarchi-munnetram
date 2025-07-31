import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Crown, Star, Shield, Users } from "lucide-react";

const Members = () => {
  const [language, setLanguage] = useState<'ta' | 'en'>('ta');

  useEffect(() => {
    const saved = localStorage.getItem('language') as 'ta' | 'en';
    if (saved) setLanguage(saved);
  }, []);

  const handleLanguageChange = (lang: 'ta' | 'en') => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
  };

  const text = {
    ta: {
      title: "நமது தலைமைத்துவம்",
      subtitle: "அறக்கட்டளையின் முக்கிய உறுப்பினர்கள்"
    },
    en: {
      title: "Our Leadership",
      subtitle: "Key members of the trust"
    }
  };

  const leaders = [
    {
      name: "Dharmar R",
      position: { ta: "தலைவர்", en: "President" },
      icon: <Crown className="h-8 w-8 text-trust-gold" />,
      image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "Shanmugaraj",
      position: { ta: "நிறுவனர்", en: "Founder" },
      icon: <Star className="h-8 w-8 text-trust-gold" />,
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "Udhayakumar",
      position: { ta: "அறங்காவலர்", en: "Trustee" },
      icon: <Shield className="h-8 w-8 text-trust-gold" />,
      image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "Muthuselvam K",
      position: { ta: "நிர்வாக அறங்காவலர்", en: "Managing Trustee" },
      icon: <Users className="h-8 w-8 text-trust-gold" />,
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "Ramkumar",
      position: { ta: "அறங்காவலர்", en: "Trustee" },
      icon: <Shield className="h-8 w-8 text-trust-gold" />,
      image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=400&h=400&fit=crop&crop=face"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header language={language} onLanguageChange={handleLanguageChange} />
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-trust-green mb-4">
            {text[language].title}
          </h1>
          <p className="text-lg text-muted-foreground">
            {text[language].subtitle}
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {leaders.map((leader, index) => (
            <Card key={index} className="text-center shadow-trust border-trust-gold-light hover:shadow-gold transition-all duration-300 overflow-hidden">
              <CardHeader className="relative">
                <div className="relative w-32 h-32 mx-auto mb-4 overflow-hidden rounded-full ring-4 ring-trust-gold-light">
                  <img 
                    src={leader.image} 
                    alt={leader.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex justify-center mb-2">
                  {leader.icon}
                </div>
                <CardTitle className="text-xl text-trust-green">{leader.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground font-medium text-lg">
                  {leader.position[language]}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      <Footer language={language} />
    </div>
  );
};

export default Members;