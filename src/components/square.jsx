const Square = ({ value, handleClick }) => {
   return (
     <button
       className="w-20 h-20 p-4 border-2 border-pink-300 bg-gray-200 text-2xl font-bold flex items-center justify-center"
       onClick={handleClick}
     >
       {value}
     </button>
   );
 };
 
 export default Square;
 