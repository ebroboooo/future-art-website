'use server';

import { z } from 'zod';

const quoteSchema = z.object({
  name: z.string().min(2, { message: 'الاسم مطلوب.' }),
  email: z.string().email({ message: 'بريد إلكتروني غير صالح.' }),
  productType: z.string({ required_error: 'الرجاء اختيار نوع المنتج.' }),
  quantity: z.coerce.number().min(100, { message: 'الكمية يجب أن تكون 100 على الأقل.' }),
  size: z.string().optional(),
});

export async function handleQuoteRequest(prevState: any, formData: FormData) {
  const validatedFields = quoteSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    productType: formData.get('productType'),
    quantity: formData.get('quantity'),
    size: formData.get('size'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'فشل الإرسال. يرجى مراجعة الحقول.',
    };
  }
  
  const designFile = formData.get('design') as File;

  // In a real application, you would:
  // 1. Upload the file to Firebase Storage
  //    const filePath = `uploads/${Date.now()}_${designFile.name}`;
  //    const storageRef = ref(storage, filePath);
  //    await uploadBytes(storageRef, designFile);
  //    const downloadURL = await getDownloadURL(storageRef);
  
  // 2. Save the quote request to Firestore
  //    await addDoc(collection(db, 'quotes'), {
  //      ...validatedFields.data,
  //      designUrl: downloadURL,
  //      createdAt: serverTimestamp()
  //    });

  // 3. Trigger an AI-powered email notification
  //    await notifyAdminFlow.run({ quote: validatedFields.data });
  
  console.log('Quote Request Submitted:');
  console.log('Data:', validatedFields.data);
  console.log('File:', designFile.name, designFile.size, 'bytes');

  return {
    success: true,
    message: 'تم استلام طلبك بنجاح! سنتواصل معك قريبًا.',
  };
}
