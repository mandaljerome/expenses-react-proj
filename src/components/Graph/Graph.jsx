import { useEffect, useState } from 'react'
import './Graph.scss'
import GraphBar from './GraphBar'


const Graph = (props) => {
    const expensesValue = [
        { month: 'Jan', value: 0 },
        { month: 'Feb', value: 0 },
        { month: 'Mar', value: 0 },
        { month: 'Apr', value: 0 },
        { month: 'May', value: 0 },
        { month: 'Jun', value: 0 },
        { month: 'Jul', value: 0 },
        { month: 'Aug', value: 0 },
        { month: 'Sep', value: 0 },
        { month: 'Oct', value: 0 },
        { month: 'Nov', value: 0 },
        { month: 'Dec', value: 0 },
    ]
    
 

    props.dataFilter.forEach((item, idx) => {
        const month = item.date.getMonth()

        expensesValue[month].value += item.amount
    })

    const filterValue = expensesValue.map((data) => {
        return data.value
    })

    const maxValue = Math.max(...filterValue)

    return (
        <div className='graph section-container'>
            <div className='container'>
                {expensesValue.map((data) => {
                    return (
                        <GraphBar
                            key={data.month}
                            label={data.month}
                            value={data.value}
                            maxValue={maxValue}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default Graph
