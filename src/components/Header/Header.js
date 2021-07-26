import classes from './Header.module.css';
import Navigation from './Navigation/Navigation';

const Header = props => {
    return <header className={classes.header}>
        <Navigation />
    </header>
}

export default Header;