import { Heart, Users, Award } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const AboutSection = () => {
  const values = [
    {
      icon: Heart,
      title: 'Passion',
      description: 'Chaque plat est préparé avec amour et dédication par notre équipe de chefs passionnés.'
    },
    {
      icon: Users,
      title: 'Communauté',
      description: 'Nous créons un espace chaleureux où familles et amis se retrouvent autour de bons repas.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Nous sélectionnons les meilleurs ingrédients pour offrir une qualité exceptionnelle.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Story Content */}
          <div className="fade-in">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-gradient-hero">
              Notre Histoire
            </h2>
            <div className="space-y-6 text-muted-foreground text-lg">
              <p>
                Heroes Café Plus est né d'une vision simple : créer un lieu où les saveurs du monde 
                se rencontrent dans un cadre moderne et accueillant. Depuis 2014, nous nous engageons 
                à offrir une expérience culinaire unique qui célèbre la diversité et l'excellence.
              </p>
              <p>
                Notre équipe de chefs talentueux puise son inspiration dans les traditions culinaires 
                africaines, européennes et américaines pour créer des plats qui racontent une histoire 
                et éveillent les sens.
              </p>
              <p>
                Aujourd'hui, Heroes Café Plus est devenu un lieu de rencontre incontournable, 
                où chaque repas est une célébration de la bonne cuisine et de la convivialité.
              </p>
            </div>
          </div>

          {/* Values Cards */}
          <div className="grid grid-cols-1 gap-6 slide-up">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={value.title} className="card-restaurant hover-scale">
                  <CardContent className="flex items-start space-x-4 p-6">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-heading font-bold mb-2 text-foreground">
                        {value.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {value.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20 bg-gradient-to-r from-primary to-primary-glow rounded-2xl p-8 md:p-12 text-white">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <h3 className="text-4xl font-bold mb-2">50,000+</h3>
              <p className="text-white/90">Clients satisfaits</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold mb-2">120+</h3>
              <p className="text-white/90">Plats au menu</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold mb-2">15</h3>
              <p className="text-white/90">Chefs experts</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold mb-2">3</h3>
              <p className="text-white/90">Restaurants</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;