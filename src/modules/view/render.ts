import { FIELD_WIDTH } from '@core/core-constants'
import { getHead, getTail, getFood } from '@core/state'

import { ctx } from './canvas'

const draw = () => {
  requestAnimationFrame(draw)

  const { width, height } = ctx.canvas
  const cellSide = width / FIELD_WIDTH
  const gap = cellSide * 0.04
  const side = cellSide - gap * 2
  const snake = [...getTail(), getHead()]
  const food = getFood()

  ctx.clearRect(0, 0, width, height)

  ctx.fillStyle = '#344'

  snake.forEach(point => {
    const x = point.x * cellSide + gap
    const y = point.y * cellSide + gap

    ctx.fillRect(x, y, side, side)
  })

  ctx.fillStyle = '#f57'

  ctx.fillRect(food.x * cellSide + gap, food.y * cellSide + gap, side, side)
}

export const startRendering = (): void => {
  requestAnimationFrame(draw)
}
