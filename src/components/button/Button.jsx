const Button = ({ children, showHeader = false }) => {
  return (
    <div>
      {showHeader || <h1>Header</h1>}

      <button>{children}</button>
    </div>
  );
};

export default Button;
