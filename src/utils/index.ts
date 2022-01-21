export const clearCanvas = (context: CanvasRenderingContext2D | null) => {
  if (context) {
    context.fillStyle = "white";
    //  Select the colour for the border of the canvas
    context.strokeStyle = "white";
    // Draw a "filled" rectangle to cover the entire canvas
    context.fillRect(0, 0, 1000, 600);
    // Draw a "border" around the entire canvas
    context.strokeRect(0, 0, 1000, 600);
  }
};

export interface IObjectBody {
  x: number;
  y: number;
}

export const drawObject = (
  context: CanvasRenderingContext2D | null,
  objectBody: IObjectBody[],
  fillColor: string,
  strokeStyle = "#146356"
) => {
  if (context) {
    objectBody.forEach((object: IObjectBody) => {
      // context.fillStyle = "#91C483";
      // context.strokeStyle = "#557C55";
      context.fillStyle = fillColor;
      context.strokeStyle = strokeStyle;
      context?.fillRect(object.x, object.y, 20, 20);
      context?.strokeRect(object.x, object.y, 20, 20);
    });
  }
};

function randomNumber(min: number, max: number) {
  let random = Math.random() * max;
  return random - (random % 20);
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
