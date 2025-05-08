import Navbar from "./components/Navbar.jsx";
import { Outlet, useLoaderData, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { userLogOut } from "./utilities.jsx";


function App() {
  const [user, setUser] = useState(useLoaderData());
  const navigate = useNavigate();

  //check for user on load
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  useEffect(() => {
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
    }
    console.log(user);
  }, [user]);

  const handleLogout = async () => {
    await userLogOut();
    setUser(null);
    navigate("/");
  };

  return (
    <>
      <Navbar user={user} handleLogout={handleLogout}/>
      <Outlet context = {{user,setUser}}/>
    </>
  );
}

export default App;
