import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { MessageCircle, Star } from "lucide-react";

const mentors = [
  {
    name: "أحمد المرزوقي",
    role: "مستشار مالي",
    expertise: ["التخطيط المالي", "الاستثمار", "الادخار"],
    rating: 4.9,
    sessions: 127,
    initials: "أم"
  },
  {
    name: "فاطمة النعيمي",
    role: "مرشدة مهنية",
    expertise: ["التطوير الوظيفي", "ريادة الأعمال", "القيادة"],
    rating: 4.8,
    sessions: 98,
    initials: "فن"
  },
  {
    name: "خالد السويدي",
    role: "مستشار أسري",
    expertise: ["التخطيط الأسري", "التوازن الحياتي", "العلاقات"],
    rating: 4.9,
    sessions: 156,
    initials: "خس"
  }
];

export const MentorshipSection = () => {
  return (
    <section id="mentorship" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12" dir="rtl">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            تواصل مع المرشدين والنظراء
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            احصل على التوجيه من خبراء في مجالك أو تواصل مع أقران يشاركونك نفس الأهداف
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6" dir="rtl">
          {mentors.map((mentor, index) => (
            <Card 
              key={index}
              className="hover:shadow-hover transition-all duration-300 border-border/50 bg-gradient-card"
            >
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center gap-4">
                  <Avatar className="w-16 h-16 bg-gradient-hero text-primary-foreground">
                    <AvatarFallback className="text-lg font-semibold">
                      {mentor.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg text-foreground">
                      {mentor.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {mentor.role}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 text-sm">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-accent text-accent" />
                    <span className="font-medium text-foreground">{mentor.rating}</span>
                  </div>
                  <span className="text-muted-foreground">
                    {mentor.sessions} جلسة
                  </span>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {mentor.expertise.map((skill, i) => (
                    <Badge key={i} variant="secondary" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
                
                <Button className="w-full" variant="outline">
                  <MessageCircle className="w-4 h-4 ml-2" />
                  ابدأ محادثة
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
