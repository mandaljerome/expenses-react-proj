import './Header.scss'

const Header = () => {
    return (
        <div className='header'>
            <div className='section-container'>
                <img src='src/assets/main-logo.png' alt='main-logo' />
                <ul>
                    <li>
                        <a href=''>
                            <i className='fa-brands fa-behance'></i>
                        </a>
                    </li>
                    <li>
                        <a href=''>
                            <i className='fa-brands fa-github'></i>
                        </a>
                    </li>
                    <li>
                        <a href=''>
                            <i className='fa-solid fa-earth-asia'></i>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Header
