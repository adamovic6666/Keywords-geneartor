import userNavigationNotificationImage from '../../../../assets/user-notification.png';
import UserNavigationImage from './UserNavigationImage/UserNavigationImage';
import classes from './UserNavigation.module.css';

const UserNavigation = props => {
    return <div className={classes['user-navigation']}>
        <img src={userNavigationNotificationImage} alt='user-notification'/>
        <div className={classes['user-navigation__img']}>
            <UserNavigationImage />
        </div>
        <select defaultValue="Ilia Bortnikov">
            <option>Ilia Bortnikov</option>
        </select>
    </div>
}

export default UserNavigation;