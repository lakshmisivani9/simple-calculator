let disp = document.getElementById("cal");

function appendvalue(val) {
    disp.value += val;
}

function deleteval() {
    disp.value = disp.value.slice(0,-1);

}

function dispclear() {
    disp.value = "";

}

function calculate() {
    try {
        disp.value = eval(disp.value);
    }
    catch(err) {
        disp.value = "Error";
    }
}