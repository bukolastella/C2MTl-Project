import React from "react";
import Hero from "./components/Hero";
import DateSection from "./components/DateSection";
import Scroll from "./components/Scroll";
import { styled } from "styled-components";

const LandingPage = () => {
  return (
    <>
      <Hero />

      <ScrollContainer>
        <Scroll name="Share" />
        <Scroll name="Connect" />
        <Scroll name="Learn" />
      </ScrollContainer>

      <DateSection />
    </>
  );
};

export default LandingPage;

const ScrollContainer = styled.div`
  padding: 400px 0 200px 0;
  background: linear-gradient(90deg, #ed6339, #fa5ca6 42%, #eb7d2e);
`;
