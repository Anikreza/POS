import React from "react";
import '../../../style/payment.scss';
import FullCart from "../../card/contents/fullCart";
import '../../../style/items.scss'

const PaymentPopUp = () => {
    return (
        <div className='payment'>
            <div style={{display:"flex"}}>
                <div>
                    <FullCart/>
                </div>
                <div>

                </div>
            </div>
        </div>
    )
}

export default PaymentPopUp