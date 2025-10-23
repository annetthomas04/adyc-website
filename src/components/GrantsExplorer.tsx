import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, Home, Heart, BookOpen, Coins } from "lucide-react";

const grants = [
  {
    icon: Heart,
    title: "صندوق الزواج",
    provider: "صندوق الزواج الإماراتي",
    amount: "حتى ٧٠,٠٠٠ درهم",
    eligibility: "المواطنون الإماراتيون",
    category: "أسري"
  },
  {
    icon: Home,
    title: "برنامج الإسكان",
    provider: "برنامج الشيخ زايد للإسكان",
    amount: "متغير",
    eligibility: "المواطنون المتزوجون",
    category: "سكن"
  },
  {
    icon: BookOpen,
    title: "منح التعليم العالي",
    provider: "وزارة التربية والتعليم",
    amount: "رسوم كاملة",
    eligibility: "الطلاب المتفوقون",
    category: "تعليم"
  },
  {
    icon: Coins,
    title: "دعم رواد الأعمال",
    provider: "خليفة الصندوق",
    amount: "حتى ١٠٠,٠٠٠ درهم",
    eligibility: "رواد الأعمال المواطنون",
    category: "أعمال"
  }
];

export const GrantsExplorer = () => {
  return (
    <section id="grants" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12" dir="rtl">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            اكتشف المنح والدعم المتاح
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            تعرّف على البرامج الحكومية والمنح التي يمكنك الاستفادة منها
          </p>
        </div>
        
        <div className="max-w-2xl mx-auto mb-8" dir="rtl">
          <div className="relative">
            <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input 
              placeholder="ابحث عن المنح والبرامج..." 
              className="pr-10 h-12 text-right"
            />
          </div>
        </div>
        
        <div className="grid sm:grid-cols-2 gap-6" dir="rtl">
          {grants.map((grant, index) => {
            const Icon = grant.icon;
            return (
              <Card 
                key={index}
                className="hover:shadow-hover transition-all duration-300 border-border/50 bg-gradient-card"
              >
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <Badge variant="secondary">{grant.category}</Badge>
                  </div>
                  <CardTitle className="text-xl">{grant.title}</CardTitle>
                  <p className="text-sm text-muted-foreground">{grant.provider}</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">المبلغ</span>
                      <span className="font-semibold text-accent">{grant.amount}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">الأهلية</span>
                      <span className="font-medium text-foreground">{grant.eligibility}</span>
                    </div>
                  </div>
                  
                  <Button className="w-full" variant="outline">
                    تفاصيل البرنامج
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
