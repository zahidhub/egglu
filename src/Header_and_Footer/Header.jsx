import "./Header.css";
import logo from "../assets/eggluLogo.png";


function Header(){
    return(
        <header className = 'headerBackground headerSize'>

            <div>
                <img src={logo} alt='egglu logo' className='headerLogo' /> {/*holds the logo*/} 
            </div>

        </header>
    );
};

export default Header;