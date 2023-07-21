import { gsap } from "gsap";
import React, { useLayoutEffect, useRef } from "react";
import { styled } from "styled-components";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const DateSection = () => {
  const container = useRef<HTMLDivElement>(null);
  const tl = useRef<GSAPTimeline>();

  // useLayoutEffect(() => {
  //   const ctx = gsap.context((self) => {
  //     if (!self.selector) return;
  //     const wrapper = self.selector(".wrapper")[0];
  //     const left = self.selector(".left");
  //     const right = self.selector(".right")[0];

  //     gsap.defaults({ duration: 1 });

  //     tl.current = gsap
  //       .timeline({
  //         scrollTrigger: {
  //           trigger: wrapper,
  //           start: "top 25%",
  //           end: "+=100",
  //           toggleActions: "restart none none reverse",
  //           markers: true,
  //           // scrub: 0.5,
  //           pin: true,
  //         },
  //       })
  //       .from(left, { y: 200 })
  //       .from(right, { y: 400 });
  //   }, container);

  //   return () => ctx.revert();
  // }, []);

  return (
    <W>
      <Container>
        <LeftSection>
          <LeftTextBox>
            <LeftTextFlexxer>
              <Text>May</Text>
              <Text>2</Text>
            </LeftTextFlexxer>
            <Text>2023</Text>
          </LeftTextBox>
        </LeftSection>
        <RightSection>
          <RightTextBox>
            <Text>4-26</Text>
          </RightTextBox>
        </RightSection>
      </Container>
    </W>
  );
};

export default DateSection;

const W = styled.div`
  /* padding-bottom: 9000px; */
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  /* height: 100vh; */
  height: max-content;
  /* padding-bottom: 9000px; */
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
  display: flex;
  justify-content: flex-start;
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
