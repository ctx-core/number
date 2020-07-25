import { isNumber } from './lib'
export function _number_or_mdash_str(number) {
	return (
		isNumber(number)
		? `${number}`
		: '—'
	)
}
export const _text__number__or__mdash = _number_or_mdash_str
