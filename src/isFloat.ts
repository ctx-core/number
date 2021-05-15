import { _float_isNaN } from './_float_isNaN'
export function isFloat(number:any) {
	return !_float_isNaN(number)
}
