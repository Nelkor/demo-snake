export enum Direction {
  Up,
  Down,
  Left,
  Right,
}

export enum Rotation {
  Left,
  Right,
}

export type Point = {
  x: number
  y: number
}

export type ReadOnlyPointsArray = Readonly<Readonly<Point>[]>

export type Food = Point & {
  movingTime: number
}

export type State = {
  snake: Point[]
  food: Food
  direction: Direction
  rotation: Rotation | null
}
