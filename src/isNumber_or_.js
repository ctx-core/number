import { isNumber } from './isNumber.js'
export function isNumber_or_(val, or_val_) {
	return isNumber(val) ? val : or_val_(val)
}
