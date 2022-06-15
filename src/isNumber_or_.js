import { isNumber } from './isNumber.js'
import { null_ } from '@ctx-core/function'
export function isNumber_or_(val, or_val_ = null_) {
	return isNumber(val) ? val : or_val_(val)
}
