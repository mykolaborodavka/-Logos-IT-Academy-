function Robot(name,whatDo){
this.name=name;
this.whatDo=whatDo;

this.do=function(){
    alert("Я "+this.name+" – я "+this.whatDo);
}

}
var robot = new Robot("Robot","просто працюю");
robot.do();

function CoffeRobot(name,whatDo){
    Robot.apply(this, arguments);
}

var coffeRobot=new CoffeRobot("CoffeRobot","варю каву");
coffeRobot.do()

function RobotDancer(name,whatDo){
    Robot.apply(this, arguments);
}

var robotDancer =new RobotDancer("RobotDancer","просто танцюю");
robotDancer.do()

function RobotCoocker (name,whatDo){
    Robot.apply(this, arguments);
}

var robotCoocker  =new RobotDancer("RobotCoocker ","просто готую");
robotCoocker.do()
alert("in Array");
var arrRobot= [];
arrRobot.push(robot);
arrRobot.push(coffeRobot);
arrRobot.push(robotDancer);
arrRobot.push(robotCoocker);
for(let value of arrRobot){
value.do();}

