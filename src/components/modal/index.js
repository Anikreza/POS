import React, {useState, useEffect} from "react";
import Modal from "react-modal";
import {useStateValue} from "../../states/StateProvider";
import PaymentPopUp from "./payment";

const ModalContent = () => {

    const [{modal},dispatch] = useStateValue();

    function closeModal() {
        dispatch({
            type:"SetModal",
            item:false
        })
    }

    const customStyles = {
        content: {
            top: '50%',
            left: '58%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
        },
    };

    return (
        <div>
            <Modal
                isOpen={modal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <button onClick={closeModal}>close</button>
               <PaymentPopUp/>
            </Modal>


        </div>
    )
}

export default ModalContent