import Link from 'next/link';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export function Footer() {
  const socialLinks = [
    { icon: <Facebook />, href: '#' },
    { icon: <Twitter />, href: '#' },
    { icon: <Instagram />, href: '#' },
    { icon: <Linkedin />, href: '#' },
  ];

  return (
    <footer className="bg-card text-card-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Info */}
          <div className="md:col-span-1">
            <h3 className="text-2xl font-bold uppercase tracking-wider text-primary font-headline">Future Art</h3>
            <p className="mt-2 text-sm text-muted-foreground">"التغليف يبتكر من جديد"</p>
            <div className="flex space-x-4 mt-4 rtl:space-x-reverse">
              {socialLinks.map((link, index) => (
                <a key={index} href={link.href} className="text-muted-foreground hover:text-primary transition-colors">
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold">روابط سريعة</h4>
            <ul className="mt-4 space-y-2">
              <li><Link href="/" className="text-muted-foreground hover:text-primary">الرئيسية</Link></li>
              <li><Link href="/products" className="text-muted-foreground hover:text-primary">المنتجات</Link></li>
              <li><Link href="/about" className="text-muted-foreground hover:text-primary">من نحن</Link></li>
              <li><Link href="/contact" className="text-muted-foreground hover:text-primary">تواصل معنا</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold">خدماتنا</h4>
            <ul className="mt-4 space-y-2">
              <li><span className="text-muted-foreground">كروت العمل</span></li>
              <li><span className="text-muted-foreground">التغليف</span></li>
              <li><span className="text-muted-foreground">البروشورات</span></li>
              <li><span className="text-muted-foreground">الملصقات</span></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold">تواصل</h4>
            <ul className="mt-4 space-y-2 text-muted-foreground">
              <li>info@futureart.sa</li>
              <li>+966 11 234 5678</li>
              <li>الرياض, المملكة العربية السعودية</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border/50 text-center text-muted-foreground text-sm">
          <p>&copy; {new Date().getFullYear()} Future Art. جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </footer>
  );
}
