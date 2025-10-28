'use client';

import { useEffect, useActionState } from 'react';
import { useFormStatus } from 'react-dom';
import { handleQuoteRequest } from '@/app/quote/actions';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Upload } from 'lucide-react';

const initialState = {
  message: '',
  errors: {},
  success: false,
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" className="w-full" disabled={pending}>
      {pending ? 'جار الإرسال...' : 'إرسال الطلب'}
    </Button>
  );
}

export function QuoteRequestForm() {
  const [state, formAction] = useActionState(handleQuoteRequest, initialState);
  const { toast } = useToast();

  useEffect(() => {
    if (state.success) {
      toast({
        title: 'نجاح!',
        description: state.message,
      });
    } else if (state.message && state.errors) {
       toast({
        title: 'خطأ في الإدخال',
        description: state.message,
        variant: 'destructive',
      });
    }
  }, [state, toast]);

  return (
    <form action={formAction} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <Label htmlFor="name">الاسم الكامل</Label>
          <Input id="name" name="name" placeholder="اسمك الكامل" required />
          {state?.errors?.name && <p className="text-sm font-medium text-destructive mt-1">{state.errors.name[0]}</p>}
        </div>
        <div>
          <Label htmlFor="email">البريد الإلكتروني</Label>
          <Input id="email" name="email" type="email" placeholder="your@email.com" required />
           {state?.errors?.email && <p className="text-sm font-medium text-destructive mt-1">{state.errors.email[0]}</p>}
        </div>
      </div>

      <div>
        <Label htmlFor="productType">نوع المنتج</Label>
        <Select name="productType" required>
          <SelectTrigger id="productType">
            <SelectValue placeholder="اختر نوع المنتج" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="business_cards">كروت العمل</SelectItem>
            <SelectItem value="menus">قوائم المطاعم</SelectItem>
            <SelectItem value="brochures">البروشورات</SelectItem>
            <SelectItem value="paper_bags">الشنط الورقية</SelectItem>
            <SelectItem value="stickers">الاستيكرات</SelectItem>
            <SelectItem value="packaging">تغليف المنتجات</SelectItem>
            <SelectItem value="other">أخرى</SelectItem>
          </SelectContent>
        </Select>
         {state?.errors?.productType && <p className="text-sm font-medium text-destructive mt-1">{state.errors.productType[0]}</p>}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <Label htmlFor="quantity">الكمية (الحد الأدنى 100)</Label>
          <Input id="quantity" name="quantity" type="number" placeholder="100" min="100" required />
           {state?.errors?.quantity && <p className="text-sm font-medium text-destructive mt-1">{state.errors.quantity[0]}</p>}
        </div>
        <div>
          <Label htmlFor="size">المقاس (اختياري)</Label>
          <Input id="size" name="size" placeholder="مثال: 9x5 سم" />
        </div>
      </div>
      
      <div>
        <Label htmlFor="design">تحميل التصميم (PDF, PNG, JPG)</Label>
        <div className="relative">
            <Input id="design" name="design" type="file" className="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-primary/10 file:text-primary hover:file:bg-primary/20"/>
        </div>
      </div>

      <div>
        <Label htmlFor="notes">ملاحظات إضافية</Label>
        <Textarea id="notes" name="notes" placeholder="أخبرنا بأي تفاصيل إضافية حول طلبك" />
      </div>

      <SubmitButton />
    </form>
  );
}
