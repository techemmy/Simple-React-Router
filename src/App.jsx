import Link from "./Link";
import Route from "./Route";
import { Router } from "./Router";

const Home = () => <h2>Home</h2>;
// const Home = () => {
//   return <Navigate to="/topics" />;
// };

const About = () => <h2>About</h2>;
const Topic = ({ topicId }) => <h3>{topicId}</h3>;

const Topics = ({ match }) => {
  const items = [
    { name: "Rendering with React", slug: "rendering" },
    { name: "Components", slug: "components" },
    { name: "Props v. State", slug: "props-v-state" },
  ];

  return (
    <div>
      <h2>Topics</h2>
      <ul>
        {items.map(({ name, slug }) => (
          <li key={name}>
            <Link to={`${match.url}/${slug}`}>{name}</Link>
          </li>
        ))}
      </ul>
      {items.map(({ name, slug }) => (
        <Route
          key={name}
          path={`${match.path}/${slug}`}
          element={() => <Topic topicId={name} />}
        />
      ))}
      <Route
        exact
        path={match.url}
        element={() => <h3>Please select a topic.</h3>}
      />
    </div>
  );
};

export default function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/topics">Topics</Link>
          </li>
        </ul>

        <hr />

        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/topics" component={Topics} />
      </div>
    </Router>
  );
}
