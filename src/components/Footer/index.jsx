import IconList from "../IconList";
import icons from "./iconLink.json";

export default function Footer() {
  return (
    <footer className="w-full bg-secundaria text-base text-white">
      <div className="flex flex-wrap items-center justify-center gap-5 px-5 py-7 lg:mx-auto lg:max-w-7xl lg:justify-between lg:px-0">
        <IconList icons={icons} />

        <p className="">
          Desenvolvido por{" "}
          <a
            className="text-primaria"
            href="https://www.livioalvarenga.com"
            target="_blank"
            rel="noreferrer"
            title="Portfolio Livio Alvarenga"
          >
            Livio Alvarenga
          </a>
          .
        </p>
      </div>
    </footer>
  );
}
