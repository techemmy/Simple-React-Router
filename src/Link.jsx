import PropTypes from "prop-types";
import { useRouter } from "./Router";
import { historyPush, historyReplace } from "./utils";

export default function Link({ to, replace, children }) {
  const [, setActiveRouter] = useRouter();

  const handleClick = (event) => {
    event.preventDefault();
    replace ? historyReplace(to) : historyPush(to);
    setActiveRouter(to);
  };

  return (
    <a href={to} onClick={handleClick}>
      {children}
    </a>
  );
}

Link.propTypes = {
  to: PropTypes.string.isRequired,
  replace: PropTypes.bool,
  children: PropTypes.node,
};
