function gup(e){e=e.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");
var n="[\\?&]"+e+"=([^&#]*)",
l=new RegExp(n),
c=l.exec(window.location.href);
return null==c?"https://heny007.github.io/HeNy-Ben-Hamed/today-matches/aliwix.mp4":unescape(c[1])}
var video=gup("src");
var iptv=(video);
jwplayer("app").setup({file:iptv,
title: 'HeNy007',autostart: "false",width: "100%",height: "100%",
tag:"HeNy007",title:"HeNy007",autostart:"true",stretching:"exactfit",autostretch:"true",
logo:{position:"top-right",margin:"25",file:"https://github.com/HeNy007/AliwixPlayer/raw/main/2.png",height:"25"}, 
flashplayer:"https://raw.githack.com/HeNy007/HeNy-Ben-Hamed/master/today-matches/jwplayer.flash.swf",tracks:{file:"thumbnails.vtt",kind:"thumbnails"} });


// Set up the player
const playerInstance = jwplayer('player').setup({
  playlist: 'https://cdn.jwplayer.com/v2/media/8L4m9FJB'
});

const buttonId = 'download-video-button';
const iconPath = 'assets/download.svg';
const tooltipText = 'Download Video';

// Call the player's `addButton` API method to add the custom button
playerInstance.addButton(iconPath, tooltipText, buttonClickAction, buttonId);

// This function is executed when the button is clicked
function buttonClickAction() {
  const playlistItem = playerInstance.getPlaylistItem();

  // Create an anchor element
  const anchor = document.createElement('a');

  // Set the anchor's `href` attribute to the media's file URL
  const fileUrl = playlistItem.file;
  anchor.setAttribute('href', fileUrl);

  // set the anchor's `download` attribute to the media's file name
  const downloadName = playlistItem.file.split('/').pop();
  anchor.setAttribute('download', downloadName);

  // Set the anchor's style to hide it when it's added to the page
  anchor.style.display = 'none';

  // Add the anchor to the page
  document.body.appendChild(anchor);

  // Trigger a click event to activate the anchor
  anchor.click();

  // Remove the anchor from the page, it's not needed anymore
  document.body.removeChild(anchor);
}
