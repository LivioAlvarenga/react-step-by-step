import AddCode from "./components/AddCode";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ResultCode from "./components/ResultCode";
import SubTitle from "./components/SubTitle";
import TitleBottomBorder from "./components/TitleBottomBorder";

function App() {
  const code = `
const name = 'Livio Alvarenga';
const element = <h1>Olá, {name}</h1>;
  `;
  const code1 = `
const element1 = <h1>2 + 2 = {2+2}</h1>;
  `;
  const code2 = `
function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

const user = {
  firstName: 'Livio',
  lastName: 'Alvarenga'
};

const element = (
  <p>
    Olá, {formatName(user)}!
  </p>
);
  `;

  const name = "Livio Alvarenga";
  const element = <h1>Olá, {name}</h1>;
  const element1 = <h1>2 + 2 = {2 + 2}</h1>;
  const user = {
    firstName: "Livio",
    lastName: "Alvarenga",
  };

  function formatName(user) {
    return user.firstName + " " + user.lastName;
  }

  return (
    <>
      <Header />
      <main className="min-h-screen px-5 lg:mx-auto lg:max-w-7xl lg:px-0">
        <article>
          <TitleBottomBorder borderBottomColor="bg-primaria" name="O que é JSX?" />
          <p className="my-3">
            JSX produz “elementos” do React, Criado pela equipe de desenvolvimento do
            React, o JSX é uma forma de criar elementos para serem utilizadas como
            templates de aplicações React. Basicamente, os elementos criados com o JSX são
            bem similares com código HTML e fornecem aos desenvolvedores uma forma mais
            simples e intuitiva de criar os componentes de uma aplicação. Porém, apesar de
            muito similar ao HTML, o JSX não é interpretado pelo navegador. Por este
            motivo, deve-se utilizar um transpilador para essa conversão. Atualmente, o
            mais conhecido deles é o Babel.
          </p>
        </article>
        <article>
          <SubTitle text="Incorporando Expressões em JSX" />
          <AddCode markdown={code} />
          <ResultCode element={element} />
          <p className="my-3">
            Você pode inserir qualquer expressão JavaScript válida dentro das chaves em
            JSX. Por exemplo: 2 + 2.
          </p>
          <AddCode markdown={code1} />
          <ResultCode element={element1} />
          <p className="my-3">
            Podemos usar funções também. Todas expressões JavaScript válidas.
          </p>
          <AddCode markdown={code2} />
          <ResultCode element={<p>{`Olá, ${formatName(user)}`}</p>} />
        </article>
      </main>
      {/* <aside>
        <p>1.O que é JSX?</p>
      </aside> */}
      <Footer />
    </>
  );
}

export default App;
