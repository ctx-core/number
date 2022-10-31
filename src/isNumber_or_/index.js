import { null_ } from '@ctx-core/function'
import { isNumber_ } from '../isNumber.js'
export function isNumber_or_(val, or_val_ = null_) {
	return isNumber_(val) ? val : or_val_(val)
}
