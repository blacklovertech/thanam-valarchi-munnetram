import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, CreditCard, Building, MapPin, Mail, Clock } from "lucide-react";

const Contact = () => {
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
      title: "தொடர்பு கொள்ளுங்கள்",
      subtitle: "உங்கள் கேள்விகள் மற்றும் ஆலோசனைகளுக்கு எங்களை அணுகவும்",
      phone: "தொலைபேசி",
      phoneDesc: "எங்களை அழைக்கவும்",
      gpay: "Google Pay",
      gpayDesc: "நன்கொடைகளுக்கு",
      bank: "வங்கி விவரங்கள்",
      bankDesc: "வங்கி கணக்கு விவரங்களுக்கு தொடர்பு கொள்ளவும்",
      address: "முகவரி",
      addressDesc: "எங்கள் அலுவலகம்",
      email: "மின்னஞ்சல்",
      emailDesc: "எங்களுக்கு எழுதுங்கள்",
      hours: "நேரம்",
      hoursDesc: "திங்கள் - வெள்ளி: 9:00 AM - 6:00 PM"
    },
    en: {
      title: "Contact Us",
      subtitle: "Reach out to us for your questions and suggestions",
      phone: "Phone",
      phoneDesc: "Call us",
      gpay: "Google Pay",
      gpayDesc: "For donations",
      bank: "Bank Details",
      bankDesc: "Contact us for bank account details",
      address: "Address",
      addressDesc: "Our office",
      email: "Email",
      emailDesc: "Write to us",
      hours: "Hours",
      hoursDesc: "Monday - Friday: 9:00 AM - 6:00 PM"
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      title: text[language].phone,
      value: "78100 13675",
      description: text[language].phoneDesc
    },
    {
      icon: CreditCard,
      title: text[language].gpay,
      value: "7395899567",
      description: text[language].gpayDesc
    },
    {
      icon: Building,
      title: text[language].bank,
      value: language === 'ta' ? 'விவரங்களுக்கு தொடர்பு கொள்ளவும்' : 'Contact for details',
      description: text[language].bankDesc
    },
    {
      icon: MapPin,
      title: text[language].address,
      value: language === 'ta' ? 'தமிழ்நாடு, இந்தியா' : 'Tamil Nadu, India',
      description: text[language].addressDesc
    },
    {
      icon: Mail,
      title: text[language].email,
      value: "info@trustname.org",
      description: text[language].emailDesc
    },
    {
      icon: Clock,
      title: text[language].hours,
      value: "9:00 AM - 6:00 PM",
      description: text[language].hoursDesc
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
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {text[language].subtitle}
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {contactInfo.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <Card key={index} className="text-center shadow-trust border-trust-gold-light hover:shadow-gold transition-all duration-300">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    <div className="p-4 bg-trust-green-light rounded-full">
                      <IconComponent className="h-8 w-8 text-trust-green" />
                    </div>
                  </div>
                  <CardTitle className="text-xl text-trust-green">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg font-bold text-trust-green mb-2">{item.value}</p>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mt-16 max-w-4xl mx-auto">
          <Card className="shadow-trust border-trust-gold-light">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-trust-green">
                {language === 'ta' ? 'எங்களுடன் இணையுங்கள்' : 'Join Us'}
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-muted-foreground mb-6">
                {language === 'ta' 
                  ? 'சமூக நலனுக்காக எங்களுடன் இணைந்து பணியாற்றுங்கள். உங்கள் பங்களிப்பு மதிப்புமிக்கது.'
                  : 'Join us in working for the welfare of society. Your contribution is valuable.'}
              </p>
              <div className="bg-trust-green-light p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-trust-green mb-4">
                  {language === 'ta' ? 'நன்கொடை வழங்க' : 'To Donate'}
                </h3>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div className="bg-white p-4 rounded-lg">
                    <p className="font-semibold text-trust-green">Google Pay</p>
                    <p className="text-2xl font-bold">7395899567</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <p className="font-semibold text-trust-green">
                      {language === 'ta' ? 'தொலைபேசி' : 'Phone'}
                    </p>
                    <p className="text-2xl font-bold">78100 13675</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      <Footer language={language} />
    </div>
  );
};

export default Contact;