

// // import "./homePageAdvanced.css"

// // const HomePageAdvanced = () => {
// //     return (
// //         <div className="homepage-advanced-wrapper">
// //             <div className="option-part">
// //                 <label htmlFor="country-select">Issuing country</label>
// //                 <select name="country-select select">
// //                     <option>option1</option>
// //                     <option>option2</option>
// //                     <option>option3</option>
// //                 </select>
// //                 <label>Metal</label>
// //                 <select name="metal-select select">
// //                     <option>option1</option>
// //                     <option>option2</option>
// //                     <option>option3</option>
// //                 </select>
// //                 <label>Quality of the coin</label>
// //                 <select name="quality-select select">
// //                     <option>option1</option>
// //                     <option>option2</option>
// //                     <option>option3</option>
// //                 </select>
// //             </div>
// //             <div className="price-issue-details">
// //                 <div className="price-wrapper">
// //                     <p>Price</p>
// //                     <label>
// //                         From
// //                         <input type="number" className="from-input" />
// //                     </label>
// //                     <label htmlFor="">
// //                         To
// //                         <input type="number" className="to-input" />
// //                     </label>
// //                 </div>
// //                 <div className="issue-wrapper">
// //                     <p>Year of issue</p>
// //                     <label>
// //                         From
// //                         <input type="number" className="from-input" />
// //                     </label>
// //                     <label htmlFor="">
// //                         To
// //                         <input type="number" className="to-input" />
// //                     </label>
// //                 </div>
// //             </div>
// //         </div>
// //     )
// // }

// // export default HomePageAdvanced;

// import React, { useEffect, useState } from "react";
// import "./homePageAdvanced.css";

// const HomePageAdvanced = () => {
 
//   const [countries, setCountries] = useState([]);
//   const [metals, setMetals] = useState([]);
//   const [qualities, setQualities] = useState([]);

//   useEffect(() => {
//     fetch("http://localhost:3001/coins")
//       .then((res) => res.json())
//       .then((data) => {
        
//         setCountries(data.countries || []);
//         setMetals(data.metals || []);
//         setQualities(data.qualities || []);
//       })
//       .catch((err) => console.error("Error fetching filters:", err));
//   }, []);

//   return (
//     <div className="homepage-advanced-wrapper">
//       <div className="option-part">
//         {/* Issuing country */}
//         <label htmlFor="country-select">Issuing country</label>
//         <select id="country-select" name="country-select">
//           {countries.map((country) => (
//             <option key={country} value={country}>
//               {country}
//             </option>
//           ))}
//         </select>

//         {/* Metal */}
//         <label htmlFor="metal-select">Metal</label>
//         <select id="metal-select" name="metal-select">
//           {metals.map((metal) => (
//             <option key={metal} value={metal}>
//               {metal}
//             </option>
//           ))}
//         </select>

//         {/* Quality */}
//         <label htmlFor="quality-select">Quality of the coin</label>
//         <select id="quality-select" name="quality-select">
//           {qualities.map((q) => (
//             <option key={q} value={q}>
//               {q}
//             </option>
//           ))}
//         </select>
//       </div>

//       <div className="price-issue-details">
//         <div className="price-wrapper">
//           <p>Price</p>
//           <label>
//             From
//             <input type="number" className="from-input" />
//           </label>
//           <label>
//             To
//             <input type="number" className="to-input" />
//           </label>
//         </div>

//         <div className="issue-wrapper">
//           <p>Year of issue</p>
//           <label>
//             From
//             <input type="number" className="from-input" />
//           </label>
//           <label>
//             To
//             <input type="number" className="to-input" />
//           </label>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HomePageAdvanced;

//-------------------------------------------------------------------------------------------------

// import React from "react";
// import { useDispatch, useSelector } from "react-redux";
// import {
//     setSelectedCountry,
//     setSelectedMetal,
//     setSelectedQuality,
//     setPriceRange,
//     setYearRange,
// } from "../../redux/homepageSlice";
// import "./homePageAdvanced.css";

// const HomePageAdvanced = ({ onApplyFilters }) => {
//     const dispatch = useDispatch();

//     const {
//         selectedCountry,
//         selectedMetal,
//         selectedQuality,
//         priceRange,
//         yearRange,
//     } = useSelector((state) => state.coinss);

//     return (
//         <div className="homepage-advanced-wrapper">
//             {/* Опции фильтрации */}
//             <div className="option-part">
//                 <label htmlFor="country-select">Issuing country</label>
//                 <select
//                     id="country-select"
//                     name="country-select"
//                     value={selectedCountry}
//                     onChange={(e) => dispatch(setSelectedCountry(e.target.value))}
//                 >
//                     <option value="">All</option>
//                     <option value="USA">USA</option>
//                     <option value="Canada">Canada</option>
//                 </select>

