import VitroLogo from "@assets/img/customers/vitro.png";
import PgwLogo from "@assets/img/customers/pgw.png";
import SaintGobainLogo from "@assets/img/customers/saintGobain.png";
import PilkingtonLogo from "@assets/img/customers/pilkington.png";
import IlpeaLogo from "@assets/img/customers/ilpea.png";
import AgcLogo from "@assets/img/customers/agc.png";
import UskLogo from "@assets/img/customers/usk.png";

import Iatf from "@assets/img/certificate/iatf.png";
import bureauVeritas from "@assets/img/certificate/bureauVeritas.png";

import EsIcon from "@assets/img/es.png";
import EnIcon from "@assets/img/en.png";

import { FiFacebook, FiLinkedin } from "react-icons/fi";

export const navigation = [
  {
    name: "Inicio",
    href: "/",
  },
  {
    name: "nosotros",
    href: "/about",
  },
  {
    name: "contacto",
    href: "/contact",
  },
];

export const translate = [
  {
    lan: "es",
    icon: EsIcon,
  },
  {
    lan: "en",
    icon: EnIcon,
  },
];

export const customers = [
  {
    name: "Vitro",
    img: VitroLogo,
    href: "https://www.vitro.com/",
  },
  {
    name: "PGW",
    img: PgwLogo,
    href: "https://www.buypgwautoglass.com/",
  },
  {
    name: "Saint-Gobain",
    img: SaintGobainLogo,
    href: "https://www.saint-gobain.com.mx/",
  },
  {
    name: "Pilkington",
    img: PilkingtonLogo,
    href: "https://www.pilkington.com/es-mx/mx",
  },
  {
    name: "Ilpea",
    img: IlpeaLogo,
    href: "https://www.ilpea.com/",
  },
  {
    name: "AGC",
    img: AgcLogo,
    href: "https://www.agc.com/en/",
  },
  {
    name: "USK",
    img: UskLogo,
    href: "http://usk.com.mx/",
  },
];

export const certificaton = [
  {
    name: "ISO IATF 16949:2016",
    icon: Iatf,
    href: "https://www.isotools.com.mx/iatf-169492016-sistemas-gestion-la-calidad-la-industria-del-automovil/",
  },
  {
    name: "Bureau Veritas Certificator",
    icon: bureauVeritas,
    href: "https://www.bureauveritas.com.mx/",
  },
];

export const socials = [
  {
    icon: <FiFacebook />,
    href: "https://www.facebook.com/Lagalm",
  },
  {
    icon: <FiLinkedin />,
    href: "https://mx.linkedin.com/in/eduardo-lag-68b8a4173",
  },
];
