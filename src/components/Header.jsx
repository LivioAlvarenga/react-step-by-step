import React from "react";
import IconLink from "./IconLink";

export default function Header() {
  return (
    <header className="h-16 w-full bg-secundaria text-white">
      <div className="flex h-full items-center justify-between gap-2 px-5 lg:mx-auto lg:max-w-7xl lg:px-0">
        <IconLink
          src="src/assets/images/react.svg"
          alt="React Logo"
          height="h-[25px]"
          title="React Boas Praticas"
        />
        <h1 className="font-sourceSans text-center text-lg font-bold lg:text-2xl">
          React Boas Praticas
        </h1>
        <IconLink
          src="src/assets/images/github.svg"
          alt="Github Logo"
          height="h-[25px]"
          title="github Livio Alvarenga"
          href="https://github.com/LivioAlvarenga"
        />
      </div>
    </header>
  );
}
