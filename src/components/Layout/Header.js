import { Fragment } from "react";

import headerImage from '../../assets/header.jpg';
import classes from './Header.module.css';
import HeaderCartButton from "./HeaderCartButton";
const Header = props =>{



    return(
        <Fragment>
            <header className={classes.header}>
                <h1>CricKart</h1>
                <HeaderCartButton onClick={props.onShowCart}/>
            </header>
            <div className={classes['main-image']}>
                <img src={headerImage} alt="Cricket equipments"/>
            </div>
        </Fragment>
    );
};

export default Header;