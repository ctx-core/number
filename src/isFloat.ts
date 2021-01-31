import { _float_isNaN } from './_float_isNaN'
export function isFloat(number) {
	return !_float_isNaN(number)
}
