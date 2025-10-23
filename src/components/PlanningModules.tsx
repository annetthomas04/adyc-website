import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, Heart, Wallet, GraduationCap } from "lucide-react";
import { Link } from "react-router-dom";

const modules = [
  {
    icon: Briefcase,
    title: "المسار المهني",
    description: "خطط مسارك الوظيفي بناءً على مهاراتك واهتماماتك",
    color: "bg-primary/10",
    iconColor: "text-primary",
    link: "#"
  },
  {
    icon: Heart,
    title: "التخطيط الأسري",
    description: "استكشف سيناريوهات الزواج والأسرة بما يتوافق مع قيمك",
    color: "bg-accent/10",
    iconColor: "text-accent",
    link: "/family-planning"
  },
  {
    icon: Wallet,
    title: "التخطيط المالي",
    description: "احسب ميزانيتك وخطط لأهدافك المالية المستقبلية",
    color: "bg-primary/10",
    iconColor: "text-primary",
    link: "/financial-planning"
  },
  {
    icon: GraduationCap,
    title: "التعليم والتطوير",
    description: "اكتشف فرص التعلم والتطوير المهني المتاحة",
    color: "bg-accent/10",
    iconColor: "text-accent",
    link: "#"
  }
];

export const PlanningModules = () => {
  return (
    <section id="planning" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12" dir="rtl">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            أدوات تخطيط ذكية
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            استخدم الذكاء الاصطناعي لاستكشاف مختلف المسارات واتخاذ قرارات مستنيرة
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6" dir="rtl">
          {modules.map((module, index) => {
            const Icon = module.icon;
            
            return (
              <div key={index}>
                {module.link.startsWith('/') ? (
                  <Link to={module.link} className="block">
                    <Card 
                      className="group hover:shadow-hover transition-all duration-300 cursor-pointer border-border/50 bg-gradient-card h-full"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <CardContent className="p-6 space-y-4">
                        <div className={`w-14 h-14 rounded-xl ${module.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                          <Icon className={`w-7 h-7 ${module.iconColor}`} />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-foreground mb-2">
                            {module.title}
                          </h3>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {module.description}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ) : (
                  <a href={module.link} className="block">
                    <Card 
                      className="group hover:shadow-hover transition-all duration-300 cursor-pointer border-border/50 bg-gradient-card h-full"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <CardContent className="p-6 space-y-4">
                        <div className={`w-14 h-14 rounded-xl ${module.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                          <Icon className={`w-7 h-7 ${module.iconColor}`} />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-foreground mb-2">
                            {module.title}
                          </h3>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {module.description}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </a>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
