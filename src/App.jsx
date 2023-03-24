import './App.scss'
import Header from './Header'
import Expense from './components/Expenses/Expense'
import NewExpense from './components/NewExpenses/NewExpense'
import { useState } from 'react'

// import data from './data.jsx'

function App() {

   const [datas, setDatas] = useState([
      {
         id: 1,
         title: 'Birthday Party',
         date: new Date(2019,4,11),
         amount: 2500
      },
      {
         id: 2,
         title: 'Duty Free',
         date: new Date(2023,2,19),
         amount: 1500
      },
      {
         id: 3,
         title: 'Dinner',
         date: new Date(2023,1,16),
         amount: 2400
      }
   ])

   // const expensesData = datas
   const expense = datas.map((data) => (
      <Expense
         key={data.id}
         title={data.title}
         date={data.date}
         amount={data.amount}
      />
   ))
   
   const getDataHandler = (data) => {
      setDatas((prev) => {
        return [...prev, data
        ]}) 
   }

   return (
      <div className='App'>
         <Header />
         <NewExpense onGetData={getDataHandler}/>
         {expense}
      </div>
   )
}

export default App
