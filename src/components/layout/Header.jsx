import React from "react";
import Button from "../button/Button";
import { useAuth } from "../../contexts/auth-context";

const menuLinks = [
  {
    url: "/",
    title: "Home",
  },
  {
    url: "/blog",
    title: "Blog",
  },
  {
    url: "/contact",
    title: "Contact",
  },
];

const Header = () => {
  const { userInfo } = useAuth();
  console.log(userInfo);
  return (
    <header className="py-8 px-0">
      <div className="container-main">
        <div className="flex items-center">
          <a href="/">
            <img
              src="logo1.png"
              alt="monkey-blogging"
              className="block max-w-[50px]"
            />
          </a>
          <ul className="flex items-center gap-5 ml-10 font-medium">
            {menuLinks.map((item) => (
              <li key={item.title}>
                <a href={item.url}>{item.title}</a>
              </li>
            ))}
          </ul>
          <div className="search relative ml-auto mr-4 p-[10px] border border-[#ccc] rounded-lg w-full max-w-[320px] flex items-center">
            <input
              type="text"
              placeholder="Search posts ..."
              className="flex-1 pl-2 pr-[45px]"
            />
            <span className="absolute top-1/2 -translate-y-1/2 right-4 font-medium">
              <svg
                width="18"
                height="17"
                viewBox="0 0 18 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <ellipse
                  cx="7.66669"
                  cy="7.05161"
                  rx="6.66669"
                  ry="6.05161"
                  stroke="#999999"
                  strokeWidth="1.5"
                />
                <path
                  d="M17.0001 15.5237L15.2223 13.9099L14.3334 13.103L12.5557 11.4893"
                  stroke="#999999"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <path
                  d="M11.6665 12.2964C12.9671 12.1544 13.3706 11.8067 13.4443 10.6826"
                  stroke="#999999"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </div>
          {!userInfo ? (
            <div className="max-w-[200px] ml-10">
              <Button style={{ height: 46 }} to="/sign-up">
                Sign Up
              </Button>
            </div>
          ) : (
            <div>
              <span>Welcome back, </span>
              <strong>{userInfo?.displayName}</strong>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
