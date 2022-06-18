// From https://github.com/Microsoft/TypeScript/issues/364#issuecomment-719046161
declare const NumericUnitSymbol:unique symbol
export type NumericUnit<S> = number&{ [NumericUnitSymbol]:S }
export type { NumericUnit as NumberUnit }
