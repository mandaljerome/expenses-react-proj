import './NewExpenseForm.scss'
import { useState } from 'react'

const NewExpenseForm = (props) => {
   const [inputData, setInputData] = useState({
      title: '',
      amount: '',
      date: '',
   })

   const inputChange = (event) => {
      setInputData((prev) => {
         return {
            ...prev,
            [event.target.name]: event.target.value,
         }
      })
   }

   const submitHandler = (event) => {
      event.preventDefault()
      const dataSumbitted = {
         ...inputData,
         id: Math.random() * 100,
         date: new Date(inputData.date),
      }
      props.onGetData(dataSumbitted)
      setInputData({ title: '', amount: '', date: '' })
   }

   return (
      <div className='new-expense-form'>
         <form onSubmit={submitHandler}>
            <div className='inputs'>
               <div className='form-control'>
                  <label>Title</label>
                  <input
                     type='text'
                     name='title'
                     value={inputData.title}
                     onChange={inputChange}
                  />
               </div>
               <div className='form-control'>
                  <label>Amount</label>
                  <input
                     type='number'
                     name='amount'
                     value={inputData.amount}
                     onChange={inputChange}
                  />
               </div>
               <div className='form-control'>
                  <label>Date</label>
                  <input
                     type='date'
                     name='date'
                     min='2019-01-01'
                     value={inputData.date}
                     max='2025-12-31'
                     onChange={inputChange}
                  />
               </div>
            </div>
            <button type='submit'>Add Expenses</button>
         </form>
      </div>
   )
}

export default NewExpenseForm
