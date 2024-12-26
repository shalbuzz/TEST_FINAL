import './login.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSignIn = async () => {
        try {
            // Отправка данных для авторизации
            const response = await fetch('http://localhost:3001/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ login, password }),
            });

            if (response.ok) {
                const data = await response.json();
                if (data.success) {
                    alert('Login successful!');
                    navigate('/adminPanel'); // Перенаправление на страницу adminPanel
                } else {
                    alert('Invalid login or password');
                }
            } else {
                alert('Error during login');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Something went wrong, please try again.');
        }
    };

    return (
        <div className="container">
            <h1 className="registr">Admin Panel</h1>

            <div className="input-group">
                <label className="registr-for-label" htmlFor="registr">Login</label>
                <input
                    className="input-registr"
                    id="registr"
                    type="text"
                    value={login}
                    onChange={(e) => setLogin(e.target.value)}
                />
            </div>

            <div className="input-group">
                <label className="password-for-label" htmlFor="password">Password</label>
                <input
                    className="input-password"
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>

            <button className="btn-for-registr" onClick={handleSignIn}>
                Sign In
            </button>
        </div>
    );
};

export default Login;
