import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useMatch
} from "react-router-dom";

import Home from "./pages/home";
import Settings from "./pages/settings";
import About from "./pages/about";

// This example show how you could create a custom
// <Link> that renders something special when the URL
// is the same as the one the <Link> points to.

export default function CustomLinkExample() {
  return (
    <Router basename="/demo-app/">
      <div>
        <OldSchoolMenuLink
          activeOnlyWhenExact={true}
          to="/"
          label="Home"
        />
        <OldSchoolMenuLink to="/about" label="About" />
        <OldSchoolMenuLink to="/settings" label="Settings" />

        <hr />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

function OldSchoolMenuLink({ label, to, activeOnlyWhenExact }) {
  let match = useMatch({
    path: to,
    exact: activeOnlyWhenExact
  });

  return (
    <div className={match ? "active" : ""}>
      {match && "> "}
      <Link to={to}>{label}</Link>
    </div>
  );
}
