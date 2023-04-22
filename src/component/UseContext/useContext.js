import React, { createContext, useContext } from "react";

const Context = () => {
  const UserContext = createContext(null);
  const user = { name: "John", email: "john@example.com" };

  function ChildComponent() {
    const user = useContext(UserContext);
    return (
      <div>
        <h1>useContext Hook Example:</h1>
        <p>Name: {user.name}</p>
        <p>Email: {user.email}</p>
      </div>
    );
  }
  
  return (
    <UserContext.Provider value={user}>
      <ChildComponent />
    </UserContext.Provider>
  );
};

export default Context;
