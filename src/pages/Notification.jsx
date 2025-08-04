import React from 'react';
import Menu from './Menu';

let today = new Date();
let formattedDate = today.toISOString().split('T')[0];

const Notification = () => {
  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      <Menu />
      <div style={{ flex: 1, padding: '32px 24px', background: '#f7fcfe', display: 'flex', flexDirection: 'column', gap: '24px' }}>
        <div className="notification-section today">
          <h2>Today</h2>
          <h1>{formattedDate}</h1>
          {/* Messages for today will appear here */}
        </div>
        <div className="notification-section yesterday">
          <h2>Yesterday</h2>
          {/* Messages for yesterday will appear here */}
        </div>
        <div className="notification-section older">
          <h2>Older</h2>
          {/* Older messages will appear here */}
        </div>
      </div>
    </div>
  );
};

export default Notification;
    //       <a href="#" className="active">Notification</a>
    //       <a href="#">Messages</a>
    //       <a href="#">Profile</a>
    //     </nav>
    //   </aside>

      <main className="notification-content">
        <h1>Notification</h1>

        <section>
          <h3>Today</h3>
          {/* {today.length ? today.map(n => (
            <div className="notification-item" key={n.id}>{n.message}</div>
          )) : <p>No new notifications today.</p>} */}
        </section>
      </main>