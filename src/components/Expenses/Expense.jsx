import { useState } from 'react'
import './Expense.scss'
import ExpenseDate from './ExpenseDate'

const Expense = (props) => {
   const floatValue = parseFloat(props.amount).toFixed(2)


   return (
      <div className='expense'>
         <div className='section-container'>
            <div className="expenses-item">
            <ExpenseDate date={props.date}/>
               <div className="title">
                  <h1>{props.title}</h1>
                  <h1>P {floatValue}</h1>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Expense
