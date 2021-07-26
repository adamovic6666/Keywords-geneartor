import Header from '../Header/Header';
//import Main from './Main/Main';
//import Card from '../../UI/Card/Card';

const Layout = props => {
    return <div>
        <Header />
        {props.children}
    </div>
}

export default Layout;