import { isNumber_or_ } from '../isNumber_or_/index.js'
import { null_ } from '@ctx-core/function'
export function parseInt_or_(val, or_val_ = null_) {
	return isNumber_or_(parseInt(val), or_val_)
}
