import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from "recharts";
import { Wallet, TrendingUp, Target, Home, Heart, Car } from "lucide-react";

const COLORS = ['hsl(var(--primary))', 'hsl(var(--accent))', 'hsl(var(--secondary))', 'hsl(var(--muted))', 'hsl(var(--primary) / 0.6)', 'hsl(var(--accent) / 0.6)'];

export default function FinancialPlanning() {
  const [income, setIncome] = useState({
    salary: 15000,
    allowances: 2000,
    other: 0
  });

  const [expenses, setExpenses] = useState({
    housing: 4000,
    transportation: 2000,
    food: 3000,
    utilities: 1000,
    personal: 2000,
    savings: 3000
  });

  const [savingsGoals, setSavingsGoals] = useState([
    { id: 1, name: "الزواج", target: 100000, current: 25000, monthly: 2000, icon: Heart },
    { id: 2, name: "المنزل", target: 300000, current: 50000, monthly: 3000, icon: Home },
    { id: 3, name: "السيارة", target: 80000, current: 40000, monthly: 1500, icon: Car },
    { id: 4, name: "الطوارئ", target: 50000, current: 15000, monthly: 1000, icon: Target }
  ]);

  const totalIncome = income.salary + income.allowances + income.other;
  const totalExpenses = Object.values(expenses).reduce((a, b) => a + b, 0);
  const balance = totalIncome - totalExpenses;

  const expenseData = [
    { name: "السكن", value: expenses.housing },
    { name: "المواصلات", value: expenses.transportation },
    { name: "الطعام", value: expenses.food },
    { name: "المرافق", value: expenses.utilities },
    { name: "شخصي", value: expenses.personal },
    { name: "الادخار", value: expenses.savings }
  ];

  const projectionData = Array.from({ length: 10 }, (_, i) => {
    const year = new Date().getFullYear() + i;
    const yearlyIncome = totalIncome * 12 * Math.pow(1.05, i);
    const yearlyExpenses = totalExpenses * 12 * Math.pow(1.03, i);
    const yearlySavings = (totalIncome - totalExpenses) * 12 * Math.pow(1.05, i);
    return {
      year,
      income: Math.round(yearlyIncome),
      expenses: Math.round(yearlyExpenses),
      savings: Math.round(yearlySavings)
    };
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-12" dir="rtl">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-hero mb-6">
              <Wallet className="w-8 h-8 text-primary-foreground" />
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
              التخطيط المالي
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              احسب ميزانيتك، خطط لأهدافك المالية، واستكشف الدعم الحكومي المتاح
            </p>
          </div>

          <Tabs defaultValue="budget" className="space-y-8" dir="rtl">
            <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-4">
              <TabsTrigger value="budget">الميزانية</TabsTrigger>
              <TabsTrigger value="goals">الأهداف</TabsTrigger>
              <TabsTrigger value="grants">الدعم الحكومي</TabsTrigger>
              <TabsTrigger value="projection">التوقعات</TabsTrigger>
            </TabsList>

            {/* Budget Tab */}
            <TabsContent value="budget" className="space-y-8">
              <div className="grid lg:grid-cols-2 gap-8">
                {/* Income Section */}
                <Card className="bg-gradient-card border-border/50">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <TrendingUp className="w-5 h-5 text-primary" />
                      الدخل الشهري
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="salary">الراتب الأساسي (درهم)</Label>
                      <Input
                        id="salary"
                        type="number"
                        value={income.salary}
                        onChange={(e) => setIncome({...income, salary: Number(e.target.value)})}
                        className="text-lg"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="allowances">البدلات (درهم)</Label>
                      <Input
                        id="allowances"
                        type="number"
                        value={income.allowances}
                        onChange={(e) => setIncome({...income, allowances: Number(e.target.value)})}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="other">دخل إضافي (درهم)</Label>
                      <Input
                        id="other"
                        type="number"
                        value={income.other}
                        onChange={(e) => setIncome({...income, other: Number(e.target.value)})}
                      />
                    </div>
                    <div className="pt-4 border-t border-border">
                      <div className="flex justify-between items-center">
                        <span className="text-muted-foreground">إجمالي الدخل:</span>
                        <span className="text-2xl font-bold text-primary">{totalIncome.toLocaleString('ar-AE')} د.إ</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Expenses Section */}
                <Card className="bg-gradient-card border-border/50">
                  <CardHeader>
                    <CardTitle>المصروفات الشهرية</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {Object.entries(expenses).map(([key, value]) => (
                      <div key={key} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <Label className="capitalize">
                            {key === 'housing' && 'السكن'}
                            {key === 'transportation' && 'المواصلات'}
                            {key === 'food' && 'الطعام'}
                            {key === 'utilities' && 'المرافق'}
                            {key === 'personal' && 'شخصي'}
                            {key === 'savings' && 'الادخار'}
                          </Label>
                          <span className="text-sm font-medium">{value.toLocaleString('ar-AE')} د.إ</span>
                        </div>
                        <Slider
                          value={[value]}
                          onValueChange={(val) => setExpenses({...expenses, [key]: val[0]})}
                          max={10000}
                          step={100}
                        />
                      </div>
                    ))}
                    <div className="pt-4 border-t border-border">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-muted-foreground">إجمالي المصروفات:</span>
                        <span className="text-xl font-bold">{totalExpenses.toLocaleString('ar-AE')} د.إ</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-muted-foreground">الرصيد:</span>
                        <span className={`text-2xl font-bold ${balance >= 0 ? 'text-primary' : 'text-destructive'}`}>
                          {balance.toLocaleString('ar-AE')} د.إ
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Expense Chart */}
              <Card className="bg-gradient-card border-border/50">
                <CardHeader>
                  <CardTitle>توزيع المصروفات</CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                      <Pie
                        data={expenseData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                        outerRadius={100}
                        fill="#8884d8"
                        dataKey="value"
                      >
                        {expenseData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Goals Tab */}
            <TabsContent value="goals" className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                {savingsGoals.map((goal) => {
                  const Icon = goal.icon;
                  const progress = (goal.current / goal.target) * 100;
                  const monthsRemaining = Math.ceil((goal.target - goal.current) / goal.monthly);
                  
                  return (
                    <Card key={goal.id} className="bg-gradient-card border-border/50">
                      <CardHeader>
                        <CardTitle className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                            <Icon className="w-5 h-5 text-primary" />
                          </div>
                          {goal.name}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div>
                          <div className="flex justify-between text-sm mb-2">
                            <span className="text-muted-foreground">التقدم</span>
                            <span className="font-medium">{progress.toFixed(0)}%</span>
                          </div>
                          <div className="h-2 bg-secondary rounded-full overflow-hidden">
                            <div 
                              className="h-full bg-gradient-hero transition-all duration-500"
                              style={{ width: `${Math.min(progress, 100)}%` }}
                            />
                          </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <p className="text-muted-foreground">المبلغ الحالي</p>
                            <p className="font-semibold text-lg">{goal.current.toLocaleString('ar-AE')} د.إ</p>
                          </div>
                          <div>
                            <p className="text-muted-foreground">الهدف</p>
                            <p className="font-semibold text-lg">{goal.target.toLocaleString('ar-AE')} د.إ</p>
                          </div>
                          <div>
                            <p className="text-muted-foreground">الادخار الشهري</p>
                            <p className="font-semibold">{goal.monthly.toLocaleString('ar-AE')} د.إ</p>
                          </div>
                          <div>
                            <p className="text-muted-foreground">الوقت المتبقي</p>
                            <p className="font-semibold">{monthsRemaining} شهر</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </TabsContent>

            {/* Grants Tab */}
            <TabsContent value="grants" className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="bg-gradient-card border-border/50">
                  <CardHeader>
                    <CardTitle>صندوق الزواج</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">
                      يوفر صندوق الزواج دعماً مالياً يصل إلى 70,000 درهم للمواطنين الإماراتيين
                    </p>
                    <div className="space-y-3">
                      <div className="flex justify-between py-2 border-b border-border">
                        <span className="text-muted-foreground">الحد الأقصى للدعم:</span>
                        <span className="font-semibold">70,000 د.إ</span>
                      </div>
                      <div className="flex justify-between py-2 border-b border-border">
                        <span className="text-muted-foreground">الأهلية:</span>
                        <span className="font-semibold">مواطنون إماراتيون</span>
                      </div>
                      <div className="flex justify-between py-2">
                        <span className="text-muted-foreground">المستندات المطلوبة:</span>
                        <span className="font-semibold text-sm">هوية، عقد قران</span>
                      </div>
                    </div>
                    <Button className="w-full bg-gradient-hero">
                      التحقق من الأهلية
                    </Button>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-card border-border/50">
                  <CardHeader>
                    <CardTitle>برنامج الشيخ زايد للإسكان</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">
                      يوفر البرنامج قروضاً إسكانية ميسرة ومنحاً للمواطنين
                    </p>
                    <div className="space-y-3">
                      <div className="flex justify-between py-2 border-b border-border">
                        <span className="text-muted-foreground">القرض بدون فوائد:</span>
                        <span className="font-semibold">متاح</span>
                      </div>
                      <div className="flex justify-between py-2 border-b border-border">
                        <span className="text-muted-foreground">المنحة السكنية:</span>
                        <span className="font-semibold">حسب الأهلية</span>
                      </div>
                      <div className="flex justify-between py-2">
                        <span className="text-muted-foreground">فترة السداد:</span>
                        <span className="font-semibold">25 سنة</span>
                      </div>
                    </div>
                    <Button className="w-full bg-gradient-hero">
                      احسب القرض
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Projection Tab */}
            <TabsContent value="projection">
              <Card className="bg-gradient-card border-border/50">
                <CardHeader>
                  <CardTitle>التوقعات المالية (10 سنوات)</CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={400}>
                    <LineChart data={projectionData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                      <XAxis dataKey="year" stroke="hsl(var(--muted-foreground))" />
                      <YAxis stroke="hsl(var(--muted-foreground))" />
                      <Tooltip 
                        contentStyle={{ 
                          backgroundColor: 'hsl(var(--background))', 
                          border: '1px solid hsl(var(--border))' 
                        }}
                      />
                      <Line type="monotone" dataKey="income" stroke="hsl(var(--primary))" strokeWidth={2} name="الدخل" />
                      <Line type="monotone" dataKey="expenses" stroke="hsl(var(--accent))" strokeWidth={2} name="المصروفات" />
                      <Line type="monotone" dataKey="savings" stroke="hsl(var(--secondary))" strokeWidth={2} name="الادخار" />
                    </LineChart>
                  </ResponsiveContainer>
                  <div className="mt-6 grid grid-cols-3 gap-4 text-center">
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">الدخل السنوي (2034)</p>
                      <p className="text-xl font-bold text-primary">
                        {projectionData[9].income.toLocaleString('ar-AE')} د.إ
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">المصروفات السنوية (2034)</p>
                      <p className="text-xl font-bold text-accent">
                        {projectionData[9].expenses.toLocaleString('ar-AE')} د.إ
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">الادخار السنوي (2034)</p>
                      <p className="text-xl font-bold text-secondary">
                        {projectionData[9].savings.toLocaleString('ar-AE')} د.إ
                      </p>
                    </div>
                  </div>
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