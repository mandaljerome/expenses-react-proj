import './App.scss'
import Header from './Header'
import Expense from './components/Expenses/Expense'
import NewExpense from './components/NewExpenses/NewExpense'
import data from './data.jsx'

function App() {
   const expensesData = data.data.expense
   const expense = expensesData.map(data => 
     <Expense key={data.id} title={data.title} date={data.date} amount={data.amount}/>
   )
   
   return (
      <div className='App'>
         <Header />
         <NewExpense />
         {expense}
      </div>
   )
}

export default App
