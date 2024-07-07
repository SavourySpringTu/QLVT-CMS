import React from "react";
import Nav from "../components/Nav";
import ListNhanVien from "../components/ListNhanVien.jsx";
import "tailwindcss/tailwind.css";

const Home = () => {
  return (
    <>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
      </head>
      <body>
        <div>
          <Nav></Nav>
        </div>
        <div>
          <ListNhanVien></ListNhanVien>
        </div>
      </body>
    </>
  );
};
export default Home;
