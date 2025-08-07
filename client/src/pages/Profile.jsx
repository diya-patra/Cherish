import React from 'react';
import '../assets/styles/Profile.css';

function Profile() {
    const user = {
        name: 'Diya Patra',
        email: 'diya@example.com',
        role: 'User',
        joined: 'January 2024'
    };

    return (
        <div className="profile-container">
            <div className="profile-card">
                <div className="profile-avatar">
                    <img
                        src="https://ui-avatars.com/api/?name=Diya+Patra&background=5a67d8&color=fff&size=128"
                        alt="Profile Avatar"
                    />
                </div>
                <div className="profile-info">
                    <h2>{user.name}</h2>
                    <p><strong>Email:</strong> {user.email}</p>
                    <p><strong>Role:</strong> {user.role}</p>
                    <p><strong>Joined:</strong> {user.joined}</p>
                </div>
                <button className="edit-btn">Edit Profile</button>
            </div>
        </div>
    );
}

export default Profile;
