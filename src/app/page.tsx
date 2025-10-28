import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Image from 'next/image';
import Link from 'next/link';
import { Award, Package, Palette, Printer, Quote, Users, Wand2 } from 'lucide-react';

const services = [
  {
    icon: <Printer className="h-10 w-10 text-primary" />,
    title: 'طباعة عالية الجودة',
    description: 'نقدم خدمات طباعة الأوفست والديجيتال بأعلى معايير الدقة والألوان.',
  },
  {
    icon: <Package className="h-10 w-10 text-primary" />,
    title: 'حلول تغليف مبتكرة',
    description: 'تصميم وتنفيذ علب وعبوات مخصصة لحماية وجاذبية منتجاتكم.',
  },
  {
    icon: <Palette className="h-10 w-10 text-primary" />,
    title: 'تصميم إبداعي',
    description: 'فريق من المصممين المحترفين لتحويل أفكاركم إلى تصاميم فريدة.',
  },
  {
    icon: <Wand2 className="h-10 w-10 text-primary" />,
    title: 'استشارات فنية',
    description: 'نساعدكم في اختيار أفضل المواد والتقنيات التي تناسب مشروعكم.',
  },
];

const featuredProducts = [
  {
    title: 'كروت العمل الفاخرة',
    description: 'اترك انطباعًا لا يُنسى مع كروت عمل مصممة خصيصًا لك.',
    image: 'https://placehold.co/600x400.png',
    aiHint: 'business cards',
  },
  {
    title: 'قوائم المطاعم الأنيقة',
    description: 'تصاميم جذابة تعكس هوية مطعمك وتفتح شهية زبائنك.',
    image: 'https://placehold.co/600x400.png',
    aiHint: 'restaurant menu',
  },
  {
    title: 'تغليف منتجات مخصص',
    description: 'علب وأكياس تغليف تبرز قيمة منتجك وتحميه.',
    image: 'https://placehold.co/600x400.png',
    aiHint: 'product packaging',
  },
];

const testimonials = [
    {
        quote: "التعامل مع Future Art كان تجربة ممتازة. الجودة والالتزام بالمواعيد فاق توقعاتنا. بالتأكيد سنتعامل معهم مجدداً.",
        name: "أحمد العلي",
        title: "مدير شركة تقنية",
        avatar: "https://placehold.co/100x100.png",
        aiHint: "man portrait"
    },
    {
        quote: "تصاميمهم مبتكرة وجودة الطباعة رائعة. ساعدونا في إطلاق علامتنا التجارية بشكل احترافي.",
        name: "فاطمة خالد",
        title: "صاحبة متجر إلكتروني",
        avatar: "https://placehold.co/100x100.png",
        aiHint: "woman portrait"
    },
    {
        quote: "سرعة في الإنجاز واهتمام بأدق التفاصيل. فريق العمل متعاون جدًا ويقدمون استشارات قيمة.",
        name: "يوسف مراد",
        title: "مدير مطعم",
        avatar: "https://placehold.co/100x100.png",
        aiHint: "man profile"
    },
];

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[70vh] w-full">
        <Image
          src="https://placehold.co/1920x1080.png"
          alt="Futuristic background"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0"
          data-ai-hint="futuristic background"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center text-center px-4">
          <h1 className="text-4xl font-bold uppercase tracking-wider md:text-6xl text-foreground font-headline">Future Art</h1>
          <p className="mt-4 text-lg md:text-2xl font-light text-primary">التغليف يبتكر من جديد</p>
          <Button asChild size="lg" className="mt-8">
            <Link href="/quote">اطلب الآن</Link>
          </Button>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-3xl font-bold text-foreground">خدماتنا</h2>
          <p className="text-center text-muted-foreground mt-2">نقدم حلولاً متكاملة تلبي جميع احتياجات الطباعة والتغليف.</p>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => (
              <Card key={index} className="text-center transition-transform hover:scale-105 hover:shadow-lg bg-card">
                <CardHeader>
                  <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
                    {service.icon}
                  </div>
                </CardHeader>
                <CardContent>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="mt-2">{service.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section id="products" className="py-16 bg-secondary/50">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-3xl font-bold text-foreground">منتجاتنا المميزة</h2>
          <p className="text-center text-muted-foreground mt-2">نظرة على بعض المنتجات التي نفخر بتقديمها.</p>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {featuredProducts.map((product) => (
              <Card key={product.title} className="overflow-hidden transition-shadow hover:shadow-xl bg-card">
                <CardHeader className="p-0">
                  <Image src={product.image} alt={product.title} width={600} height={400} className="w-full h-auto object-cover" data-ai-hint={product.aiHint}/>
                </CardHeader>
                <CardContent className="p-6">
                  <CardTitle>{product.title}</CardTitle>
                  <CardDescription className="mt-2">{product.description}</CardDescription>
                </CardContent>
                <CardFooter>
                  <Button asChild className="w-full">
                     <Link href="/quote">اطلب عرض سعر</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
           <div className="text-center mt-12">
            <Button asChild variant="outline">
              <Link href="/products">عرض كل المنتجات</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-3xl font-bold text-foreground">ماذا يقول عملاؤنا</h2>
          <p className="text-center text-muted-foreground mt-2">آراء عملائنا هي شهادة على جودة عملنا.</p>
          <div className="mt-12">
            <Carousel opts={{ loop: true, direction: "rtl" }} className="w-full max-w-4xl mx-auto">
              <CarouselContent>
                {testimonials.map((testimonial, index) => (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                    <div className="p-1">
                      <Card className="h-full bg-card">
                        <CardContent className="flex flex-col items-center text-center p-6">
                           <Quote className="w-8 h-8 text-primary mb-4" />
                          <p className="text-muted-foreground italic">"{testimonial.quote}"</p>
                          <div className="mt-6 flex items-center">
                            <Avatar>
                              <AvatarImage src={testimonial.avatar} alt={testimonial.name} data-ai-hint={testimonial.aiHint} />
                              <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                            </Avatar>
                            <div className="mr-4">
                              <p className="font-semibold">{testimonial.name}</p>
                              <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>
      </section>
    </div>
  );
}
