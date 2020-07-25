/**
 * @property {number} power represented as a string
 * @typedef denominations
 * @example
 * {7: 'mn', 10: 'bn', 13: 'tn'}
 */
/**
 * Normalization text for a number
 * @param {number} number
 * @param {module:@ctx-core/number/lib~denominations} denominations
 * @returns {string}
 * @example
 * `$${abbreviate__number(amount, {6: 'mm', 9: 'bn', 12: 'tn'})}`
 */
export function _abbreviate_number_str(number, denominations) {
	const float = parseFloat(number)
	if (!float) return '0'
	const exp10 = Math.floor(Math.log10(float))
	const step__exp10 =
		exp10 >= 0
		? -1
		: 1
	let denomination, i__denomination
	set__denomination()
	const normalized__float =
		denomination
		? float
			/ Math.pow(10, i__denomination)
		: float
	const normalized__fixed =
		normalized__float
			.toFixed(2)
	return `${normalized__fixed}${denomination}`
	function set__denomination() {
		i__denomination = exp10
		while (i__denomination) {
			denomination =
				denominations[i__denomination]
			if (denomination) break
			i__denomination =
				i__denomination
				+ step__exp10
		}
		if (!denomination) denomination = ''
	}
}
export const abbreviate__number = _abbreviate_number_str
