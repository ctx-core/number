export function _percentage_str_float(percentage:string) {
	return parseFloat(percentage.replace(/%/g, ''))
}
export { _percentage_str_float as unformat__percentage }
