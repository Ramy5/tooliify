import Image from "next/image";
import Link from "next/link";
import React from "react";
import classes from "./Links.module.css";

const Links = () => {
  return (
    <ul className={classes.links}>
      <li className={classes.links__item}>
        <Link href="/">
          <Image
            className={classes.links__logo__icon}
            src={"/Logo.svg"}
            width={50}
            height={60}
            alt="Logo"
          />
        </Link>
      </li>
      <li className={`${classes.links__item} ${classes.links__active}`}>
        <Link href="/">Home</Link>
      </li>
      <li className={classes.links__item}>
        <Link href="/plugins">Plugins</Link>
      </li>
      <li className={classes.links__item}>
        <Link href="/about">About us</Link>
      </li>
      <li className={classes.links__item}>
        <Link href="/contact">Contact us</Link>
      </li>
      <li className={classes.links__item}>
        <Link href="/packages">Packages</Link>
      </li>
    </ul>
  );
};

export default Links;
