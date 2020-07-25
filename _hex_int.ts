/**
 * Convert hex to int
 * @param {string} hex
 * @returns {Int}
 */
export function _hex_int(hex: string) {
	return parseInt(hex, 16)
}
export const _int__hex = _hex_int
