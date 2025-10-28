import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';

const products = [
  {
    title: 'كروت العمل',
    description: 'تصاميم احترافية وخامات متنوعة تناسب هوية علامتك التجارية.',
    image: 'https://placehold.co/600x400.png',
    aiHint: 'business cards',
  },
  {
    title: 'قوائم المطاعم',
    description: 'قوائم طعام متينة وجذابة، مصممة لتحمل الاستخدام اليومي.',
    image: 'https://placehold.co/600x400.png',
    aiHint: 'restaurant menu',
  },
  {
    title: 'البروشورات والفلايرات',
    description: 'وسيلة فعالة للترويج لخدماتك وعروضك الخاصة.',
    image: 'https://placehold.co/600x400.png',
    aiHint: 'flyer brochure',
  },
  {
    title: 'الشنط الورقية',
    description: 'أكياس ورقية مخصصة تحمل شعارك وتضيف قيمة لمشتريات العملاء.',
    image: 'https://placehold.co/600x400.png',
    aiHint: 'paper bag',
  },
  {
    title: 'الاستيكرات والملصقات',
    description: 'ملصقات عالية الجودة بأي شكل أو حجم، مثالية للمنتجات والتوزيع.',
    image: 'https://placehold.co/600x400.png',
    aiHint: 'sticker sheet',
  },
  {
    title: 'تغليف المنتجات',
    description: 'حلول تغليف تحمي منتجك وتعزز من صورته في السوق.',
    image: 'https://placehold.co/600x400.png',
    aiHint: 'product packaging',
  },
   {
    title: 'اللوحات الإعلانية',
    description: 'بانرات ورول أب بجودة طباعة ممتازة للمؤتمرات والمعارض.',
    image: 'https://placehold.co/600x400.png',
    aiHint: 'advertising banner',
  },
   {
    title: 'الكتب والمجلات',
    description: 'طباعة وتجليد الكتب والمجلات بكميات تجارية وجودة فائقة.',
    image: 'https://placehold.co/600x400.png',
    aiHint: 'book cover',
  },
];

export default function ProductsPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-center text-4xl font-bold mb-4 uppercase tracking-wider font-headline">منتجاتنا وخدماتنا</h1>
      <p className="text-center text-lg text-muted-foreground mb-12">
        اكتشف مجموعتنا الواسعة من حلول الطباعة والتغليف المصممة لتلبية احتياجاتك.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {products.map((product) => (
          <Card key={product.title} className="flex flex-col overflow-hidden transition-shadow hover:shadow-xl bg-card">
            <CardHeader className="p-0">
              <div className="aspect-w-16 aspect-h-9">
                <Image
                  src={product.image}
                  alt={product.title}
                  width={600}
                  height={400}
                  className="w-full h-full object-cover"
                  data-ai-hint={product.aiHint}
                />
              </div>
            </CardHeader>
            <CardContent className="p-6 flex-grow">
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
    </div>
  );
}
