dropNum = 1;

function dropTog() {
    if (dropNum == 0) {
        document.getElementById("dropdownMenu").style.display = "none";
        dropNum += 1;
        return dropNum;
    }
    else if (dropNum == 1) {
        document.getElementById("dropdownMenu").style.display = "flex";
        dropNum -= 1;
        return dropNum;
    }
    else {
        document.getElementById("dropdownMenu").style.display = "none";
        dropNum = 1;
        return dropNum;
    }
}