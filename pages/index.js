import { Footer, Navbar } from '../components';
import { About, Explore, Feedback, GetStarted, Hero, Insights, WhyUs, World } from '../sections';

const Home = () => {
  return (
    <div className="overflow-hidden" style={{ backgroundColor: "#171717" }}>
      <Navbar />
      <Hero />
      <div className="relative">
        <About />
        <Explore />
      </div>
      <div className="relative">
        <GetStarted />
        <div className="gradient-04 z-0" />
        <WhyUs />
      </div>
      <World />
      <div className="relative">
        <div className="gradient-04 z-0" />
        <Feedback />
      </div>
      <Footer />
    </div>
  )
};

export default Home;
