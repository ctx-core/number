export function no_comma_str_(string:string):string|null|undefined {
	return (
		string == null
		? string
		: (string.toString().replace(/,/g, ''))
	)
}
export {
	no_comma_str_ as _no_comma_str,
	no_comma_str_ as unformat__commas,
}
