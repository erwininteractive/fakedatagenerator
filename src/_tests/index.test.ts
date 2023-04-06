import { expect, test } from 'vitest'
import { Factory } from '../Factory'

test('generates names', () => {
    const f = Factory.create()

    expect(f.FirstName()).toMatch(/^[A-Z][a-z]+(?: [A-Z][a-z]+)*$/)
})
