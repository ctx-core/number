import { null_ } from '@ctx-core/function'
import { test } from 'uvu'
import { equal } from 'uvu/assert'
import { parseFloat_or_ } from '../index.js'
test('parseFloat_or_', ()=>{
	equal(parseFloat_or_('12.3', null_), 12.3)
	equal(parseFloat_or_('not-a-number', null_), null)
})
test.run()
