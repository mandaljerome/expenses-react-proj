import './ExpenseDate.scss'

const ExpenseDate = (props) => {
    const month = props.date.toLocaleString('default', { month: 'long' });
    const day = props.date.getDate()
    const year = props.date.getFullYear()
    return (
        <div className='date'>
            <span className='month'>{month}</span>
            <span className='year'>{year}</span>
            <span className='day'>{day}</span>
        </div>
    )
}

export default ExpenseDate
