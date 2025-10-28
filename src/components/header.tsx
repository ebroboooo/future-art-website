'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useState } from 'react';

const navLinks = [
  { href: '/', label: 'الرئيسية' },
  { href: '/products', label: 'منتجاتنا' },
  { href: '/about', label: 'من نحن' },
  { href: '/contact', label: 'تواصل معنا' },
];

function LogoIcon() {
    return (
        <svg className="h-9 w-9 text-primary" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12 2C12 7.52285 7.52285 12 2 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    );
}

export function Header() {
  const pathname = usePathname();
  const [isSheetOpen, setSheetOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 text-xl font-bold text-primary">
          <LogoIcon />
          <span className="font-headline uppercase tracking-widest text-foreground">Future Art</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                'text-sm font-medium transition-colors hover:text-primary',
                pathname === link.href ? 'text-primary' : 'text-muted-foreground'
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          {/* CTA Button */}
          <Button asChild className="hidden md:flex">
            <Link href="/quote">اطلب عرض سعر</Link>
          </Button>

          {/* Mobile Menu */}
          <Sheet open={isSheetOpen} onOpenChange={setSheetOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">فتح القائمة</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-background">
              <div className="p-4">
                 <Link href="/" className="flex items-center gap-3 text-xl font-bold text-primary mb-8" onClick={() => setSheetOpen(false)}>
                  <LogoIcon />
                  <span className="font-headline uppercase tracking-widest text-foreground">Future Art</span>
                </Link>
                <nav className="flex flex-col gap-6">
                  {navLinks.map((link) => (
                    <SheetClose asChild key={link.href}>
                      <Link
                        href={link.href}
                        className={cn(
                          'text-lg font-medium transition-colors hover:text-primary',
                          pathname === link.href ? 'text-primary' : 'text-muted-foreground'
                        )}
                        onClick={() => setSheetOpen(false)}
                      >
                        {link.label}
                      </Link>
                    </SheetClose>
                  ))}
                </nav>
                <Button asChild className="mt-8 w-full" size="lg">
                    <Link href="/quote" onClick={() => setSheetOpen(false)}>اطلب عرض سعر</Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
