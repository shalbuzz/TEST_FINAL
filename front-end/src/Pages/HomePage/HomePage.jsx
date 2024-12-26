// import { useEffect, useState } from 'react';
// import './homePage.css';
// import HomePageCoins from '../HomePageCoins/HomePageCoins';
// import HomePageAdvanced from '../HomePageAdvanced/HomePageAdvanced';
// import { Link, useNavigate } from 'react-router-dom';    
// import { useDispatch, useSelector } from 'react-redux';
// import { setCoins, setFiltered, setSearchInput } from '../../redux/homepageSlice';

// const HomePage = () => {
//     const [toggle, setToggle] = useState(false);
//     const dispatch = useDispatch();
//     const navigate = useNavigate();
//     const searchInput = useSelector((state) => state.coinss.searchInput);

//     const handleChange = (e) => {
//         dispatch(setSearchInput(e.target.value));
//     };
//     const searchButton = () => {
//         fetch('http://localhost:3001/coins')
//             .then((response) => response.json())
//             .then((data) => {
//                 const filteredData = data.filter((coin) =>
//                     coin.name.toLowerCase().includes(searchInput.toLowerCase())
//                 );
//                 dispatch(setFiltered(filteredData)); 
//                 navigate('/listOfCoins'); 
//             })
//             .catch((error) => console.error("Error fetching data:", error));
//     };
    
//     useEffect(() => {
//         fetch('http://localhost:3001/coins')
//             .then((res) => res.json())
//             .then((data) =>setCoins(data))
//             .catch((err) => console.error("Error fetching coins:", err));
//     },[]);

//     return (
//         <div className="main-container">
//             HomePage
//             <div className="search-section">
//                 <label className="search-label" htmlFor="search-input">Search Field</label>
//                 <input onChange={handleChange} className="input-field" name="search-input" />
//                 <button onClick={searchButton} className="submit-button">Search</button>
//             </div>
//             <div className="filter-section">
//                 <Link className="filter-toggle" onClick={() => setToggle(!toggle)} to='/'>
//                     <span>Advanced Filters</span>
//                     {toggle ? "˄" : "˅"}
//                 </Link>
//             </div>
//             <div className="content-display">
//                 {toggle ? <HomePageAdvanced /> : <HomePageCoins />}
//             </div>
//         </div>
//     );
// };

// export default HomePage;

import { useEffect, useState } from 'react';
import './homePage.css';
import HomePageCoins from '../HomePageCoins/HomePageCoins';
import HomePageAdvanced from '../HomePageAdvanced/HomePageAdvanced';
import { Link, useNavigate } from 'react-router-dom';    
import { useDispatch, useSelector } from 'react-redux';
import { setCoins, setFiltered, setSearchInput, startLoading, setError } from '../../redux/homepageSlice';

const HomePage = () => {
    const [toggle, setToggle] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    
    const searchInput = useSelector((state) => state.coinss.searchInput);

    
    const handleChange = (e) => {
        dispatch(setSearchInput(e.target.value)); // Обновляем состояние в Redux
    };

   
    const searchButton = () => {
        dispatch(startLoading()); // Устанавливаем статус загрузки
        fetch('http://localhost:3001/coins')
            .then((response) => response.json())
            .then((data) => {
                // Фильтруем монеты по названию
                const filteredData = data.filter((coin) =>
                    coin.name.toLowerCase().includes(searchInput.toLowerCase())
                );
                dispatch(setFiltered(filteredData)); // Сохраняем отфильтрованные данные в Redux
                navigate('/listOfCoins'); // Перенаправляем на список монет
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
                dispatch(setError(error.message)); // Сохраняем ошибку в Redux
            });
    };

    // Загрузка всех монет при монтировании компонента
    // useEffect(() => {
    //     dispatch(startLoading()); // Устанавливаем статус загрузки
    //     fetch('http://localhost:3001/coins')
    //         .then((res) => res.json())
    //         .then((data) => {
    //             dispatch(setCoins(data)); // Сохраняем данные монет в Redux
    //         })
    //         .catch((err) => {
    //             console.error("Error fetching coins:", err);
    //             dispatch(setError(err.message)); // Сохраняем ошибку в Redux
    //         });
    // }, [dispatch]);

    return (
        <div className="main-container">
            <h1>HomePage</h1>

            {/* Секция поиска */}
            <div className="search-section">
                <label className="search-label" htmlFor="search-input">Search Field</label>
                <input
                    onChange={handleChange}
                    className="input-field"
                    name="search-input"
                    value={searchInput}
                />
                <button onClick={searchButton} className="submit-button">Search</button>
            </div>

            {/* Секция фильтров */}
            <div className="filter-section">
                <Link
                    className="filter-toggle"
                    onClick={(e) => {
                        e.preventDefault();
                        setToggle(!toggle); 
                    }}
                    to="/"
                >
                    <span>Advanced Filters</span>
                    {toggle ? "˄" : "˅"}
                </Link>
            </div>

            {/* Отображение фильтров или монет */}
            <div className="content-display">
                {toggle ? <HomePageAdvanced /> : <HomePageCoins />}
            </div>
        </div>
    );
};

export default HomePage;
