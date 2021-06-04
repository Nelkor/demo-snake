import '@/main.scss'

import { startTicking } from '@core/ticker'
import { addControlsListeners } from '@steering/steering'
import { startRendering } from '@view/render'

startTicking()
addControlsListeners()
startRendering()
