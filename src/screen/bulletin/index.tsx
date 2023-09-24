import { useEffect, useReducer } from "react";
import axios from "axios";

// Components
import Header from "../../components/bulletin/header";
import Body from "../../components/bulletin/body";

// Types
import { BulletinType } from "../../types";

// Context
import { useCartState } from "../../appContext";

// Assets
import "./style.scss"
import Cart from "../cart";

type BulletinReducerProps = {
    errorMessage: string;
    bulletin: BulletinType[];
    loading: boolean;
}


const Bulletin = () => {
    const { totalItems } = useCartState();

    const [state, setState] = useReducer((currentState: Partial<BulletinReducerProps>, newState: Partial<BulletinReducerProps>) => ({ ...currentState, ...newState }), {
        errorMessage: "",
        bulletin: [],
        loading: false
    });

    const { errorMessage, bulletin, loading } = state;

    useEffect(() => {
        setState({
            loading: true
        })
        axios.get<BulletinType[]>("https://nesine-case-study.onrender.com/bets").then(res => {
            setState({
                bulletin: res.data.slice(0, 50), // will be changed
                loading: false
            })
        }).catch(err => {
            if (err instanceof Error) {
                const errorMessageString = err.message.toString();
                setState({
                    errorMessage: errorMessageString,
                    loading: false
                })
            }
        })
    }, []);
    return (
        <div className="container">
            {loading && <div>loading...</div>}
            {errorMessage && <div>{errorMessage}</div>}
            {
                bulletin && bulletin?.length > 0 && (
                    <table className="table">
                        <Header bulletinCount={bulletin.length} />
                        <Body bulletin={bulletin} />
                    </table>
                )
            }
            {
                totalItems && totalItems.length > 0 && <div className="cart-item"><Cart /></div>
            }
        </div>
    )
}

export default Bulletin