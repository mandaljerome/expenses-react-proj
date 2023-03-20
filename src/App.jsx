import './App.scss'
import Header from './components/Header'
import Expense from './components/Expense'
import data from './data.jsx'

function App() {
   const expensesData = data.data.expense
   const expense = expensesData.map(data => 
     <Expense key={data.id} title={data.title} date={data.date} amount={data.amount}/>
   )
   
   return (
      <div className='App'>
         <Header />
         {expense}
      </div>
   )
}

export default App
