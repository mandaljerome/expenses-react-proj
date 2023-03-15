import './Expense.scss'

const Expense = () => {
   return (
      <div className='expense'>
         <div className='section-container'>
            <h1>Expenses Project</h1>
            <div className="expenses-item">
               <div className="date">
                  <span className='month'>August</span>
                  <span className='year'>2020</span>
                  <span className='day'>14</span>
               </div>

               <div className="title">
                  <h1> Birthday Party</h1>
                  <h1>P 2000.00</h1>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Expense
