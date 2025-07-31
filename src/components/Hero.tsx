import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Heart, Users, Target } from "lucide-react";

interface HeroProps {
  language: 'ta' | 'en';
}

const Hero = ({ language }: HeroProps) => {
  const text = {
    ta: {
      title: "எங்கள் இயக்கத்தின் குறிக்கோள்",
      mission: "கல்வி, பொருளாதார முன்னேற்றம் மற்றும் அரசியல் விழிப்புணர்வு மூலமாக சமூகத்தின் முழுமையான வளர்ச்சியை உறுதி செய்வதே எங்கள் இயக்கத்தின் முதன்மை குறிக்கோள்.",
      subtitle: "நாங்கள் கீழ்காணும் பணிகளை முன்னெடுத்து வருகிறோம்",
      cta: "மேலும் அறிய",
      joinUs: "எங்களுடன் இணையுங்கள்",
      stats: {
        beneficiaries: "பயனாளிகள்",
        programs: "திட்டங்கள்",
        volunteers: "தன்னார்வலர்கள்"
      },
      services: [
        {
          title: "கல்வி வளர்ச்சி",
          description: "மாணவர்களுக்கு இலவச வழிகாட்டுதல் மற்றும் கல்வி உதவி",
          icon: "📚"
        },
        {
          title: "பொருளாதார முன்னேற்றம்",
          description: "தொழில் முனைவோர் பயிற்சி மற்றும் சுயதொழில் வாய்ப்புகள்",
          icon: "💼"
        },
        {
          title: "அரசியல் விழிப்புணர்வு",
          description: "வாக்காளர் விழிப்புணர்வு மற்றும் மக்கள் உரிமைகள்",
          icon: "⚖️"
        }
      ]
    },
    en: {
      title: "Our Movement's Objective",
      mission: "The primary objective of our movement is to ensure the complete development of society through education, economic progress, and political awareness.",
      subtitle: "We are carrying forward the following activities",
      cta: "Learn More",
      joinUs: "Join Us",
      stats: {
        beneficiaries: "Beneficiaries",
        programs: "Programs",
        volunteers: "Volunteers"
      },
      services: [
        {
          title: "Educational Development",
          description: "Free guidance and educational assistance for students",
          icon: "📚"
        },
        {
          title: "Economic Development",
          description: "Entrepreneurship training and self-employment opportunities",
          icon: "💼"
        },
        {
          title: "Political Awareness",
          description: "Voter awareness and people's rights programs",
          icon: "⚖️"
        }
      ]
    }
  };

  return (
    <section className="relative bg-gradient-hero py-20 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-trust-gold rounded-full animate-float"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-trust-green rounded-full animate-pulse-soft"></div>
        <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-trust-gold-dark rounded-full animate-float" style={{animationDelay: '1s'}}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Main Hero Content */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-trust-green mb-8 leading-tight">
            {text[language].title}
          </h1>
          <div className="max-w-5xl mx-auto">
            <Card className="bg-white/90 backdrop-blur-sm shadow-elegant border-trust-gold-light">
              <CardContent className="p-8">
                <p className="text-xl text-foreground leading-relaxed mb-8 font-medium">
                  "{text[language].mission}"
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="bg-gradient-trust hover:shadow-gold transition-all duration-300">
                    {text[language].cta}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  <Button variant="outline" size="lg" className="border-trust-green text-trust-green hover:bg-trust-green-light">
                    <Heart className="mr-2 h-5 w-5" />
                    {text[language].joinUs}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Statistics Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {[
            { number: "1000+", label: text[language].stats.beneficiaries, icon: Users },
            { number: "15+", label: text[language].stats.programs, icon: Target },
            { number: "50+", label: text[language].stats.volunteers, icon: Heart }
          ].map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <Card key={index} className="text-center bg-gradient-card shadow-trust border-trust-gold-light hover:shadow-elegant transition-all duration-300 group">
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">
                    <div className="p-4 bg-gradient-gold rounded-full group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="h-8 w-8 text-trust-green-dark" />
                    </div>
                  </div>
                  <h3 className="text-3xl font-bold text-trust-green mb-2">{stat.number}</h3>
                  <p className="text-muted-foreground font-medium">{stat.label}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Services Preview */}
        <div className="bg-trust-green-light/50 p-8 rounded-2xl backdrop-blur-sm">
          <h2 className="text-3xl font-bold text-center text-trust-green mb-8">
            {text[language].subtitle}
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {text[language].services.map((service, index) => (
              <Card key={index} className="bg-white/80 shadow-trust border-trust-gold-light hover:shadow-gold transition-all duration-300 hover:-translate-y-1">
                <CardHeader className="text-center">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <CardTitle className="text-lg text-trust-green">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;