/*
Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

domainName("http://github.com/carbonfive/raygun") == "github" 
domainName("http://www.zombie-bites.com") == "zombie-bites"
domainName("https://www.cnet.com") == "cnet
*/


function domainName(str){
    const regex = /.+\/\/|www.|\..+/gm
    return str.replace(regex, '')
}

console.log(domainName("http://github.com/carbonfive/raygun"))


// Optimal Solution

function domainName(url){
    url = url.replace("https://", '');
    url = url.replace("http://", '');
    url = url.replace("www.", '');
    return url.split('.')[0];
  };