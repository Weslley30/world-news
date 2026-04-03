import Image from "next/image";
import Link from "next/link";

type SpaceHomeProp = {
  name: string;
  url: string;
  imgsrc?: string;
};

export const rotas = [
  {
    name: "Home",
    url: "/",
  },
  {
    name: "Nóticias",
    url: "/new",
  },
  {
    name: "FAQ",
    url: "/faq",
  },
  {
    name: "Contato",
    url: "/contact",
  },
  {
    name: "Ao Vivo",
    url: "/live",
    imgsrc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCC_XZED4fA4zd36veHto9p-1ltXQH4SFsHw&s",
  },
  {
    name: "Politica",
    url: "/politics",
  },
  {
    name: "Dinheiro",
    url: "/money",
  },
  {
    name: "Mundo",
    url: "/world",
  },
  {
    name: "Agro",
    url: "/agro",
  },
  {
    name: "Esporte",
    url: "/sport",
  },
  {
    name: "Viagem & Gastronomia",
    url: "/travel-gastronomy",
  },
];

export const SpaceHome = ({ name, url, imgsrc }: SpaceHomeProp) => {
  return (
    <Link
      className="mr-[25px] text-[14px] text-[white] no-underline hover:!text-[#8c8a8a] focus:outline-none focus:ring-2 focus:ring-white"
      href={url}
    >
      {imgsrc && (
        <Image
          className="mr-[6px]"
          src={imgsrc}
          width={12}
          height={12}
          alt=""
        />
      )}{" "}
      {name}
    </Link>
  );
};
