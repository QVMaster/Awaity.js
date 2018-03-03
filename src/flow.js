/**
  @module Utilities
*/

import resolveIterable from './__internal__/resolveIterable';
import series from './__internal__/series';

/**
 * @function flow
 */
export default function flow(value, fns) {
  return resolveIterable(value).then((initial) => {
    return series((val, fn) => fn(val), initial)(fns);
  });
}
