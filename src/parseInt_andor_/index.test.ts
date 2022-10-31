import { null_ } from '@ctx-core/function'
import { test } from 'uvu'
import { equal } from 'uvu/assert'
import { parseInt_andor_ } from '../index.js'
test('parseInt_andor_', ()=>{
	equal(parseInt_andor_('11', null_), 11)
	equal(parseInt_andor_('12.3', null_), 12)
	equal(parseInt_andor_('not-a-number', null_), null)
})
test.run()
