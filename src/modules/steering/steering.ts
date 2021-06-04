import { addKeyboardListener } from './keyboard'
import { addTouchscreenListener } from './touchscreen'

export const addControlsListeners = (): void => {
  addKeyboardListener()
  addTouchscreenListener()
}
