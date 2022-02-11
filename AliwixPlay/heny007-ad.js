//ads
document.writeln("<div id=\"ad_asd\" class=\"slide_in\" style=\"display: none;\">");
document.writeln("   <span title=\"Close\" id=\"close_ad\">X</span>");
document.writeln("   <div class=\"center_ad\">");
document.writeln("   <iframe src=\"https://ad2bitcoin.com/ad.php?ref=heny007&width=300\" marginwidth=\"0\" marginheight=\"0\" width=\"300\" height=\"250\" scrolling=\"no\" border=\"0\" frameborder=\"0\"></iframe>");
document.writeln("   </div>");
document.writeln("   </div>");
var elem=document.getElementById("close_ad");elem.addEventListener("click touchstart",handler,!1);elem.addEventListener("click",handler,!1);function handler(b){var a=document.getElementById("ad_asd");b=a.classList.contains("slide_in");setTimeout(function(){a.parentNode.removeChild(a)},500);a.setAttribute("class",b?"slide_out":"slide_in")};setTimeout(function(){document.getElementById("ad_asd").style.display="block"},3E3);
  
