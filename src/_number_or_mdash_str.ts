import { isNumber } from './isNumber'
export function _number_or_mdash_str(number:number|any) {
	return (
		isNumber(number)
		? `${number}`
		: '—'
	)
}
export { _number_or_mdash_str as _text__number__or__mdash }
