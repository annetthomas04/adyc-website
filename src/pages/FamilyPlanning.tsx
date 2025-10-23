import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from "recharts";
import { Heart, Baby, Home, Briefcase, Calendar, TrendingUp, Users } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function FamilyPlanning() {
  const [currentAge, setCurrentAge] = useState(25);
  const [marriageAge, setMarriageAge] = useState(28);
  const [numChildren, setNumChildren] = useState(2);
  const [childSpacing, setChildSpacing] = useState(2);

  const scenarios = [
    {
      id: 1,
      title: "الزواج المبكر",
      marriageAge: 24,
      children: 3,
      spacing: 2,
      description: "الزواج في سن مبكرة مع أسرة كبيرة",
      pros: ["وقت أطول مع الأطفال", "طاقة أكبر", "دعم عائلي قوي"],
      cons: ["تحديات مهنية محتملة", "ميزانية محدودة في البداية"]
    },
    {
      id: 2,
      title: "التوازن المهني",
      marriageAge: 28,
      children: 2,
      spacing: 3,
      description: "استقرار مهني قبل تكوين الأسرة",
      pros: ["استقرار مالي", "نضج أكبر", "توازن عمل-حياة"],
      cons: ["وقت أقل مع الأطفال", "ضغط مهني"]
    },
    {
      id: 3,
      title: "التركيز المهني",
      marriageAge: 32,
      children: 2,
      spacing: 2,
      description: "التركيز على المسيرة المهنية أولاً",
      pros: ["وضع مالي قوي", "خبرة حياتية", "فرص أفضل"],
      cons: ["طاقة أقل", "فجوة عمرية أكبر"]
    }
  ];

  const calculateTimeline = () => {
    const timeline = [];
    const firstChildAge = marriageAge + 1;
    
    timeline.push({
      year: marriageAge,
      event: "الزواج",
      age: marriageAge,
      cost: 100000,
      type: "marriage"
    });

    for (let i = 0; i < numChildren; i++) {
      const childBirthAge = firstChildAge + (i * childSpacing);
      timeline.push({
        year: childBirthAge,
        event: `الطفل ${i + 1}`,
        age: childBirthAge,
        cost: 30000,
        type: "child"
      });
    }

    return timeline;
  };

  const calculateFinancialImpact = () => {
    const years = [];
    const startYear = new Date().getFullYear() + (marriageAge - currentAge);
    
    for (let i = 0; i < 25; i++) {
      const year = startYear + i;
      const yearsAfterMarriage = i;
      
      let childrenCount = 0;
      const firstChildYear = 1;
      
      for (let j = 0; j < numChildren; j++) {
        const childBirthYear = firstChildYear + (j * childSpacing);
        if (yearsAfterMarriage >= childBirthYear) {
          childrenCount++;
        }
      }

      const baseExpenses = 50000;
      const childExpenses = childrenCount * 40000;
      const totalExpenses = baseExpenses + childExpenses;

      years.push({
        year,
        children: childrenCount,
        expenses: totalExpenses,
        income: 200000 + (i * 10000)
      });
    }

    return years;
  };

  const timeline = calculateTimeline();
  const financialData = calculateFinancialImpact();

  const weddingCosts = [
    { category: "القاعة والضيافة", min: 30000, max: 80000 },
    { category: "المهر", min: 20000, max: 50000 },
    { category: "الشبكة والمجوهرات", min: 15000, max: 40000 },
    { category: "التصوير والفيديو", min: 5000, max: 15000 },
    { category: "شهر العسل", min: 10000, max: 30000 },
    { category: "أثاث المنزل", min: 20000, max: 60000 }
  ];

  const childCosts = [
    { category: "الرعاية الصحية", annual: 8000 },
    { category: "التعليم (حضانة)", annual: 25000 },
    { category: "الملابس والاحتياجات", annual: 6000 },
    { category: "الترفيه والأنشطة", annual: 4000 }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-12" dir="rtl">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-hero mb-6">
              <Heart className="w-8 h-8 text-primary-foreground" />
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
              التخطيط الأسري
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              استكشف سيناريوهات الزواج والأسرة مع حاسبة التكاليف والتأثير المالي
            </p>
          </div>

          <Tabs defaultValue="builder" className="space-y-8" dir="rtl">
            <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-4">
              <TabsTrigger value="builder">البناء</TabsTrigger>
              <TabsTrigger value="scenarios">السيناريوهات</TabsTrigger>
              <TabsTrigger value="costs">التكاليف</TabsTrigger>
              <TabsTrigger value="support">الدعم</TabsTrigger>
            </TabsList>

            {/* Timeline Builder Tab */}
            <TabsContent value="builder" className="space-y-8">
              <div className="grid lg:grid-cols-2 gap-8">
                {/* Controls */}
                <Card className="bg-gradient-card border-border/50">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Calendar className="w-5 h-5 text-primary" />
                      بناء المسار الزمني
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">عمرك الحالي</span>
                        <span className="text-lg font-bold text-primary">{currentAge} سنة</span>
                      </div>
                      <Slider
                        value={[currentAge]}
                        onValueChange={(val) => setCurrentAge(val[0])}
                        min={18}
                        max={35}
                        step={1}
                      />
                    </div>

                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">سن الزواج المخطط</span>
                        <span className="text-lg font-bold text-primary">{marriageAge} سنة</span>
                      </div>
                      <Slider
                        value={[marriageAge]}
                        onValueChange={(val) => setMarriageAge(val[0])}
                        min={currentAge}
                        max={40}
                        step={1}
                      />
                      <p className="text-xs text-muted-foreground">
                        {marriageAge - currentAge} سنة من الآن ({new Date().getFullYear() + (marriageAge - currentAge)})
                      </p>
                    </div>

                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">عدد الأطفال المخطط</span>
                        <span className="text-lg font-bold text-primary">{numChildren}</span>
                      </div>
                      <Slider
                        value={[numChildren]}
                        onValueChange={(val) => setNumChildren(val[0])}
                        min={0}
                        max={5}
                        step={1}
                      />
                    </div>

                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">الفارق بين الأطفال (سنوات)</span>
                        <span className="text-lg font-bold text-primary">{childSpacing}</span>
                      </div>
                      <Slider
                        value={[childSpacing]}
                        onValueChange={(val) => setChildSpacing(val[0])}
                        min={1}
                        max={5}
                        step={1}
                      />
                    </div>
                  </CardContent>
                </Card>

                {/* Timeline Visualization */}
                <Card className="bg-gradient-card border-border/50">
                  <CardHeader>
                    <CardTitle>المسار الزمني</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {timeline.map((event, index) => (
                        <div key={index} className="flex items-start gap-4 relative">
                          {index !== timeline.length - 1 && (
                            <div className="absolute right-[19px] top-10 w-0.5 h-full bg-gradient-hero" />
                          )}
                          <div className="w-10 h-10 rounded-full bg-gradient-hero flex items-center justify-center flex-shrink-0 relative z-10">
                            {event.type === 'marriage' ? (
                              <Heart className="w-5 h-5 text-primary-foreground" />
                            ) : (
                              <Baby className="w-5 h-5 text-primary-foreground" />
                            )}
                          </div>
                          <div className="flex-1 pb-6">
                            <div className="flex justify-between items-start">
                              <div>
                                <h4 className="font-semibold text-foreground">{event.event}</h4>
                                <p className="text-sm text-muted-foreground">
                                  عند عمر {event.age} سنة ({event.year})
                                </p>
                              </div>
                              <span className="text-sm font-medium text-primary">
                                ~{event.cost.toLocaleString('ar-AE')} د.إ
                              </span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Financial Impact Chart */}
              <Card className="bg-gradient-card border-border/50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-primary" />
                    التأثير المالي على مدى 25 سنة
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={350}>
                    <AreaChart data={financialData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                      <XAxis dataKey="year" stroke="hsl(var(--muted-foreground))" />
                      <YAxis stroke="hsl(var(--muted-foreground))" />
                      <Tooltip 
                        contentStyle={{ 
                          backgroundColor: 'hsl(var(--background))', 
                          border: '1px solid hsl(var(--border))' 
                        }}
                      />
                      <Area type="monotone" dataKey="income" stackId="1" stroke="hsl(var(--primary))" fill="hsl(var(--primary) / 0.3)" name="الدخل" />
                      <Area type="monotone" dataKey="expenses" stackId="2" stroke="hsl(var(--accent))" fill="hsl(var(--accent) / 0.3)" name="المصروفات" />
                    </AreaChart>
                  </ResponsiveContainer>
                  <div className="mt-6 grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <p className="text-sm text-muted-foreground mb-1">إجمالي تكلفة الأطفال (18 سنة)</p>
                      <p className="text-2xl font-bold text-primary">
                        {(numChildren * 40000 * 18).toLocaleString('ar-AE')} د.إ
                      </p>
                    </div>
                    <div className="text-center">
                      <p className="text-sm text-muted-foreground mb-1">اكتمال الأسرة في عمر</p>
                      <p className="text-2xl font-bold text-accent">
                        {marriageAge + 1 + ((numChildren - 1) * childSpacing)} سنة
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Scenarios Comparison Tab */}
            <TabsContent value="scenarios" className="space-y-6">
              <div className="grid md:grid-cols-3 gap-6">
                {scenarios.map((scenario) => (
                  <Card key={scenario.id} className="bg-gradient-card border-border/50 hover:shadow-hover transition-all">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Users className="w-5 h-5 text-primary" />
                        {scenario.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-sm text-muted-foreground">{scenario.description}</p>
                      
                      <div className="grid grid-cols-3 gap-2 text-center py-3 bg-secondary/30 rounded-lg">
                        <div>
                          <p className="text-xs text-muted-foreground">الزواج</p>
                          <p className="font-bold">{scenario.marriageAge}</p>
                        </div>
                        <div>
                          <p className="text-xs text-muted-foreground">الأطفال</p>
                          <p className="font-bold">{scenario.children}</p>
                        </div>
                        <div>
                          <p className="text-xs text-muted-foreground">الفارق</p>
                          <p className="font-bold">{scenario.spacing} سنة</p>
                        </div>
                      </div>

                      <div>
                        <p className="text-sm font-semibold mb-2 text-primary">المميزات:</p>
                        <ul className="space-y-1">
                          {scenario.pros.map((pro, idx) => (
                            <li key={idx} className="text-xs text-muted-foreground flex items-start gap-2">
                              <span className="text-primary">✓</span>
                              {pro}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <p className="text-sm font-semibold mb-2 text-accent">التحديات:</p>
                        <ul className="space-y-1">
                          {scenario.cons.map((con, idx) => (
                            <li key={idx} className="text-xs text-muted-foreground flex items-start gap-2">
                              <span className="text-accent">•</span>
                              {con}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <Button 
                        className="w-full"
                        variant="outline"
                        onClick={() => {
                          setMarriageAge(scenario.marriageAge);
                          setNumChildren(scenario.children);
                          setChildSpacing(scenario.spacing);
                        }}
                      >
                        تطبيق هذا السيناريو
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Costs Tab */}
            <TabsContent value="costs" className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="bg-gradient-card border-border/50">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Heart className="w-5 h-5 text-primary" />
                      تكاليف الزواج
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {weddingCosts.map((item, idx) => (
                        <div key={idx} className="flex justify-between items-center py-2 border-b border-border last:border-0">
                          <span className="text-sm text-muted-foreground">{item.category}</span>
                          <span className="text-sm font-semibold">
                            {item.min.toLocaleString('ar-AE')} - {item.max.toLocaleString('ar-AE')} د.إ
                          </span>
                        </div>
                      ))}
                      <div className="pt-3 border-t-2 border-primary/20">
                        <div className="flex justify-between items-center">
                          <span className="font-semibold">المجموع التقديري:</span>
                          <span className="text-xl font-bold text-primary">
                            100,000 - 275,000 د.إ
                          </span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-card border-border/50">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Baby className="w-5 h-5 text-primary" />
                      التكلفة السنوية للطفل
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {childCosts.map((item, idx) => (
                        <div key={idx} className="flex justify-between items-center py-2 border-b border-border last:border-0">
                          <span className="text-sm text-muted-foreground">{item.category}</span>
                          <span className="text-sm font-semibold">
                            {item.annual.toLocaleString('ar-AE')} د.إ/سنة
                          </span>
                        </div>
                      ))}
                      <div className="pt-3 border-t-2 border-primary/20">
                        <div className="flex justify-between items-center">
                          <span className="font-semibold">المجموع السنوي:</span>
                          <span className="text-xl font-bold text-primary">
                            43,000 د.إ
                          </span>
                        </div>
                        <p className="text-xs text-muted-foreground mt-2">
                          التكلفة حتى عمر 18: {(43000 * 18).toLocaleString('ar-AE')} د.إ
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Support Tab */}
            <TabsContent value="support">
              <Card className="bg-gradient-card border-border/50">
                <CardHeader>
                  <CardTitle>الدعم الحكومي والاعتبارات الثقافية</CardTitle>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="marriage-fund">
                      <AccordionTrigger>صندوق الزواج</AccordionTrigger>
                      <AccordionContent className="space-y-3">
                        <p className="text-muted-foreground">
                          يوفر صندوق الزواج دعماً مالياً يصل إلى 70,000 درهم للمواطنين الإماراتيين
                        </p>
                        <div className="space-y-2">
                          <div className="flex justify-between py-2 border-b border-border">
                            <span>الدعم الأقصى:</span>
                            <span className="font-semibold">70,000 د.إ</span>
                          </div>
                          <div className="flex justify-between py-2 border-b border-border">
                            <span>الأهلية:</span>
                            <span className="font-semibold">مواطنون إماراتيون</span>
                          </div>
                        </div>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="family-support">
                      <AccordionTrigger>دعم الأسرة الممتدة</AccordionTrigger>
                      <AccordionContent className="space-y-3">
                        <p className="text-muted-foreground">
                          في الثقافة الإماراتية، تلعب الأسرة الممتدة دوراً مهماً في دعم الأزواج الجدد
                        </p>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-start gap-2">
                            <span className="text-primary">•</span>
                            <span>المساعدة في رعاية الأطفال</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-primary">•</span>
                            <span>الدعم المالي والمعنوي</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-primary">•</span>
                            <span>خيار السكن مع العائلة في البداية</span>
                          </li>
                        </ul>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="work-life">
                      <AccordionTrigger>التوازن بين العمل والحياة</AccordionTrigger>
                      <AccordionContent className="space-y-3">
                        <p className="text-muted-foreground">
                          توفر الإمارات سياسات داعمة للأسرة
                        </p>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-start gap-2">
                            <span className="text-primary">•</span>
                            <span>إجازة أمومة مدفوعة: 60 يوم</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-primary">•</span>
                            <span>إجازة أبوة: 5 أيام</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-primary">•</span>
                            <span>ساعات عمل مرنة في بعض القطاعات</span>
                          </li>
                        </ul>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="housing">
                      <AccordionTrigger>خيارات السكن</AccordionTrigger>
                      <AccordionContent className="space-y-3">
                        <p className="text-muted-foreground">
                          خيارات متعددة للسكن تناسب مختلف الاحتياجات والميزانيات
                        </p>
                        <div className="grid gap-3">
                          <div className="p-3 bg-secondary/30 rounded-lg">
                            <p className="font-semibold mb-1">السكن المستقل</p>
                            <p className="text-sm text-muted-foreground">ملكية أو إيجار - استقلالية كاملة</p>
                          </div>
                          <div className="p-3 bg-secondary/30 rounded-lg">
                            <p className="font-semibold mb-1">السكن مع العائلة</p>
                            <p className="text-sm text-muted-foreground">توفير مالي ودعم عائلي</p>
                          </div>
                          <div className="p-3 bg-secondary/30 rounded-lg">
                            <p className="font-semibold mb-1">السكن الحكومي</p>
                            <p className="text-sm text-muted-foreground">برنامج الشيخ زايد للإسكان</p>
                          </div>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>

      <Footer />
    </div>
  );
}