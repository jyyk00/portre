import React from "react";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import "./style.css";

function Home() {
    return (
        <div>
            <NavBar />
            <Bio/>
            <Footer />
        </div>
    )
}

export default Home;