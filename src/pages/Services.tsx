import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, TrendingUp, Users, Target, Lightbulb, Heart } from "lucide-react";

const Services = () => {
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
      title: "எங்கள் சேவைகள்",
      subtitle: "சமூகத்தின் நலனுக்காக நாங்கள் வழங்கும் சேவைகள்",
      services: [
        {
          title: "கல்வி வளர்ச்சி",
          description: "மாணவர்களுக்கு இலவச வழிகாட்டி முகாம்கள், பயிற்சிகள், கற்கை உதவித் திட்டங்கள்.",
          features: [
            "இலவச வழிகாட்டி முகாம்கள்",
            "மாணவர் பயிற்சி திட்டங்கள்",
            "கல்வி உதவித் திட்டங்கள்",
            "புத்தக வழங்கல்",
            "தேர்வு தயாரிப்பு வகுப்புகள்"
          ]
        },
        {
          title: "பொருளாதார முன்னேற்றம்",
          description: "தொழில் முனைவோர் பயிற்சி, சுயதொழில் உதவித் திட்டங்கள், தொழில் வழிகாட்டி நிகழ்ச்சிகள்.",
          features: [
            "தொழில் முனைவோர் பயிற்சி",
            "சுயதொழில் உதவித் திட்டங்கள்",
            "தொழில் வழிகாட்டி நிகழ்ச்சிகள்",
            "நிதி ஆலோசனை",
            "திறன் மேம்பாட்டு பயிற்சி"
          ]
        },
        {
          title: "அரசியல் விழிப்புணர்வு",
          description: "வாக்காளர் விழிப்புணர்வு, நல்லாட்சிக்கு ஆதரவு, மக்கள் உரிமைகள் குறித்த நிகழ்ச்சிகள்.",
          features: [
            "வாக்காளர் விழிப்புணர்வு",
            "நல்லாட்சி ஆதரவு",
            "மக்கள் உரிமைகள்",
            "சட்ட விழிப்புணர்வு",
            "சமூக நீதி கருத்தரங்குகள்"
          ]
        }
      ]
    },
    en: {
      title: "Our Services",
      subtitle: "Services we provide for the welfare of society",
      services: [
        {
          title: "Educational Development",
          description: "Free guidance camps, training programs, and educational assistance schemes for students.",
          features: [
            "Free guidance camps",
            "Student training programs",
            "Educational assistance schemes",
            "Book distribution",
            "Exam preparation classes"
          ]
        },
        {
          title: "Economic Development",
          description: "Entrepreneurship training, self-employment assistance programs, and business guidance events.",
          features: [
            "Entrepreneurship training",
            "Self-employment assistance",
            "Business guidance events",
            "Financial consulting",
            "Skill development training"
          ]
        },
        {
          title: "Political Awareness",
          description: "Voter awareness, good governance support, and programs on people's rights.",
          features: [
            "Voter awareness",
            "Good governance support",
            "People's rights",
            "Legal awareness",
            "Social justice seminars"
          ]
        }
      ]
    }
  };

  const icons = [BookOpen, TrendingUp, Users];

  return (
    <div className="min-h-screen bg-background">
      <Header language={language} onLanguageChange={handleLanguageChange} />
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-trust-green mb-4">
            {text[language].title}
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {text[language].subtitle}
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {text[language].services.map((service, index) => {
            const IconComponent = icons[index];
            return (
              <Card key={index} className="shadow-trust border-trust-gold-light hover:shadow-gold transition-all duration-300">
                <CardHeader className="text-center">
                  <div className="flex justify-center mb-4">
                    <div className="p-4 bg-trust-green-light rounded-full">
                      <IconComponent className="h-12 w-12 text-trust-green" />
                    </div>
                  </div>
                  <CardTitle className="text-xl text-trust-green">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6">{service.description}</p>
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm">
                        <div className="w-2 h-2 bg-trust-gold rounded-full mr-3 flex-shrink-0"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
      <Footer language={language} />
    </div>
  );
};

export default Services;