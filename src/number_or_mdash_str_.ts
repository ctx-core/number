import { isNumber } from './isNumber.js'
export function number_or_mdash_str_(number:number|any) {
	return (
		isNumber(number)
		? `${number}`
		: '—'
	)
}
export {
	number_or_mdash_str_ as _number_or_mdash_str,
	number_or_mdash_str_ as _text__number__or__mdash,
}
