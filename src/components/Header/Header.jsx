import react from 'react'
import './Header.css'

function Header() {
    // TODO - logic for calculating total


    return(
        <header className='App-header' >
        <h1 className='App-title'>Prime Pizza</h1>

        <div>
            {/* <img src="" alt="" /> */}
            <h2>Total: {/* total calculated value */}</h2>
        </div>
        </header>

    )
}

export default Header;