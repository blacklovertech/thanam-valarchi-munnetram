import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, CreditCard, Building, MapPin, Mail, Clock, Navigation, Globe2, MessageCircle } from "lucide-react";

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
      hours: "அலுவலக நேரம்",
      hoursDesc: "திங்கள் - வெள்ளி: காலை 9:00 - மாலை 6:00",
      location: "இடம்",
      locationDesc: "எங்களைக் காண வாருங்கள்",
      whatsapp: "வாட்ஸ்அப்",
      whatsappDesc: "உடனடி உதவிக்கு",
      visitUs: "எங்களைப் பார்வையிடுங்கள்",
      getDirections: "வழிகள் பெறுங்கள்",
      quickContact: "விரைவு தொடர்பு",
      emergencyContact: "அவசர தொடர்பு",
      socialMedia: "சமூக வலைத்தளங்கள்",
      fullAddress: "123, முத்து தெரு, சென்னை - 600001, தமிழ்நாடு, இந்தியா",
      landmarks: "அடையாளங்கள்: மாலிகை சாலை அருகே, மெட்ரோ நிலையத்திற்கு 500 மீட்டர்"
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
      hours: "Office Hours",
      hoursDesc: "Monday - Friday: 9:00 AM - 6:00 PM",
      location: "Location",
      locationDesc: "Come visit us",
      whatsapp: "WhatsApp",
      whatsappDesc: "For instant help",
      visitUs: "Visit Us",
      getDirections: "Get Directions",
      quickContact: "Quick Contact",
      emergencyContact: "Emergency Contact",
      socialMedia: "Social Media",
      fullAddress: "123, Muthu Street, Chennai - 600001, Tamil Nadu, India",
      landmarks: "Landmarks: Near Malligai Road, 500m from Metro Station"
    }
  };

  const contactMethods = [
    {
      icon: Phone,
      title: text[language].phone,
      value: "78100 13675",
      description: text[language].phoneDesc,
      action: "tel:7810013675",
      actionText: language === 'ta' ? 'அழைக்கவும்' : 'Call Now',
      primary: true
    },
    {
      icon: MessageCircle,
      title: text[language].whatsapp,
      value: "78100 13675",
      description: text[language].whatsappDesc,
      action: "https://wa.me/917810013675",
      actionText: language === 'ta' ? 'செய்தி அனுப்புங்கள்' : 'Send Message',
      primary: false
    },
    {
      icon: CreditCard,
      title: text[language].gpay,
      value: "7395899567",
      description: text[language].gpayDesc,
      action: "upi://pay?pa=7395899567@paytm",
      actionText: language === 'ta' ? 'பணம் அனுப்புங்கள்' : 'Send Money',
      primary: false
    },
    {
      icon: Mail,
      title: text[language].email,
      value: "info@durgaimuthu-trust.org",
      description: text[language].emailDesc,
      action: "mailto:info@durgaimuthu-trust.org",
      actionText: language === 'ta' ? 'மின்னஞ்சல் அனுப்புங்கள்' : 'Send Email',
      primary: false
    },
    {
      icon: Clock,
      title: text[language].hours,
      value: language === 'ta' ? 'காலை 9:00 - மாலை 6:00' : '9:00 AM - 6:00 PM',
      description: text[language].hoursDesc,
      action: null,
      actionText: '',
      primary: false
    },
    {
      icon: Building,
      title: text[language].bank,
      value: language === 'ta' ? 'விவரங்களுக்கு தொடர்பு கொள்ளவும்' : 'Contact for details',
      description: text[language].bankDesc,
      action: "tel:7810013675",
      actionText: language === 'ta' ? 'விவரங்கள் பெறுங்கள்' : 'Get Details',
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
        {/* Quick Contact Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {contactMethods.map((method, index) => {
            const IconComponent = method.icon;
            return (
              <Card key={index} className={`shadow-elegant border-trust-gold-light hover:shadow-gold transition-all duration-300 hover:-translate-y-1 ${method.primary ? 'ring-2 ring-trust-gold' : ''}`}>
                <CardHeader className="text-center">
                  <div className="flex justify-center mb-4">
                    <div className={`p-4 rounded-full ${method.primary ? 'bg-gradient-trust' : 'bg-trust-green-light'}`}>
                      <IconComponent className={`h-8 w-8 ${method.primary ? 'text-white' : 'text-trust-green'}`} />
                    </div>
                  </div>
                  <CardTitle className="text-xl text-trust-green">{method.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-lg font-bold text-trust-green mb-2">{method.value}</p>
                  <p className="text-muted-foreground mb-4">{method.description}</p>
                  {method.action && (
                    <Button 
                      variant={method.primary ? "default" : "outline"}
                      className={method.primary ? "bg-gradient-trust hover:shadow-gold" : "border-trust-green text-trust-green hover:bg-trust-green-light"}
                      onClick={() => window.open(method.action, '_blank')}
                    >
                      {method.actionText}
                    </Button>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Location & Address Section */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Address Card */}
          <Card className="shadow-elegant border-trust-gold-light">
            <CardHeader>
              <div className="flex items-center mb-4">
                <div className="p-3 bg-trust-green-light rounded-full mr-4">
                  <MapPin className="h-8 w-8 text-trust-green" />
                </div>
                <CardTitle className="text-2xl text-trust-green">{text[language].location}</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-trust-green mb-2">
                    {language === 'ta' ? 'முழு முகவரி:' : 'Full Address:'}
                  </h4>
                  <p className="text-foreground leading-relaxed">{text[language].fullAddress}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-trust-green mb-2">
                    {text[language].landmarks}
                  </h4>
                </div>
                <div className="pt-4 border-t border-trust-gold-light">
                  <Button className="w-full bg-gradient-trust hover:shadow-gold">
                    <Navigation className="mr-2 h-5 w-5" />
                    {text[language].getDirections}
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Map Placeholder */}
          <Card className="shadow-elegant border-trust-gold-light overflow-hidden">
            <CardContent className="p-0">
              <div className="bg-trust-green-light h-96 flex items-center justify-center relative">
                <div className="text-center">
                  <Globe2 className="h-16 w-16 text-trust-green mx-auto mb-4" />
                  <p className="text-trust-green font-semibold">
                    {language === 'ta' ? 'வரைபடம் விரைவில்' : 'Map Coming Soon'}
                  </p>
                  <p className="text-muted-foreground text-sm">
                    {language === 'ta' ? 'Google Maps இணைப்பு' : 'Google Maps Integration'}
                  </p>
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-trust-green/10 to-trust-gold/10"></div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Emergency & Donation Section */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Emergency Contact */}
          <Card className="shadow-elegant border-red-200 bg-red-50/30">
            <CardHeader>
              <CardTitle className="text-xl text-red-600 flex items-center">
                <Phone className="mr-2 h-6 w-6" />
                {text[language].emergencyContact}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-red-700 font-bold text-2xl mb-2">78100 13675</p>
              <p className="text-muted-foreground">
                {language === 'ta' 
                  ? 'அவசர நிலைகளில் 24/7 கிடைக்கும்' 
                  : 'Available 24/7 for emergencies'}
              </p>
            </CardContent>
          </Card>

          {/* Donation Info */}
          <Card className="shadow-elegant border-trust-gold-light bg-gradient-card">
            <CardHeader>
              <CardTitle className="text-xl text-trust-green flex items-center">
                <CreditCard className="mr-2 h-6 w-6" />
                {language === 'ta' ? 'நன்கொடை வழங்க' : 'Make a Donation'}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                  <span className="font-medium">Google Pay:</span>
                  <span className="font-bold text-trust-green">7395899567</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                  <span className="font-medium">
                    {language === 'ta' ? 'वबैंक विवरण:' : 'Bank Details:'}
                  </span>
                  <span className="text-trust-green">
                    {language === 'ta' ? 'कॉल करें' : 'Call for Info'}
                  </span>
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