import { isFloat } from './isFloat'
export function isFloat_or_<Or_Val>(val:any, or_val_:(val:any)=>Or_Val) {
	return isFloat(val) ? val : or_val_(val)
}
