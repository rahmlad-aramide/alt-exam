import React, { useState, useEffect} from "react";
import axios from "axios";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { Link, Outlet } from "react-router-dom";

const Friends = () => {

  let pages = 10;
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    let results = 12;
    const dataUrl = `https://randomuser.me/api/?page=${page}&results=${results}&seed=dev`;
    axios.get(dataUrl).then((response) => {
      setLoading(false);
      const userData = response.data.results;
      setUsers(userData);
    });
  }, [page]);
  

  return (
    <div
      className={`h-[calc(100vh_-_4rem)] overflow-y-auto text-white bg-gradient-to-br from-primary to-secondary`}
    >
      <div className=" mt-20 md:mt-0">
        <Outlet />
        <div
          className={`mb-6 text-white`}
        >
          <h1
            className={`flex justify-center mt-6 text-3xl font-medium text-white`}
          >
            Find Friends
          </h1>
          <h3 className="mx-4 md:mx-20 text-center">
            Meet new people and connect
          </h3>
        </div>
        <div className="">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 bg-[#ffffff20] backdrop-blur items-center p-4">
            {loading ? (
              <div className="flex justify-center w-screen h-1/2 mt-[20vh] mb-[20vh]">
                <img src='WheelWhite.svg' alt="Loading" />
              </div>
            ) : (
              users?.map((user) => (
                <div
                  key={user.login.uuid}
                  className={`bg-white text-primary flex flex-col items-center p-4 rounded shadow-md border`}
                >
                  <div className="">
                    <LazyLoadImage
                      effect="blur"
                      placeholderSrc={user.picture.thumbnail}
                      src={user.picture.large}
                      alt={user.name.first}
                      className="rounded-full w-24 h-24"
                    />
                  </div>
                  <div className="flex flex-col items-center">
                    <h2 className="font-medium">
                      {user
                        ? `${user.name.title} ${user.name.first} ${user.name.last}`
                        : "Unknown User"}
                    </h2>
                    <p className="font-light text-primary">
                      {user ? `@${user.login.username}` : "user@user.com"}
                    </p>
                    <p
                      className={`font-light text-sm my-1 text-primary opacity-70`}
                    >
                      {user.location.country}
                    </p>
                    <Link
                      to={user.login.username}
                      className="border w-full text-center rounded hover:scale-95 transition duration-500"
                    >
                      View Profile
                    </Link>
                  </div>
                </div>
              ))
            )}
          </div>
          <div className="flex justify-center">
            <div className="p-2">
              <button
                className={`w-fit px-1 mx-1 rounded border ${
                  page <= 1 ? "opacity-50" : ""
                }`}
                aria-disabled={page <= 1}
                disabled={page <= 1}
                onClick={() => setPage((prev) => prev - 1)}
              >
                prev
              </button>
              {Array.from({ length: pages }, (_, index) => index + 1).map(
                (button) => (
                  <button
                    className="w-7 rounded border mx-1"
                    onClick={() => setPage(button)}
                  >
                    {button}
                  </button>
                )
              )}
              <button
                className={`w-fit px-1 mx-1 rounded border ${
                  page >= pages ? "opacity-50" : ""
                }`}
                aria-disabled={page >= pages}
                disabled={page >= pages}
                onClick={() => setPage((prev) => prev + 1)}
              >
                next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Friends;
