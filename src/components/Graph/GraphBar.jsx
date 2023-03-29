import './GraphBar.scss'

const GraphBar = (props) => {
    const innerBarHeight = Math.round((props.value / props.maxValue) * 100)
    const barHeigt = innerBarHeight + '%'
    

    return (
        <div className='graph-bar'>
            <div className='bar'>
                <div className='outer-bar bars'></div>
                <div className="inner-bar bars" style={{height:barHeigt}}></div>
            </div>
            <div className="label">{props.label}</div>
        </div>
    )
}

export default GraphBar
