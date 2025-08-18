import ScrollToTopButton from '@/components/ScrollToTopButton';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Payment = () => {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl lg:text-5xl font-aptos font-bold text-[#2E4A87] mb-8 text-center">PAYMENT</h1>
          
          {/* Price per Meeting */}
          <Card className="shadow-lg bg-blue-50 mb-8">
            <CardHeader>
              <CardTitle className="text-xl font-serif text-[#2E4A87]">Price per Meeting</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 text-gray-700">
                <p>Single meeting XXX GBP (Pounds) (VAT included)</p>
                <p>Single meeting YYY $ (VAT included)</p>
                <p>Single meeting ZZZ Euro (VAT included)</p>
              </div>
            </CardContent>
          </Card>

          {/* Future Stripe Interface Placeholder */}
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
            <h3 className="text-xl font-semibold text-gray-700 mb-4">Payment Interface</h3>
            <p className="text-gray-500">Future Stripe integration to be implemented here</p>
          </div>
        </div>
      </div>
      <ScrollToTopButton />
    </div>
  );
};

export default Payment;