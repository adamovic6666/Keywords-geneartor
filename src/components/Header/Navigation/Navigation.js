import Logo from '../../../Logo/Logo';
import UserNavigation from './UserNavigation.js/UserNavigation';
import classes from './Navigation.module.css';

const Navigation = props => {
    return <div className={classes.navigation}>
        <Logo />
        <UserNavigation />
    </div>
}

export default Navigation;