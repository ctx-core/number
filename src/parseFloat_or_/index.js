import { isNumber_or_ } from '../isNumber_or_.js'
export function parseFloat_or_(val, or_val_) {
	return isNumber_or_(parseFloat(val), or_val_)
}
