import * as React from "react";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import HomeIcon from "@mui/icons-material/Home";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import GrainIcon from "@mui/icons-material/Grain";
import { Button } from "@mui/material";

import { connect } from "react-redux";

import "./css/header.css";

function Header(props) {
  console.log(props.show);

  const handleClick = () => {};

  return (
    <div id="header" role="presentation" onClick={handleClick}>
      <Breadcrumbs aria-label="breadcrumb">
        <div id="headerNav">
          <Link
            underline="hover"
            sx={{ display: "flex", alignItems: "center" }}
            color="inherit"
            href="/"
          >
            <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
            Hands Store
          </Link>

          <Link
            underline="hover"
            sx={{ display: "flex", alignItems: "center" }}
            color="inherit"
            href="/getting-started/installation/"
          >
            {/* <WhatshotIcon sx={{ mr: 0.5 }} fontSize="inherit" /> */}
            <Button
              color="inherit"
              onClick={() => {
                props.show();
              }}
            >
              CART({props.cart.length})
            </Button>
          </Link>
        </div>
      </Breadcrumbs>
    </div>
  );
}
function mapStateToProps(state) {
  return { cart: state.cart };
}

export default connect(mapStateToProps)(Header);
