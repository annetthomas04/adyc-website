import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Play, Clock, CheckCircle2 } from "lucide-react";

const courses = [
  {
    title: "أساسيات التخطيط المالي الشخصي",
    lessons: 8,
    duration: "٢ ساعة",
    progress: 0,
    level: "مبتدئ",
    topics: ["الميزانية", "الادخار", "الاستثمار الأساسي"]
  },
  {
    title: "بناء خطة مهنية ناجحة",
    lessons: 6,
    duration: "١.٥ ساعة",
    progress: 0,
    level: "مبتدئ",
    topics: ["تحديد الأهداف", "المهارات", "فرص النمو"]
  },
  {
    title: "إدارة الأموال للعائلات الجديدة",
    lessons: 10,
    duration: "٣ ساعات",
    progress: 0,
    level: "متوسط",
    topics: ["تخطيط الأسرة", "التأمين", "التعليم"]
  }
];

export const LearningSection = () => {
  return (
    <section id="learning" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12" dir="rtl">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            تعلّم بخطوات صغيرة
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            دورات قصيرة وعملية تساعدك على فهم التخطيط المالي والمهني والأسري
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6" dir="rtl">
          {courses.map((course, index) => (
            <Card 
              key={index}
              className="group hover:shadow-hover transition-all duration-300 border-border/50 bg-gradient-card"
            >
              <CardHeader>
                <div className="flex items-start justify-between mb-3">
                  <Badge variant="secondary">{course.level}</Badge>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Clock className="w-4 h-4" />
                    <span>{course.duration}</span>
                  </div>
                </div>
                <CardTitle className="text-xl leading-tight">
                  {course.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {course.topics.map((topic, i) => (
                    <Badge key={i} variant="outline" className="text-xs">
                      {topic}
                    </Badge>
                  ))}
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">التقدم</span>
                    <span className="font-medium text-foreground">
                      {course.progress}%
                    </span>
                  </div>
                  <Progress value={course.progress} className="h-2" />
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>{course.lessons} درس</span>
                  </div>
                </div>
                
                <Button className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Play className="w-4 h-4 ml-2" />
                  ابدأ التعلم
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
