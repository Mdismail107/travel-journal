import GlobeIcon   from '../assets/Globe1.svg'
import './header.css'

function Header(){
    return(
        <div className='Header-container'>
            <img src={GlobeIcon} alt="Logo" className='Header-logo' />
            <h1>my travel journal.</h1>
        </div>
    )
}

export default Header