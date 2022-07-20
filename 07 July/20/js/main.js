
// Complete the function/method so that it returns the url with anything after the anchor (#) removed.
// Examples

// "www.codewars.com#about" --> "www.codewars.com"
// "www.codewars.com?page=1" -->"www.codewars.com?page=1"

function removeUrlAnchor(url){
  if(url.search(/[#]/) != -1){
   let anchor = url.search(/[#][a-z1-9]/i)
    return url.slice(0,anchor)
  } else {
    return url
  }
}


