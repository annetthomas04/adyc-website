import { Button } from "@/components/ui/button";
import { Sparkles, TrendingUp, Users } from "lucide-react";
import heroImage from "@/assets/hero.png";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-16">
      <div className="absolute inset-0 bg-gradient-hero opacity-5" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center" dir="rtl">
          <div className="space-y-8 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20">
              <Sparkles className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium text-accent">منصة ذكية مدعومة بالذكاء الاصطناعي</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              خطط مستقبلك
              <span className="block text-primary mt-2">بثقة ووضوح</span>
            </h1>
            
            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
              منصة متكاملة تساعد الشباب الإماراتي على التخطيط للمسار المهني، الأسري، والمالي بطريقة ذكية تحترم قيمنا وتقاليدنا
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-gradient-hero text-primary-foreground hover:opacity-90 shadow-elegant">
                ابدأ التخطيط الآن
              </Button>
              <Button size="lg" variant="outline" className="border-primary/20 hover:bg-primary/5">
                تعرف على المزايا
              </Button>
            </div>
            
            <div className="flex flex-wrap gap-8 pt-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-foreground">١٢٠+</div>
                  <div className="text-sm text-muted-foreground">سيناريو تخطيط</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                  <Users className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-foreground">٥٠٠+</div>
                  <div className="text-sm text-muted-foreground">مرشد ونظير</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative animate-slide-in-right">
            <div className="absolute inset-0 bg-gradient-accent opacity-20 blur-3xl rounded-full" />
            <img 
              src={heroImage} 
              alt="شباب إماراتي يخططون لمستقبلهم" 
              className="relative rounded-2xl shadow-elegant w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
