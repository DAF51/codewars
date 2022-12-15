
// Write a function that when given a URL as a string, parses out just
//  the domain name and returns it as a string. For example:

// domainName("http://github.com/carbonfive/raygun") == "github" 
// domainName("http://www.zombie-bites.com") == "zombie-bites"
// domainName("https://www.cnet.com") == "cnet

function domainName(website){
  let webArr= website.split("//")
  webArr = webArr[1].split("/")


  let domain = webArr[0]
  domain =domain.replace("www.", "")
  domain = domain.replace(".com", "")
  return domain
}


console.log(domainName("http://github.com/carbonfive/raygun"))
console.log(domainName("http://www.zombie-bites.com"))
console.log(domainName("https://www.cnet.com"))