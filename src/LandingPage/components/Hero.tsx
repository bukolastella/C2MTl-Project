import { useLayoutEffect, useRef } from "react";
import { styled } from "styled-components";
import { gsap } from "gsap";
import SplitType from "split-type";

const Hero = () => {
  const container = useRef<HTMLDivElement>(null);
  const tl = useRef<GSAPTimeline>();

  useLayoutEffect(() => {
    const ctx = gsap.context((self) => {
      // const boxes = self.selector && self.selector(".box");
      const text = SplitType.create(".box");

      tl.current = gsap.timeline().from(text.chars, {
        opacity: 0,
        rotationX: 100,
        stagger: 0.1,
        transformOrigin: "left bottom",
        duration: 1,
        ease: "power2.out",
      });
    }, container); // <- Scope!
    return () => ctx.revert(); // <- Cleanup!
  }, []);

  return (
    <Container ref={container}>
      <LeftSection>
        <LeftTextBox>
          <Text className="box">C2MTL</Text>
          <LeftTextFlexxer>
            <Text className="box">
              12
              <sup>th</sup>
            </Text>
            <Text className="box">e</Text>
          </LeftTextFlexxer>
        </LeftTextBox>
      </LeftSection>
      <RightSection>
        <RightTextBox>
          <Text className="box">dition</Text>
        </RightTextBox>
      </RightSection>
    </Container>
  );
};

export default Hero;

const Container = styled.div`
  display: flex;
  justify-content: center;
  height: 100vh;
`;

const Section = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

const LeftSection = styled(Section)`
  background: linear-gradient(90deg, #ed6339, #fa5ca6 42%, #eb7d2e);
`;

const RightSection = styled(Section)`
  background: linear-gradient(137.82deg, #1974e8 3.56%, #2a28a5 98.56%);
`;

const Boxer = styled.div`
  height: max-content;
`;

const Text = styled.div`
  color: white;
  font-size: 10.9375rem;
  font-weight: 500;
`;

const LeftTextBox = styled(Boxer)`
  background-color: black;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

const RightTextBox = styled(Boxer)`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

const LeftTextFlexxer = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
`;
