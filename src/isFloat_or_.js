import { isFloat } from './isFloat.js'
export function isFloat_or_(val, or_val_) {
	return isFloat(val) ? val : or_val_(val)
}
