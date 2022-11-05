import {useState, useEffect} from 'react'
import {Home, Navbar} from './components'
import { Friends, Friend, Profile, Explore, ErrorPage } from './pages';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { UserContext } from './contexts';
import {
  getRedirectResult,
  auth,
  signInWithRedirect,
  provider,
} from "./config";

function App() {
  const [signedIn, setSignedIn] = useState(false);
  const [user, setUser] = useState("");

  const handleSignin = (e) => {
    e.preventDefault();
    signInWithRedirect(auth, provider);
  };

  const handleSignout = (e) => {
    e.preventDefault();
    auth.signOut().then(() => alert("We're sorry to let you go"));
    setSignedIn(false);
};
  useEffect(() => {
    getRedirectResult(auth).then((result) => {
      // The signed-in user info.
      const user = result.user;
      if (result) {
        setSignedIn(true);
        setUser(user);
        alert(`Welcome to Alt Meet ${user.displayName}`);
      }
    });

  }, []);

  return (
    <div className="font-Inter">
      <UserContext.Provider value={{user, signedIn, handleSignin, handleSignout}}>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/users' element={<Friends />}>
            <Route path=':username' element={<Friend />} />
          </Route>
          <Route path='/profile' element={<Profile />} />
          <Route path='/explore' element={<Explore />} />
          <Route path='/*' element={<ErrorPage />} />
        </Routes>
      </UserContext.Provider>
    </div>
  );
}

export default App;
