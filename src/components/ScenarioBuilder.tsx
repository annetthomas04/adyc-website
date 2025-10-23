import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Play, TrendingUp, Clock, DollarSign } from "lucide-react";

const scenarios = [
  {
    title: "مسار ريادة الأعمال",
    duration: "٥ سنوات",
    investment: "متوسط",
    impact: "عالي",
    tags: ["مشروع خاص", "استقلالية", "مخاطرة"],
    gradient: "from-primary/20 to-primary/5"
  },
  {
    title: "الوظيفة الحكومية + الزواج",
    duration: "٣ سنوات",
    investment: "منخفض",
    impact: "مستقر",
    tags: ["استقرار", "أسرة", "أمان"],
    gradient: "from-accent/20 to-accent/5"
  },
  {
    title: "التعليم العالي + الادخار",
    duration: "٤ سنوات",
    investment: "عالي",
    impact: "طويل الأمد",
    tags: ["دراسات عليا", "تطوير", "استثمار"],
    gradient: "from-primary/20 to-primary/5"
  }
];

export const ScenarioBuilder = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12" dir="rtl">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            استكشف السيناريوهات المختلفة
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            جرّب مختلف الخيارات واطلع على النتائج المتوقعة لكل مسار
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6" dir="rtl">
          {scenarios.map((scenario, index) => (
            <Card 
              key={index}
              className="group hover:shadow-hover transition-all duration-300 overflow-hidden border-border/50"
            >
              <div className={`h-2 bg-gradient-to-r ${scenario.gradient}`} />
              <CardHeader>
                <CardTitle className="text-xl mb-4">{scenario.title}</CardTitle>
                <div className="flex flex-wrap gap-2">
                  {scenario.tags.map((tag, i) => (
                    <Badge key={i} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2 text-sm">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Clock className="w-4 h-4" />
                      <span>المدة</span>
                    </div>
                    <span className="font-medium text-foreground">{scenario.duration}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <DollarSign className="w-4 h-4" />
                      <span>الاستثمار</span>
                    </div>
                    <span className="font-medium text-foreground">{scenario.investment}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <TrendingUp className="w-4 h-4" />
                      <span>التأثير</span>
                    </div>
                    <span className="font-medium text-foreground">{scenario.impact}</span>
                  </div>
                </div>
                
                <Button className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors" variant="outline">
                  <Play className="w-4 h-4 ml-2" />
                  ابدأ السيناريو
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
