{
    var canvas = document.getElementById('arrow');
    if (canvas.getContext){
        var ctx = canvas.getContext('2d');
        ctx.beginPath();
        ctx.lineWidth=6;
        ctx.moveTo(0,100);
        ctx.lineTo(103,100);
        ctx.moveTo(50,70);
        ctx.lineTo(100,100);
        ctx.lineWidth=6;
        ctx.moveTo(50,130);
        ctx.lineTo(100,100);
        ctx.lineWidth=8;
        ctx.strokeStyle="black";
        
        ctx.stroke();
        canvas.addEventListener("mouseover",()=>{
            ctx.strokeStyle="red";
            ctx.stroke();
        });
        canvas.addEventListener("mouseout",()=>{
            ctx.strokeStyle="black";
            ctx.stroke();
        });
    }
    
}