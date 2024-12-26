export   async function GET(req,{params}) {
    // console.log(req)
    
    const id = (await params).id;
    const data=  await fetch(`https://zoho-creator-872934080.development.catalystserverless.com/product/${id}`);
    const posts = await data.json()
  
    return Response.json(posts)
     
 }