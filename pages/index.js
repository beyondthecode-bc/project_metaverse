import { Footer, Navbar } from '../components';
import { About, Explore, Feedback, GetStarted, Hero, Insights, WhyUs, Referrer } from '../sections';

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
        <div className="gradient-03 z-0" />
        <WhyUs />
      </div>
      <Referrer />
      <div className="relative">
        <div className="gradient-03 z-0" />
        <Feedback />
      </div>
      <Footer />
    </div>
  )
};

export default Home;
