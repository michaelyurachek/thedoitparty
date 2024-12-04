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
        window.location.href = "https://forms.gle/vcQXJF3W2DtG943E8";
        console.log("Valid Redirect");
    } else if (pageNum == 4) {
        window.location.href = "/thedoitparty/index.html";
        console.log("Valid Redirect")
    } else if (pageNum == 5) {
        window.location.href = "/thedoitparty/pages/press1.html";
        console.log("Valid Redirect")
    } else if (pageNum == 6) {
        window.location.href = "/thedoitparty/pages/press2.html";
        console.log("Valid Redirect")
    }
}