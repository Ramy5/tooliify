import React from "react";
import classes from "./ExploreMore.module.css";
import Image from "next/image";

const ExploreMore = () => {
  return (
    <div className={classes.explore__more}>
      <Image src={"/mouse.svg"} alt="Explore more" width={100} height={100} />
      <p>Explore More</p>
    </div>
  );
};

export default ExploreMore;
