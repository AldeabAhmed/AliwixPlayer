function gup(e){e=e.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");
var n="[\\?&]"+e+"=([^&#]*)",
l=new RegExp(n),
c=l.exec(window.location.href);
return null==c?"https://heny007.github.io/hls/download/go.m3u8":unescape(c[1])}
var video=gup("src");
var iptv=(video);
var playerInstance = jwplayer('mainPlayer');
    playerInstance.setup({
        stretching:'fill',
        mute: 'false',
        menu: 'true',
        skin: {name: 'Netflix',}, 
        sharing: {
        sites: ["reddit","facebook","twitter"]},
        allowscriptaccess: 'always',
        wmode: 'opaque',
        file:iptv,                         
        image: 'https://heny007.github.io/img/coverjwplayer.jpg',
        width: '100%',
        height: '100%',
        autostart: 'false',
        primary:'html5',
        logo:{position:"top-right",margin:"10",file:"https://heny007.github.io/img/player/aplaylogo.png",height:"30"}, 
        flashplayer:"https://raw.githack.com/HeNy007/HeNy-Ben-Hamed/master/today-matches/jwplayer.flash.swf",tracks:{file:"thumbnails.vtt",kind:"thumbnails"} });
       playerInstance.addButton(
    'https://heny007.github.io/img/down1.svg',
    'Download video', 
    function() {  
    window.open(playerInstance.getPlaylistItem()['file']+'?type=video/mp4&title=Download%20video', '_blank').blur();
    //window.location.href = playerInstance.getPlaylistItem()['file'];
    },
    'download'
    );
