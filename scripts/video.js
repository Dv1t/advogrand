var videos = document.querySelectorAll('#block6 .videobar video');

videos.forEach((video)=>{
    video.addEventListener('click',function(){    
            video.setAttribute("controls","controls");
    });
});
