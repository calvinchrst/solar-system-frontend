import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// nodejs library to set properties for components
import PropTypes from "prop-types";

// @material-ui/icons

// core components
import Header from "template/components/Header/Header.js";
import Footer from "components/LandingPage/Footer/Footer.js";
import GridContainer from "template/components/Grid/GridContainer.js";
import GridItem from "template/components/Grid/GridItem.js";
import Parallax from "template/components/Parallax/Parallax.js";

import styles from "template/assets/jss/material-kit-react/views/landingPage.js";

// Sections for this page
import Section from "./Sections/Section.js";

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function LandingPage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  const sunCircumferenceTitle = `Circumference of the sun (in ${props.sunCircumferenceUnit})`;
  return (
    <div>
      <Header
        color="transparent"
        routes={dashboardRoutes}
        brand="Naluri Solar System"
        fixed
        changeColorOnScroll={{
          height: 400,
          color: "white",
        }}
        {...rest}
      />
      <Parallax filter image={require("assets/img/solar-system-landing.jpg")}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <h1 className={classes.title}>
                Let's understand our Solar System.
              </h1>
              <br />
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <Section
            title="Value of Pi"
            description="Our server is continuously calculating the value of pi with increasing accuracy"
            value={props.pi}
          />
          <Section
            title={sunCircumferenceTitle}
            description="The circumference of the sun calculated with the most accurate pi value"
            value={props.sunCircumference}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}

LandingPage.propTypes = {
  pi: PropTypes.string,
  sunCircumference: PropTypes.string,
  sunCircumferenceUnit: PropTypes.string,
};
