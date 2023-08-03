import React from "react";
import classes from "./Navigation.module.css";
import Link from "next/link";
import Image from "next/image";

const Navigation = () => {
  return (
    <nav className={classes.nav}>
      <ul className={classes.nav__list}>
        <li className={classes.nav__item}>
          <Link className={classes.nav__link} href="/?nav=about">
            About us
          </Link>
        </li>
        <li className={classes.nav__item}>
          <Link
            className={`${classes.nav__link} ${classes.nav__link__active}`}
            href="/?nav=all"
          >
            All in one
          </Link>
        </li>
        <li className={classes.nav__item}>
          <Link className={classes.nav__link} href="/?nav=partners">
            Our partners
          </Link>
        </li>
        <li className={classes.nav__item}>
          <Link className={classes.nav__link} href="/?nav=contact">
            contact us
          </Link>
        </li>
      </ul>
      <div className={classes.nav__underline}>
        <Image src={"/line.svg"} alt="underline" width={1013} height={0} />
      </div>
    </nav>
  );
};

export default Navigation;
