/** @license ISC License (c) copyright 2017 original and current authors */
/** @author Ian Hofmann-Hicks (evil) */

import isSameType from '../core/isSameType.js'
import isSemigroupoid from '../core/isSemigroupoid.js'

const err = 'pipeS: Semigroupoids of the same type required'

// pipeS : Semigroupoid s => (s a b, s b c, ..., s y z) -> s a z
function pipeS(...ms) {
  if(!arguments.length) {
    throw new TypeError(err)
  }

  const head =
    ms[0]

  if(!isSemigroupoid(head)) {
    throw new TypeError(err)
  }

  if(ms.length === 1) {
    return head
  }

  return ms.slice().reduce((comp, m) => {
    if(!isSameType(comp, m)) {
      throw new TypeError(err)
    }

    return comp.compose(m)
  })
}

export default pipeS