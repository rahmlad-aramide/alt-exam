import { useContext } from "react";
import { UserContext } from "../contexts";
import Signin from "./Signin";

const Profile = () => {
  const { user, signedIn, handleSignin, handleSignout } =
    useContext(UserContext);

  return (
    <>
      {!signedIn ? (
        <Signin />
      ) : (
        <div className="bg-gradient-to-tr from-primary to-secondary h-screen">
          <div className="h-[40vh] bg-[url('https://picsum.photos/1200/1200')] bg-cover bg-center">
            <p className="text-white ml-4 pt-20 md:pt-4 text-2xl font-semibold">
              My Profile
            </p>
          </div>
          <div className=" flex text-center flex-col">
            <div className="flex justify-center -mt-6">
              <img
                src={user?.photoURL}
                alt={user.displayName}
                className="rounded-full"
              />
            </div>
            <div className="text-white">
              <h1 className="font-bold text-lg">{user.displayName}</h1>
              <h4 className="font-light">{user.email}</h4>
              {signedIn ? (
                <p>Verified: {user.emailVerified ? "Yes" : "No"}</p>
              ) : (
                ""
              )}
            </div>
          </div>
          <div className="flex justify-center">
            {/* {signedIn ? (
              <button
                className="bg-white text-primary my-2 mx-8 md:mx-0 w-full md:w-fit rounded-lg px-4 md:px-20 py-2 font-bold hover:scale-95 transition duration-500"
                onClick={handleSignout}
              >
                SignOut
              </button>
            ) : (
              <button
                className="bg-white text-primary my-2 mx-8 md:mx-0 w-full md:w-fit rounded-lg px-4 md:px-20 py-2 font-bold hover:scale-95 transition duration-500"
                onClick={handleSignin}
              >
                SignIn
              </button>
            )} */}
            <button
                className="bg-white text-primary my-2 mx-8 md:mx-0 w-full md:w-fit rounded-lg px-4 md:px-20 py-2 font-bold hover:scale-95 transition duration-500"
                onClick={handleSignout}
              >
                SignOut
              </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Profile;
