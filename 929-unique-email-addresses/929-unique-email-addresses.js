/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function(emails) {
    const domainsMap = {};
    for(let email of emails){
        const [localName, domainName] = email.split("@");
        const processedLocalName = processLocalName(localName);
        if(!(domainName in domainsMap)) domainsMap[domainName] = new Set();
        domainsMap[domainName].add(processedLocalName);
    }
    let count = 0;
    for(let domain of Object.keys(domainsMap)){
        count += domainsMap[domain].size;
    }
    return count;
};

function processLocalName(localName){
    let processedName = "";
    for(let char of localName){
        if(char === ".") continue;
        if(char === "+") break;
        processedName += char;
    }
    return processedName;
}