import IconLink from "./components/IconLink";

function App() {
  return (
    <>
      <header className="h-16 w-screen bg-secundaria text-white">
        <div className="flex h-full items-center justify-between gap-2 px-5">
          <IconLink
            src="src/assets/images/react.svg"
            alt="React Logo"
            height="h-[25px]"
            title="React Boas Praticas"
          />
          <h1 className="font-sourceSans text-center text-lg font-bold">
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
      <main>
        <aside></aside>
      </main>
      <footer></footer>
    </>
  );
}

export default App;
