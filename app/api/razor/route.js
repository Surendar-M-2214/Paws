// app/api/create-payment-link/route.js
import Razorpay from 'razorpay';

const razorpay = new Razorpay({
  key_id:'rzp_test_3jtKk6LuZZhrXP',
  key_secret: '2QNuOh0Q0RCnx2vvFyBE2ilk',
});

export async function POST(req) {
  const formData = await req.formData()
  console.log(formData)
const name=formData.get("name");
const email=formData.get("email");
const amount=formData.get("amount");
console.log(name+" "+" "+email+" "+amount)
  // Create Razorpay payment link
  try {
    const paymentLink =  await razorpay.paymentLink.create({
      amount: amount * 100, // amount in paise (e.g., 100 INR = 10000 paise)
      currency: 'INR',
      description: 'Order',
     customer: {
    name: name,
    
    email: email
  },
      notify: {
        sms: true,
        email: true,
      },
      callback_url: `${process.env.BASE_URL}api/payment-success`,
  callback_method: "get"
    });
console.log( paymentLink);
    return new Response(JSON.stringify({ link: paymentLink.short_url }), { status: 200 });
  } catch (error) {
    console.error('Error creating payment link', error);
    return new Response(JSON.stringify({ error: 'Error creating payment link' }), { status: 500 });
  }
}
