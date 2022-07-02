
// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

// * url = "http://github.com/carbonfive/raygun" -> domain name = "github"
// * url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
// * url = "https://www.cnet.com"                -> domain name = cnet"

function domainName(url){

  if(url.match(/\/\/www./)){
    return url.match(/[a-z0-9\-]+(?<=www.[a-z0-9\-]+)/i)
  } else if(url.match(/\/\//)){
    return url.match(/[a-z0-9\-]+(?<=\/\/[a-z0-9\-]+)/i)
  } else if (url.match(/www./)){
    return url.match(/[a-z0-9\-]+(?<=www.[a-z0-9\-]+)/i)
  } else {
    return url.match(/[a-z0-9\-]+(?=.)/)
  }

}

//for future reference, the answer here was
// function domainName(url){
//   url = url.replace("https://", '');
//   url = url.replace("http://", '');
//   url = url.replace("www.", '');
//   return url.split('.')[0];
// };