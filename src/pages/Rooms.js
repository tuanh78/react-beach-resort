import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import RoomContainer from "../components/RoomContainer";

export const Rooms = () => {
  return (
    <>
      <Hero hero="roomsHero">
        <Banner title="our rooms" subtitle="return home">
          <Link to="/" className="btn-primary">
            our rooms
          </Link>
        </Banner>
      </Hero>
      <RoomContainer />
    </>
  );
};
