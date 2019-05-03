function Robot(name,whatDo){
this.name=name;
this.whatDo=whatDo;

this.do=function(){
    alert("Я "+this.name+" – я "+this.whatDo);
}
