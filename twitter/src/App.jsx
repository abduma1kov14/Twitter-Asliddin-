import { Navbar } from "./components/HomePage/Navbar";
import { HomeModalPage } from "./components/HomePage/HomeModal/HomeModalPage";
import { RightSection } from "./components/HomePage/RightSection/RightSection";
import { Routes, Route } from "react-router-dom";
import styles from "./App.module.css";
import { Profile } from "./components/ProfilePage/Profile";
import { AuthPage } from "./components/AuthPage/AuthPage";
import { useState } from "react";
import { useCookies } from "react-cookie";

function App() {
  const [open, setOpen] = useState(false);
  const [data, setData] = useState([]);
  const [message, setMessage] = useCookies(["messages"]);
  return (
    <>
      {!open && localStorage.length < 3 ? (
        <AuthPage setOpen={setOpen} />
      ) : (
        <>
          <div className={styles.container}>
            <Navbar />
            <Routes>
              <Route
                path="/profile"
                element={
                  <Profile
                    data={data}
                    setData={setData}
                    message={message}
                    setMessage={setMessage}
                  />
                }
              />
              <Route
                path="/"
                element={
                  <HomeModalPage
                    data={data}
                    setData={setData}
                    message={message}
                    setMessage={setMessage}
                  />
                }
              />
              <Route
                path="*"
                element={
                  <HomeModalPage
                    data={data}
                    setData={setData}
                    message={message}
                    setMessage={setMessage}
                  />
                }
              />
            </Routes>
            <RightSection />
          </div>
        </>
      )}
    </>
  );
}

export default App;
