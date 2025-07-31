import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="bg-gradient-trust text-white shadow-trust">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <img 
              src="/lovable-uploads/e81e5880-a85f-4f06-a114-27f6445b04a3.png" 
              alt="Trust Logo" 
              className="h-16 w-16 rounded-full shadow-gold"
            />
            <div>
              <h1 className="text-xl font-bold">மாவீரன் துர்கைமுத்து நல அறக்கட்டளை</h1>
              <p className="text-sm opacity-90">கல்வி • பொருளாதாரம் • அரசியல் விழிப்புணர்வு</p>
            </div>
          </div>
          <nav className="hidden md:flex space-x-6">
            <a href="#about" className="hover:text-trust-gold-light transition-colors">பற்றி</a>
            <a href="#services" className="hover:text-trust-gold-light transition-colors">சேவைகள்</a>
            <a href="#contact" className="hover:text-trust-gold-light transition-colors">தொடர்பு</a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;