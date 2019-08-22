const videos = document.querySelectorAll('#block6 .videobar video');

videos.forEach((video) => {
    video.addEventListener('click', function () {
        video.setAttribute("controls", "controls");
    });
});
const bar = document.querySelector('#block6 .bar');
bar.addEventListener('click', (event) => {
    const disactive = bar.querySelector('.active');
    const active = event.target;
    active.classList.add("active");
    disactive.classList.remove("active");

});
const arrow = document.getElementById('arrow');
const videobar = document.querySelectorAll('#block6 .videobar div');
const carusel = document.querySelector('#block6 .videobar');
let start = 0;
let end = 3;
let press = false;
arrow.addEventListener('click', () => {
    if (!press) {
        press = true;
        if (end !== videobar.length) {
            carusel.classList.add("animated");
            videobar[start].style.transitionProperty = 'opacity';
            videobar[start].style.transitionDuration = '.5s';
            videobar[start].style.opacity = '0';
            videobar[end].style.opacity = '1';
            setTimeout(() => {
                videobar[start].style.display = 'none';
                videobar[start].style.transitionProperty = '';
                videobar[start].style.transitionDuration = '';
                videobar[start].style.opacity = '';
                videobar[end].classList.remove('hide');
                videobar[end].style.opacity = '';
                carusel.classList.remove("animated");
                start++;
                end++;
                press = false;
            }, 500);
        } else {
            carusel.classList.add("animatedR");
            setTimeout(() => {
                start = 0;
                end = 3;
                videobar[0].style.display = '';
                videobar[1].style.display = '';
                videobar[2].style.display = '';
                for (let i = 3; i < videobar.length; i++) {
                    videobar[i].classList.add("hide");
                }
                carusel.style.transitionProperty = 'opacity';
                carusel.style.transitionDuration = '.5s';
                carusel.style.opacity = '1';
                setTimeout(() => {
                    carusel.classList.remove("animatedR")
                    carusel.style.transitionProperty = '';
                    carusel.style.transitionDuration = '';
                    carusel.style.opacity = '';
                    press = false;
                }, 500);


            }, 200);
        }




    }
});