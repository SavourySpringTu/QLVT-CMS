import React from "react";
import Nav from "./Nav"
import { useLocation } from "react-router-dom";
import ListNhanVien from "../components/ListNhanVien.jsx"
import FormNhanVien from "../components/FormNhanVien.jsx"
import "tailwindcss/tailwind.css";

const Home = () => {
    const location = useLocation();
    const data = location.state;
    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(data)
    }
    return (<>
        <head>
            <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
        </head>
        <body>
            <Nav></Nav>
            <ListNhanVien></ListNhanVien>
        </body>
    </>)
}
export default Home;