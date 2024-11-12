import React from "react";
import PropTypes from "prop-types";

const RouterContext = React.createContext();

function Router(props) {
  const [activeRoute, setActiveRoute] = React.useState(
    () => window.location.pathname,
  );
  return (
    <RouterContext.Provider value={[activeRoute, setActiveRoute]} {...props} />
  );
}

Router.propTypes = {
  props: PropTypes.node,
};

function useRouter() {
  const context = React.useContext(RouterContext);
  if (context === undefined) {
    throw new Error("useRouter must be within a <Router /> Provider");
  }
  return context;
}

export { Router, useRouter };
