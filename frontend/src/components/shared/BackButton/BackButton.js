import React from 'react';

function BackButton({ onClick }) {
  return (
    <button 
      onClick={onClick}
      className="btn-secondary mt-2 uppercase"
    >
      Voltar
    </button>
  );
}

export default BackButton;