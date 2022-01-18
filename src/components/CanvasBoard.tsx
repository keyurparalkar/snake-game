import React, { useCallback, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import store from "../store";
import {
  makeMove,
  MOVE_DOWN,
  MOVE_LEFT,
  MOVE_RIGHT,
  MOVE_UP,
  resetGame,
  stopGame
} from "../store/actions";
import { IGlobalState } from "../store/reducers";
import { clearCanvas, drawSnake } from "../utils";

const CanvasBoard = () => {
  const dispatch = useDispatch();
  const snake1 = useSelector((state: any) => state.snake);
  const disallowedDirection = useSelector(
    (state: any) => state.disallowedDirection
  );

  // const [ds, setDs] = useState<string>("");
  const [gameEnded, setGameEnded] = useState<boolean>(false);

  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [context, setContext] = useState<CanvasRenderingContext2D | null>(null);

  const moveSnake = useCallback(
    (dx = 0, dy = 0, ds: string) => {
      // console.log("cond = ", dx < 0 && dy === 0 && ds !== "LEFT", {
      //   dx,
      //   dy,
      //   ds
      // });
      if (dx > 0 && dy === 0 && ds !== "RIGHT") {
        //RIGHT
        // head = { x: snake1[0].x + dx, y: snake1[0].y + dy };
        // console.log("SNAKE = ", JSON.stringify({ head, snake }, null, 2));

        // setSnake((preValue: any) => {
        //   preValue.unshift(head);
        //   preValue.pop();
        //   return [...preValue];
        // });
        // setDs("LEFT");
        dispatch(makeMove(dx, dy, MOVE_RIGHT));
      }

      if (dx < 0 && dy === 0 && ds !== "LEFT") {
        // head = { x: snake[0].x + dx, y: snake[0].y + dy };
        // setSnake((preValue: any) => {
        //   preValue.unshift(head);
        //   preValue.pop();
        //   return [...preValue];
        // });
        // setDs("RIGHT");
        dispatch(makeMove(dx, dy, MOVE_LEFT));
      }

      if (dx === 0 && dy < 0 && ds !== "UP") {
        // head = { x: snake[0].x + dx, y: snake[0].y + dy };
        // setSnake((preValue: any) => {
        //   preValue.unshift(head);
        //   preValue.pop();
        //   return [...preValue];
        // });
        dispatch(makeMove(dx, dy, MOVE_UP));
        // setDs("DOWN");
      }

      if (dx === 0 && dy > 0 && ds !== "DOWN") {
        // head = { x: snake[0].x + dx, y: snake[0].y + dy };
        // setSnake((preValue: any) => {
        //   preValue.unshift(head);
        //   preValue.pop();
        //   return [...preValue];
        // });
        dispatch(makeMove(dx, dy, MOVE_DOWN));
        // setDs("UP");
      }
    },
    [dispatch]
  );

  const handleKeyEvents = useCallback(
    (event: KeyboardEvent) => {
      switch (event.key) {
        case "w":
          moveSnake(0, -10, disallowedDirection);
          break;
        case "s":
          moveSnake(0, 10, disallowedDirection);
          break;
        case "a":
          moveSnake(-10, 0, disallowedDirection);
          break;
        case "d":
          event.preventDefault();
          moveSnake(10, 0, disallowedDirection);
          break;
      }
    },
    [disallowedDirection, moveSnake]
  );

  const resetBoard = () => {
    window.removeEventListener("keypress", handleKeyEvents);
    dispatch(resetGame());
    clearCanvas(context);
    drawSnake(context, snake1);
    window.addEventListener("keypress", handleKeyEvents);
  };
  useEffect(() => {
    setContext(canvasRef.current && canvasRef.current.getContext("2d"));
    clearCanvas(context);
    drawSnake(context, snake1);
    if (
      snake1[0].x >= 600 ||
      snake1[0].x <= 0 ||
      snake1[0].y <= 0 ||
      snake1[0].y >= 300
    ) {
      setGameEnded(true);
      dispatch(stopGame());
      window.removeEventListener("keypress", handleKeyEvents);
    } else setGameEnded(false);
  }, [context, snake1, dispatch, handleKeyEvents]);

  useEffect(() => {
    window.addEventListener("keypress", handleKeyEvents);

    return () => {
      window.removeEventListener("keypress", handleKeyEvents);
    };
  }, [disallowedDirection, handleKeyEvents]);
  // console.log("STATE = ", context);
  return (
    <>
      <canvas
        ref={canvasRef}
        style={{
          border: `3px solid ${gameEnded ? "red" : "black"}`
        }}
        width={600}
        height={300}
      />
      {/* <button onClick={() => moveSnake(10, 0, disallowedDirection)}>
        Move right
      </button>
      <button onClick={() => moveSnake(-10, 0, disallowedDirection)}>
        Move left
      </button>
      <button onClick={() => moveSnake(0, -10, disallowedDirection)}>
        Move up
      </button>
      <button onClick={() => moveSnake(0, 10, disallowedDirection)}>
        Move down
      </button> */}
      <button onClick={() => resetBoard()}>Reset</button>
      Border Touched: {JSON.stringify(gameEnded)}
    </>
  );
};

export default CanvasBoard;
