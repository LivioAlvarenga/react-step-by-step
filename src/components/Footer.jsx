import icons from "../data/footer.json";

export default function Footer() {
  return (
    <footer className="w-full bg-secundaria text-base text-white">
      <div className="flex flex-wrap items-center justify-center gap-5 px-5 py-5 lg:mx-auto lg:max-w-7xl lg:justify-between lg:px-0">
        <ul className="mb-8 flex flex-wrap items-center justify-center gap-7 lg:mb-0">
          {icons.map((icon) => {
            return (
              <li className="group lg:hover:animate-bounce" key={icon.id}>
                <a href={icon.href} target="_blank" rel="noreferrer" title={icon.title}>
                  <svg
                    className=" fill-white duration-500 ease-in-out group-hover:lg:fill-primaria"
                    width={icon.width}
                    height={icon.height}
                    viewBox={icon.viewBox}
                  >
                    <path d={icon.path} />
                  </svg>
                </a>
              </li>
            );
          })}
        </ul>
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
