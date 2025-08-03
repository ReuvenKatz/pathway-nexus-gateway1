import ScrollToTopButton from '@/components/ScrollToTopButton';

const Payment = () => {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl lg:text-5xl font-algerian font-bold text-[#2E4A87] mb-8 text-center">PAYMENT</h1>
          
          {/* Meeting Pricing Information Frame */}
          <div className="border-2 border-gray-300 rounded-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-[#2E4A87] mb-6 text-center">Meeting Pricing Information</h2>
            <div className="text-gray-600 text-center">
              <p>Pricing details to be filled later</p>
            </div>
          </div>

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