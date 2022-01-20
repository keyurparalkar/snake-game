import {
  DOWN,
  INCREASE_SNAKE,
  INCREMENT_SCORE,
  ISnakeCoord,
  LEFT,
  RESET,
  RESET_SCORE,
  RIGHT,
  SET_DIS_DIRECTION,
  UP,
} from "../actions";

export interface IGlobalState {
  head: ISnakeCoord;
  snake: ISnakeCoord[] | [];
  disallowedDirection: string;
  score: number;
}

const globalState: IGlobalState = {
  head: {
    x: 0,
    y: 0,
  },
  snake: [
    { x: 300, y: 150 },
    { x: 290, y: 150 },
    { x: 280, y: 150 },
    { x: 270, y: 150 },
    { x: 260, y: 150 },
  ],
  disallowedDirection: "",
  score: 0,
};
const gameReducer = (state = globalState, action: any) => {
  switch (action.type) {
    case RIGHT:
    case LEFT:
    case UP:
    case DOWN: {
      let newSnake = [...state.snake];
      newSnake.unshift({
        x: state.snake[0].x + action.payload[0],
        y: state.snake[0].y + action.payload[1],
      });
      newSnake.pop();

      return {
        ...state,
        snake: newSnake,
      };
    }

    case SET_DIS_DIRECTION:
      return { ...state, disallowedDirection: action.payload };

    case RESET:
      return {
        ...state,
        snake: [
          { x: 300, y: 150 },
          { x: 290, y: 150 },
          { x: 280, y: 150 },
          { x: 270, y: 150 },
          { x: 260, y: 150 },
        ],
      };

    case INCREASE_SNAKE:
      const snakeLen = state.snake.length;
      return {
        ...state,
        snake: [
          ...state.snake,
          {
            x: state.snake[snakeLen - 1].x - 10,
            y: state.snake[snakeLen - 1].y - 10,
          },
        ],
      };

    case RESET_SCORE:
      return { ...state, score: 0 };

    case INCREMENT_SCORE:
      return {
        ...state,
        score: state.score + 1,
      };
    default:
      return state;
  }
};

export default gameReducer;
