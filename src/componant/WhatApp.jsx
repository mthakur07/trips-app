import React from 'react';

const WhatsApp = () => {
  const phoneNumber = '+918859108984'; // Replace with your actual WhatsApp number

  const handleClick = () => {
    // You can add additional logic here if needed
    // For example, tracking the click event
  };

  return (
    <a
      href={`https://wa.me/${phoneNumber}`}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      style={{
        position: 'fixed',
        bottom: '20px',
        left: '20px',
        backgroundColor: '#25D366', // WhatsApp green color
        color: '#fff',
        padding: '10px',
        borderRadius: '50%',
        textDecoration: 'none',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        zIndex: '999',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <i className="fa fa-whatsapp" style={{ marginRight: '5px' }}></i>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
        alt="WhatsApp Icon"
        style={{ width: '30px', height: '30px', marginRight: '5px' }}
      />
    </a>
  );
};

export default WhatsApp;
