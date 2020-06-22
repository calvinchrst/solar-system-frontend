import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// nodejs library to set properties for components
import PropTypes from "prop-types";

// core components
import GridContainer from "template/components/Grid/GridContainer.js";
import GridItem from "template/components/Grid/GridItem.js";

import styles from "template/assets/jss/material-kit-react/views/landingPageSections/productStyle.js";

const useStyles = makeStyles(styles);

export default function Section(props) {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>{props.title}</h2>
          <h5 className={classes.description}>{props.description}</h5>
          <h5 className={classes.value}>{props.value}</h5>
        </GridItem>
      </GridContainer>
      <div></div>
    </div>
  );
}

Section.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  value: PropTypes.string,
};
