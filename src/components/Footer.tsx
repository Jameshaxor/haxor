export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p className="footer__text">
          &copy; {new Date().getFullYear()} — Built with obsession
        </p>
      </div>
    </footer>
  );
}
