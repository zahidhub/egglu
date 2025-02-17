import "./Header.css";

function Header(){
    return(
        <header className = 'headerBackground headerSize'>
            <div>
                <img src='src/assets/eggluLogo.png' alt='egglu logo' className='headerLogo' />
            </div>
        </header>
    );
};

export default Header;