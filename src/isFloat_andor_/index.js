import { isFloat } from '../isFloat.js'
import { null_ } from '@ctx-core/function'
export function isFloat_andor_(val, and_val_ = $=>$, or_val_ = null_) {
	console.debug('isFloat_andor_|debug|1', isFloat(val))
	return (
		isFloat(val)
		? and_val_(val)
		: or_val_(val)
	)
}
