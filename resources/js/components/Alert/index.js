import React from "react";

function Alert({ mensage, setMensage }) {
  const { type, text } = mensage;

  if (!text) return null;

  return (
    <div className={`alert alert-${type}`}>
      <button
        type="button"
        className="close"
        onClick={() => {
          setMensage({});
        }}
      >
        &times;
      </button>
      {text}
    </div>
  );
}

export default Alert;
