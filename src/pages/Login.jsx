import React, { useState } from 'react';
import '../assets/styles/Login.css';
import loginImage from '../assets/images/login-bg.jpg';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('user');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Logging in with', { role, email, password });
        // Handle login logic based on role
    };

    return (
        <div className="login-wrapper">
            <div className="login-left">
                <img src={loginImage} alt="Login visual" />
            </div>

            <div className="login-right">
                <form className="login-form" onSubmit={handleSubmit}>
                    <h1>Memories</h1>
                    <h2>Login</h2>

                    <div className="role-select">
                        <label>
                            <input
                                type="radio"
                                value="user"
                                checked={role === 'user'}
                                onChange={() => setRole('user')}
                            />
                            User
                        </label>
                        <label>
                            <input
                                type="radio"
                                value="admin"
                                checked={role === 'admin'}
                                onChange={() => setRole('admin')}
                            />
                            Admin
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
