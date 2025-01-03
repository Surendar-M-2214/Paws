// app/api/payment-success/route.js
export async function GET(req) {
  const payment_id=req.nextUrl.searchParams.get("razorpay_payment_id") ;
      const razorpay_payment_link_id=req.nextUrl.searchParams.get("razorpay_payment_link_id");
      const razorpay_payment_link_status=req.nextUrl.searchParams.get("razorpay_payment_link_status");
      const ref_id=req.nextUrl.searchParams.get("razorpay_payment_link_reference_id");
    console.log(payment_id);
    console.log(razorpay_payment_link_id);
    console.log(ref_id);
    console.log(razorpay_payment_link_status);
    // Verify payment with Razorpay (optional, but recommendeccsd)
    try {
      // You can verify the payment status with Razorpay API here
      // Save the user registration to your database or Excel after payment verification
  
      if(razorpay_payment_link_status==='paid'){
        console.log("in if")
        
                const tkn = await fetch(`https://accounts.zoho.com/oauth/v2/token?refresh_token=${process.env.CR_REFRESH_TKN}&client_id=${process.env.CR_CLIENT_ID}&client_secret=${process.env.CR_SECRET}&grant_type=refresh_token`, {
                    method: "POST",
                   
                })
                const tknres = await tkn.json()
             const acc_token =tknres.access_token;
        console.log(acc_token)
        
                let payload = {
                    "criteria": "PAY_LINK_ID == "+razorpay_payment_link_id ,
                    "data":
                    {
                        "Payment_Status":"Paid",
                        "PAY_ID":payment_id,
                       
                    },
                    "skip_workflow": [
                        "form_workflow"
                    ],
                    "result": {
                        "fields": [
                            "ID",
                            "Payment_Status"
                        ],
                        "message": true,
                        "tasks": true
                    }
                }
                
                let api_headers = {
                    "Authorization": "Zoho-oauthtoken "+acc_token
                }
                
                try {
                    let response = fetch("https://www.zohoapis.com/creator/v2.1/data/zdchackathon7851/e-commerce/report/All_Orders", {
                        method: "PATCH",
                        headers: api_headers,
                        body: JSON.stringify(payload)
                    })
                    console.log((await response).json())
                   
                }
                catch (exception) {
                    console.error(exception)
                }
            }
      // Example: Save the user details and payment information to an Excel file or DB
  
      return new Response(JSON.stringify({ success: true, message: 'Payment successful!' }), { status: 200 });
    } catch (error) {
      console.error('Error processing payment:', error);
      return new Response(JSON.stringify({ success: false, message: 'Payment verification failed' }), { status: 500 });
    }
  }
  