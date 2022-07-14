import { null_ } from '@ctx-core/function'
import { test } from 'uvu'
import { equal } from 'uvu/assert'
import { parseInt_or_ } from '../index.js'
test('parseInt_or_', ()=>{
	equal(parseInt_or_('11', null_), 11)
	equal(parseInt_or_('12.3', null_), 12)
	equal(parseInt_or_('not-a-number', null_), null)
})
test.run()
