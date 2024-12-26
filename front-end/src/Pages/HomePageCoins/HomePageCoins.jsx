// // import { useEffect } from "react"
// // import "./homePageCoins.css"
// // import { useDispatch, useSelector } from "react-redux"
// // import { setCoins } from "../../redux/homepageSlice"

// // const HomePageCoins = () => {
// //     const coins = useSelector((state) => state.coinss.coinsss)
// //     const dispatch = useDispatch();
   
// //     useEffect(()=>{
// //         fetch('http://localhost:3001/coins')
// //         .then((res)=>res.json())
// //         .then((data)=>
// //             {
// //                 console.log(data);
// //                 dispatch(setCoins());
// //             }
// //         )
// //     },[])

// //     return (
// //         <div className="categories">
// //         {coins.map((coin) => (
// //           <div key={coin.type_id} className="category">
// //             <h2>{coin.name}</h2>
// //             <Link className="show-all" to="/listOfCoins">
// //               Show all
// //             </Link>
           
// //             <img src={coin.image} alt={coin.name} />
// //           </div>
// //         ))}
// //       </div>
// //     )


// // }
// // export default HomePageCoins

// import { useEffect, useState } from "react";
// import "./homePageCoins.css";
// import { Link } from "react-router-dom";

// const HomePageCoins = () => {
//     const [categories, setCategories] = useState([]); 

//     useEffect(() => {
//         fetch('http://localhost:3001/coin_types') 
//             .then((res) => res.json())
//             .then((data) => setCategories(data))
//             .catch((error) => console.error("Error fetching categories:", error));
//     }, []);

//     return (
//         <div className="categories">
//             {categories.map((category) => (
//                 <div key={category.id} className="category">
//                     <h2>{category.name}</h2>
//                     <Link className="show-all" to={`/listOfCoins?type=${category.id}`}>
//                         Show all
//                     </Link>
//                     <img src={category.image_url} alt={category.name} />
//                 </div>
//             ))}
//         </div>
//     );
// };

// export default HomePageCoins;

import { useEffect, useState } from "react";
import "./homePageCoins.css";
import { Link } from "react-router-dom";

const HomePageCoins = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3001/coin_types')
            .then((res) => {
                if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
                return res.json();
            })
            .then((data) => {
                console.log("Fetched categories:", data); 
                setCategories(data);
            })
            .catch((error) => console.error("Error fetching categories:", error));
    }, []);

    return (
        <div className="categories">
            {categories.map((category) => (
                <div key={category.id} className="category">
                    <h2>{category.name}</h2>
                    <Link className="show-all" to={`/listOfCoins?type=${category.id}`}>
                        Show all
                    </Link>
                    <img
                        src={category.image_for || "https://via.placeholder.com/150"}
                        alt={category.name}
                        onError={(e) => {
                            e.target.src = "https://via.placeholder.com/150";
                        }}
                    />
                </div>
            ))}
        </div>
    );
};

export default HomePageCoins;
