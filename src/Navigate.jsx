import PropTypes from "prop-types";
import { useRouter } from "./Router";
import { historyPush, historyReplace } from "./utils";
import React from "react";

export default function Navigate({ to, replace = false }) {
  const [, setActiveRoute] = useRouter();

  React.useEffect(() => {
    replace ? historyReplace(to) : historyPush(to);
    setActiveRoute(to);
  }, [to, replace, setActiveRoute]);

  return null;
}

Navigate.propTypes = {
  to: PropTypes.string.isRequired,
  replace: PropTypes.bool,
};
