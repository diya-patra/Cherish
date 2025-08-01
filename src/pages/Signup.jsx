import React, { useState } from 'react';
import '../assets/styles/Signup.css';
import signupImage from '../assets/images/signup-bg.jpg';

function Signup() {
    const [role, setRole] = useState('user');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignup = (e) => {
        e.preventDefault();
        console.log('Signing up:', { role, name, email, password });
        // Add signup logic here
    };

    return (
        <div className="signup-wrapper">
            <div className="signup-left">
                <img src={signupImage} alt="Signup Visual" />
            </div>

            <div className="signup-right">
                <form className="signup-form" onSubmit={handleSignup}>
                    <h1>Memories</h1>
                    <h2>Create Account</h2>

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
