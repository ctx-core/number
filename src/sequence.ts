let sequence = 0
export function increment_sequence() {
  sequence += 1
	return sequence
}
export function is_current_sequence(in_sequence:number) {
  return sequence === in_sequence
}