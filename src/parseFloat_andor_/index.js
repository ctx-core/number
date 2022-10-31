import { isFloat_andor_ } from '../isFloat_andor_/index.js'
import { null_ } from '@ctx-core/function'
export function parseFloat_andor_(val, and_val_ = $=>$, or_val_ = null_) {
	return isFloat_andor_(parseFloat(val), and_val_, or_val_)
}
