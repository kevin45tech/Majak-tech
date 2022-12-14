import React from "react";
import Navbar from "../Navbar";
import training from "../../images/training.jpg";
const Training = () => {
  return (
    <section className="bg-grey">
      <div className="bg-black text-white h-full">
        <Navbar />
      </div>
      <div className="py-16 w-mobile md:w-container_width mx-auto  grid sm:grid-cols-2 gap-10">
        <div className="h-[250px] flex ">
          <img
            src={training}
            alt="training"
            className="rounded w-full object-cover"
          />
        </div>
        <div className="space-y-3">
          <h2 className="text-xl text-orange-400">Training</h2>
          <p>
            Computer-assisted language learning (CALL) is a method of teaching
            and learning that makes use of the Internet and other computer-based
            tools to present, reinforce, and evaluate the content being learned.
            It typically has a substantial amount of interactive content.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Training;
