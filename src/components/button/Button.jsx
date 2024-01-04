const Button = props => {
  console.log(props);

  return (
    <button
      style={{
        backgroundColor: props.bgColor,
      }}
    >
      {props.content}
    </button>
  );
};

export default Button;
