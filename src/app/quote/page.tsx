import { QuoteRequestForm } from '@/components/quote-request-form';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function QuotePage() {
  return (
    <div className="bg-background">
        <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
            <Card className="shadow-lg">
            <CardHeader className="text-center">
                <CardTitle className="text-3xl font-bold uppercase tracking-wider font-headline">اطلب عرض سعر</CardTitle>
                <CardDescription className="text-lg text-muted-foreground pt-2">
                املأ النموذج التالي بالتفاصيل وسيقوم فريقنا بالرد عليك في أقرب وقت ممكن.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <QuoteRequestForm />
            </CardContent>
            </Card>
        </div>
        </div>
    </div>
  );
}
