import { tryUp, tryDown, tryLeft, tryRight } from './listeners'

export const addKeyboardListener = (): void => {
  addEventListener('keydown', ({ code }) => {
    switch (code) {
      case 'ArrowLeft':
      case 'KeyA':
        tryLeft()

        break
      case 'ArrowRight':
      case 'KeyD':
        tryRight()

        break
      case 'ArrowUp':
      case 'KeyW':
        tryUp()

        break
      case 'ArrowDown':
      case 'KeyS':
        tryDown()

        break
    }
  })
}
