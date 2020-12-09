import React from "react";
import Navbar from "../_components/navbar/navbar";
import ModalWrapper from "../_components/modal/modal";
import { useSelector } from "react-redux";
export const MainWrapper = (props) => {
    const store = useSelector(state => state);
    return (
        <div className="main-wraper">
            {store.modal.show ? <ModalWrapper show={store.modal.show} content={store.modal.content} size={store.modal.size} /> : null}
            <Navbar />
            {props.children}
        </div>
    )
}