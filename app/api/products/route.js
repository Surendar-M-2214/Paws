export  async function GET(req,res) {

   const data=  await fetch("http://localhost:3001/server/zcreator_server/products");
   const posts = await data.json()
 
   return Response.json(posts)
    
}