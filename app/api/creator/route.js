export  async function POST(req,res) {

    const formData = await req.formData()
    console.log(formData)
  const name=formData.get("name");
  const address=formData.get("address");
  const email=formData.get("email");
  const amount=formData.get("amount");
  const size=formData.get("size");
  const number=formData.get("number");
  const id=formData.get("id");
  const qty=formData.get("qty");
  console.log(name+" "+" "+email+" "+amount)
    const tkn = await fetch("https://accounts.zoho.com/oauth/v2/token?refresh_token=1000.e1e5b18eec5ae9b4c5b00a3bae573517.41c522af0b0f7dff8020d0e4b579687e&client_id=1000.BHBT1XE1V3GXB05EVUYK4PA4HOMB9N&client_secret=3ab5288c1f0c558524ded2cc8c40ec1243549a16d5&grant_type=refresh_token", {
        method: "POST",
       
    })
    const tknres = await tkn.json()
 const acc_token =tknres.access_token;


    let payload = {
        "data": [
            {
                "Customer_Name": name,
                "Email":email,
                "Phone_Number":number,
                "Address":address,
                "Products":id,
                "Ordered_Quantity":qty,
                "Size":size,
                "Payment_Mode":"UPI",
                "Paid_Amount":amount,
                "Order_Status":"Received"
            }
        ],
        "skip_workflow": [
            "form_workflow",
            "schedules"
        ]
    }
    
    let api_headers = {
        "Authorization": "Zoho-oauthtoken "+acc_token,
        
    }
    
    
        const resp = await fetch("https://www.zohoapis.com/creator/v2.1/data/zdchackathon7851/e-commerce/form/Orders", {
            method: "POST",
            headers: api_headers,
            body: JSON.stringify(payload)
        })
        const posts = await resp.json()



  
  
    return Response.json(acc_token)
     
 }
