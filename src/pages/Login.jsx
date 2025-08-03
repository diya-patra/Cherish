import React, { useState } from 'react';
import '../assets/styles/Login.css';
import loginImage from '../assets/images/login-bg.jpg';
import { useNavigate } from 'react-router-dom';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('user');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Logging in with', { role, email, password });
        // Add login logic here
    };

    return (
        <div className="login-wrapper">
            <div className="login-left">
                <button className="back-button" onClick={() => navigate('/')}>
                    ⬅ Back to Home
                </button>
                <img src={loginImage} alt="Login visual" />
                <div className="login-message">
                    <h2>Start cherishing your memories...</h2>
                    <p>Relive, reflect, and remember.</p>
                </div>
            </div>

            <div className="login-right">
                <form className="login-form" onSubmit={handleSubmit}>
                    <h1>Cherish</h1>
                    <h2>Login</h2>

                    <div className="role-select">
                        <label>
                            <input
                                type="radio"
                                value="user"
                                checked={role === 'user'}
                                onChange={() => setRole('user')}
                            />
                            <span>User</span>
                        </label>
                        <label>
                            <input
                                type="radio"
                                value="admin"
                                checked={role === 'admin'}
                                onChange={() => setRole('admin')}
                            />
                            <span>Admin</span>
                        </label>
                    </div>

                    <input
                        type="email"
                        placeholder="Enter Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />

                    <input
                        type="password"
                        placeholder="Enter Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />

                    <button type="submit">Login</button>
                </form>
            </div>
        </div>
    );
}

export default Login;
