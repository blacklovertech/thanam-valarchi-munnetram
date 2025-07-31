import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Crown, Star, Shield, Users, Mail, Phone, MapPin } from "lucide-react";

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
      subtitle: "அறக்கட்டளையின் முக்கிய உறுப்பினர்கள் மற்றும் நிர்வாக குழு",
      contact: "தொடர்பு கொள்ளுங்கள்",
      experience: "அனுபவம்",
      expertise: "நிபுணத்துவம்",
      joinTeam: "எங்கள் குழுவில் சேருங்கள்"
    },
    en: {
      title: "Our Leadership",
      subtitle: "Key members and administrative team of the trust",
      contact: "Contact",
      experience: "Experience",
      expertise: "Expertise",
      joinTeam: "Join Our Team"
    }
  };

  const leaders = [
    {
      name: "Dharmar R",
      position: { ta: "தலைவர்", en: "President" },
      icon: <Crown className="h-8 w-8 text-trust-gold" />,
      image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=400&h=400&fit=crop&crop=face",
      experience: { ta: "15+ ஆண்டுகள்", en: "15+ Years" },
      expertise: { ta: "சமூக சேவை & நிர்வாகம்", en: "Social Service & Administration" },
      description: { 
        ta: "சமூக நலன் மற்றும் கல்வி மேம்பாட்டில் 15 ஆண்டுகளுக்கும் மேலான அனுபவம்", 
        en: "Over 15 years of experience in social welfare and educational development" 
      },
      primary: true
    },
    {
      name: "Shanmugaraj",
      position: { ta: "நிறுவனர்", en: "Founder" },
      icon: <Star className="h-8 w-8 text-trust-gold" />,
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=400&fit=crop&crop=face",
      experience: { ta: "20+ ஆண்டுகள்", en: "20+ Years" },
      expertise: { ta: "சமூக முன்னேற்றம் & திட்டமிடல்", en: "Social Development & Planning" },
      description: { 
        ta: "அறக்கட்டளையின் நிறுவனர் மற்றும் சமூக மாற்றத்தின் முன்னோடி", 
        en: "Founder of the trust and pioneer of social transformation" 
      },
      primary: true
    },
    {
      name: "Udhayakumar",
      position: { ta: "அறங்காவலர்", en: "Trustee" },
      icon: <Shield className="h-8 w-8 text-trust-gold" />,
      image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=400&h=400&fit=crop&crop=face",
      experience: { ta: "10+ ஆண்டுகள்", en: "10+ Years" },
      expertise: { ta: "நிதி மேலாண்மை & மேற்பார்வை", en: "Financial Management & Oversight" },
      description: { 
        ta: "நிதி மேலாண்மை மற்றும் திட்ட செயல்பாட்டில் நிபுணர்", 
        en: "Expert in financial management and project implementation" 
      },
      primary: false
    },
    {
      name: "Muthuselvam K",
      position: { ta: "நிர்வாக அறங்காவலர்", en: "Managing Trustee" },
      icon: <Users className="h-8 w-8 text-trust-gold" />,
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=400&fit=crop&crop=face",
      experience: { ta: "12+ ஆண்டுகள்", en: "12+ Years" },
      expertise: { ta: "நிர்வாகம் & மானவ வளங்கள்", en: "Administration & Human Resources" },
      description: { 
        ta: "அறக்கட்டளையின் அன்றாட நிர்வாகம் மற்றும் மானவ வள மேலாண்மை", 
        en: "Daily administration and human resource management of the trust" 
      },
      primary: false
    },
    {
      name: "Ramkumar",
      position: { ta: "அறங்காவலர்", en: "Trustee" },
      icon: <Shield className="h-8 w-8 text-trust-gold" />,
      image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=400&h=400&fit=crop&crop=face",
      experience: { ta: "8+ ஆண்டுகள்", en: "8+ Years" },
      expertise: { ta: "சட்ட ஆலோசனை & கொள்கை", en: "Legal Advisory & Policy" },
      description: { 
        ta: "சட்ட ஆலோசனை மற்றும் கொள்கை வகுப்பில் நிபுணர்", 
        en: "Expert in legal advisory and policy formulation" 
      },
      primary: false
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header language={language} onLanguageChange={handleLanguageChange} />
      
      {/* Hero Section */}
      <section className="bg-gradient-hero py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-trust-green mb-6">
            {text[language].title}
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {text[language].subtitle}
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        {/* Leadership Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Primary Leaders */}
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-trust-green text-center mb-8">
              {language === 'ta' ? 'முதன்மை தலைமைத்துவம்' : 'Primary Leadership'}
            </h2>
            {leaders.filter(leader => leader.primary).map((leader, index) => (
              <Card key={index} className="shadow-elegant border-trust-gold-light hover:shadow-gold transition-all duration-300 overflow-hidden">
                <CardContent className="p-0">
                  <div className="flex flex-col md:flex-row">
                    {/* Image Section */}
                    <div className="md:w-1/3 relative">
                      <div className="aspect-square relative overflow-hidden">
                        <img 
                          src={leader.image} 
                          alt={leader.name}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-trust-green/50 to-transparent"></div>
                        <div className="absolute bottom-4 left-4">
                          <div className="p-2 bg-white/90 rounded-full">
                            {leader.icon}
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Content Section */}
                    <div className="md:w-2/3 p-6">
                      <h3 className="text-2xl font-bold text-trust-green mb-2">{leader.name}</h3>
                      <p className="text-lg font-medium text-trust-gold mb-4">{leader.position[language]}</p>
                      <p className="text-muted-foreground mb-4 leading-relaxed">{leader.description[language]}</p>
                      
                      <div className="grid grid-cols-2 gap-4 mb-4">
                        <div className="p-3 bg-trust-green-light rounded-lg">
                          <p className="text-sm font-medium text-trust-green">{text[language].experience}</p>
                          <p className="font-bold">{leader.experience[language]}</p>
                        </div>
                        <div className="p-3 bg-trust-gold-light rounded-lg">
                          <p className="text-sm font-medium text-trust-green">{text[language].expertise}</p>
                          <p className="font-bold text-sm">{leader.expertise[language]}</p>
                        </div>
                      </div>
                      
                      <Button variant="outline" size="sm" className="border-trust-green text-trust-green hover:bg-trust-green-light">
                        <Mail className="mr-2 h-4 w-4" />
                        {text[language].contact}
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Other Team Members */}
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-trust-green text-center mb-8">
              {language === 'ta' ? 'குழு உறுப்பினர்கள்' : 'Team Members'}
            </h2>
            {leaders.filter(leader => !leader.primary).map((leader, index) => (
              <Card key={index} className="shadow-trust border-trust-gold-light hover:shadow-gold transition-all duration-300">
                <CardHeader className="text-center">
                  <div className="relative w-24 h-24 mx-auto mb-4 overflow-hidden rounded-full ring-4 ring-trust-gold-light">
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
                  <p className="text-trust-gold font-medium">{leader.position[language]}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm mb-4 text-center">{leader.description[language]}</p>
                  <div className="grid grid-cols-1 gap-3">
                    <div className="p-2 bg-trust-green-light rounded text-center">
                      <p className="text-xs text-trust-green">{text[language].experience}</p>
                      <p className="font-bold text-sm">{leader.experience[language]}</p>
                    </div>
                    <div className="p-2 bg-trust-gold-light rounded text-center">
                      <p className="text-xs text-trust-green">{text[language].expertise}</p>
                      <p className="font-bold text-xs">{leader.expertise[language]}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Contact Information */}
        <Card className="shadow-elegant border-trust-gold-light bg-gradient-card">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl text-trust-green">
              {language === 'ta' ? 'எங்கள் குழுவுடன் இணைந்து பணியாற்றுங்கள்' : 'Work With Our Team'}
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              {language === 'ta' 
                ? 'சமூக நலனுக்காக எங்களுடன் இணைந்து பணியாற்ற விரும்புகிறீர்களா? எங்கள் குழுவின் ஒரு பகுதியாக மாறுங்கள்.'
                : 'Want to work with us for social welfare? Become a part of our team and make a difference.'}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-trust hover:shadow-gold">
                <Phone className="mr-2 h-5 w-5" />
                {language === 'ta' ? 'எங்களை அழைக்கவும்' : 'Call Us'}
              </Button>
              <Button variant="outline" size="lg" className="border-trust-green text-trust-green hover:bg-trust-green-light">
                <MapPin className="mr-2 h-5 w-5" />
                {language === 'ta' ? 'எங்களைப் பார்வையிடுங்கள்' : 'Visit Us'}
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <Footer language={language} />
    </div>
  );
};

export default Members;
