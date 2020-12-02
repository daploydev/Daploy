import React from "react";
import { Grid, Typography, Button } from "@material-ui/core";
import Image from "next/image"
import Link from "next/link"

const Header = () => {
  return (
    <div width="100%">
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        style={{
          padding: "20px",
        }}
      >
        <Grid item xs={4}>
        <Link href="/">
        <a><Image src="/images/daploy-logo.png" width="1004px" height="281px"/></a></Link>
          <h2 align="center">a creative developer playground.</h2>
        </Grid>
      </Grid>
    </div>
  );
};

export default Header;
