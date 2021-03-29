function getParam ( sname )
{
  var params = location.search.substr(location.search.indexOf("?")+1);
  var sval =  params.replace("sv=", "");
  
  return sval;
}
var sv = getParam("sv");
function errorPlaying(){
    url = "https://heny007.github.io";
    var a = document.createElement("a");
    if (a.click) {
        a.setAttribute("href", url);
        a.setAttribute("target", "_self");
        a.style.display = "none";
        document.body.appendChild(a);
        a.click();
    } else {
        location.href = url;
    }

  }
function getParam ( sname )
{
  var params = location.search.substr(location.search.indexOf("?")+1);
  var sval =  params.replace("sv=", "");
  return sval;
}
var sv = getParam("sv");
