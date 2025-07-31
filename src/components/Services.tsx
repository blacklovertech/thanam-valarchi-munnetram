import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, TrendingUp, Users } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <BookOpen className="h-12 w-12 text-trust-green" />,
      title: "கல்வி வளர்ச்சி",
      description: "மாணவர்களுக்கு இலவச வழிகாட்டி முகாம்கள், பயிற்சிகள், கற்கை உதவித் திட்டங்கள்.",
      features: [
        "இலவச வழிகாட்டி முகாம்கள்",
        "மாணவர் பயிற்சி திட்டங்கள்",
        "கல்வி உதவித் திட்டங்கள்"
      ]
    },
    {
      icon: <TrendingUp className="h-12 w-12 text-trust-green" />,
      title: "பொருளாதார முன்னேற்றம்",
      description: "தொழில் முனைவோர் பயிற்சி, சுயதொழில் உதவித் திட்டங்கள், தொழில் வழிகாட்டி நிகழ்ச்சிகள்.",
      features: [
        "தொழில் முனைவோர் பயிற்சி",
        "சுயதொழில் உதவித் திட்டங்கள்",
        "தொழில் வழிகாட்டி நிகழ்ச்சிகள்"
      ]
    },
    {
      icon: <Users className="h-12 w-12 text-trust-green" />,
      title: "அரசியல் விழிப்புணர்வு",
      description: "வாக்காளர் விழிப்புணர்வு, நல்லாட்சிக்கு ஆதரவு, மக்கள் உரிமைகள் குறித்த நிகழ்ச்சிகள்.",
      features: [
        "வாக்காளர் விழிப்புணர்வு",
        "நல்லாட்சி ஆதரவு",
        "மக்கள் உரிமைகள்"
      ]
    }
  ];

  return (
    <section id="services" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-trust-green mb-12">
          எங்கள் சேவைகள்
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="shadow-trust border-trust-gold-light hover:shadow-gold transition-all duration-300">
              <CardHeader className="text-center">
                <div className="flex justify-center mb-4">
                  {service.icon}
                </div>
                <CardTitle className="text-xl text-trust-green">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-trust-gold rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;