import { isNumber_or_ } from '../isNumber_or_/index.js'
import { null_ } from '@ctx-core/function'
export function parseFloat_or_(val, or_val_ = null_) {
	return isNumber_or_(parseFloat(val), or_val_)
}
