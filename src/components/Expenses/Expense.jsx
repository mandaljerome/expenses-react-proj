import './Expense.scss'
import ExpensesFilter from './ExpensesFilter'
import ExpenseList from './ExpenseList'
import { useEffect, useState } from 'react'

const Expense = (props) => {
    const [filterYear, setFilterYear] = useState('all')
    
    const datas = props.data

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


    useEffect(() => {
        props.onGetData(filteredData)
    },[filterYear,props.data])
    

    const selectedYear = (data) => {
        setFilterYear(data)
    }

    return (
        <div className='expense'>
            <ExpensesFilter onSelectedOption={selectedYear} />
            {filteredData.length == 0 ? <h1>No data found</h1> : expense}
        </div>
    )
}

export default Expense
