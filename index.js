const removeDuplicates = require('./src/removeDuplicates')
const {performance} = require('perf_hooks')
const randomstring = require('randomstring')

function generateRandomEmailsWithFiftyPercentDuplication(numberOfEmails) {
    const usernameLength = 20
    const domainLength = 10
    let username, domain
    const uniqueEmails = new Set()

    while(uniqueEmails.size < numberOfEmails * 0.5) {
        username = randomstring.generate(usernameLength)
        domain = `${randomstring.generate(domainLength)}.com`

        uniqueEmails.add(`${username}@${domain}`)
    }
    
    let listShuffle = [...uniqueEmails,...uniqueEmails].sort( () => Math.random() - 0.5  )
    
    return listShuffle
}

function run() {
    const emailsListSize = 100000
    const emails = generateRandomEmailsWithFiftyPercentDuplication(emailsListSize)

    let startTime = performance.now()
    const usingSet = removeDuplicates.usingSet(emails)
    let endTime = performance.now()
    
    console.log('- Set')
    console.log(`Input size: ${emails.length} Output size: ${usingSet.length} Execution time: ${endTime-startTime} ms\n`)
    
    
    startTime = performance.now()
    const usingIncludes = removeDuplicates.usingIncludes(emails)
    endTime = performance.now()
    
    console.log('- Includes')
    console.log(`Input size: ${emails.length} Output size: ${usingIncludes.length} Execution time: ${endTime-startTime} ms`)
}

run()