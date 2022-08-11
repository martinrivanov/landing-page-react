import "../styles.css";
import Nav from "./Nav";

export default function Header() {
  return (
    <div className="header">
      <Nav />
      <header>
        <h1 className="title">Lorem</h1>
        <p className="description">Express yourself</p>
      </header>
    </div>
  );
}