//                 <label htmlFor="metal-select">Metal</label>
//                 <select
//                     id="metal-select"
//                     name="metal-select"
//                     value={selectedMetal}
//                     onChange={(e) => dispatch(setSelectedMetal(e.target.value))}
//                 >
//                     <option value="">All</option>
//                     <option value="Gold">Gold</option>
//                     <option value="Silver">Silver</option>
//                 </select>

//                 <label htmlFor="quality-select">Quality of the coin</label>
//                 <select
//                     id="quality-select"
//                     name="quality-select"
//                     value={selectedQuality}
//                     onChange={(e) => dispatch(setSelectedQuality(e.target.value))}
//                 >
//                     <option value="">All</option>
//                     <option value="Proof">Proof</option>
//                     <option value="Uncirculated">Uncirculated</option>
//                 </select>
//             </div>

//             {/* Диапазоны цен и года выпуска */}
//             <div className="price-issue-details">
//                 <div className="price-wrapper">
//                     <p>Price</p>
//                     <label>
//                         From
//                         <input
//                             type="number"
//                             value={priceRange.from}
//                             onChange={(e) =>
//                                 dispatch(setPriceRange({ from: e.target.value, to: priceRange.to }))
//                             }
//                         />
//                     </label>
//                     <label>
//                         To
//                         <input
//                             type="number"
//                             value={priceRange.to}
//                             onChange={(e) =>
//                                 dispatch(setPriceRange({ from: priceRange.from, to: e.target.value }))
//                             }
//                         />
//                     </label>
//                 </div>

//                 <div className="issue-wrapper">
//                     <p>Year of issue</p>
//                     <label>
//                         From
//                         <input
//                             type="number"
//                             value={yearRange.from}
//                             onChange={(e) =>
//                                 dispatch(setYearRange({ from: e.target.value, to: yearRange.to }))
//                             }
//                         />
//                     </label>
//                     <label>
//                         To
//                         <input
//                             type="number"
//                             value={yearRange.to}
//                             onChange={(e) =>
//                                 dispatch(setYearRange({ from: yearRange.from, to: e.target.value }))
//                             }
//                         />
//                     </label>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default HomePageAdvanced;



import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    setSelectedCountry,
    setSelectedMetal,
    setSelectedQuality,
    setPriceRange,
    setYearRange,
} from "../../redux/homepageSlice";

const HomePageAdvanced = () => {
    const dispatch = useDispatch();
    const { selectedCountry, selectedMetal, selectedQuality, priceRange, yearRange } =
        useSelector((state) => state.coinss);

    return (
        <div className="homepage-advanced-wrapper">
            {/* Выбор страны */}
            <label htmlFor="country-select">Issuing country</label>
            <select
                id="country-select"
                value={selectedCountry}
                onChange={(e) => dispatch(setSelectedCountry(e.target.value))}
            >
                <option value="">All</option>
                <option value="USA">USA</option>
                <option value="Canada">Canada</option>
            </select>

            {/* Выбор металла */}
            <label htmlFor="metal-select">Metal</label>
            <select
                id="metal-select"
                value={selectedMetal}
                onChange={(e) => dispatch(setSelectedMetal(e.target.value))}
            >
                <option value="">All</option>
                <option value="Gold">Gold</option>
                <option value="Silver">Silver</option>
            </select>

            {/* Выбор качества */}
            <label htmlFor="quality-select">Quality of the coin</label>
            <select
                id="quality-select"
                value={selectedQuality}
                onChange={(e) => dispatch(setSelectedQuality(e.target.value))}
            >
                <option value="">All</option>
                <option value="Proof">Proof</option>
                <option value="Uncirculated">Uncirculated</option>
            </select>

            {/* Диапазон цен */}
            <div>
                <label>Price From:</label>
                <input
                    type="number"
                    value={priceRange.from}
                    onChange={(e) =>
                        dispatch(setPriceRange({ ...priceRange, from: e.target.value }))
                    }
                />
                <label>To:</label>
                <input
                    type="number"
                    value={priceRange.to}
                    onChange={(e) =>
                        dispatch(setPriceRange({ ...priceRange, to: e.target.value }))
                    }
                />
            </div>

            {/* Диапазон годов */}
            <div>
                <label>Year From:</label>
                <input
                    type="number"
                    value={yearRange.from}
                    onChange={(e) =>
                        dispatch(setYearRange({ ...yearRange, from: e.target.value }))
                    }
                />
                <label>To:</label>
                <input
                    type="number"
                    value={yearRange.to}
                    onChange={(e) =>
                        dispatch(setYearRange({ ...yearRange, to: e.target.value }))
                    }
                />
            </div>
        </div>
    );
};

export default HomePageAdvanced;
