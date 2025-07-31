interface FooterProps {
  language: 'ta' | 'en';
}

const Footer = ({ language }: FooterProps) => {
  const text = {
    ta: {
      title: "மாவீரன் துர்கைமுத்து நல அறக்கட்டளை",
      subtitle: "சமூக நலனுக்காக பணியாற்றுகிறோம்",
      copyright: "© 2024 மாவீரன் துர்கைமுத்து நல அறக்கட்டளை. அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை."
    },
    en: {
      title: "Maveeran Durgaimuthu Welfare Trust",
      subtitle: "Working for the welfare of society",
      copyright: "© 2024 Maveeran Durgaimuthu Welfare Trust. All rights reserved."
    }
  };

  return (
    <footer className="bg-trust-green text-white py-8">
      <div className="container mx-auto px-4 text-center">
        <div className="flex items-center justify-center mb-4">
          <img 
            src="/lovable-uploads/e81e5880-a85f-4f06-a114-27f6445b04a3.png" 
            alt="Trust Logo" 
            className="h-12 w-12 rounded-full mr-4"
          />
          <div>
            <h3 className="text-lg font-bold">{text[language].title}</h3>
            <p className="text-sm opacity-90">{text[language].subtitle}</p>
          </div>
        </div>
        <div className="border-t border-trust-gold-light pt-4">
          <p className="text-sm opacity-80">
            {text[language].copyright}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;