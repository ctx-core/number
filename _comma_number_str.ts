export function _comma_number_str(number) {
	return (
		number == null
		? null
		: (
			number
				.toString()
				.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,')
		)
	)
}
export const format__commas = _comma_number_str
