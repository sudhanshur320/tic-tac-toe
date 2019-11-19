let sign = "X";
let disp = document.getElementById("player");

function printX(number) {
    let currentBox = document.getElementById("r" + number);
    if (currentBox.innerHTML == "") {
        currentBox.innerHTML = sign;

        if (winner()) {
            disp.innerHTML = "<center>" + sign + "  is winner" + "</center>";
        }
        else {
            toggleSign();
            disp.innerHTML = "<center>" + sign + "'s turn" + "</center>";
        }
    }
}

function toggleSign() {
    if (sign == "X") sign = "O";
    else sign = "X";
}

function getBox(boxNumber) {
    return document.getElementById("r" + boxNumber).innerHTML;
}

function checkMove(box1, box2, box3, currentSign) {
    if (getBox(box1) == currentSign && getBox(box2) == currentSign && getBox(box3) == currentSign) {
        return true;
    }
    else {
        return false;
    }
}

function winner() {
    if (checkMove(1, 2, 3, sign) || checkMove(4, 5, 6, sign) || checkMove(7, 8, 9, sign)
        || checkMove(1, 4, 7, sign) || checkMove(2, 5, 8, sign) || checkMove(3, 6, 9, sign)
        || checkMove(1, 5, 9, sign) || checkMove(3, 5, 7, sign)) {
        return true;
    }

    return false;
}

function resetBox() {
    let tdList =Object.values(document.getElementsByTagName("td"));
    tdList.forEach( tdElement => 
        tdElement.innerHTML = ""
    );
    document.getElementById("player").innerHTML= "<center>" + "Let's Play.." + "</center>";
}
