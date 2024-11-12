import React from "react";
import PropTypes from "prop-types";
import { useRouter } from "./Router";

function matchPath(pathname, options) {
  const { exact = false, path } = options;
  if (!path) {
    return {
      path: null,
      url: pathname,
      isExact: true,
    };
  }

  const match = new RegExp(`^${path}`).exec(pathname);
  if (!match) {
    return null;
  }

  const url = match[0];
  const isExact = pathname === url;
  if (exact && !isExact) {
    return null;
  }

  return {
    path,
    url,
    isExact,
  };
}

export default function Route({ path, exact, component, element }) {
  const match = matchPath(window.location.pathname, { path, exact });
  const [, setActiveRoute] = useRouter();

  React.useEffect(() => {
    const handlePop = (e) => {
      setActiveRoute(e.target.location.pathname);
    };
    window.addEventListener("popstate", handlePop);
    return () => window.removeEventListener("popstate", handlePop);
  }, [setActiveRoute]);

  if (!match) return null;

  if (component) {
    return React.createElement(component, { match });
  }

  if (element) {
    return element({ match });
  }

  return null;
}

Route.propTypes = {
  path: PropTypes.string,
  exact: PropTypes.bool,
  component: PropTypes.func,
  element: PropTypes.func,
};
