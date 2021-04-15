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

    const startTime = performance.now()
    removeDuplicates(emails)
    const endTime = performance.now()
    
    console.log(`Email list size: ${emailsListSize} Execution time: ${endTime-startTime} ms`)
}

run()