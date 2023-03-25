import { Link } from 'react-router-dom';
import { trpc } from '../../utils/trpc';

function Home() {
  const { data } = trpc.hello.useQuery();

  return (
    <section className="center gap-4">
      <h1 className="head">Home Page</h1>
      <div className="flex items-center gap-4">
        <Link to="/about">
          <p className="py-4 px-10 border-[#414141] border-4 font-mono rounded-xl">
            /about
          </p>
        </Link>
        <Link to="/foo">
          <p className="py-4 px-10 border-[#414141] border-4 font-mono rounded-xl">
            /foo
          </p>
        </Link>
      </div>
      <p>{data?.hello}</p>
    </section>
  );
}
export default Home;
