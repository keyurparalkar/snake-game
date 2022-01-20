export const clearCanvas = (context: CanvasRenderingContext2D | null) => {
  if (context) {
    context.fillStyle = "white";
    //  Select the colour for the border of the canvas
    context.strokeStyle = "white";
    // Draw a "filled" rectangle to cover the entire canvas
    context.fillRect(0, 0, 600, 300);
    // Draw a "border" around the entire canvas
    context.strokeRect(0, 0, 600, 300);
  }
};

export interface IObjectBody {
  x: number;
  y: number;
}

export const drawObject = (
  context: CanvasRenderingContext2D | null,
  objectBody: IObjectBody[]
) => {
  if (context) {
    objectBody.forEach((object: IObjectBody) => {
      context.fillStyle = "lightblue";
      context.strokeStyle = "darkblue";
      context?.fillRect(object.x, object.y, 10, 10);
      context?.strokeRect(object.x, object.y, 10, 10);
    });
  }
};

function randomNumber(min: number, max: number) {
  return Math.round((Math.random() * (max - min) + min) / 10) * 10;
}
export const generateRandomPosition = (width: number, height: number) => {
  return {
    x: randomNumber(0, width),
    y: randomNumber(0, height),
  };
};

export const hasSnakeCollided = (
  snake: IObjectBody[],
  currentHeadPos: IObjectBody
) => {
  let flag = false;
  snake.forEach((pos: IObjectBody, index: number) => {
    if (
      pos.x === currentHeadPos.x &&
      pos.y === currentHeadPos.y &&
      index !== 0
    ) {
      flag = true;
    }
  });

  return flag;
};
