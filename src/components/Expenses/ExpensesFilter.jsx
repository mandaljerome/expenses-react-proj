import './ExpensesFilter.scss'

const ExpensesFilter = (props) => {
    const selectChangeHandler = (e) => {
        props.onSelectedOption(e.target.value)
    }
    
    return (
        <div className='expenses-filter'>
            <div className='section-container'>
                <h3>Filter by year</h3>
                <select onChange={selectChangeHandler}>
                    <option value='all'>All Year</option>
                    <option value='2019'>2019</option>
                    <option value='2020'>2020</option>
                    <option value='2021'>2021</option>
                    <option value='2022'>2022</option>
                    <option value='2023'>2023</option>
                </select>
            </div>
        </div>
    )
}

export default ExpensesFilter
