import React from "react";
import Navbar from "../_components/navbar/navbar";
import ModalWrapper from "../_components/modal/basic";
import { useSelector } from "react-redux";
export const MainWrapper = (props) => {
    const store = useSelector(state => state);
    return (
        <main>
            {store.modal.show ? <ModalWrapper show={store.modal.show} content={store.modal.content} size={store.modal.size} /> : null}
            <Navbar />
            <div className="page-content">
                {props.children}
            </div>

        </main>
    )
}