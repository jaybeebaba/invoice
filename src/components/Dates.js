import { useContext } from "react";
import { State } from "../context/stateContext";

export default function Dates() {
  const {  invoiceDate } = useContext(State);
  const convertDateToString = () => {
    
    let dateObject = new Date(invoiceDate);
   
    let dateString = dateObject.toLocaleDateString('en-US', {  
        year: 'numeric',  
        month: 'long',  
        day: 'numeric'  
    });

   return dateString
};
  return (
    <>
      <article className="mt-10 mb-14 flex items-end justify-end">
        <ul>
          <li className="p-1 bg-gray-100">
            <span className="font-bold mr-1">Date: </span> {convertDateToString()}
          </li>
        </ul>
      </article>
    </>
  );
}
