export function _percentage_str_float(percentage) {
	return parseFloat(percentage.replace(/%/g, ''))
}
export const unformat__percentage = _percentage_str_float
