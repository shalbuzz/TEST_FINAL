    // // // // import { Link } from 'react-router-dom';
    // // // // import './listOfCoins.css';
    // // // // import BeaverImg from '../../assets/Картинка 1.svg';
    // // // // import LooneyImg from '../../assets/Картинка 2.svg';
    // // // // import JeffersonImg from '../../assets/Картинка 3.svg';
    // // // // import KennedyImg from '../../assets/Картинка 4.svg';
    // // // // import CanadianSentImg from '../../assets/Картинка 5.svg';
    // // // // import APennyImg from '../../assets/Картинка 6.svg';


    // // // // const ListOfCoins = ()=>{ 
    // // // //   const coins = [
    // // // //     {
    // // // //       name: "Canadian Beaver",
    // // // //       description: "\"Canadian beaver\". Unique coin with the image of a beaver. Face value - 5 cents. Created under Elizabeth II.",
    // // // //       image: BeaverImg,
    // // // //     },
    // // // //     {
    // // // //       name: "Looney",
    // // // //       description: "\"Looney\". Unique coin with the image of a goat. Canadian dollar symbol.",
    // // // //       image: LooneyImg,
    // // // //     },
    // // // //     {
    // // // //       name: "Jefferson",
    // // // //       description: "Unique coin featuring Thomas Jefferson, the 3rd American president. Face value - 5 cents.",
    // // // //       image: JeffersonImg,
    // // // //     },
    // // // //     {
    // // // //       name: "Kennedy",
    // // // //       description: "The unique coin is made in honor of the assassination of the 35th president of Texas.",
    // // // //       image: KennedyImg,
    // // // //     },
    // // // //     {
    // // // //       name: "Canadian Cent",
    // // // //       description: "\"Canadian cent.\" A unique coin with the image of maple leaves - symbols of Canada. Face value - 1 cent.",
    // // // //       image: CanadianSentImg,
    // // // //     },
    // // // //     {
    // // // //       name: "A penny",
    // // // //       description: "\"A penny\". A unique coin with a shield image with 13 vertical stripes.",
    // // // //       image: APennyImg,
    // // // //     },
    // // // //   ];
    
    
    


    
    // // // //   return (
    // // // //     <div>
    // // // //       <div className='search-container'>
    // // // //         <div className='header'>
    // // // //           <h1 className='page-title'>List of the Coins</h1>
    // // // //           <Link className='homepage-link' to='./'>Homepage — List of the coins</Link>
    // // // //         </div>
            
    // // // //         <div className='search-box-container'>
    // // // //           <label htmlFor='search' className='search-label'>Input field</label>
    // // // //           <div className='search-input-container'>
    // // // //             <input id='search' type='text' className='search-input-for-list'/>
    // // // //             <button className='search-btn'>Search</button>
    // // // //           </div>
    // // // //         </div>
            
    // // // //         <Link className='advanced-filter-link' to='/homepage_2'>Advanced filter <span>&#9660;</span></Link>
    // // // //       </div>

    // // // //       <div className="coin-grid-container">
    // // // //         {coins.map((coin, index) => (
    // // // //           <div className="coin-card" key={index}>
    // // // //             <img src={coin.image} alt={coin.name} className="coin-image" />
    // // // //             <div className='coin-text'>
    // // // //               <Link to='./description' className='coin-name'>{coin.name}</Link>
    // // // //               <p className='coin-description'>{coin.description}</p>
    // // // //             </div>
    // // // //           </div>
    // // // //         ))}
    // // // //       </div>
    // // // //     </div>
    // // // //   );
    // // // // };

    // // // // export default ListOfCoins;







    // // // // // const dispatch = useDispatch();
    // // // //   // const { coins, loading, error } = useSelector((state) => state.coins);

    // // // //   // useEffect(() => {
    // // // //   //     const fetchCoins = async () => {
    // // // //   //         dispatch(startLoading());
    // // // //   //         try {
    // // // //   //             const response = await fetch("http://localhost:3000/api/coins"); 
    // // // //   //             const data = await response.json();
    // // // //   //             dispatch(setCoins(data));
    // // // //   //         } catch (err) {
    // // // //   //             dispatch(setError(err.message));
    // // // //   //         }
    // // // //   //     };

    // // // //   //     fetchCoins();
    // // // //   // }, [dispatch]);

    // // // //   //     return(

    // // // // //      <div>
    // // // // // <div className='search-container'>
    // // // // //         <h1>List of the coins</h1>
    // // // // //          <Link className='list-link'>Homepage — List of the coins</Link>
    // // // // //         <label htmlFor='search'>Input field</label>
        
    // // // // //            <div className='search-box'>
    // // // // //             <input  id='search' type='text'/>
    // // // // //             <button className='search-btn'>Search</button>
    // // // // //             </div>
        
    // // // // //         <Link className='advanced-filter' to='/homepage_2'>Advanced filter <span>&#9660;</span></Link>
    // // // // // </div>
    // // // // // </div>
    // // // // //     )

    // // // import { Link } from 'react-router-dom';
    // // // import { useSelector } from 'react-redux';
    // // // import './listOfCoins.css';

    // // // const ListOfCoins = () => {
    // // //     const coins = useSelector((state) => state.coinss.filtered); 

    // // //     return (
    // // //         <div>
    // // //             <div className='search-container'>
    // // //                 <div className='header'>
    // // //                     <h1 className='page-title'>List of the Coins</h1>
    // // //                     <Link className='homepage-link' to='./'>Homepage — List of the coins</Link>
    // // //                 </div>
                    
    // // //                 <div className='search-box-container'>
    // // //                     <label htmlFor='search' className='search-label'>Input field</label>
    // // //                     <div className='search-input-container'>
    // // //                         <input id='search' type='text' className='search-input-for-list' />
    // // //                         <button className='search-btn'>Search</button>
    // // //                     </div>
    // // //                 </div>
                    
    // // //                 <Link className='advanced-filter-link' to='/homepage_2'>Advanced filter <span>&#9660;</span></Link>
    // // //             </div>

    // // //             <div className="coin-grid-container">
    // // //                 {coins.length > 0 ? (
    // // //                     coins.map((coin, index) => (
    // // //                         <div className="coin-card" key={index}>
    // // //                             <img src={coin.image} alt={coin.name} className="coin-image" />
    // // //                             <div className='coin-text'>
    // // //                                 <Link to='./description' className='coin-name'>{coin.name}</Link>
    // // //                                 <p className='coin-description'>{coin.description}</p>
    // // //                             </div>
    // // //                         </div>
    // // //                     ))
    // // //                 ) : (
    // // //                     <p>No coins found. Try a different search query.</p>
    // // //                 )}
    // // //             </div>
    // // //         </div>
    // // //     );
    // // // };

    // // // export default ListOfCoins;

    // // //-------------------------------------------------------------------------------------------------------

    // // // import { useEffect, useState } from "react";
    // // // import { useLocation } from "react-router-dom";
    // // // import "./listOfCoins.css";

    // // // const ListOfCoins = () => {
    // // //     const [coins, setCoins] = useState([]);
    // // //     const location = useLocation();
    // // //     const typeId = new URLSearchParams(location.search).get("type"); 

    // // //     useEffect(() => {
    // // //         if (typeId) {
    // // //             fetch(`http://localhost:3001/coins_by_type/${typeId}`)
    // // //                 .then((res) => res.json())
    // // //                 .then((data) => setCoins(data))
    // // //                 .catch((error) => console.error("Error fetching coins:", error));
    // // //         }
    // // //     }, [typeId]);

    // // //     return (
    // // //         <div className="coin-grid-container">
    // // //             {coins.map((coin) => (
    // // //                 <div key={coin.id} className="coin-card">
    // // //                     <img src={coin.image} alt={coin.name} className="coin-image" />
    // // //                     <h3>{coin.name}</h3>
    // // //                     <p>{coin.description}</p>
    // // //                 </div>
    // // //             ))}
    // // //         </div>
    // // //     );
    // // // };

    // // // export default ListOfCoins;

    // // //-------------------------------------------------------------------------------------------------------
    // // import React, { useEffect, useState } from "react";
    // // import { useSelector } from "react-redux";
    // // import "./listOfCoins.css";

    // // const ListOfCoins = () => {
    // //     const [coins, setCoins] = useState([]); // Текущие монеты на странице
    // //     const [total, setTotal] = useState(0); // Общее количество монет
    // //     const [currentPage, setCurrentPage] = useState(1); // Текущая страница
    // //     const [itemsPerPage, setItemsPerPage] = useState(10); // Количество элементов на странице
    // //     const searchInput = useSelector((state) => state.coinss.searchInput); // Ввод для поиска

    // //     useEffect(() => {
    // //         fetchCoins();
    // //     }, [currentPage, itemsPerPage]);

    // //     const fetchCoins = () => {
    // //         const query = new URLSearchParams({
    // //             page: currentPage,
    // //             limit: itemsPerPage,
    // //         }).toString();

    // //         fetch(`http://localhost:3001/paginated_coins?${query}`)
    // //             .then((res) => res.json())
    // //             .then((data) => {
    // //                 setCoins(data.data);
    // //                 setTotal(data.total);
    // //             })
    // //             .catch((err) => console.error("Error fetching paginated coins:", err));
    // //     };

    // //     const handlePageChange = (pageNumber) => {
    // //         setCurrentPage(pageNumber);
    // //     };

    // //     const totalPages = Math.ceil(total / itemsPerPage); // Общее количество страниц

    // //     return (
    // //         <div className="list-of-coins-container">
    // //             <h1>List of Coins</h1>

    // //             {/* Параметры отображения */}
    // //             <div className="pagination-controls">
    // //                 <label htmlFor="items-per-page">Items per page:</label>
    // //                 <select
    // //                     id="items-per-page"
    // //                     value={itemsPerPage}
    // //                     onChange={(e) => {
    // //                         setItemsPerPage(Number(e.target.value));
    // //                         setCurrentPage(1); // Сбросить на первую страницу при изменении лимита
    // //                     }}
    // //                 >
    // //                     <option value={5}>5</option>
    // //                     <option value={10}>10</option>
    // //                     <option value={20}>20</option>
    // //                 </select>
    // //             </div>

    // //             {/* Список монет */}
    // //             <div className="coins-grid">
    // //                 {coins.map((coin) => (
    // //                     <div key={coin.id} className="coin-card">
    // //                         <img src={coin.image} alt={coin.name} className="coin-image" />
    // //                         <h3>{coin.name}</h3>
    // //                         <p>{coin.description}</p>
    // //                     </div>
    // //                 ))}
    // //             </div>

    // //             {/* Пагинация */}
    // //             <div className="pagination">
    // //                 {Array.from({ length: totalPages }, (_, index) => (
    // //                     <button
    // //                         key={index + 1}
    // //                         className={currentPage === index + 1 ? "active" : ""}
    // //                         onClick={() => handlePageChange(index + 1)}
    // //                     >
    // //                         {index + 1}
    // //                     </button>
    // //                 ))}
    // //             </div>
    // //         </div>
    // //     );
    // // };

    // // export default ListOfCoins;


    // import React, { useEffect, useState } from "react";
    // import { useLocation } from "react-router-dom";
    // import "./listOfCoins.css";

    // const ListOfCoins = () => {
    //     const [coins, setCoins] = useState([]); // Список монет для текущей страницы
    //     const [total, setTotal] = useState(0); // Общее количество монет
    //     const [currentPage, setCurrentPage] = useState(1); // Текущая страница
    //     const [itemsPerPage, setItemsPerPage] = useState(10); // Количество элементов на странице
    //     const location = useLocation();

    //     // Получение ID категории из параметров URL
    //     const typeId = new URLSearchParams(location.search).get("type");

    //     useEffect(() => {
    //         if (typeId) {
    //             fetchCoins();
    //         }
    //     }, [typeId, currentPage, itemsPerPage]);

    //     const fetchCoins = () => {
    //         const query = new URLSearchParams({
    //             page: currentPage,
    //             limit: itemsPerPage,
    //         }).toString();

    //         fetch(`http://localhost:3001/coins_by_type/${typeId}?${query}`)
    //             .then((res) => res.json())
    //             .then((data) => {
    //                 setCoins(data.data); // Устанавливаем монеты для текущей страницы
    //                 setTotal(data.total); // Общее количество монет
    //             })
    //             .catch((err) => console.error("Ошибка при получении монет:", err));
    //     };

    //     const handlePageChange = (pageNumber) => {
    //         setCurrentPage(pageNumber);
    //     };

    //     const totalPages = Math.ceil(total / itemsPerPage); // Общее количество страниц

    //     return (
    //         <div className="list-of-coins-container">
    //             <h1>List of Coins</h1>

    //             {/* Параметры отображения */}
    //             <div className="pagination-controls">
    //                 <label htmlFor="items-per-page">Items per page:</label>
    //                 <select
    //                     id="items-per-page"
    //                     value={itemsPerPage}
    //                     onChange={(e) => {
    //                         setItemsPerPage(Number(e.target.value));
    //                         setCurrentPage(1); // Сброс на первую страницу при изменении лимита
    //                     }}
    //                 >
    //                     <option value={5}>5</option>
    //                     <option value={10}>10</option>
    //                     <option value={20}>20</option>
    //                 </select>
    //             </div>

    //             {/* Список монет */}
    //             <div className="coins-grid">
    //                 {coins.length > 0 ? (
    //                     coins.map((coin) => (
    //                         <div key={coin.id} className="coin-card">
    //                             <img src={coin.image} alt={coin.name} className="coin-image" />
    //                             <h3>{coin.name}</h3>
    //                             <p>{coin.description}</p>
    //                         </div>
    //                     ))
    //                 ) : (
    //                     <p>No coins found for this category.</p>
    //                 )}
    //             </div>

    //             {/* Пагинация */}
    //             <div className="pagination">
    //                 {Array.from({ length: totalPages }, (_, index) => (
    //                     <button
    //                         key={index + 1}
    //                         className={currentPage === index + 1 ? "active" : ""}
    //                         onClick={() => handlePageChange(index + 1)}
    //                     >
    //                         {index + 1}
    //                     </button>
    //                 ))}
    //             </div>
    //         </div>
    //     );
    // };

    // export default ListOfCoins;

    import React, { useEffect, useState } from "react";
    import { useLocation } from "react-router-dom";
    import "./listOfCoins.css";

    const ListOfCoins = () => {
        const [coins, setCoins] = useState([]); 
        const [total, setTotal] = useState(0); 
        const [currentPage, setCurrentPage] = useState(1); // Текущая страница
        const [itemsPerPage, setItemsPerPage] = useState(10); // Количество элементов на странице
        const location = useLocation();

        // Получение ID категории из параметров URL
        const typeId = new URLSearchParams(location.search).get("type");

        useEffect(() => {
            if (typeId) {
                fetchCoins();
            }
        }, [typeId, currentPage, itemsPerPage]);

        const fetchCoins = () => {
            const query = new URLSearchParams({
                page: currentPage,
                limit: itemsPerPage,
            }).toString();

            fetch(`http://localhost:3001/coins_by_type/${typeId}?${query}`)
                .then((res) => res.json())
                .then((data) => {
                    if (data && data.data) {
                        setCoins(data.data); // Устанавливаем монеты для текущей страницы
                        setTotal(data.total || 0); // Общее количество монет
                    } else {
                        setCoins([]); // Если данные отсутствуют, устанавливаем пустой массив
                        setTotal(0);
                    }
                })
                .catch((err) => {
                    console.error("Ошибка при получении монет:", err);
                    setCoins([]); 
                    setTotal(0);
                });
        };

        const handlePageChange = (pageNumber) => {
            setCurrentPage(pageNumber);
        };

        const totalPages = Math.ceil(total / itemsPerPage); 

        return (
            <div className="list-of-coins-container">
                <h1>List of Coins</h1>

                {/* Параметры отображения */}
                <div className="pagination-controls">
                    <label htmlFor="items-per-page">Items per page:</label>
                    <select
                        id="items-per-page"
                        value={itemsPerPage}
                        onChange={(e) => {
                            setItemsPerPage(Number(e.target.value));
                            setCurrentPage(1); 
                        }}
                    >
                        <option value={5}>5</option>
                        <option value={10}>10</option>
                        <option value={20}>20</option>
                    </select>
                </div>

                {/* Список монет */}
                <div className="coins-grid">
                    {coins.length > 0 ? (
                        coins.map((coin) => (
                            <div key={coin.id} className="coin-card">
                                <img src={coin.image} alt={coin.name} className="coin-image" />
                                <h3>{coin.name}</h3>
                                <p>{coin.description}</p>
                            </div>
                        ))
                    ) : (
                        <p>No coins found for this category.</p>
                    )}
                </div>

                {/* Пагинация */}
                <div className="pagination">
                    {Array.from({ length: totalPages }, (_, index) => (
                        <button
                            key={index + 1}
                            className={currentPage === index + 1 ? "active" : ""}
                            onClick={() => handlePageChange(index + 1)}
                        >
                            {index + 1}
                        </button>
                    ))}
                </div>
            </div>
        );
    };

    export default ListOfCoins;
