import React from "react";

function Input(props) {
  const { label, type = "text", name, value, onChange } = props;
  // La ligne ci-dessus donne un type texte par défault, si on ne mets pas de valeur pour type

  return (
    <div className="p-4">
      <label>{label}</label>
      <input
        className="border-b-2 border-gray-300 text-sm block"
        type={type}
        name={name}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
export default Input;
