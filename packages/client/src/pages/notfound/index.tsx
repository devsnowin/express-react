import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <section className="center">
      <h1 className="head">Not Found :(</h1>
      <Link to="/" className="underline">
        Go Back
      </Link>
    </section>
  );
}
export default NotFound;
