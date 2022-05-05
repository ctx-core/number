import { float_isNaN_ } from './float_isNaN_.js'
export function isFloat(number) {
	return !float_isNaN_(number)
}
