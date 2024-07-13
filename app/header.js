export default function Header() {
  return (
    <header>
      <h1>Adrian Brown</h1>
      <button className="ham-menu">
        <svg viewBox="0 0 100 100" width="45" height="35">
          <rect className="line top" width="90" height="13" x="5" y="15" />
          <rect className="line middle" width="90" height="13" x="5" y="45" />
          <rect className="line bottom" width="90%" height="13" x="5" y="75" />
        </svg>
      </button>
    </header>
  );
}
