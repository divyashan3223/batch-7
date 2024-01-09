const Input = ({ value, onChange, name, type = "text", label }) => {
  return (
    <div>
      <label htmlFor={name}>
        {label || name}
        <input
          type={type}
          name={name}
          id={name}
          value={value}
          onChange={onChange}
        />
      </label>
    </div>
  );
};

export default Input;
