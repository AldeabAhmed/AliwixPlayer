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


jwplayer().addButton(
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAASCAYAAABb0P4QAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpCRDc2NUM3RDFEMEMxMUUyQjU2QUFCQUEyM0JGREJGRCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpCRDc2NUM3RTFEMEMxMUUyQjU2QUFCQUEyM0JGREJGRCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkJENzY1QzdCMUQwQzExRTJCNTZBQUJBQTIzQkZEQkZEIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkJENzY1QzdDMUQwQzExRTJCNTZBQUJBQTIzQkZEQkZEIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+czMQdgAAAPdJREFUeNpi+P//PwMOzATEh/9jgp149DAwMeAGjFCMTRwnwGcgLnmKDGSgpoF/yfEyCxqfDYiTgZgZiP8BsTAWPSJAnATEXFBL5wLxL7gslpidiBSj/7DE8l8kdhtUD9wMbFHPAsQ9/wmDFmzJBld64gHi83gM24juMkIGgrAaEN/AYtg1IFbGpQ+fgSBsDMT3kAy7DcR6+PQQMhCEHZEMtCeknhFsKmGQD0oQQDyJYKoHGigEpGOBWAoq9g9NDcig31A2K5aEDcvzoLS4CeTM0v/UA8dBWY+PgXqAC5T1ZgLxdyAWQvIiOQUGKKh2ExspRAOAAAMARqI5WRk9ASEAAAAASUVORK5CYII%3D",
  "Download Video",
  function(){
    window.location.href = jwplayer().getPlaylistItem()['file'];
  },
  "download"
);
