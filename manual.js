
function showView() {
    document.getElementById('view').style.display = "block";
    event.currentTarget.className = "list-group-item is-visible";
}

function showSearch() {
    document.getElementById('info').style.display = "block";
    event.currentTarget.className = "list-group-item is-visible";
}

function showRequest() {
    document.getElementById('request').style.display = "block";
    event.currentTarget.className = "list-group-item is-visible";
}

function showNightMode() {
    document.getElementById('dark').style.display = "block";
    event.currentTarget.className = "list-group-item is-visible";
}

// hide all the contents and make all tabs inactive
function hideTabsandExecute(func) {

    var tabContents = document.getElementsByClassName("content");
    for (var i = 0; i < tabContents.length; i++){
        tabContents[i].style.display = "none";
    }

    var tabs = document.getElementsByClassName("list-group-item");
    for (var k = 0; k < tabs.length; k++){
        tabs[k].className = "list-group-item list-group-item-action bg-light";
    }
    func();
}