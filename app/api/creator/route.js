export  async function POST(req) {

    const formData = await req.json()
    console.log( "form dett"+JSON.stringify(formData))

    const cr_data=[];
 formData.forEach((e) => {
    const price=e.price*e.quantity;
 const in_map={

        "Customer_Name": e.name,
        "Email":e.email,
        "Phone_Number":e.number,
        "Address":e.address,
        "Products":e.id,
        "Ordered_Quantity":e.quantity,
        "Size":e.size,
        "Payment_Mode":"UPI",
        "Paid_Amount":price,
        "Order_Status":"Received",
        "Payment_Status":"Pending",
        "PAY_LINK_ID":e.PAY_LINK_ID,
        "VENDOR_ID":e.vendor,
    
 }
 cr_data.push(in_map)
 });
console.log(cr_data)

//   const name=formData.get("name");
//   const address=formData.get("address");
//   const email=formData.get("email");
//   const amount=formData.get("amount");
//   const size=formData.get("size");
//   const number=formData.get("number");
//   const id=formData.get("id");
//   const qty=formData.get("qty");
//   const pay_id=formData.get("pay_id");
//   const vendor=formData.get("vendor");
//   console.log(name+" "+" "+email+" "+amount)
    const tkn = await fetch(`https://accounts.zoho.com/oauth/v2/token?refresh_token=${process.env.CR_REFRESH_TKN}&client_id=${process.env.CR_CLIENT_ID}&client_secret=${process.env.CR_SECRET}&grant_type=refresh_token`, {
        method: "POST",
       
    })
    const tknres = await tkn.json()
 const acc_token =tknres.access_token;


    let payload = {
        "data": cr_data,
        "skip_workflow": [
            "form_workflow",
            "schedules"
        ]
    }
    
    let api_headers = {
        "Authorization": "Zoho-oauthtoken "+acc_token,
        
    }
    
    
        const res = await fetch("https://www.zohoapis.com/creator/v2.1/data/zdchackathon7851/e-commerce/form/Orders", {
            method: "POST",
            headers: api_headers,
            body: JSON.stringify(payload)
        })
     const  resp=await res.json();

  console.log(resp);
//   const errors = resp.result[0]?.error;
//   console.log("Errors:", errors);
  
    return Response.json(JSON.stringify({ success: true, message: 'creator successful!' ,cart:resp}), { status: 200 })
     
 }
