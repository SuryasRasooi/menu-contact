import { useState } from "react";
import { HomeComponent } from "./index.styled";
import { Background, Navbar, Modal, Titles, Footer } from "../index";

const homeVariant = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const Home = () => {
  const [animate, setAnimate] = useState(false);
  return (
    <>
      <HomeComponent
        variants={homeVariant}
        initial="hidden"
        animate="visible"
        transition={{ delay: 1, duration: 1 }}
      >
        <Navbar />
        <Background />
        <Titles setAnimate={setAnimate} animate={animate} />
        {animate && <Modal setAnimate={setAnimate} animate={animate} />}
        <Footer />
      </HomeComponent>
    </>
  );
};

export default Home;
