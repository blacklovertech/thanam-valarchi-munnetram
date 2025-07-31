import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const About = () => {
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
      title: "எங்களைப் பற்றி",
      mission: "நமது நோக்கம்",
      missionContent: "மாவீரன் துர்கைமுத்து நல அறக்கட்டளை சமூகத்தின் முழுமையான வளர்ச்சிக்காக பணியாற்றும் ஒரு தன்னார்வ அமைப்பாகும். நாங்கள் கல்வி, பொருளாதாரம் மற்றும் அரசியல் விழிப்புணர்வு ஆகிய மூன்று முக்கிய அம்சங்களில் கவனம் செலுத்துகிறோம்.",
      vision: "நமது பார்வை",
      visionContent: "ஒரு கல்வியறிவு பெற்ற, பொருளாதார ரீதியாக வலுவான மற்றும் அரசியல் விழிப்புணர்வு கொண்ட சமூகத்தை உருவாக்குவதே எங்கள் பார்வையாகும்.",
      values: "நமது மதிப்புகள்",
      valuesList: [
        "நேர்மை மற்றும் வெளிப்படைத்தன்மை",
        "சமூக நலன்",
        "கல்வியின் முக்கியத்துவம்",
        "பொருளாதார சுதந்திரம்",
        "ஜனநாயக மதிப்புகள்"
      ]
    },
    en: {
      title: "About Us",
      mission: "Our Mission",
      missionContent: "Maveeran Durgaimuthu Welfare Trust is a voluntary organization working for the comprehensive development of society. We focus on three key aspects: education, economy, and political awareness.",
      vision: "Our Vision",
      visionContent: "Our vision is to create an educated, economically strong, and politically aware society.",
      values: "Our Values",
      valuesList: [
        "Honesty and Transparency",
        "Social Welfare",
        "Importance of Education",
        "Economic Independence",
        "Democratic Values"
      ]
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header language={language} onLanguageChange={handleLanguageChange} />
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center text-trust-green mb-12">
          {text[language].title}
        </h1>
        
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <Card className="shadow-trust border-trust-gold-light">
            <CardHeader>
              <CardTitle className="text-2xl text-trust-green">{text[language].mission}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                {text[language].missionContent}
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-trust border-trust-gold-light">
            <CardHeader>
              <CardTitle className="text-2xl text-trust-green">{text[language].vision}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                {text[language].visionContent}
              </p>
            </CardContent>
          </Card>
        </div>

        <Card className="shadow-trust border-trust-gold-light">
          <CardHeader>
            <CardTitle className="text-2xl text-trust-green text-center">{text[language].values}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {text[language].valuesList.map((value, index) => (
                <div key={index} className="flex items-center p-4 bg-trust-green-light rounded-lg">
                  <div className="w-3 h-3 bg-trust-gold rounded-full mr-3"></div>
                  <span className="text-trust-green font-medium">{value}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
      <Footer language={language} />
    </div>
  );
};

export default About;