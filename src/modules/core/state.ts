import {
  State,
  Point,
  ReadOnlyPointsArray,
  Food,
  Direction,
  Rotation,
} from '@core/core-types'

import { FIELD_WIDTH, FIELD_HEIGHT } from './core-constants'

const xCenter = Math.floor(FIELD_WIDTH / 2)
const yCenter = Math.floor(FIELD_HEIGHT / 2)

const state: State = {
  snake: [
    {
      x: xCenter,
      y: yCenter,
    },
    {
      x: xCenter - 1,
      y: yCenter,
    },
  ],
  food: {
    x: xCenter + 1,
    y: yCenter,
    movingTime: performance.now(),
  },
  direction: Direction.Right,
  rotation: null,
}

export const getHead = (): Readonly<Point> => state.snake[0]
export const getTail = (): ReadOnlyPointsArray => state.snake.slice(1)
export const getFood = (): Readonly<Food> => state.food
export const getDirection = (): Direction => state.direction
export const getRotation = (): Rotation | null => state.rotation

export const cutTail = (count: number): void => {
  state.snake.splice(state.snake.length - count, count)
}

export const moveHead = (point: Point): void => {
  state.snake.unshift(point)
}

export const setFoodPosition = (x: number, y: number): void => {
  state.food = { x, y, movingTime: performance.now() }
}

export const setDirection = (direction: Direction): void => {
  state.direction = direction
}

export const setRotation = (rotation: Rotation | null): void => {
  state.rotation = rotation
}
