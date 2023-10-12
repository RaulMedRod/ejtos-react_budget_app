import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, dispatch, expenses, currency } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);

    const handleBudgetChange = (event) => {
        const newBudgetValue = parseInt(event.target.value, 10)
        if(event.target.value > 20000){
            alert("The budget cannot exceed 20,000")
            setNewBudget(20000);
            dispatch({ type: 'SET_BUDGET', payload: 20000 });
        } else if(newBudgetValue < getTotalExpenseCost()){
            alert("You cannot reduce the budget value lower than the spending")
        } 
        else {
            setNewBudget(newBudgetValue);
            dispatch({ type: 'SET_BUDGET', payload: newBudgetValue });
        }
    }
    const getTotalExpenseCost = () => {
        return expenses.reduce((total, expense) => total + expense.cost, 0);
    };

    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency}</span>
            <input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
        </div>
    );
};

export default Budget;
