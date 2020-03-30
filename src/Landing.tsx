import React from "react";
import { Link } from "@reach/router";

const Landing = ({ path }: { path: string }) => {
  return (
    <div className="App-header">
      landing page
      <Link to="/">home page</Link>
    </div>
  );
};

export default Landing;
