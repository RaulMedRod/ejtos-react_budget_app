import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const CurrencyDropdown = () => {
    const { currency, dispatch } = useContext(AppContext);

    const handleCurrencyChange = (event) => {
        dispatch({ type: 'CHG_CURRENCY', payload: event.target.value });
    };

    return (
        <div className="input-group mb-3">
            <div className="input-group-prepend">
                <label className="input-group-text" style={{ backgroundColor: 'lightgreen', color: 'white' }}>Currency</label>
            </div>
            <select
                className="custom-select"
                onChange={handleCurrencyChange}
                value={currency}
                style={{ backgroundColor: 'lightgreen', color: 'black' }}
            >
                <option value="£">£ Pound</option>
                <option value="$">$ Dollar</option>
                <option value="€">€ Euro</option>
                <option value="₹">₹ Ruppee</option>
            </select>
        </div>
    );
};

export default CurrencyDropdown;
