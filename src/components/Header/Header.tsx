import React from "react"
import styles from "./Header.module.css"
import { Logo, CampGladiator } from '../../images';

type HeaderProps = {
    pageName: String;
}

export const Header = ({ pageName}: HeaderProps) => (
    <div className={styles.header}>
        <img src={Logo} alt="Logo" className={styles.logo} />
        <img src={CampGladiator} alt= "CampGladiator" />
        {pageName}
    </div>
);
