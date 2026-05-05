import Hero from "../components/Hero";
import HomeAdditions from "../components/HomeAdditions";

const Home = ({ theme }) => {
  return (
    <main>
      <section id="home">
        <Hero theme={theme} />
      </section>
      <HomeAdditions theme={theme} />
    </main>
  );
};


export default Home;
