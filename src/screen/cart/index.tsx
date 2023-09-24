import { useCartState } from "../../appContext";

const Cart = () => {
    const stateUnit = useCartState();

    console.log(stateUnit);
    const { totalItems } = stateUnit || {};
    return (
        <div>
            {
                totalItems.map(item => {
                    const { value, ratio } = item || {};
                    const { TYPE, C, N, NID } = value || {};
                    return <div key={NID}> {TYPE} Kod: {C}  Maç: {N} <b>Oran: {ratio}</b></div>
                })
            }

        </div>
    )
}

export default Cart