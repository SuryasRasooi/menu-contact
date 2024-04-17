import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Meta, Home as HomePage, Modal } from "../components";

const Home = () => {
  return (
    <AnimatePresence>
      <Meta
        title="MagigPropAI"
        description="Home sh*t made a lot easier"
        url="https://magicpropai.com"
        image="/favicon.png"
      />
      <HomePage />
    </AnimatePresence>
  );
};

export default Home;
