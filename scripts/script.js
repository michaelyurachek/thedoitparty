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

function redirect(pageNum) {
    if (pageNum == 1) {
        window.location.href = "/thedoitparty/pages/about.html";
        console.log("Valid Redirect");
    } else if (pageNum == 2) {
        window.location.href = "/thedoitparty/pages/news.html";
        console.log("Valid Redirect");
    } else if (pageNum == 3) {
        window.location.href = "Form";
        console.log("Valid Redirect");
    } else if (pageNum == 4) {
        window.location.href = "/thedoitparty/index.html";
        console.log("Valid Redirect")
    }
}