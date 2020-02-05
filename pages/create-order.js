import React, { useState, useEffect } from 'react';
import dataFetch from "../utils/dataFetch";
import Base from "../components/Base";
import PoojaEntry from "../components/PoojaEntry";

const Poojas = () => {

    const [isLoaded, setLoaded] = useState(false);
    const [data, setData] = useState(false);
    const [isQueried, setQueried] = useState(false);

    const query = `{
    listPoojas
      {
        id
        name
        price
      }
    }`;

    const getPoojas = async () => await dataFetch({ query });


    useEffect(() => {
        if(!isQueried)
        {
            getPoojas().then(response => {
                setQueried(true);
                if (!Object.prototype.hasOwnProperty.call(response, 'errors')) {
                    setData(response.data.listPoojas);
                    setLoaded(true);
                }
            })
        }
    });




    return (
        <Base>
            <div className="container py-4">
                <div className="row m-0">
                    <div className="card w-100 p-4">
                        <h1 className="mb-2">Create Order</h1>
                        <div className="form-group">
                            <label>Name</label>
                            <input className="form-control" placeholder="Enter Name" />
                        </div>
                        <div className="form-group">
                            <label>Nakshatram</label>
                            <input className="form-control" placeholder="Enter Name" />
                        </div>
                    </div>
                    { isLoaded ? <PoojaEntry poojas={data} /> : null }
                </div>
            </div>
        </Base>
    )

};

export default Poojas;