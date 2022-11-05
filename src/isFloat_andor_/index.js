import { isFloat } from '../isFloat/index.js'
import { null_ } from '@ctx-core/function'
export function isFloat_andor_(val, and_val_ = $=>$, or_val_ = null_) {
	return (
		isFloat(val)
		? and_val_(val)
		: or_val_(val)
	)
}
