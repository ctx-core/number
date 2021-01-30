export function _float_isNaN(number:number|string) {
	return isNaN(parseFloat(number.toString()))
}
export { _float_isNaN as isNaN__float }
