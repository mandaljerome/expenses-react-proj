import './NewExpenseForm.scss'

const NewExpenseForm = () => {
    return (
        <div className='new-expense-form'>
            <form action='submit'>
                <div className='inputs'>
                    <div className='form-control'>
                        <label>Title</label>
                        <input type='text' />
                    </div>
                    <div className='form-control'>
                        <label>Amount</label>
                        <input type='number' />
                    </div>
                    <div className='form-control'>
                        <label>Date</label>
                        <input type='date' min='2020-01-01' max='2025-12-31' />
                    </div>
                </div>
                <button type='submit'>Add Expenses</button>
            </form>
        </div>
    )
}

export default NewExpenseForm
