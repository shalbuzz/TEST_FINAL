// import './adminPanel.css';
// import CanadianBeaverImg from '../../assets/Монета 1.svg';
// import LooneyImg from '../../assets/Монета 2.svg';
// import { Link } from 'react-router-dom';

// const AdminPanel = () => {
//     // const coins = [
//     //     {
//     //         id: 1,
//     //         name: "Canadian Beaver",
//     //         description: "Unique coin with the image of a beaver. Face value - 5 cents. Created under Elizabeth II.",
//     //         image: CanadianBeaverImg,
//     //     },
//     //     {
//     //         id: 2,
//     //         name: "Looney",
//     //         description: "Unique coin with the image of a goat. Canadian dollar symbol.",
//     //         image: LooneyImg,
//     //     },
//     // ];

//     return (
//         <div className="admin-dashboard-wrapper">
//       <h1 className="admin-dashboard-header">Admin Panel</h1>

//       <div className="admin-dashboard-search-section">
//         <label
//           className="admin-dashboard-search-label"
//           htmlFor="admin-dashboard-search-field"
//         >
//           Input field
//         </label>
//         <div className="admin-dashboard-search-group">
//           <input
//             className="admin-dashboard-search-field"
//             name="admin-dashboard-search-field"
//           />
//           <button className="admin-dashboard-search-btn">Search</button>
//         </div>
//       </div>

//       <div className="admin-dashboard-coin-list">
//         <div className="admin-dashboard-coin-item">
//           <img
//             className="admin-dashboard-coin-img"
//             src={CanadianBeaverImg}
//             alt="Coin"
//           />
//           <div className="admin-dashboard-coin-details">
//             <p className="admin-dashboard-coin-title">Canadian Beaver</p>
//             <p className="admin-dashboard-coin-desc">
//               Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa,
//               excepturi! Lorem ipsum dolor sit amet consectetur adipisicing
//               elit. Optio, perspiciatis.
//             </p>
//           </div>
//           <div className="admin-dashboard-action-buttons">
//             <button className="admin-dashboard-delete-btn">Delete</button>
//             <button className="admin-dashboard-edit-btn">Edit</button>
//           </div>
//         </div>

//         <div className="admin-dashboard-coin-item">
//           <img
//             className="admin-dashboard-coin-img"
//             src={LooneyImg}
//             alt="Coin"
//           />
//           <div className="admin-dashboard-coin-details">
//             <p className="admin-dashboard-coin-title">Looney</p>
//             <p className="admin-dashboard-coin-desc">
//               Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa,
//               excepturi! Lorem ipsum dolor sit amet consectetur adipisicing
//               elit. Optio, perspiciatis.
//             </p>
//           </div>
//           <div className="admin-dashboard-action-buttons">
//             <button className="admin-dashboard-delete-btn">Delete</button>
//             <button className="admin-dashboard-edit-btn">Edit</button>
//           </div>
//         </div>

//         <div className="admin-dashboard-add-coin">
//           <Link className="admin-dashboard-add-coin-link">
//             <div className="admin-dashboard-add-coin-symbol">+</div>
//             <p className="admin-dashboard-add-coin-text">Add a new coin</p>
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
     
// }

// export default AdminPanel;

import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './adminPanel.css';

const AdminPanel = () => {
    const navigate = useNavigate();
    const [coins, setCoins] = useState([]);

    // Fetch coins from the database
    useEffect(() => {
        fetch('http://localhost:3001/coins')
            .then((response) => response.json())
            .then((data) => setCoins(data))
            .catch((error) => console.error('Error fetching coins:', error));
    }, []);

    const handleDelete = async (coinId) => {
        try {
            const response = await fetch(`http://localhost:3001/coins/${coinId}`, {
                method: 'DELETE',
            });
            if (response.ok) {
                setCoins(coins.filter((coin) => coin.id !== coinId));
                alert('Coin deleted successfully');
            } else {
                alert('Error deleting coin');
            }
        } catch (error) {
            console.error(error);
        }
    };

    const handleEdit = (coin) => {
        navigate('/admin/add', { state: { coin } });
    };

    const handleAddNew = () => {
        navigate('/admin/add');
    };

    return (
        <div className="admin-dashboard-wrapper">
            <h1 className="admin-dashboard-header">Admin Panel</h1>
            <div className="admin-dashboard-search-section">
          <label
          className="admin-dashboard-search-label"
          htmlFor="admin-dashboard-search-field"
        >
          Input field
        </label>
        <div className="admin-dashboard-search-group">
          <input
            className="admin-dashboard-search-field"
            name="admin-dashboard-search-field"
          />
          <button className="admin-dashboard-search-btn">Search</button>
        </div>
      </div>
            <div className="admin-dashboard-coin-list">
                {coins.map((coin) => (
                    <div key={coin.id} className="admin-dashboard-coin-item">
                        <img className="admin-dashboard-coin-img" src={coin.image} alt="Coin" />
                        <div className="admin-dashboard-coin-details">
                            <p className="admin-dashboard-coin-title">{coin.name}</p>
                            <p className="admin-dashboard-coin-desc">{coin.description}</p>
                        </div>
                        <div className="admin-dashboard-action-buttons">
                            <button onClick={() => handleEdit(coin)} className="admin-dashboard-edit-btn">Edit</button>
                            <button onClick={() => handleDelete(coin.id)} className="admin-dashboard-delete-btn">Delete</button>
                        </div>
                    </div>
                ))}
                <div className="admin-dashboard-add-coin">
                    <button onClick={handleAddNew} className="admin-dashboard-add-coin-link">
                        <div className="admin-dashboard-add-coin-symbol">+</div>
                        <p className="admin-dashboard-add-coin-text">Add a new coin</p>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AdminPanel;
