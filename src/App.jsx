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
            date: new Date(2019, 4, 11),
            amount: 2500,
        },
        {
            id: 2,
            title: 'Duty Free',
            date: new Date(2023, 2, 19),
            amount: 1500,
        },
        {
            id: 3,
            title: 'Dinner',
            date: new Date(2023, 1, 16),
            amount: 2400,
        },
    ])

    const getDataHandler = (data) => {
        setDatas((prev) => {
            return [data, ...prev]
        })
    }
    

    return (
        <div className='App'>
            <Header />
            <NewExpense onGetData={getDataHandler} />
            <Expense data={datas}/>
        </div>
    )
}

export default App
