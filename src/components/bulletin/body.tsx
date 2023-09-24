import { Fragment } from 'react'

// Context
import { useStateDispatch, useCartState } from '../../appContext';

// Types
import { BulletinType } from "../../types";


const Body = ({ bulletin }: { bulletin: BulletinType[] }) => {
    const dispatch = useStateDispatch();
    const stateUnit = useCartState();

    const handleChange = (item: BulletinType, ratio: string) => {
        const payload = {
            ...stateUnit,
            value: item,
            ratio
        };
        dispatch({
            type: "VAL",
            payload
        });
    }

    const selectedCheckItemHandler = (item: BulletinType, ratioItem: string) => {
        return stateUnit.totalItems.find(x => x.value.NID === item.NID && x.ratio === ratioItem) ? "selected" : "";
    }
    return (
        <tbody>
            {
                bulletin?.map((item, index) => {
                    return (
                        <Fragment key={index}>
                            <tr>
                                <td className="table-body-row first-line">{item.D} {item.DAY} {item.LN}</td>
                                <td className="table-body-row">Yorumlar</td>
                                <td />
                                <td className="table-body-row">1</td>
                                <td className="table-body-row">x</td>
                                <td className="table-body-row">2</td>
                                <td className="table-body-row">Alt</td>
                                <td className="table-body-row">Üst</td>
                                <td className="table-body-row" />
                                <td className="table-body-row">1</td>
                                <td className="table-body-row">x</td>
                                <td className="table-body-row">2</td>
                                <td className="table-body-row">H2</td>
                                <td className="table-body-row">1-X</td>
                                <td className="table-body-row">1-2</td>
                                <td className="table-body-row">X-2</td>
                                <td className="table-body-row">Var</td>
                                <td className="table-body-row">Yok</td>
                                <td className="table-body-row">+99</td>
                            </tr>
                            <tr>
                                <td className="table-body-row first-line"><b>{item.C}</b> {item.N}</td>
                                <td className="table-body-row">Yorumlar</td>
                                <td className="table-body-row">4</td>
                                <td className={`table-body-row ${selectedCheckItemHandler(item, item.OCG["1"].OC["0"].O)}`} onClick={() => handleChange(item, item.OCG["1"].OC["0"].O)}>{item.OCG["1"].OC["0"].O}</td>
                                <td className={`table-body-row ${selectedCheckItemHandler(item, item.OCG["1"].OC["1"].O)}`} onClick={() => handleChange(item, item.OCG["1"].OC["1"].O)}>{item.OCG["1"].OC["1"].O}</td>
                                <td className="table-body-row" />
                                <td className={`table-body-row ${selectedCheckItemHandler(item, item.OCG["5"].OC["25"].O)}`} onClick={() => handleChange(item, item.OCG["5"].OC["25"].O)}>{item.OCG["5"].OC["25"].O}</td>
                                <td className={`table-body-row ${selectedCheckItemHandler(item, item.OCG["5"].OC["26"].O)}`} onClick={() => handleChange(item, item.OCG["5"].OC["26"].O)}>{item.OCG["5"].OC["26"].O}</td>
                                <td className="table-body-row">H1</td>
                                <td className="table-body-row" />
                                <td className="table-body-row" />
                                <td className="table-body-row" />
                                <td className="table-body-row" />
                                <td className={`table-body-row ${selectedCheckItemHandler(item, item.OCG["2"].OC["3"].O)}`} onClick={() => handleChange(item, item.OCG["2"].OC["3"].O)}>{item.OCG["2"].OC["3"].O}</td>
                                <td className={`table-body-row ${selectedCheckItemHandler(item, item.OCG["2"].OC["4"].O)}`} onClick={() => handleChange(item, item.OCG["2"].OC["4"].O)}>{item.OCG["2"].OC["4"].O}</td>
                                <td className={`table-body-row ${selectedCheckItemHandler(item, item.OCG["2"].OC["5"].O)}`} onClick={() => handleChange(item, item.OCG["2"].OC["5"].O)}>{item.OCG["2"].OC["5"].O}</td>
                                <td className="table-body-row" />
                                <td className="table-body-row" />
                                <td className="table-body-row">3</td>
                            </tr>
                        </Fragment>
                    )
                })
            }
        </tbody>
    )
}

export default Body