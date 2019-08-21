var videos = document.querySelectorAll('#block6 .videobar video');

videos.forEach((video)=>{
    video.addEventListener('click',function(){    
            video.setAttribute("controls","controls");
    });
});
var bar = document.querySelector('#block6 .bar');
bar.addEventListener('click',(event)=>{
    var disactive = bar.querySelector('.active');
    var active = event.target;
    active.classList.add("active");
    disactive.classList.remove("active");
    
});
