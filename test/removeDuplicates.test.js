const removeDuplicates = require('../src/removeDuplicates')

describe('removeDuplicates', () => {
    const expectedEmails = ['a@a.a','b@b.b','c@c.c','d@d.d']
    
    describe('usingSet', () => {
        it('should return an array', () => {
            const emails = ['a@a.a','b@b.b']

            expect(Array.isArray(removeDuplicates.usingSet(emails))).toBe(true)
        })

        it('should remove duplicates', () => {
            const emails = ['a@a.a','b@b.b','a@a.a','c@c.c','c@c.c','b@b.b','d@d.d']

            expect(removeDuplicates.usingSet(emails)).toEqual(expectedEmails)
        })

        it('should return unique emails - case insensitive', () => {
            const emails = ['a@a.a','A@a.A','b@b.b','b@b.B','c@c.c','c@C.c','d@d.d']

            expect(removeDuplicates.usingSet(emails)).toEqual(expectedEmails)
        })

        it('should maintain the original order', () => {
            const emails = ['a@a.a','b@b.b','a@a.a','c@c.c','c@c.c','b@b.b','d@d.d']

            expect(removeDuplicates.usingSet(emails)).toEqual(expectedEmails)
        })
    })
    
    describe('usingIncludes', () => {
        it('should return an array', () => {
            const emails = ['a@a.a','b@b.b']

            expect(Array.isArray(removeDuplicates.usingIncludes(emails))).toBe(true)
        })

        it('should remove duplicates', () => {
            const emails = ['a@a.a','b@b.b','a@a.a','c@c.c','c@c.c','b@b.b','d@d.d']

            expect(removeDuplicates.usingIncludes(emails)).toEqual(expectedEmails)
        })

        it('should return unique emails - case insensitive', () => {
            const emails = ['a@a.a','A@a.A','b@b.b','b@b.B','c@c.c','c@C.c','d@d.d']

            expect(removeDuplicates.usingIncludes(emails)).toEqual(expectedEmails)
        })

        it('should maintain the original order', () => {
            const emails = ['a@a.a','b@b.b','A@a.a','c@c.c','c@C.c','b@b.B','d@d.d']

            expect(removeDuplicates.usingIncludes(emails)).toEqual(expectedEmails)
        })
    })

})