function js_thml(){
	let HeNy007 = "";
	HeNy007 += "<div id=\"ad_asd\" class=\"slide_in\" style=\"display: none;\"> \n";
	HeNy007 += "   <span title=\"Close\" id=\"close_ad\">X</span> \n";
	HeNy007 += "   <div class=\"center_ad\"> \n";
	HeNy007 += "\t<iframe src=\"https://ad2bitcoin.com/ad.php?ref=heny007&amp;width=300\" marginwidth=\"0\" marginheight=\"0\" width=\"300\" height=\"250\" scrolling=\"no\" border=\"0\" frameborder=\"0\"></iframe>\n";
	HeNy007 += "   </div> \n";
	HeNy007 += "  </div> \n";
	return HeNy007;
}


document.getElementById("HeNy007_ads").innerText = js_thml();
document.getElementById("html-text").value = js_thml();
