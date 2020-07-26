import Link from 'next/link';

const Header = () => (
  <nav class="navbar navbar-expand navbar-light bg-light mb-4">
    <Link href="/"><a class="navbar-brand">WA Unkown</a></Link>

    <div class="collapse navbar-collapse" id="navbarColor">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item">
          <Link href="/about"><a class="nav-link">About</a></Link>
        </li>
      </ul>
    </div>
  </nav>
);

export default Header;