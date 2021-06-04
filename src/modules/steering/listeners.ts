import { Direction, Rotation } from '@core/core-types'
import { getDirection, setRotation } from '@core/state'

const createRotationByKey =
  (leftFrom: Direction, rightFrom: Direction) =>
  (direction: Direction): Rotation | null => {
    const rotation = {
      [leftFrom]: Rotation.Left,
      [rightFrom]: Rotation.Right,
    }[direction]

    return rotation == undefined ? null : rotation
  }

export const rotationByKeyUp = createRotationByKey(
  Direction.Right,
  Direction.Left
)
export const rotationByKeyDown = createRotationByKey(
  Direction.Left,
  Direction.Right
)

export const rotationByKeyLeft = createRotationByKey(
  Direction.Up,
  Direction.Down
)

export const rotationByKeyRight = createRotationByKey(
  Direction.Down,
  Direction.Up
)

export const tryUp = (): void => {
  setRotation(rotationByKeyUp(getDirection()))
}

export const tryDown = (): void => {
  setRotation(rotationByKeyDown(getDirection()))
}

export const tryLeft = (): void => {
  setRotation(rotationByKeyLeft(getDirection()))
}

export const tryRight = (): void => {
  setRotation(rotationByKeyRight(getDirection()))
}
