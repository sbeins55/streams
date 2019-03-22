import React from "react";
import { BrowserRouter, Link, Route } from "react-router-dom";

const PageOne = () => {
  return (
    <div>
      <Link to={"/pagetwo"}>Navigate to Page Two</Link>
    </div>
  );
};

const PageTwo = () => {
  return (
    <div>
      <Link to={"/"}>Navigate to Page One</Link>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Route path={"/"} exact component={PageOne} />
          <Route path={"/pageTwo"} component={PageTwo} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
