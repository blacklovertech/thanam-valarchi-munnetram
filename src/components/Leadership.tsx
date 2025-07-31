import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Crown, Star, Shield, Users } from "lucide-react";

const Leadership = () => {
  const leaders = [
    {
      name: "Dharmar R",
      position: "President",
      icon: <Crown className="h-8 w-8 text-trust-gold" />
    },
    {
      name: "Shanmugaraj",
      position: "Founder",
      icon: <Star className="h-8 w-8 text-trust-gold" />
    },
    {
      name: "Udhayakumar",
      position: "Trustee",
      icon: <Shield className="h-8 w-8 text-trust-gold" />
    },
    {
      name: "Muthuselvam K",
      position: "Managing Trustee",
      icon: <Users className="h-8 w-8 text-trust-gold" />
    },
    {
      name: "Ramkumar",
      position: "Trustee",
      icon: <Shield className="h-8 w-8 text-trust-gold" />
    }
  ];

  return (
    <section className="py-16 bg-trust-green-light">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-trust-green mb-12">
          நமது தலைமைத்துவம்
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {leaders.map((leader, index) => (
            <Card key={index} className="text-center shadow-trust border-trust-gold-light hover:shadow-gold transition-all duration-300">
              <CardHeader>
                <div className="flex justify-center mb-2">
                  {leader.icon}
                </div>
                <CardTitle className="text-lg text-trust-green">{leader.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground font-medium">{leader.position}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Leadership;