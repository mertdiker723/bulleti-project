import { createContext, useContext, useReducer } from "react";
import { BulletinType } from "./types";

export type IncomingPropsType = {
    value: BulletinType;
    ratio: string;
}
export type InitialStateType = {
    totalItems: IncomingPropsType[],
}

const initialState: InitialStateType = {
    totalItems: [],
};

const CartContext = createContext<InitialStateType | undefined>(initialState);
const DispatchContext = createContext<React.Dispatch<{ type: string; payload: IncomingPropsType }>>(() => { });


const cartEditReducer = (state: InitialStateType, action: { type: string; payload: IncomingPropsType }): InitialStateType => {
    const { type, payload } = action;
    switch (type) {
        case "VAL": {
            if (state.totalItems.find(x => x.value.NID === payload.value.NID && x.ratio === payload.ratio)) {
                return {
                    totalItems: state.totalItems.filter(item => item.value.NID !== action.payload.value.NID),
                };
            }
            if (state.totalItems.find(x => x.value.NID === payload.value.NID)) {
                return {
                    totalItems: state.totalItems.map(item => item.value.NID === payload.value.NID ? payload : item)
                }
            }
            return {
                totalItems: [
                    ...state.totalItems,
                    {
                        value: payload.value,
                        ratio: payload.ratio
                    }
                ]
            };
        }
        default:
            return state;
    }
};

export const CartEditContextProvider = ({ children }: { children: React.ReactNode; }) => {
    const [state, dispatch] = useReducer(cartEditReducer, initialState);

    return (
        <CartContext.Provider value={state}>
            <DispatchContext.Provider value={dispatch}>
                {children}
            </DispatchContext.Provider>
        </CartContext.Provider>
    );
};

export function useCartState() {
    const context = useContext(CartContext);
    if (context === undefined) {
        throw new Error("useCartState must be used within a CartEditContext");
    }
    return context;
}

export function useStateDispatch() {
    const context = useContext(DispatchContext);
    if (context === undefined) {
        throw new Error("useStateDispatch must be used within a CartEditContext");
    }
    return (action: { type: string; payload: IncomingPropsType }) => context(action);
}