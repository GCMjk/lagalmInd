import Link from "next/link";

const Footer = () => {
  return (
    <footer>
      <div>
        <Link href="/job">
          <a>Bolsa de trabajo</a>
        </Link>
      </div>
      <div>
        <p>Lagalm 2022 @ Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
