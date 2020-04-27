import React from "react";
import Navbar from "../_components/navbar/navbar";

export default function MainWrapper(props) {
    return (
        <div className="main-wraper">
            <Navbar />
            {props.children}
        </div>
    )
}