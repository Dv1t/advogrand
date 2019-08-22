const partners = document.querySelectorAll('#block7 .partners .partner');
partners.forEach((partner)=>{
    partner.addEventListener('mouseover',()=>{
        const icon = partner.querySelector('img');
        const disc = partner.querySelector('.disription');
        icon.style.display = 'none';
        disc.style.display='';
    });
    partner.addEventListener('mouseout',()=>{
        const icon = partner.querySelector('img');
        const disc = partner.querySelector('.disription');
        icon.style.display = '';
        disc.style.display='none';
    });
});