export default function Header() {
  return (
    <header>
      <h1>Adrian Brown</h1>
      <button className="ham-menu">
        <svg viewBox="0 0 100 100" width="45" height="35">
          <rect class="line top" width="90" height="13" x="5" y="15" />
          <rect class="line middle" width="90" height="13" x="5" y="45" />
          <rect class="line bottom" width="90%" height="13" x="5" y="75" />
        </svg>
      </button>
    </header>
  );
}
