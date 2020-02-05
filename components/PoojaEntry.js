import React, {useState} from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const PoojaEntry = ({ poojas }) => {

    const [data, setData] = useState([{
        "pooja": null,
        "date": null,
        "qty": 1,
        "price": null
    }]);

    const handleCreatePooja = () => {
        const newData = [...data, {
            "pooja": null,
            "date": null,
            "qty": 1,
            "price": null
        }];
       setData(newData)
    };

    const handleChangePooja = (x, selection) => {
        const d = [...data];
        d[x].pooja = poojas[selection].id;
        d[x].price = poojas[selection].price;
        setData(d);
    };

    const handleQtyChange = (x, value) => {
        const d = [...data];
        d[x].qty = value;
        setData(d);
    };

    const calculateTotal = () => {
        let s = 0;
        data.map(i => s += i.price * i.qty);
        return s;
    };

    console.log(data);

    const renderPoojaEntry = (p,i) => (
        <div className="card p-2 my-2">
            <div className="row m-0">
                <div className="col-6">
                    <div className="form-group">
                        <label>Name</label>
                        <input className="form-control" placeholder="Enter Name" />
                    </div>
                </div>
                <div className="col-6">
                    <div className="form-group">
                        <label>Nakshatram</label>
                        <input className="form-control" placeholder="Enter Name" />
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="form-group">
                        <label>Select Pooja</label>
                        <select
                            onChange={(e) => handleChangePooja(i, e.target.value)} value={p.pooja ? p.pooja: 'default'}
                            className="form-control"
                        >
                            <option disabled value="default">Select Pooja</option>
                            { poojas.map((p,i) =>
                                <option value={i}>
                                    {p.name} (Rs. {p.price})
                                </option>
                            )}
                        </select>
                    </div>
                </div>
                <div className="col-md-2">
                    <div className="form-group">
                        <label>Qty</label>
                        <input
                            onChange={(e) => handleQtyChange(i, e.target.value)}
                            value={i.qty}
                            className="form-control"
                            type="number"
                        />
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="form-group">
                        <label>Booking Date</label>
                        <div>
                            <DatePicker/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

    return (
        <div className="my-4 w-100">
            {data.map((p,i) => renderPoojaEntry(p,i))}
            <div
                onClick={handleCreatePooja}
                className="btn btn-primary"
            >
                Add Pooja
            </div>
            <div className="h3">
                Total: {calculateTotal()}
            </div>
        </div>
    )

};

export default PoojaEntry;
