import React from 'react'
import { useContext } from "react";
import { UserContext } from "../contexts";

const Signin = () => {
    const {handleSignin} = useContext(UserContext);

  return (
    <div className="bg-primary min-h-[calc(100vh_-_4rem)] bg-gradient-to-br from-primary to-secondary">
          <div className="flex justify-center align-center m-auto pt-5">
            <div className="min-h-[80vh] w-[80%] flex flex-col md:flex-row mx-auto">
              <div className="flex-col px-4 bg-[#EDE9F8] rounded-tl-lg rounded-bl-lg rounded-tr-lg rounded-br-lg md:rounded-tr-none md:rounded-br-none w-full md:w-1/2 h-full my-auto flex justify-center items-center">
                <h1 className="text-2xl font-bold text-center mb-4">
                  Welcome to Alt Meet by Rahmlad
                </h1>
                <div className="text-xl font-semibold text-center my-2">
                  Sign in to continue
                </div>
                <button
                  onClick={handleSignin}
                  className="my-4 transfer-primary flex items-center border p-1.5 rounded hover:scale-95 transition duration-500"
                >
                  <img
                    src="google.png"
                    alt="google signin"
                    className="w-8 px-1"
                  />{" "}
                  Sign in with Google
                </button>
                <div className="text-center mb-2 opacity-80">
                  By signing in, you agree to our terms of use.
                </div>
              </div>
              <div className="hidden md:flex flex-col bg-[#DFD7F6] rounded-tr-lg rounded-br-lg w-full md:w-1/2 h-full my-auto justify-center items-center">
                <div>
                  <img src="connect.png" alt="Alt Meet" className="" />
                </div>
              </div>
            </div>
          </div>
        </div>
  )
}

export default Signin