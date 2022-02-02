import React, {useEffect, useCallback} from "react";
import {useStateValue} from "../states/StateProvider";

let Cart=[];
const CleanBasket = () => {

    const [{basket}] = useStateValue();
    const getCleanBasket = useCallback(
        async () => {
            const unique = [];
            basket.map(x => unique.filter(a => a.productId === x.productId).length > 0 ? null : unique.push(x));
            Cart=unique;
        },
        [basket],
    );

    useEffect(() => {
        getCleanBasket().then(r => r)
    }, [getCleanBasket]);

    return (
        <div>

        </div>
    )
}

export {CleanBasket, Cart}