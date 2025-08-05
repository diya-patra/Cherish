import React, { useState } from 'react';
import '../assets/styles/Settings.css';

function Settings() {
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [locationAllowed, setLocationAllowed] = useState(false);
    const [theme, setTheme] = useState('Light');
    const [fontSize, setFontSize] = useState('Medium');

    return (
        <div className="settings-container">
            <h2>Settings</h2>

            <section className="settings-section">
                <h3>Account</h3>
                <div className="account-switch">
                    <div className="avatar"></div>
                    <span>ac1</span>
                    <span>ac2</span>
                    <span className="more">+ more</span>
                </div>
            </section>

            <section className="settings-section">
                <button>Edit Profile</button>
            </section>

            <section className="settings-section">
                <h3>Password and Security</h3>
                <label>Current Password
                    <input type="password" value={currentPassword} onChange={e => setCurrentPassword(e.target.value)} />
                </label>
                <label>New Password
                    <input type="password" value={newPassword} onChange={e => setNewPassword(e.target.value)} />
                </label>
            </section>

            <section className="settings-section">
                <h3>Linked Accounts</h3>
                <button>Manage Linked Accounts</button>
            </section>

            <section className="settings-section">
                <h3>Saved Posts <span className="link">View all</span></h3>
            </section>

            <section className="settings-section">
                <h3>Your Activity</h3>
            </section>

            <section className="settings-section">
                <h3>Your Information & Permissions</h3>
            </section>

            <section className="settings-section">
                <button className="logout">Logout</button>
            </section>

            <section className="settings-section">
                <h3>Location & Permissions</h3>
                <label>
                    <input type="checkbox" checked={locationAllowed} onChange={() => setLocationAllowed(!locationAllowed)} />
                    Allow Location
                </label>
            </section>

            <section className="settings-section">
                <h3>Appearance</h3>
                <label>Theme:
                    <select value={theme} onChange={(e) => setTheme(e.target.value)}>
                        <option>Light</option>
                        <option>Dark</option>
                    </select>
                </label>
                <label>Font Size:
                    <select value={fontSize} onChange={(e) => setFontSize(e.target.value)}>
                        <option>Small</option>
                        <option>Medium</option>
                        <option>Large</option>
                    </select>
                </label>
            </section>
        </div>
    );
}

export default Settings;
