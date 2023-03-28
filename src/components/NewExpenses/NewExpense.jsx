import './NewExpense.scss'
import NewExpenseForm from './NewExpenseForm'

const NewExpense = (props) => {

  const getDataHandler = (data) => {
    props.onGetData(data)
  }

  return (
    <div className='new-expens section-container'>
            <NewExpenseForm onGetData={getDataHandler}/>
    </div>
  )
}

export default NewExpense