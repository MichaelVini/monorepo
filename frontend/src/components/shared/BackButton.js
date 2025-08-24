import React from 'react';

function BackButton({ onClick }) {
  return (
    <button 
      onClick={onClick}
      className="btn-secondary uppercase"
    >
      Voltar
    </button>
  );
}

export default BackButton;