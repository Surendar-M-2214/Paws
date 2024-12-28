// app/api/payment-success/route.js
export async function POST(req) {
  console.log(req);
    const paymentData=req.nextUrl.searchParams.get("razorpay_payment_id") +""+req.nextUrl.searchParams.get("razorpay_order_id");
  console.log(paymentData);
    // Verify payment with Razorpay (optional, but recommendeccsd)
    try {
      // You can verify the payment status with Razorpay API here
      // Save the user registration to your database or Excel after payment verification
  
      if(paymentData){
        
      fetch(`api/creator`, {
        method: "POST",
        body: data,
        headers: {
          'accept': 'application/json',
        }
    }
    )
      }
  
      // Example: Save the user details and payment information to an Excel file or DB
  
      return new Response(JSON.stringify({ success: true, message: 'Payment successful!' }), { status: 200 });
    } catch (error) {
      console.error('Error processing payment:', error);
      return new Response(JSON.stringify({ success: false, message: 'Payment verification failed' }), { status: 500 });
    }
  }
  