import { Link } from 'react-router-dom';
import Github from './icons/Github';

function Navbar() {
  return (
    <header className="p-6 px-14 flex justify-between items-center">
      <h1 className="text-xl font-bold">
        <Link to="/">React .</Link>
      </h1>
      <nav className="flex items-center gap-4">
        <Link to="https://zipy.live/snowin/github" target="_blank">
          <Github />
        </Link>
      </nav>
    </header>
  );
}
export default Navbar;
