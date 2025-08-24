import React from 'react';

function SubmitButton({ text, disabled }) {
  return (
    <button
      type="submit"
      disabled={disabled}
      className={`${
        disabled
          ? 'bg-gray-400 cursor-not-allowed'
          : 'bg-[#ECB135] hover:bg-[#EFBD4D] cursor-pointer'
      } max-w-[230px] text-black font-bold py-2 mt-4 px-4 uppercase`}
    >
      {text}
    </button>
  );
}

export default SubmitButton;
