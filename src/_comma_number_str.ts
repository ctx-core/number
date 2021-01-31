export function _comma_number_str(number:number|string) {
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
export {
	_comma_number_str as format__commas
}
