import { Card } from "@/components/ui/card";

const Hero = () => {
  return (
    <section className="bg-gradient-hero py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-trust-green mb-6">
          எங்கள் இயக்கத்தின் குறிக்கோள்
        </h2>
        <Card className="max-w-4xl mx-auto p-8 shadow-trust border-trust-gold-light">
          <p className="text-lg text-foreground leading-relaxed mb-8">
            "கல்வி, பொருளாதார முன்னேற்றம் மற்றும் அரசியல் விழிப்புணர்வு மூலமாக 
            சமூகத்தின் முழுமையான வளர்ச்சியை உறுதி செய்வதே எங்கள் இயக்கத்தின் முதன்மை குறிக்கோள்."
          </p>
          <div className="bg-trust-green-light p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-trust-green mb-4">
              நாங்கள் கீழ்காணும் பணிகளை முன்னெடுத்து வருகிறோம்
            </h3>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Hero;