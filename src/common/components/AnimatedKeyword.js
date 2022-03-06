import { useState, useEffect, useRef } from 'react';
import Matter from 'matter-js';
import { MyPetKeywordsData } from './MyPetKeywordsData';

export const AnimatedKeyword = () => {
  const [keywordBalls, setKeywordBalls] = useState(MyPetKeywordsData);
  const [clickedKeywords, setClickedKeywords] = useState([]);
  const scene = useRef(null);
  const canvasWidth = 870;
  const canvasHeight = 350;
  useEffect(() => {
    const Engine = Matter.Engine;
    const Render = Matter.Render;
    const Runner = Matter.Runner;
    const Composite = Matter.Composite;
    const MouseConstraint = Matter.MouseConstraint;
    const Mouse = Matter.Mouse;
    const Bodies = Matter.Bodies;

    const engine = Engine.create();
    const world = engine.world;
    engine.gravity.y = 0.04;

    const render = Render.create({
      element: scene.current,
      engine: engine,
      options: {
        width: canvasWidth,
        height: canvasHeight,
        wireframes: false,
        background: 'var(-white)',
      },
    });

    Render.run(render);

    const runner = Runner.create();
    Runner.run(runner, engine);

    Composite.add(world, [
      Bodies.rectangle(canvasWidth / 2, 0, canvasWidth, 10, {
        isStatic: true,
        render: { fillStyle: 'var(-white)' },
      }),
      Bodies.rectangle(canvasWidth / 2, canvasHeight, canvasWidth, 10, {
        isStatic: true,
        render: { fillStyle: 'var(-white)' },
      }),
      Bodies.rectangle(canvasWidth, canvasHeight / 2, 10, canvasHeight, {
        isStatic: true,
        render: { fillStyle: 'var(-white)' },
      }),
      Bodies.rectangle(0, canvasHeight / 2, 10, canvasHeight, {
        isStatic: true,
        render: { fillStyle: 'var(-white)' },
      }),
    ]);

    const stack = [];
    for (let i = 0; i < keywordBalls.length; i++) {
      const keywordBall = keywordBalls[i];
      const keywordBallBody = Bodies.circle(
        keywordBall['x'],
        keywordBall['y'],
        keywordBall['radius'],
        {
          restitution: 0.6,
          friction: 0.1,
          label: keywordBall['keyword'],
          render: {
            sprite: {
              texture: keywordBall['img'],
            },
          },
        },
      );
      stack.push(keywordBallBody);
    }

    Composite.add(world, [...stack]);

    const mouse = Mouse.create(render.canvas);
    const mouseConstraint = MouseConstraint.create(engine, {
      mouse: mouse,
      constraint: {
        stiffness: 0.2,
        render: {
          visible: true,
        },
      },
    });

    Matter.Events.on(mouseConstraint, 'mousedown', function (event) {
      if (event.source?.body?.id) {
        const bodyId = event.source.body.id;
        const clickedBody = Composite.get(world, bodyId, 'body');
        const clickedBodyRef = keywordBalls[bodyId - 5];
        const bodyLabel = clickedBodyRef['keyword'];
        if (clickedBodyRef['isClicked']) {
          clickedBody.render.sprite.texture = clickedBodyRef['img'];
          Matter.Body.scale(clickedBody, 80 / 100, 80 / 100);
          setClickedKeywords((prevState) => {
            return prevState.filter((ele) => ele !== bodyLabel);
          });
        } else {
          clickedBody.render.sprite.texture = clickedBodyRef['clickedImg'];
          Matter.Body.scale(clickedBody, 100 / 80, 100 / 80);
          setClickedKeywords((prevState) => {
            return [...prevState, bodyLabel];
          });
        }
        let newArr = [...keywordBalls];
        newArr[bodyId - 5] = Object.assign(newArr[bodyId - 5], {
          isClicked: !newArr[bodyId - 5].isClicked,
        });
        setKeywordBalls(newArr);
      }
    });

    Composite.add(world, mouseConstraint);

    render.mouse = mouse;

    Render.lookAt(render, {
      min: { x: 0, y: 0 },
      max: { x: canvasWidth, y: canvasHeight },
    });

    return {
      engine: engine,
      runner: runner,
      render: render,
      canvas: render.canvas,
      stop: function () {
        Matter.Render.stop(render);
        Matter.Runner.stop(runner);
      },
    };
  }, []);

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <div ref={scene} style={{ width: '100%', height: '100%' }} />
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          margin: '25px 0 0 0',
          color: 'var(--blackcream)',
        }}
        onClick={() => {
          console.log(keywordBalls);
        }}
      >
        {clickedKeywords.map((clickedKeyword, index) => {
          if (index === clickedKeywords.length - 1) {
            return <div>{clickedKeyword}</div>;
          }
          if (clickedKeyword !== '빈공') {
            return <div>{clickedKeyword} / &nbsp;</div>;
          }
        })}
      </div>
    </div>
  );
};
