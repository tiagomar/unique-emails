const {performance} = require('perf_hooks')

function removeDuplicates(emailsList) {
    let uniqueEmails = new Set()

    for (let index = 0; index < emailsList.length; index++) {
        uniqueEmails.add(emailsList[index].toLowerCase())   
    }

    return [...uniqueEmails]
}

module.exports = removeDuplicates
