import { createCtx } from 'ctx-2d'

import { FIELD_WIDTH, FIELD_HEIGHT } from '@core/core-constants'

const MAX_CELL_SIDE = 80

const parent = document.querySelector('.wrapper')

export const ctx = createCtx(parent, {
  limits: {
    width: FIELD_WIDTH * MAX_CELL_SIDE,
    height: FIELD_HEIGHT * MAX_CELL_SIDE,
  },
})
