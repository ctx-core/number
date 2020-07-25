/**
 * @property {number} power represented as a string
 * @typedef denominations
 * @example
 * {7: 'mn', 10: 'bn', 13: 'tn'}
 */
/**
 * Normalization text for a number
 * @param {number} number
 * @param {module:@ctx-core/number/lib~denominations} denominations
 * @returns {string}
 * @example
 * `$${abbreviate__number(amount, {6: 'mm', 9: 'bn', 12: 'tn'})}`
 */
export declare function _abbreviate_number_str(number: any, denominations: any): string;
export declare const abbreviate__number: typeof _abbreviate_number_str;
