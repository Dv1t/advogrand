{
    var canvas = document.getElementById('arrow');
    if (canvas.getContext){
        var ctx = canvas.getContext('2d');
        ctx.beginPath();
        ctx.moveTo(50,75);
        ctx.lineTo(300,75);
        ctx.moveTo(200,0);
        ctx.lineTo(300,75);
        ctx.moveTo(200,150);
        ctx.lineTo(300,75);
        ctx.lineWidth=2.5;
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