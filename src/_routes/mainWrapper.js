import React from "react";
import Navbar from "../_components/navbar";
import BasicModal from "../_components/modal/basic";
import { useSelector } from "react-redux";
export const MainWrapper = (props) => {
    const store = useSelector(state => state);
    return (
        <div className="main-wraper">
            {store.modal.show ? <BasicModal show={store.modal.show} content={store.modal.content} size={store.modal.size} /> : null}
            <Navbar />
            {props.children}
        </div>
    )
}