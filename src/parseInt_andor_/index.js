import { isNumber_andor_ } from '../isNumber_andor_/index.js'
import { null_ } from '@ctx-core/function'
export function parseInt_andor_(val, and_val_, or_val_ = null_) {
	return isNumber_andor_(parseInt(val), and_val_, or_val_)
}
