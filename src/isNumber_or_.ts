import { isNumber } from './isNumber.js'
export function isNumber_or_<Or_Val>(val:any, or_val_:(val:any)=>Or_Val) {
	return isNumber(val) ? val : or_val_(val)
}
