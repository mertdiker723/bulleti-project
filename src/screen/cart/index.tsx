import { useMemo } from "react";
import { useCartState } from "../../appContext";

import "./style.scss";

const Cart = () => {
    const stateUnit = useCartState();

    const { totalItems } = stateUnit || {};

    const totalCount = useMemo(() => {
        return totalItems.reduce((accumulator, item) => accumulator * +item.ratio, 1);

    }, [totalItems])

    return (
        <div className="cart">
            {
                totalItems.map(item => {
                    const { value, ratio } = item || {};
                    const { TYPE, C, N, NID } = value || {};
                    return <div className="cart__row" key={NID}> {TYPE} Kod: {C}  Maç: {N} <b>Oran: {ratio}</b></div>
                })
            }
            <div className="total-count">Toplam Tutar: <b>{totalCount.toFixed(2)} TL</b></div>
        </div>
    )
}

export default Cart