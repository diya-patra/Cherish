import React from 'react';
import '../assets/styles/Settings.css';

function Settings() {
    return (
        <div className="settings-container">
            <h1 className="settings-header">Settings</h1>

            <div className="settings-section account-section">
                <div className="account-info">
                    <img src="https://via.placeholder.com/80" alt="User" className="profile-pic" />
                    <div>
                        <h2>John Doe</h2>
                        <p>john.doe@cherish.app</p>
                        <div className="account-tags">
                            <span>ac1</span>
                            <span>ac2</span>
                            <span>+ more</span>
                        </div>
                    </div>
                </div>
                <button className="edit-profile-btn">Edit Profile</button>
            </div>

            <div className="settings-section password-section">
                <h2>Password and Security</h2>
                <label>Current password</label>
                <input type="password" placeholder="Enter current password" />
                <label>New password</label>
                <input type="password" placeholder="Enter new password" />
                <p className="password-hint">Password must be at least 8 characters long</p>
                <button className="update-password-btn">Update Password</button>
            </div>

            <div className="settings-grid">
                <div className="settings-card">
                    <h3>Linked Accounts</h3>
                    <p><b>Google</b> - <span className="connected">Connected</span></p>
                    <p><b>Apple</b> - <span className="connect">Connect</span></p>
                </div>

                <div className="settings-card">
                    <h3>Saved Posts</h3>
                    <p className="number">24</p>
                    <a href="#">View all →</a>
                </div>

                <div className="settings-card">
                    <h3>Your Activity</h3>
                    <p>Posts this month: 12</p>
                    <p>Comments: 47</p>
                    <p>Likes given: 186</p>
                </div>

                <div className="settings-card">
                    <h3>Information & Permissions</h3>
                    <p><a href="#">Download your data</a></p>
                    <p><a href="#">Privacy settings</a></p>
                </div>

                <div className="settings-card">
                    <h3>Location & Permissions</h3>
                    <label className="switch">
                        <input type="checkbox" defaultChecked />
                        <span className="slider round"></span>
                    </label>
                    <p>Enable location services for better experience</p>
                </div>

                <div className="settings-card">
                    <h3>Appearance</h3>
                    <div className="appearance-options">
                        <button className="theme-btn active">Light</button>
                        <button className="theme-btn">Dark</button>
                        <button className="theme-btn">Auto</button>
                    </div>
                    <select>
                        <option>Medium</option>
                        <option>Small</option>
                        <option>Large</option>
                    </select>
                </div>
            </div>

            <button className="logout-btn">Logout</button>
        </div>
    );
}

export default Settings;
