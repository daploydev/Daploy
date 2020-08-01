import React from "react";
import { Grid } from "@material-ui/core";

const Header = () => {
  return (
    <div width="100%">
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        style={{
          backgroundColor: "background-color: rgba(0, 0, 0, 0.8);",
          padding: "20pX",
        }}
      >
        <Grid item xs={2}>
          <img src="/images/daploy-logo.png" width="300rem"></img>
        </Grid>
      </Grid>
    </div>
  );
};

export default Header;
