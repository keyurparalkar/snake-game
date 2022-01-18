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

  export interface ISnakeBody {
    x: number;
    y: number;
  }

  export const drawSnake = (
    context: CanvasRenderingContext2D | null,
    snakeBody: ISnakeBody[]
  ) => {
    if (context) {
      snakeBody.forEach((snake: ISnakeBody) => {
        context.fillStyle = "lightblue";
        context.strokeStyle = "darkblue";
        context?.fillRect(snake.x, snake.y, 10, 10);
        context?.strokeRect(snake.x, snake.y, 10, 10);
      });
    }
  };
