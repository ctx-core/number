import { float_isNaN_ } from './float_isNaN_'
export function isFloat(number:any) {
	return !float_isNaN_(number)
}
