import Link from "next/link";

const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
    <div className="container">
      <Link href="/">
        <a className="navbar-brand">Portafolio</a>
      </Link>
      <div className='col-md-offset-4'>
      <Link href="/intereses">
        <a className="navbar-brand">
          Intereses
        </a>
      </Link>
      <Link href="/github">
        <a className="navbar-brand">GitHub</a>
      </Link>
      </div>
    </div>
  </nav>
);

export default Navbar;
