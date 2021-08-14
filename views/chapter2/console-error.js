let value = 50;
function start() {
    function end() {
        console.error("Function Ended");
    }
    if(value > 50) {
        //ok
    }else {
        end();
    }
}
start();  //function call