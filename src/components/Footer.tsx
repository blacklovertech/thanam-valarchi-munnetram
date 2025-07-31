const Footer = () => {
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
            <h3 className="text-lg font-bold">மாவீரன் துர்கைமுத்து நல அறக்கட்டளை</h3>
            <p className="text-sm opacity-90">சமூக நலனுக்காக பணியாற்றுகிறோம்</p>
          </div>
        </div>
        <div className="border-t border-trust-gold-light pt-4">
          <p className="text-sm opacity-80">
            © 2024 மாவீரன் துர்கைமுத்து நல அறக்கட்டளை. அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;