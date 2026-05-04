import Hero from "../components/Hero";

const Home = ({ theme }) => {
  return (
    <main>
      <section id="home">
        <Hero theme={theme} />
      </section>
    </main>
  );
};


export default Home;
