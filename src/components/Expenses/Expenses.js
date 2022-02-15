import React, { useState }  from 'react';

import ExpensesFilter from '../Filter/ExpensesFilter';
import Card from '../UI/Card';
import './Expenses.css';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

const Expenses = (props) => {
  const [year, setYear] =useState('2019');

  const filterHandler= (yearData) =>{
    console.log('Expense.js')
    console.log(yearData);
    setYear(yearData);
    console.log(year);
  };
  const filteredExpenses = props.items.filter(item=>{
    return item.date.getFullYear().toString()===year
  });
  
  return (
    <div>
    
    <Card className="expenses">
    <ExpensesFilter selected= {year} onFilterChange= {filterHandler}/>
    <ExpensesChart expense= {filteredExpenses}/>
    <ExpensesList items={filteredExpenses} />
      
    </Card>
    </div>
  );
}

export default Expenses;