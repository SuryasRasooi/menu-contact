import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Meta, Home as HomePage, Modal } from "../components";

const Home = () => {
  return (
    <AnimatePresence>
      <Meta
        title="Suryas Rasooi"
        description="Tasty on a Another Level"
        url="https://suryasrasooi.com"
        image="/faviconsur.png"
      />
      <HomePage />
    </AnimatePresence>
  );
};

export default Home;
