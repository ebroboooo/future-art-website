import { ContactForm } from '@/components/contact-form';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react';
import Image from 'next/image';

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-center text-4xl font-bold mb-4 uppercase tracking-wider font-headline">تواصل معنا</h1>
      <p className="text-center text-lg text-muted-foreground mb-12">
        نحن هنا لمساعدتك. أرسل لنا استفسارك أو تفضل بزيارتنا.
      </p>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Contact Form */}
        <Card>
          <CardHeader>
            <CardTitle>أرسل لنا رسالة</CardTitle>
          </CardHeader>
          <CardContent>
            <ContactForm />
          </CardContent>
        </Card>

        {/* Contact Info */}
        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>معلومات التواصل</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-lg">
              <div className="flex items-center gap-4">
                <MapPin className="h-6 w-6 text-primary" />
                <span>شارع الصحافة، الرياض، المملكة العربية السعودية</span>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="h-6 w-6 text-primary" />
                <a href="tel:+966112345678" className="hover:text-primary">+966 11 234 5678</a>
              </div>
              <div className="flex items-center gap-4">
                <Mail className="h-6 w-6 text-primary" />
                <a href="mailto:info@futureart.sa" className="hover:text-primary">info@futureart.sa</a>
              </div>
            </CardContent>
          </Card>

          <Button size="lg" className="w-full" asChild>
            <a href="https://wa.me/966112345678" target="_blank" rel="noopener noreferrer">
              <MessageCircle className="ml-2 h-5 w-5" />
              تواصل عبر واتساب
            </a>
          </Button>

          <div className="relative h-64 w-full rounded-lg overflow-hidden">
             <Image
              src="https://placehold.co/600x400.png"
              alt="موقع الشركة على الخريطة"
              layout="fill"
              objectFit="cover"
              data-ai-hint="city map"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
