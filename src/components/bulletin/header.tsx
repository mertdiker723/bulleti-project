
import "./style.scss"

const Header = ({ bulletinCount }: { bulletinCount: number }) => {
    return (
        <thead>
            <tr>
                <th className="table-header-row">Event Count: {bulletinCount}</th>
                <th className="table-header-row">Yorumlar</th>
                <th className="table-header-row" />
                <th className="table-header-row">1</th>
                <th className="table-header-row">x</th>
                <th className="table-header-row">2</th>
                <th className="table-header-row">Alt</th>
                <th className="table-header-row">Üst</th>
                <th className="table-header-row">H1</th>
                <th className="table-header-row">1</th>
                <th className="table-header-row">x</th>
                <th className="table-header-row">2</th>
                <th className="table-header-row">H2</th>
                <th className="table-header-row">1-X</th>
                <th className="table-header-row">1-2</th>
                <th className="table-header-row">X-2</th>
                <th className="table-header-row">Var</th>
                <th className="table-header-row">Yok</th>
                <th className="table-header-row">+99</th>
            </tr>
        </thead>
    )
}

export default Header