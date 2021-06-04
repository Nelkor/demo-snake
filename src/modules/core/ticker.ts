import {
  getDirection,
  setRotation,
  setDirection,
  getRotation,
  getTail,
  moveHead,
  getHead,
  setFoodPosition,
  cutTail,
  getFood,
} from '@core/state'

import { FIELD_HEIGHT, FIELD_WIDTH, TICK_TIMEOUT } from './core-constants'
import { Direction, Point, ReadOnlyPointsArray, Rotation } from './core-types'

const correctAxis = (maxValue: number) => (value: number) => {
  if (value < 0) {
    return maxValue
  }

  if (value > maxValue) {
    return 0
  }

  return value
}

const correctX = correctAxis(FIELD_WIDTH - 1)
const correctY = correctAxis(FIELD_HEIGHT - 1)

const arePointsEqual = (p1: Point, p2: Point) => p1.x == p2.x && p1.y == p2.y

export const getNewHeadPosition = (
  head: Point,
  direction: Direction
): Readonly<Point> => {
  let { x, y } = head

  switch (direction) {
    case Direction.Right:
      x++

      break
    case Direction.Down:
      y++

      break
    case Direction.Left:
      x--

      break
    case Direction.Up:
      y--

      break
  }

  x = correctX(x)
  y = correctY(y)

  return { x, y }
}

export const getCountOfCut = (
  head: Point,
  tail: ReadOnlyPointsArray
): number => {
  const collisionIndex = tail.findIndex(point => arePointsEqual(point, head))

  return ~collisionIndex ? tail.length - collisionIndex : 1
}

export const getNewDirection = (
  direction: Direction,
  rotation: Rotation | null
): Direction => {
  if (rotation == null) {
    return direction
  }

  return (
    rotation == Rotation.Left
      ? {
          [Direction.Right]: Direction.Up,
          [Direction.Down]: Direction.Right,
          [Direction.Left]: Direction.Down,
          [Direction.Up]: Direction.Left,
        }
      : {
          [Direction.Right]: Direction.Down,
          [Direction.Down]: Direction.Left,
          [Direction.Left]: Direction.Up,
          [Direction.Up]: Direction.Right,
        }
  )[direction]
}

const tick = () => {
  setTimeout(tick, TICK_TIMEOUT)

  const direction = getNewDirection(getDirection(), getRotation())
  const head = getNewHeadPosition(getHead(), direction)

  if (arePointsEqual(head, getFood())) {
    setFoodPosition(0, 0)
  } else {
    cutTail(getCountOfCut(head, getTail()))
  }

  setDirection(direction)
  setRotation(null)
  moveHead(head)
}

export const startTicking = (): void => {
  setTimeout(tick, TICK_TIMEOUT)
}
