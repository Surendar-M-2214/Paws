import { Badge } from "@/components/ui/badge";
import Link from 'next/link'




export const Feature5 = (props) => 
  
  
  
  (
 
        
        
          <div className="flex shadow-lg shadow-gray-300 rounded-xl  flex-col gap-4">
            <div key={props.key} className=" rounded-md mb-2">
        
            <img
                      alt={props.name}
                      src={props.img}
                      className=" w-auto rounded-md bg-gray-200 object-cover hover:opacity-75  "//
                    />
               <div className="h-20 px-2 py-1">    
            <h3 className="text-xl py-2 tracking-tight">{props.name}</h3>
            <p className="text-muted-foreground line-clamp-1 text-base">
              {props.description}
            </p>
            </div> 
            <div className="flex items-center py-9 px-2 justify-between">
            <span className="text-2xl font-semibold text-gray-900 dark:text-white">₹ {props.Price}</span>
            <Link href={"/products/"+props.id} className="text-white bg-black hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Buy  Now</Link>
        </div>
          </div>
          </div>
        
      
);
export default Feature5;