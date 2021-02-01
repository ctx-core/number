/**
 * Normalization text for a number
 * @example
 * `$${abbreviate__number(amount, {6: 'mm', 9: 'bn', 12: 'tn'})}`
 */
export function _abbreviate_number_str(number:number|string, denominations:Record<string, string>) {
	const float = parseFloat(number as string)
	if (!float) return '0'
	const exp10 = Math.floor(Math.log10(float))
	const exp10_step =
		exp10 >= 0
		? -1
		: 1
	let denomination, denomination_i
	set_denomination()
	const normalized_float =
		denomination
		? float
			/ Math.pow(10, denomination_i)
		: float
	const normalized_fixed =
		normalized_float
			.toFixed(2)
	return `${normalized_fixed}${denomination}`
	function set_denomination() {
		denomination_i = exp10
		while (denomination_i) {
			denomination =
				denominations[denomination_i]
			if (denomination) break
			denomination_i =
				denomination_i
				+ exp10_step
		}
		if (!denomination) denomination = ''
	}
}
export {
	_abbreviate_number_str as abbreviate__number
}
