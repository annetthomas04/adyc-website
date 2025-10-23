import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8" dir="rtl">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-8">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-lg bg-gradient-hero flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl">م</span>
              </div>
              <span className="text-xl font-bold text-foreground">مستقبلي</span>
            </Link>
            
            <nav className="hidden md:flex items-center gap-6">
              <Link to="/" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                الرئيسية
              </Link>
              <Link to="/financial-planning" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                التخطيط المالي
              </Link>
              <Link to="/family-planning" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                التخطيط الأسري
              </Link>
              <a href="/#mentorship" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                الإرشاد
              </a>
              <a href="/#learning" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                التعلم
              </a>
            </nav>
          </div>
          
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" className="hidden md:inline-flex">
              تسجيل الدخول
            </Button>
            <Button size="sm" className="hidden md:inline-flex bg-gradient-hero text-primary-foreground hover:opacity-90">
              ابدأ مجاناً
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};
