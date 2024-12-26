// import './adminPanelAdd.css';

// const AdminPanelAdd = () => {
//     return (
//         // <div className="admin-panel-2">
//         //     <h1 className="admin-panel-2__title">Admin Panel</h1>
//         //     <div className="admin-panel-2__inputs">
//         //         <label className="admin-panel-2__label">Coin name</label>
//         //         <input type="text" className="admin-panel-2__input" />
                
//         //         <label className="admin-panel-2__label">Face value</label>
//         //         <input type="text" className="admin-panel-2__input" />
                
//         //         <label className="admin-panel-2__label">Year of issue</label>
//         //         <input type="text" className="admin-panel-2__input" />
                
//         //         <label className="admin-panel-2__label">Price</label>
//         //         <input type="text" className="admin-panel-2__input" />
                
//         //         <label className="admin-panel-2__label">Country</label>
//         //         <input type="text" className="admin-panel-2__input" />
                
//         //         <label className="admin-panel-2__label">Metal</label>
//         //         <input type="text" className="admin-panel-2__input" />
                
//         //         <label className="admin-panel-2__label">Short description</label>
//         //         <textarea className="admin-panel-2__textarea" />
                
//         //         <label className="admin-panel-2__label">Long description</label>
//         //         <textarea className="admin-panel-2__textarea" />
                
//         //         <label className="admin-panel-2__label">Quality of the icon</label>
//         //         <input type="text" className="admin-panel-2__input" />
                
//         //         <label className="admin-panel-2__label">Weight</label>
//         //         <input type="number" className="admin-panel-2__input" />
                
//         //         <label className="admin-panel-2__label">Link to obverse image</label>
//         //         <input type="link" className="admin-panel-2__input" />
                
//         //         <label className="admin-panel-2__label">Link to reverse image</label>
//         //         <input type="link" className="admin-panel-2__input" />
//         //     </div>

//         //     <div className="admin-panel-2__buttons">
//         //         <button className="admin-panel-2__save-btn">Save</button>
//         //         <button className="admin-panel-2__cancel-btn">Cancel</button>
//         //     </div>
//         // </div>

//         <div className="admin-panel">
//       <h1>Admin panel</h1>
//       <div className="form">
//         <div className="form-group">
//           <label>Coin name</label>
//           <input type="text" />
//         </div>
//         <div className="form-group">
//           <label>Face value</label>
//           <input type="text" />
//         </div>
//         <div className="form-group">
//           <label>Year of issue</label>
//           <input type="text" />
//         </div>
//         <div className="form-group">
//           <label>Price</label>
//           <input type="text" />
//         </div>
//         <div className="form-group">
//           <label>Country</label>
//           <input type="text" />
//         </div>
//         <div className="form-group">
//           <label>Metal</label>
//           <input type="text" />
//         </div>
//         <div className="form-group">
//           <label>Short description</label>
//           <textarea></textarea>
//         </div>
//         <div className="form-group">
//           <label>Long description</label>
//           <textarea></textarea>
//         </div>
//         <div className="form-group">
//           <label>Quality of the coin</label>
//           <input type="text" />
//         </div>
//         <div className="form-group">
//           <label>Weight</label>
//           <input type="text" />
//         </div>
//         <div className="form-group image-upload">
//           <label>Download the obverse</label>
//           <div className="upload-circle">+</div>
//         </div>
//         <div className="form-group image-upload">
//           <label>Download the reverse</label>
//           <div className="upload-circle">+</div>
//         </div>
//       </div>
//       <div className="buttons">
//         <button className="save-button">Save</button>
//         <button className="cancel-button">Cancel</button>
//       </div>
//     </div>
//   );
    
// };

// export default AdminPanelAdd;

import { useNavigate, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './adminPanelAdd.css';

const AdminPanelAdd = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [formData, setFormData] = useState({
        id: null,
        name: '',
        description: '',
        faceValue: '',
        year: '',
        price: '',
        country: '',
        metal: '',
        quality: '',
        weight: '',
        image: '',
        image2: '',
    });

    useEffect(() => {
        if (location.state?.coin) {
            setFormData(location.state.coin);
        }
    }, [location]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSave = async () => {
        try {
            const method = formData.id ? 'PUT' : 'POST';
            const endpoint = formData.id ? `/coins/${formData.id}` : '/coins';
            const response = await fetch(`http://localhost:3001${endpoint}`, {
                method,
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });
            if (response.ok) {
                alert('Coin saved successfully');
                navigate('/admin');
            } else {
                alert('Error saving coin');
            }
        } catch (error) {
            console.error(error);
        }
    };

    const handleCancel = () => {
        navigate('/admin');
    };

    return (
        <div className="admin-panel">
            <h1>{formData.id ? 'Edit Coin' : 'Add New Coin'}</h1>
            <div className="form">
                <div className="form-group">
                    <label>Coin name</label>
                    <input name="name" value={formData.name} onChange={handleInputChange} type="text" />
                </div>
                <div className="form-group">
                    <label>Description</label>
                    <textarea name="description" value={formData.description} onChange={handleInputChange}></textarea>
                </div>
                <div className="form-group">
                    <label>Face Value</label>
                    <input name="faceValue" value={formData.faceValue} onChange={handleInputChange} type="text" />
                </div>
                <div className="form-group">
                    <label>Year of Issue</label>
                    <input name="year" value={formData.year} onChange={handleInputChange} type="text" />
                </div>
                <div className="form-group">
                    <label>Price</label>
                    <input name="price" value={formData.price} onChange={handleInputChange} type="text" />
                </div>
                <div className="form-group">
                    <label>Country</label>
                    <input name="country" value={formData.country} onChange={handleInputChange} type="text" />
                </div>
                <div className="form-group">
                    <label>Metal</label>
                    <input name="metal" value={formData.metal} onChange={handleInputChange} type="text" />
                </div>
                <div className="form-group">
                    <label>Quality</label>
                    <input name="quality" value={formData.quality} onChange={handleInputChange} type="text" />
                </div>
                <div className="form-group">
                    <label>Weight</label>
                    <input name="weight" value={formData.weight} onChange={handleInputChange} type="text" />
                </div>
                <div className="form-group">
                    <label>Obverse Image URL</label>
                    <input name="image" value={formData.image} onChange={handleInputChange} type="text" />
                </div>
                <div className="form-group">
                    <label>Reverse Image URL</label>
                    <input name="image2" value={formData.image2} onChange={handleInputChange} type="text" />
                </div>
            </div>
            <div className="buttons">
                <button onClick={handleSave} className="save-button">Save</button>
                <button onClick={handleCancel} className="cancel-button">Cancel</button>
            </div>
        </div>
    );
};

export default AdminPanelAdd;
