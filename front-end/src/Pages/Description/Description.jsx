// import Averse from '../../assets/Аверс.svg';
// import Reverse from '../../assets/Реверс.svg';
// import { Link } from 'react-router-dom';
// import './description.css'

// const Description = () => {
//     return (
//         <div className="coin-info-container">
//             <div className="coin-images">
//                 <img
//                     src={Averse}
//                     alt="Canadian Beaver Coin Front"
//                     className="coin-image"
//                 />
//                 <img
//                     src={Reverse}
//                     alt="Canadian Beaver Coin Back"
//                     className="coin-image"
//                 />
//             </div>
//             <div className="coin-details">
//                 <h1>Canadian Beaver</h1>
//                 <p>
//                     "Canadian beaver". Unique coin with the image of a beaver. Face value
//                     - 5 cents. Created under Elizabeth II.
//                 </p>
//                 <p>
//                     In the center of the obverse is a portrait of Queen Elizabeth II, the
//                     profile is directed to the right. The inscription on the left
//                     semicircle (English) ELIZABETH II, on the right semicircle D · G ·
//                     REGINA (ELIZABETH II QUEEN by the Grace of GOD) with dots. Below is a
//                     mint mark.
//                 </p>
//                 <p>
//                     In the center of the coin reverse is a Canadian beaver on a rock
//                     sticking out of the water. At the top is a semicircle with the
//                     inscription "5 cents" between two maple leaves. At the bottom in two
//                     lines is the inscription CANADA (CANADA) and the year of minting.
//                 </p>
//                 <table>
//                     <tbody>
//                         <tr>
//                             <td>Issuing Country</td>
//                             <td>CANADA</td>
//                         </tr>
//                         <tr>
//                             <td>Composition</td>
//                             <td>Nickel</td>
//                         </tr>
//                         <tr>
//                             <td>Quality</td>
//                             <td>BU</td>
//                         </tr>
//                         <tr>
//                             <td>Denomination</td>
//                             <td>5 cents</td>
//                         </tr>
//                         <tr>
//                             <td>Year</td>
//                             <td>1965</td>
//                         </tr>
//                         <tr>
//                             <td>Weight</td>
//                             <td>4.54 g</td>
//                         </tr>
//                         <tr>
//                             <td>Price</td>
//                             <td>$40</td>
//                         </tr>
//                     </tbody>
//                 </table>
//                 <footer>
//                     <Link className="back-link" to="./listOfCoins">
//                         Back to the list
//                     </Link>
//                 </footer>
//             </div>
//         </div>
//     );
// }

// export default Description;


//--------------------------------------------------------------------------------------------------------


// import React, { useEffect, useState } from 'react';
// import { useParams, Link } from 'react-router-dom';
// import './description.css';

// const Description = () => {
  
//   const { id } = useParams();

  
//   const [coin, setCoin] = useState(null);
//   const [loading, setLoading] = useState(true);

  
//   useEffect(() => {
//     setLoading(true);
//     fetch(`http://localhost:30001/coins/${id}`)
//       .then((res) => {
//         if (!res.ok) {
//           throw new Error('Монета не найдена');
//         }
//         return res.json();
//       })
//       .then((data) => {
//         setCoin(data);
//         setLoading(false);
//       })
//       .catch((err) => {
//         console.error(err);
//         setLoading(false);
//       });
//   }, [id]);

//   if (loading) {
//     return <p style={{ padding: '20px' }}>Loading...</p>;
//   }

//   if (!coin) {
//     return <p style={{ padding: '20px', color: 'red' }}>Монета не найдена</p>;
//   }

//   return (
//     <div className="coin-info-container">
//       <div className="coin-images">
       

//         <img
//           src={coin.image} 
//           alt={`${coin.name} front`}
//           className="coin-image"
//         />

//         <img
//           src={coin.image2}
//           alt={`${coin.name} back`}
//           className="coin-image"
//         />
//       </div>

//       <div className="coin-details">
//         <h1>{coin.name}</h1>

       
//         {coin.description && <p>{coin.description}</p>}

      
//         <table>
//           <tbody>
//             <tr>
//               <td>Issuing Country</td>
//               <td>{coin.issuing_country}</td>
//             </tr>
//             <tr>
//               <td>Composition</td>
//               <td>{coin.composition}</td>
//             </tr>
//             <tr>
//               <td>Quality</td>
//               <td>{coin.quality}</td>
//             </tr>
//             <tr>
//               <td>Denomination</td>
//               <td>{coin.denomination}</td>
//             </tr>
//             <tr>
//               <td>Year</td>
//               <td>{coin.year}</td>
//             </tr>
//             <tr>
//               <td>Weight</td>
//               <td>{coin.weight}</td>
//             </tr>
//             <tr>
//               <td>Price</td>
//               <td>{coin.price}</td>
//             </tr>
//           </tbody>
//         </table>

//         <footer>
//           <Link className="back-link" to="/listOfCoins">
//             Back to the list
//           </Link>
//         </footer>
//       </div>
//     </div>
//   );
// };

// export default Description;


//-------------------------------------------------------------------------------------------------------------------

import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import './description.css';

const Description = () => {
  const { id } = useParams(); // Получаем ID из URL
  const [coin, setCoin] = useState(null); // Данные о монете
  const [loading, setLoading] = useState(true); // Состояние загрузки

  // Загружаем данные монеты при монтировании компонента
  useEffect(() => {
    setLoading(true);
    fetch(`http://localhost:3001/coins/${id}`) // Исправлен порт на `3001`
      .then((res) => {
        if (!res.ok) {
          throw new Error('Монета не найдена');
        }
        return res.json();
      })
      .then((data) => {
        setCoin(data); // Сохраняем данные о монете
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [id]);

  // Если данные загружаются
  if (loading) {
    return <p style={{ padding: '20px' }}>Loading...</p>;
  }

  // Если монета не найдена
  if (!coin) {
    return <p style={{ padding: '20px', color: 'red' }}>Монета не найдена</p>;
  }

  return (
    <div className="coin-info-container">
      <div className="coin-images">
        {/* Отображаем изображения монеты */}
        <img
          src={coin.image || '/placeholder-front.jpg'} // Подставляем заглушку, если image пустое
          alt={`${coin.name} front`}
          className="coin-image"
        />
        <img
          src={coin.image2 || '/placeholder-back.jpg'} // Подставляем заглушку, если image2 пустое
          alt={`${coin.name} back`}
          className="coin-image"
        />
      </div>

      <div className="coin-details">
        <h1>{coin.name}</h1>

        {/* Описание монеты, если доступно */}
        {coin.description && <p>{coin.description}</p>}

        {/* Таблица с деталями монеты */}
        <table>
          <tbody>
            <tr>
              <td>Issuing Country</td>
              <td>{coin.issuing_country}</td>
            </tr>
            <tr>
              <td>Composition</td>
              <td>{coin.composition}</td>
            </tr>
            <tr>
              <td>Quality</td>
              <td>{coin.quality}</td>
            </tr>
            <tr>
              <td>Denomination</td>
              <td>{coin.denomination}</td>
            </tr>
            <tr>
              <td>Year</td>
              <td>{coin.year}</td>
            </tr>
            <tr>
              <td>Weight</td>
              <td>{coin.weight} g</td>
            </tr>
            <tr>
              <td>Price</td>
              <td>${coin.price}</td>
            </tr>
          </tbody>
        </table>

        {/* Ссылка для возврата к списку */}
        <footer>
          <Link className="back-link" to="/listOfCoins">
            Back to the list
          </Link>
        </footer>
      </div>
    </div>
  );
};

export default Description;
