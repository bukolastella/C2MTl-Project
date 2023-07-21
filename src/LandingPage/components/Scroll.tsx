import { gsap } from "gsap";
import React, { FC, useLayoutEffect, useRef } from "react";
import { styled } from "styled-components";
import SplitType from "split-type";

interface Props {
  name: string;
}

const Scroll: FC<Props> = ({ name }) => {
  const container = useRef<HTMLDivElement>(null);
  const tl = useRef<GSAPTimeline>();

  useLayoutEffect(() => {
    const ctx = gsap.context((self) => {
      if (!self.selector) return;
      const wrapper = self.selector(`.wrapper-${name}`)[0];
      const scroll = self.selector(`.scroll-${name}`);
      const text = SplitType.create(`.scroll-${name}`);

      gsap.set(scroll, {
        transformOrigin: "50% 50% -50",
      });

      tl.current = gsap
        .timeline({
          scrollTrigger: {
            trigger: wrapper,
            scrub: true,
            start: "top 50%",
            end: "bottom 25%",
            // markers: true,
          },
        })
        .from(scroll, {
          rotationX: -100,
          duration: 2,
          ease: "none",
        })
        .from(
          text.chars,
          {
            opacity: 0,
            rotationX: 100,
            stagger: 0.5,
            transformOrigin: "left bottom",
            duration: 2,
            ease: "none",
          },
          "<"
        )
        .to(
          scroll,
          {
            y: -70,
            duration: 2,
            ease: "none",
          },
          "<+2"
        )
        .to(scroll, {
          rotationX: 100,
          duration: 4,
          ease: "none",
        })
        .to(
          text.chars,
          {
            opacity: 0,
            stagger: 0.5,
            transformOrigin: "left bottom",
            duration: 0.5,
            ease: "none",
          },
          "<"
        );
    }, container); // <- Scope!
    return () => ctx.revert(); // <- Cleanup!
  }, [name]);

  return (
    <Container ref={container}>
      <Wrapper className={`wrapper-${name}`}>
        <Text className={`scroll-${name}`}>{name}.</Text>
      </Wrapper>
    </Container>
  );
};

export default Scroll;

const Container = styled.div``;

const Wrapper = styled.div`
  background: linear-gradient(90deg, #ed6339, #fa5ca6 42%, #eb7d2e);
  display: flex;
  align-items: center;
  justify-content: center;
  perspective: 600px;
`;

const Text = styled.div`
  color: white;
  font-size: 6rem;
  font-size: 9.375rem;
`;
