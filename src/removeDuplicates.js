const {performance} = require('perf_hooks')

function usingSet(emailsList) {
    let uniqueEmails = new Set()

    for (let index = 0; index < emailsList.length; index++) {
        uniqueEmails.add(emailsList[index].toLowerCase())   
    }

    return [...uniqueEmails]
}

function usingIncludes(emailsList) {
    let uniqueEmails = []
    let email

    for (let i = 0; i < emailsList.length; i++) {
        email = emailsList[i].toLowerCase()
        
        if (!uniqueEmails.includes(email)) {
            uniqueEmails.push(email)
        }
    }

    return uniqueEmails
}

module.exports = {
    usingSet,
    usingIncludes
}
