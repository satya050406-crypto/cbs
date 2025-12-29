import React from 'react';


const WhatsAppButton = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = '919354419950';
    const message = 'Hi, I would like to know more about your services.';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 z-50 !bg-transparent !p-0 !border-0 hover:scale-110 transition-transform duration-300 focus:outline-none"
      aria-label="Contact us on WhatsApp"
    >
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
        alt="WhatsApp"
        className="w-14 h-14 drop-shadow-lg"
      />
    </button>
  );
};

export default WhatsAppButton;
