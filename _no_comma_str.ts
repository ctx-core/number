export function _no_comma_str(string) {
	return (
		string == null
		? string
		: (string.toString().replace(/,/g, ''))
	)
}
export const unformat__commas = _no_comma_str
