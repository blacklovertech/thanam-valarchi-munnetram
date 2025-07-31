interface HeroProps {
  language: 'ta' | 'en';
}

const Hero = ({ language }: HeroProps) => {
  const text = {
    ta: {
      title: "எங்கள் இயக்கத்தின் குறிக்கோள்",
      mission: "கல்வி, பொருளாதார முன்னேற்றம் மற்றும் அரசியல் விழிப்புணர்வு மூலமாக சமூகத்தின் முழுமையான வளர்ச்சியை உறுதி செய்வதே எங்கள் இயக்கத்தின் முதன்மை குறிக்கோள்.",
      subtitle: "நாங்கள் கீழ்காணும் பணிகளை முன்னெடுத்து வருகிறோம்",
      cta: "மேலும் அறிய"
    },
    en: {
      title: "Our Movement's Objective",
      mission: "The primary objective of our movement is to ensure the complete development of society through education, economic progress, and political awareness.",
      subtitle: "We are carrying forward the following activities",
      cta: "Learn More"
    }
  };

  return (
    <section className="bg-gradient-hero py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-trust-green mb-6">
          {text[language].title}
        </h2>
        <div className="max-w-4xl mx-auto p-8 bg-white/80 backdrop-blur rounded-lg shadow-trust border-trust-gold-light">
          <p className="text-lg text-foreground leading-relaxed mb-8">
            "{text[language].mission}"
          </p>
          <div className="bg-trust-green-light p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-trust-green mb-4">
              {text[language].subtitle}
            </h3>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="font-semibold text-trust-green mb-2">
                  {language === 'ta' ? 'கல்வி வளர்ச்சி' : 'Educational Development'}
                </h4>
                <p className="text-muted-foreground">
                  {language === 'ta' 
                    ? 'மாணவர்களுக்கு இலவச வழிகாட்டுதல்' 
                    : 'Free guidance for students'}
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="font-semibold text-trust-green mb-2">
                  {language === 'ta' ? 'பொருளாதார முன்னேற்றம்' : 'Economic Development'}
                </h4>
                <p className="text-muted-foreground">
                  {language === 'ta' 
                    ? 'தொழில் முனைவோர் பயிற்சி' 
                    : 'Entrepreneurship training'}
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="font-semibold text-trust-green mb-2">
                  {language === 'ta' ? 'அரசியல் விழிப்புணர்வு' : 'Political Awareness'}
                </h4>
                <p className="text-muted-foreground">
                  {language === 'ta' 
                    ? 'வாக்காளர் விழிப்புணர்வு' 
                    : 'Voter awareness programs'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;