// import { handlers } from "@/auth" // Referring to the auth.ts we just created
// export const { GET, POST } = handlers
export async function GET(request:Request){
  const data={name:"stark", email:"suray@971096@gmail.com"};
 return Response.json({data})
}