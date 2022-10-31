import { null_ } from '@ctx-core/function'
import { test } from 'uvu'
import { equal } from 'uvu/assert'
import { parseFloat_andor_ } from '../index.js'
test('parseFloat_andor_', ()=>{
	equal(parseFloat_andor_('12.3'), 12.3)
	equal(parseFloat_andor_('12.3', $=>$ * 2), 12.3 * 2)
	equal(parseFloat_andor_('not-a-number', $=>$, null_), null)
	equal(parseFloat_andor_('not-a-number', $=>$, $=>$), NaN)
})
test.run()
