export function _no_comma_str(string:string) {
	return (
		string == null
		? string
		: (string.toString().replace(/,/g, ''))
	)
}
export { _no_comma_str as unformat__commas }
