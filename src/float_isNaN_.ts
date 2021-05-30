export function float_isNaN_(number:number|string) {
	return isNaN(parseFloat(number as string))
}
export {
	float_isNaN_ as _float_isNaN,
	float_isNaN_ as isNaN__float,
}
