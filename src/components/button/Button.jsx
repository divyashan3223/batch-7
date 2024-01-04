const Button = ({ children, user = false }) => {
  return user ? (
    <div>
      <h1>welcome user</h1>
      <button>logout</button>
    </div>
  ) : (
    <div>
      <h1>login first</h1>
      <button>login</button>
    </div>
  );

  // method -1

  // if (user) {
  //   return (
  //     <div>
  //       <h1>welcome user</h1>
  //       <button>logout</button>
  //     </div>
  //   );
  // } else {
  //   return (
  //     <div>
  //       <h1>login first</h1>
  //       <button>login</button>
  //     </div>
  //   );
  // }
};

export default Button;
