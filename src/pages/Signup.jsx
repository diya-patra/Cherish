import React, { useState } from 'react';
import '../assets/styles/Signup.css';
import signupImage from '../assets/images/signup-bg.jpg';
import { useNavigate } from 'react-router-dom';

function Signup() {
    const [role, setRole] = useState('user');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSignup = (e) => {
        e.preventDefault();
        console.log('Signing up:', { role, name, email, password });
        // TODO: Integrate signup logic
    };

    return (
        <div className="signup-wrapper">
            <div className="signup-left">
                <button className="back-button" onClick={() => navigate('/')}>
                    ⬅ Back to Home
                </button>
                <img src={signupImage} alt="Signup visual" />
                <div className="signup-message">
                    <h2>Preserve your story.</h2>
                    <p>Capture every meaningful moment.</p>
                </div>
            </div>

            <div className="signup-right">
                <form className="signup-form" onSubmit={handleSignup}>
                    <h1>Cherish</h1>
                    <h2>Create Account</h2>

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
                        type="text"
                        placeholder="Full Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />

                    <input
                        type="email"
                        placeholder="Email Address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />

                    <input
                        type="password"
                        placeholder="Create Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />

                    <button type="submit">Sign Up</button>
                </form>
            </div>
        </div>
    );
}

export default Signup;
