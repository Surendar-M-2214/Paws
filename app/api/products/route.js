export  async function GET(req,res) {

   const data=  await fetch("https://zoho-creator-872934080.development.catalystserverless.com/products");
   const posts = await data.json()
 
   return Response.json(posts)
    
}