/**
 * Normalization text for a number
 * @example
 * `$${abbreviate__number(amount, {6: 'mm', 9: 'bn', 12: 'tn'})}`
 */
export declare function _abbreviate_number_str(number: number | string, denominations: Record<string, string>): string;
export { _abbreviate_number_str as abbreviate__number };
