AFRAME.registerComponent("game-play",{
    schema:{
        elId : {type : "string" , default : "#ring1"},
    },
    collision:function(elId){
        const element = document.querySelector(elId);
        element.addEventListener("collide",()=>{
            if(elId.includes("#bird")){
                console.log("Collided with bird : " + elId);
            }
            else if(elId.includes("#ring")){
                console.log("Collided with ring : " + elId);
            }
        })
    },
    update:function(){
        this.collision(this.data.elId);
    }
})