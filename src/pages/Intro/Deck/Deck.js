import React, { useState } from 'react';
import styled from 'styled-components';

import { useSprings, animated, to as animatedTo } from 'react-spring';
import { useGesture } from 'react-use-gesture';
import img1 from './1.jpeg';
import img2 from './2.jpeg';
import img3 from './3.jpeg';

const cards = [img1, img2, img3];

// These two are just helpers, they curate spring data, values that are later being interpolated into css
const to = (i) => ({
  x: 0,
  y: i * -4,
  scale: 1,
  rot: -10 + Math.random() * 20,
  delay: i * 100,
});

const from = (i) => ({ x: 0, rot: 0, scale: 1.5, y: -1000 });

// This is being used down there in the view, it interpolates rotation and scale into a css transform
const trans = (r, s) =>
  `perspective(5000px) rotateX(30deg) rotateY(${
    r / 10
  }deg) rotateZ(${r}deg) scale(${s})`;

const Deck = () => {
  const [gone] = useState(() => new Set()); // The set flags all the cards that are flicked out
  const [props, set] = useSprings(cards.length, (i) => ({
    ...to(i),
    from: from(i),
  })); // Create a bunch of springs using the helpers above

  // Create a gesture, we're interested in down-state, delta (current-pos - click-pos), direction and velocity
  const bind = useGesture(
    ({
      args: [index],
      down,
      delta: [xDelta],
      distance,
      direction: [xDir],
      velocity,
    }) => {
      const trigger = velocity > 0.2; // If you flick hard enough it should trigger the card to fly out
      const dir = xDir < 0 ? -1 : 1; // Direction should either point left or right
      if (!down && trigger) gone.add(index); // If button/finger's up and trigger velocity is reached, we flag the card ready to fly out
      set((i) => {
        if (index !== i) return; // We're only interested in changing spring-data for the current spring
        const isGone = gone.has(index);
        const x = isGone ? (200 + window.innerWidth) * dir : down ? xDelta : 0; // When a card is gone it flys out left or right, otherwise goes back to zero
        const rot = xDelta / 100 + (isGone ? dir * 10 * velocity : 0); // How much the card tilts, flicking it harder makes it rotate faster
        const scale = down ? 2 : 1; // Active cards lift up a bit
        return {
          x,
          rot,
          scale,
          delay: undefined,
          config: { friction: 50, tension: down ? 800 : isGone ? 200 : 500 },
        };
      });
      if (!down && gone.size === cards.length)
        setTimeout(() => gone.clear() || set((i) => to(i)), 600);
    },
  );

  // Now we're just mapping the animated values to our view, that's it. Btw, this component only renders once. :-)
  return props.map(({ x, y, rot, scale }, i) => (
    <DeckWrapper id="deck">
      <animated.div
        key={i}
        style={{
          transform: animatedTo(
            [x, y],
            (x, y) => `translate3d(${x}px,${y}px,0)`,
          ),
        }}
      >
        {/* This is the card itself, we're binding our gesture to it (and inject its index so we know which is which) */}
        <animated.div
          {...bind(i)}
          style={{
            transform: animatedTo([rot, scale], trans),
            backgroundImage: `url(${cards[i]})`,
          }}
        />
      </animated.div>
    </DeckWrapper>
  ));
};

const DeckWrapper = styled.div`
  box-sizing: border-box;
  overscroll-behavior-y: contain;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background: lightblue;
  overflow: hidden;
  user-select: none;
  cursor: url('https://uploads.codesandbox.io/uploads/user/b3e56831-8b98-4fee-b941-0e27f39883ab/Ad1_-cursor.png')
      39 39,
    auto;
  > div {
    position: absolute;
    width: 250px;
    will-change: transform;
    display: flex;
    align-items: center;
    justify-content: center;
    ${({ theme }) => theme.device.mobile} {
      width: 0;
    }
  }
  > div > div {
    background-color: white;
    background-size: auto 85%;
    background-repeat: no-repeat;
    background-position: center center;
    width: 230px;
    max-width: 300px;
    height: 370px;
    max-height: 570px;
    will-change: transform;
    border-radius: 10px;
    box-shadow: 0 14px 150px -20px rgba(87, 62, 20, 0.03),
      0 10px 10px -20px rgba(87, 62, 20, 0.07);
  }
`;

export default Deck;
