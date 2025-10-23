import { Separator } from "@/components/ui/separator";

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8" dir="rtl">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl">م</span>
              </div>
              <span className="text-xl font-bold">مستقبلي</span>
            </div>
            <p className="text-sm text-primary-foreground/80 leading-relaxed">
              منصة شاملة لتمكين الشباب الإماراتي من التخطيط لمستقبلهم بثقة ووضوح
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">المنصة</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li><a href="#" className="hover:text-primary-foreground transition-colors">حول المنصة</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">كيف تعمل</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">الأسئلة الشائعة</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">المدونة</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">الخدمات</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li><a href="#planning" className="hover:text-primary-foreground transition-colors">التخطيط الذكي</a></li>
              <li><a href="#grants" className="hover:text-primary-foreground transition-colors">المنح والدعم</a></li>
              <li><a href="#mentorship" className="hover:text-primary-foreground transition-colors">الإرشاد</a></li>
              <li><a href="#learning" className="hover:text-primary-foreground transition-colors">التعلم</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">الدعم</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li><a href="#" className="hover:text-primary-foreground transition-colors">اتصل بنا</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">الخصوصية</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">شروط الاستخدام</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">الأمان</a></li>
            </ul>
          </div>
        </div>
        
        <Separator className="bg-primary-foreground/20 mb-8" />
        
        <div className="text-center text-sm text-primary-foreground/70" dir="rtl">
          <p>© ٢٠٢٥ مستقبلي. جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </footer>
  );
};
