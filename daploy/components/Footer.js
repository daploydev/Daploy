import React from "react";
import { Container, Typography, Grid, Button } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

const StyledButton = withStyles({
  root: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    borderRadius: 3,
    border: 0,
    color: "white",
    height: 48,
    padding: "0 30px",
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
  },
  label: {
    textTransform: "capitalize",
  },
})(Button);

const Footer = () => {
  return (
    <div width="100%">
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        style={{
          backgroundImage:
            "linear-gradient( 112.1deg,  rgba(32,38,57,1) 11.4%, rgba(63,76,119,1) 70.2% );",
          padding: "20pX",
          color: "white",
        }}
      >
        <Grid item xs={3}>
          <h3>about</h3>
        </Grid>
        <Grid item xs={3}>
          <h3>contact</h3>
        </Grid>
      </Grid>
    </div>
  );
};

export default Footer;
