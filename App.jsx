import { useState } from "react";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(false);

  const login = () => {
    setLoading(true);

    // simulate API call delay
    setTimeout(() => {
      setIsLoggedIn(true);
      setLoading(false);
    }, 2000);
  };

  const logout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Simple Authentication</h1>

      {loading ? (
        <h2>Loading...</h2>
      ) : isLoggedIn ? (
        <div>
          <h2>User Profile</h2>
          <p>Name: Ayush Sharma</p>
          <p>Email: ayush@gmail.com</p>
          <button onClick={logout}>Logout</button>
        </div>
      ) : (
        <div>
          <p>Please Login</p>
          <button onClick={login}>Login</button>
        </div>
      )}
    </div>
  );
}

export default App;
