import React from "react";
import featuresData from "@/app/Data/FeaturesData";
import classes from "./MainHome.module.css";

const MainHome = () => {
  return (
    <>
      <p className={classes.main__description}>
        Our all-in-one app is designed to help merchants increase sales and
        improve the customer experience on their online stores. With a range of
        features and integrations, our app provides a user-friendly solution for
        businesses of all sizes.
      </p>
      <section className={classes.features}>
        <h2 className={classes.features__title}>App Features:</h2>

        {/* FEATURES */}
        {featuresData.map((feature, index) => (
          <div key={index} className={classes.features__content}>
            <span className={classes.features__counter}>{index + 1}</span>
            <h3>
              <span></span>
              {feature.title}
            </h3>
            <p>{feature.text}</p>
          </div>
        ))}
      </section>
    </>
  );
};

export default MainHome;
