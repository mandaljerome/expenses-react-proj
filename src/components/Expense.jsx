import './Expense.scss'
import ExpenseDate from './ExpenseDate'

const Expense = (props) => {
   return (
      <div className='expense'>
         <div className='section-container'>
            <div className="expenses-item">
            <ExpenseDate date={props.date}/>
               <div className="title">
                  <h1>{props.title}</h1>
                  <h1>{props.amount}</h1>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Expense
