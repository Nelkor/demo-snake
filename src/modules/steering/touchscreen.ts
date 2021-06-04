import { Direction } from '@core/core-types'
import { getDirection } from '@core/state'

import { tryUp, tryDown, tryLeft, tryRight } from './listeners'

export const addTouchscreenListener = (): void => {
  addEventListener('touchstart', event => {
    const { pageX, pageY } = event.touches[0]

    switch (getDirection()) {
      case Direction.Right:
      case Direction.Left:
        if (pageY > screen.availHeight / 2) {
          tryDown()
        } else {
          tryUp()
        }

        break
      case Direction.Up:
      case Direction.Down:
        if (pageX > screen.availWidth / 2) {
          tryRight()
        } else {
          tryLeft()
        }

        break
    }
  })
}
