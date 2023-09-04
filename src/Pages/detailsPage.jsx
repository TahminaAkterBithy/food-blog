// import { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// const detailsPage = () => {
//   // eslint-disable-next-line react-hooks/rules-of-hooks
//   const { strCategory } = useParams();
//   console.log(strCategory, "cagery");
//   const [category, setCategory] = useState([]);
//   useEffect(() => {
//     const url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${strCategory}`;
//     fetch(url)
//       .then((res) => res.json())
//       .then((data) => {
//         setCategory(data.meals);
//         console.log(data.meals);
//       });
//   }, []);

//   return (
//     <div className="grid grid-cols-3 gap-4 mt-8">
//       {category.map((meals) => {
//         return (
//           <div className="max-w-sm rounded overflow-hidden shadow-lg" key={meals.key}>
//             <img src={meals.strMealThumb} alt="" srcSet="" />
//             <div className="px-6 py-4">
//               <div className="font-bold text-xl mb-2"></div>
//               <p className="text-gray-700 text-base">{meals.strMeal}</p>
//             </div>
//               <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" >Button
//               </button>
//           </div>
//         );
//       })}
//     </div>
//   );
// };

// export default detailsPage;

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const detailsPage = () => {
  const { strCategory } = useParams();
  const [category, setCategory] = useState([]);

  useEffect(() => {
    const url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${strCategory}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setCategory(data.meals);
      });
  }, []);

  return (
    <div className="grid grid-cols-3 gap-4 mt-8">
      {category.map((meal) => (
        <div className="max-w-sm rounded overflow-hidden shadow-lg" key={meal.key}>
          <img src={meal.strMealThumb} alt="" srcSet="" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2"></div>
            <p className="text-gray-700 text-base">{meal.strMeal}</p>
          </div>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
            onClick={() => alert("Button clicked!")}
          >
            Button
          </button>
        </div>
      ))}
    </div>
  );
};

export default detailsPage;
