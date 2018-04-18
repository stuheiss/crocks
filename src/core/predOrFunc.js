/** @license ISC License (c) copyright 2017 original and current authors */
/** @author Ian Hofmann-Hicks (evil) */

import isFunction from './isFunction.js'

function predOrFunc(pred, x) {
  if(isFunction(pred)) {
    return pred(x)
  }
  return pred.runWith(x)
}

export default predOrFunc