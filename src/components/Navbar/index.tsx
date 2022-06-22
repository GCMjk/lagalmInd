import Link from "next/link";

const Navbar = () => {
  const toggle = true;
  return (
    <header className="bg-white md:bg-transparent py-1 px-4 shadow-sm">
      <div className="container mx-auto md:flex md:items-center">
        <div
          className={
            "md:flex flex-col md:flex-row md:ml-auto mt-6 md:mt-0 space-y-6 md:space-y-0" +
            (toggle ? "flex" : "hidden")
          }
        >
          <Link href="/">
            <a className="menu__link">Inicio</a>
          </Link>

          <Link href="/about">
            <a className="menu__link">Nosotros</a>
          </Link>

          <Link href="/contact">
            <a className="menu__link">Contacto</a>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
