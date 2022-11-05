import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../contexts";
import Signin from "./Signin";

const Home = () => {
  const {signedIn} = useContext(UserContext);

  return (
    <>
      {!signedIn ? (
        <Signin />
      ) : (
        <section className="min-h-[calc(100vh_-_4rem)]">
          <div className="bg-hero bg-center bg-cover bg-blend-darken text-white">
            <div className="h-screen md:h-[calc(100vh_-_4rem)] flex flex-col justify-center mx-4 md:ml-20">
              <h1 className="w-full md:max-w-[20ch] text-2xl md:text-5xl font-bold leading-loose mb-8">
                YOUR #1 NETWORKING PLATFORM WITH GREAT PEOPLE ACROSS THE GLOBE.
              </h1>
              <p className="mb-8 max-w-[50ch]">
                Stand a chance to elevate your career by meeting,
                collaborating, learning and growing with ballers all over the
                world{" "}
              </p>
              <Link to="/users">
                <button className="bg-white text-primary my-2 w-full md:w-fit rounded-lg px-4 md:px-20 py-2 font-bold hover:scale-95 transition duration-500">Find Friends</button>
              </Link>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default Home;
