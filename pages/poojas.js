import React, { useState, useEffect } from 'react';
import dataFetch from "../utils/dataFetch";
import Base from "../components/Base";

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

    const renderPoojaCard = (pooja) =>
        <div className="col-md-4 col-lg-3 col-6 p-2">
            <div className="card p-4">
                <h3>{pooja.name}</h3>
                <div className="font-weight-bold">Rs. {pooja.price}</div>
            </div>
        </div>;

    const showLoading =
        <div>
            <h1>Loading</h1>
        </div>;

    return (
        <Base>
            <div className="p-4">
                <h1 className="mb-2">Poojas</h1>
                <div className="row m-0">
                    { isLoaded ? data.map(i => renderPoojaCard(i)) : showLoading }
                </div>
            </div>
        </Base>
    )

};

export default Poojas;