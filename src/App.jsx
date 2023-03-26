import './App.scss'
import Header from './Header'
import ExpenseList from './components/Expenses/ExpenseList'
import NewExpense from './components/NewExpenses/NewExpense'
import ExpensesFilter from './components/Expenses/ExpensesFilter'
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

    const [filterYear, setFilterYear] = useState('all')

    const filteredData =
        filterYear == 'all'
            ? datas.map((data) => data)
            : datas.filter((data) => data.date.getFullYear() == filterYear)

 

    const expense = filteredData.map((data) => {
        return (
            <ExpenseList
                key={data.id}
                title={data.title}
                date={data.date}
                amount={data.amount}
            />
        )
    })

    const getDataHandler = (data) => {
        setDatas((prev) => {
            return [data, ...prev]
        })
    }

    const selectedYear = (data) => {
        setFilterYear(data)
    }

    return (
        <div className='App'>
            <Header />
            <NewExpense onGetData={getDataHandler} />
            <ExpensesFilter onSelectedOption={selectedYear} />
            {filteredData.length == 0 ? <h1>No data found</h1> : expense}
        </div>
    )
}

export default App
