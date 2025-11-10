import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";

const Index = () => {
  const [activeSection, setActiveSection] = useState("home");

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const services = [
    {
      icon: "UserSearch",
      title: "Подбор персонала",
      description: "Комплексный поиск и отбор квалифицированных специалистов для вашего бизнеса"
    },
    {
      icon: "Users",
      title: "Массовый рекрутмент",
      description: "Быстрое закрытие большого количества вакансий в сжатые сроки"
    },
    {
      icon: "Target",
      title: "Executive Search",
      description: "Поиск топ-менеджеров и ключевых специалистов высшего звена"
    },
    {
      icon: "ClipboardCheck",
      title: "HR-консалтинг",
      description: "Профессиональная оценка, аудит и оптимизация HR-процессов"
    },
    {
      icon: "FileText",
      title: "Кадровый аутсорсинг",
      description: "Передача функций управления персоналом на аутсорсинг"
    },
    {
      icon: "TrendingUp",
      title: "Обучение и развитие",
      description: "Корпоративные тренинги и программы развития компетенций"
    }
  ];

  const vacancies = [
    { title: "Senior Backend Developer", company: "FinTech Company", salary: "от 300 000 ₽" },
    { title: "Product Manager", company: "E-commerce Startup", salary: "от 250 000 ₽" },
    { title: "Marketing Director", company: "Retail Network", salary: "от 350 000 ₽" },
    { title: "Data Scientist", company: "Analytics Platform", salary: "от 280 000 ₽" }
  ];

  const testimonials = [
    {
      name: "Александр Иванов",
      position: "CEO, TechCorp",
      text: "Ascend Group закрыли 15 вакансий за 2 месяца. Профессиональный подход на всех этапах."
    },
    {
      name: "Елена Смирнова",
      position: "HR Director, RetailPro",
      text: "Отличная команда! Нашли идеальных кандидатов для ключевых позиций в нашей компании."
    },
    {
      name: "Михаил Петров",
      position: "Founder, StartupHub",
      text: "Рекомендую Ascend Group всем, кто ищет качественное HR-решение для бизнеса."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-border z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <Icon name="TrendingUp" className="text-white" size={24} />
              </div>
              <span className="text-2xl font-bold text-primary">Ascend Group</span>
            </div>
            <div className="hidden md:flex items-center gap-6">
              {["Главная", "Услуги", "О компании", "Вакансии", "Клиентам", "Отзывы", "Контакты"].map((item) => {
                const id = item === "Главная" ? "home" : item.toLowerCase();
                return (
                  <button
                    key={item}
                    onClick={() => scrollToSection(id)}
                    className={`text-sm font-medium transition-colors hover:text-accent ${
                      activeSection === id ? "text-accent" : "text-muted-foreground"
                    }`}
                  >
                    {item}
                  </button>
                );
              })}
            </div>
            <Button size="sm" className="hidden md:flex">Связаться</Button>
          </div>
        </div>
      </nav>

      <section id="home" className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-accent/10 text-accent hover:bg-accent/20">HR-агентство полного цикла</Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-primary animate-fade-in">
              Растём вместе с вашим бизнесом
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Профессиональный подбор персонала и HR-консалтинг для компаний, которые стремятся к развитию
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-base" onClick={() => scrollToSection("услуги")}>
                Наши услуги
                <Icon name="ArrowRight" className="ml-2" size={20} />
              </Button>
              <Button size="lg" variant="outline" className="text-base" onClick={() => scrollToSection("контакты")}>
                Получить консультацию
              </Button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 max-w-5xl mx-auto">
            <Card className="border-2 hover:border-accent transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Award" className="text-accent" size={28} />
                </div>
                <CardTitle className="text-2xl">500+</CardTitle>
                <CardDescription className="text-base">Успешных проектов</CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-2 hover:border-accent transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Users" className="text-accent" size={28} />
                </div>
                <CardTitle className="text-2xl">200+</CardTitle>
                <CardDescription className="text-base">Корпоративных клиентов</CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-2 hover:border-accent transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Clock" className="text-accent" size={28} />
                </div>
                <CardTitle className="text-2xl">14 дней</CardTitle>
                <CardDescription className="text-base">Средний срок подбора</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      <section id="услуги" className="py-20 px-4 bg-secondary/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-accent/10 text-accent hover:bg-accent/20">Что мы предлагаем</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">Наши услуги</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Комплексные HR-решения для бизнеса любого масштаба
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-all hover:-translate-y-1">
                <CardHeader>
                  <div className="w-14 h-14 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon name={service.icon} className="text-accent" size={28} />
                  </div>
                  <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="о компании" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto items-center">
            <div>
              <Badge className="mb-4 bg-accent/10 text-accent hover:bg-accent/20">О нас</Badge>
              <h2 className="text-4xl font-bold mb-6 text-primary">Ascend Group</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Мы — профессиональное HR-агентство с 10-летним опытом работы на рынке подбора персонала. 
                Наша миссия — помогать компаниям находить лучших специалистов и строить эффективные команды.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Icon name="CheckCircle" className="text-accent mt-1" size={24} />
                  <div>
                    <h4 className="font-semibold mb-1">Экспертность</h4>
                    <p className="text-muted-foreground">Глубокое знание рынка труда и отраслевая специализация</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="CheckCircle" className="text-accent mt-1" size={24} />
                  <div>
                    <h4 className="font-semibold mb-1">Индивидуальный подход</h4>
                    <p className="text-muted-foreground">Персональные решения под задачи каждого клиента</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="CheckCircle" className="text-accent mt-1" size={24} />
                  <div>
                    <h4 className="font-semibold mb-1">Гарантия качества</h4>
                    <p className="text-muted-foreground">Полное сопровождение на всех этапах подбора</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Card className="bg-primary text-primary-foreground">
                <CardHeader>
                  <CardTitle className="text-3xl">10+</CardTitle>
                  <CardDescription className="text-primary-foreground/80">лет на рынке</CardDescription>
                </CardHeader>
              </Card>
              <Card className="bg-accent text-accent-foreground">
                <CardHeader>
                  <CardTitle className="text-3xl">95%</CardTitle>
                  <CardDescription className="text-accent-foreground/80">успешных закрытий</CardDescription>
                </CardHeader>
              </Card>
              <Card className="bg-accent text-accent-foreground">
                <CardHeader>
                  <CardTitle className="text-3xl">50+</CardTitle>
                  <CardDescription className="text-accent-foreground/80">специалистов в команде</CardDescription>
                </CardHeader>
              </Card>
              <Card className="bg-primary text-primary-foreground">
                <CardHeader>
                  <CardTitle className="text-3xl">24/7</CardTitle>
                  <CardDescription className="text-primary-foreground/80">поддержка клиентов</CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="вакансии" className="py-20 px-4 bg-secondary/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-accent/10 text-accent hover:bg-accent/20">Актуальные предложения</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">Открытые вакансии</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Лучшие предложения от наших партнёров
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {vacancies.map((vacancy, index) => (
              <Card key={index} className="hover:shadow-lg transition-all">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-xl">{vacancy.title}</CardTitle>
                    <Badge variant="secondary">{vacancy.salary}</Badge>
                  </div>
                  <CardDescription className="text-base mb-4">{vacancy.company}</CardDescription>
                  <Button variant="outline" className="w-full">
                    Подробнее
                    <Icon name="ArrowRight" className="ml-2" size={16} />
                  </Button>
                </CardHeader>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button variant="outline" size="lg">
              Смотреть все вакансии
              <Icon name="ExternalLink" className="ml-2" size={20} />
            </Button>
          </div>
        </div>
      </section>

      <section id="клиентам" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-accent/10 text-accent hover:bg-accent/20">Процесс работы</Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">Как мы работаем</h2>
              <p className="text-lg text-muted-foreground">
                Простой и прозрачный процесс от заявки до найма
              </p>
            </div>
            <div className="space-y-6">
              {[
                { step: "01", title: "Анализ потребностей", desc: "Детальное изучение вашей компании и требований к кандидату" },
                { step: "02", title: "Поиск и отбор", desc: "Активный поиск в базах, соцсетях и профессиональных сообществах" },
                { step: "03", title: "Интервью и оценка", desc: "Глубинное интервьюирование и комплексная оценка кандидатов" },
                { step: "04", title: "Презентация", desc: "Представление лучших кандидатов с детальными характеристиками" },
                { step: "05", title: "Сопровождение", desc: "Поддержка на этапе оффера и адаптации нового сотрудника" }
              ].map((item, index) => (
                <Card key={index} className="border-l-4 border-l-accent hover:shadow-md transition-all">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="text-4xl font-bold text-accent/20">{item.step}</div>
                      <div className="flex-1">
                        <CardTitle className="text-xl mb-2">{item.title}</CardTitle>
                        <CardDescription className="text-base">{item.desc}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="отзывы" className="py-20 px-4 bg-secondary/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-accent/10 text-accent hover:bg-accent/20">Что говорят клиенты</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">Отзывы</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Мнения компаний, которые доверили нам подбор персонала
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-all">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                      <Icon name="User" className="text-accent" size={24} />
                    </div>
                    <div>
                      <CardTitle className="text-base">{testimonial.name}</CardTitle>
                      <CardDescription className="text-sm">{testimonial.position}</CardDescription>
                    </div>
                  </div>
                  <CardDescription className="text-base text-foreground">
                    "{testimonial.text}"
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="контакты" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-accent/10 text-accent hover:bg-accent/20">Свяжитесь с нами</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">Контакты</h2>
            <p className="text-lg text-muted-foreground mb-12">
              Готовы обсудить ваш проект? Мы всегда на связи
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <Card className="hover:shadow-lg transition-all">
                <CardHeader>
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4 mx-auto">
                    <Icon name="Mail" className="text-accent" size={24} />
                  </div>
                  <CardTitle className="text-lg">Email</CardTitle>
                  <CardDescription className="text-base">info@ascendgroup.ru</CardDescription>
                </CardHeader>
              </Card>
              <Card className="hover:shadow-lg transition-all">
                <CardHeader>
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4 mx-auto">
                    <Icon name="Phone" className="text-accent" size={24} />
                  </div>
                  <CardTitle className="text-lg">Телефон</CardTitle>
                  <CardDescription className="text-base">+7 (495) 123-45-67</CardDescription>
                </CardHeader>
              </Card>
              <Card className="hover:shadow-lg transition-all">
                <CardHeader>
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4 mx-auto">
                    <Icon name="MapPin" className="text-accent" size={24} />
                  </div>
                  <CardTitle className="text-lg">Офис</CardTitle>
                  <CardDescription className="text-base">Москва, ул. Тверская, 1</CardDescription>
                </CardHeader>
              </Card>
            </div>
            <Button size="lg" className="text-base">
              Отправить заявку
              <Icon name="Send" className="ml-2" size={20} />
            </Button>
          </div>
        </div>
      </section>

      <footer className="bg-primary text-primary-foreground py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
                  <Icon name="TrendingUp" className="text-white" size={20} />
                </div>
                <span className="text-xl font-bold">Ascend Group</span>
              </div>
              <p className="text-primary-foreground/80 text-sm">
                Профессиональное HR-агентство полного цикла
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Услуги</h4>
              <ul className="space-y-2 text-sm text-primary-foreground/80">
                <li>Подбор персонала</li>
                <li>Executive Search</li>
                <li>HR-консалтинг</li>
                <li>Аутсорсинг</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Компания</h4>
              <ul className="space-y-2 text-sm text-primary-foreground/80">
                <li>О нас</li>
                <li>Вакансии</li>
                <li>Клиентам</li>
                <li>Контакты</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Социальные сети</h4>
              <div className="flex gap-3">
                <div className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-accent transition-colors cursor-pointer">
                  <Icon name="Linkedin" size={20} />
                </div>
                <div className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-accent transition-colors cursor-pointer">
                  <Icon name="Facebook" size={20} />
                </div>
                <div className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-accent transition-colors cursor-pointer">
                  <Icon name="Instagram" size={20} />
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-primary-foreground/20 pt-8 text-center text-sm text-primary-foreground/60">
            <p>© 2024 Ascend Group. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
