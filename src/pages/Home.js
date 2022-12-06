import LinkButton from "../components/LinkButton";

function Home() {
  return (
    <div className="container-home">
      <h1>Library App</h1>
      <p className="text-home">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam omnis
        eos qui maiores architecto tempora veritatis sed ipsa veniam, provident
        mollitia nisi amet, excepturi quo atque quia error consequatur culpa?
      </p>
      <LinkButton
        className="seelibrary-button"
        link="books"
        text="See library"
      />
    </div>
  );
}

export default Home;
