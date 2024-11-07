import items from "./items"
import BtnContainer from "../btn_container"
import "../style.css"

//Create a Table row component

import "./index.css"

function ShopKeeperApp(){
    return <div>
<BtnContainer/>
        <table>
            <thead>
                <th>no</th>
                <th>Name</th>
                <th>Unit_price</th>
                <th>Quantity</th>
                <th>Total_Price</th>
            </thead>
            <tbody>
    {items.map((item, index) => {
        const Total_Price = item.unit_cost * item.qty;
        const ref = Total_Price.toLocaleString()
        return (
            <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>{item.unit_cost}</td>
                <td>{item.qty}</td>
                <td>{ref}</td>
            </tr>
        );
    })}
</tbody>

        </table>
    </div>
}


export default ShopKeeperApp