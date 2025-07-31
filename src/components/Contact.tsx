import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, CreditCard, Building } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-trust-green mb-12">
          தொடர்பு கொள்ளுங்கள்
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <Card className="text-center shadow-trust border-trust-gold-light hover:shadow-gold transition-all duration-300">
            <CardHeader>
              <div className="flex justify-center mb-4">
                <Phone className="h-12 w-12 text-trust-green" />
              </div>
              <CardTitle className="text-xl text-trust-green">தொலைபேசி</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-trust-green">78100 13675</p>
              <p className="text-muted-foreground mt-2">எங்களை அழைக்கவும்</p>
            </CardContent>
          </Card>

          <Card className="text-center shadow-trust border-trust-gold-light hover:shadow-gold transition-all duration-300">
            <CardHeader>
              <div className="flex justify-center mb-4">
                <CreditCard className="h-12 w-12 text-trust-green" />
              </div>
              <CardTitle className="text-xl text-trust-green">Google Pay</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-trust-green">7395899567</p>
              <p className="text-muted-foreground mt-2">நன்கொடைகளுக்கு</p>
            </CardContent>
          </Card>

          <Card className="text-center shadow-trust border-trust-gold-light hover:shadow-gold transition-all duration-300">
            <CardHeader>
              <div className="flex justify-center mb-4">
                <Building className="h-12 w-12 text-trust-green" />
              </div>
              <CardTitle className="text-xl text-trust-green">வங்கி விவரங்கள்</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">வங்கி கணக்கு விவரங்களுக்கு தொடர்பு கொள்ளவும்</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;