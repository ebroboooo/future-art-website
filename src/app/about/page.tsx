import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-center text-4xl font-bold mb-12 uppercase tracking-wider font-headline">من نحن</h1>
      <Card className="overflow-hidden border-border">
        <div className="grid md:grid-cols-2 items-center">
          <div className="p-8 md:p-12">
            <h2 className="text-2xl font-bold text-primary mb-4 font-headline">رؤيتنا ورسالتنا</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              في فيوتشر آرت، نحن نؤمن بأن كل فكرة عظيمة تستحق تنفيذًا استثنائيًا. تأسست شركتنا على شغف بالطباعة والتغليف، ونسعى لتحويل رؤى عملائنا إلى واقع ملموس يترك انطباعًا دائمًا.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              باستخدام أحدث التقنيات وأجود المواد، نضمن تقديم منتجات لا تضاهى تجمع بين الإبداع والجودة. فريقنا من الخبراء ملتزم بتقديم حلول مبتكرة ومخصصة تلبي احتياجاتكم، من كروت العمل الأنيقة إلى حلول التغليف المعقدة. نحن أكثر من مجرد شركة طباعة، نحن شركاؤكم في النجاح.
            </p>
          </div>
          <div className="relative h-64 md:h-full w-full">
            <Image
              src="https://placehold.co/800x600.png"
              alt="فريق عمل فيوتشر آرت"
              layout="fill"
              objectFit="cover"
              data-ai-hint="printing office"
            />
          </div>
        </div>
      </Card>
    </div>
  );
}
