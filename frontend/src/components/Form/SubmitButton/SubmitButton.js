import React from 'react';

function SubmitButton({ text, disabled }) {
  return (
    <button
      type="submit"
      disabled={disabled}
      className="btn-primary cursor-pointer max-w-[280px] uppercase"
    >
      {text}
    </button>
  );
}

export default SubmitButton;
