const scrollHeight = Math.max(
  document.body.scrollHeight, document.documentElement.scrollHeight,
  document.body.offsetHeight, document.documentElement.offsetHeight,
  document.body.clientHeight, document.documentElement.clientHeight
);
const blocks = document.querySelectorAll('.block');
let blocksHeight = [];
blocks.forEach((block) => {
  blocksHeight.push(block.offsetHeight);
});
let map = [];
let k = 0;
for (let i = 0; i < blocks.length; i++) {
  map.push(k);
  k += blocksHeight[i];
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}


window.addEventListener('scroll', scrooool);
let lastPos = 0;
async function scrooool() {
  let currentScroll = this.pageYOffset;
  if (lastPos<currentScroll) {
    console.log("scroll");
    window.removeEventListener('scroll', scrooool);
    
    function s() {
      
    }
 
    for (let i = 0; i < blocksHeight.length; i++) {

      if (currentScroll < map[i]) {

        let cy = blocks[i].getBoundingClientRect();
        window.scrollTo(0, cy.top + window.pageYOffset);
        break;
      }

    }
    await sleep(1000);
    window.addEventListener('scroll', scrooool);
  }
  lastPos=this.pageYOffset;
}