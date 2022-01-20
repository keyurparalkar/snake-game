import {
    CallEffect,
    delay,
    put,
    PutEffect,
    SimpleEffect,
    takeLatest
  } from "redux-saga/effects";
  import {
    DOWN,
    ISnakeCoord,
    LEFT,
    MOVE_DOWN,
    MOVE_LEFT,
    MOVE_RIGHT,
    MOVE_UP,
    RESET,
    RIGHT,
    SET_DIS_DIRECTION,
    STOP_GAME,
    UP
  } from "../actions";

  export function* moveSaga(params: {
    type: string;
    payload: ISnakeCoord;
  }): Generator<
    | SimpleEffect<"SELECT">
    | PutEffect<{ type: string; payload: ISnakeCoord }>
    | PutEffect<{ type: string; payload: string }>
    | CallEffect<true>
  > {
    while (params.type !== RESET && params.type !== STOP_GAME) {
      yield put({
        type: params.type.split("_")[1],
        payload: params.payload
      });
      switch (params.type.split("_")[1]) {
        case RIGHT:
          yield put({
            type: SET_DIS_DIRECTION,
            payload: LEFT
          });
          break;

        case LEFT:
          yield put({
            type: SET_DIS_DIRECTION,
            payload: RIGHT
          });
          break;

        case UP:
          yield put({
            type: SET_DIS_DIRECTION,
            payload: DOWN
          });
          break;

        case DOWN:
          yield put({
            type: SET_DIS_DIRECTION,
            payload: UP
          });
          break;
      }
      yield delay(100);
    }
  }

  function* watcherSagas() {
    yield takeLatest(
      [MOVE_RIGHT, MOVE_LEFT, MOVE_UP, MOVE_DOWN, RESET, STOP_GAME],
      moveSaga
    );
  }

  export default watcherSagas;
