var toggle = document.getElementById("night_toggle");

if (localStorage.getItem('night') === null) {
    localStorage.night = false;
    activateLightMode();
}
else if (localStorage.getItem('night') === true) {
    activateDarkMode();
    console.log("night mode on");
    document.querySelector('#night_toggle').checked = true;
}

// check night toggle
function toggle_action() {
    if (document.querySelector('#night_toggle').checked){
        console.log("night mode on");
        // switch to night theme
        activateDarkMode();
    }
    else {
        // switch to light theme
        activateLightMode();
    }
}

function activateDarkMode() {
    const rootElement = document.querySelector(':root')
    const darkTheme = {
        '--background-color': '#1e1e1e',
        '--primary-color': '#157efb',
        '--font-color': '#dedede',
        '--subtle-primary-color': '#151513',
        '--block-background-color': '#323232',
        '--menu-item-color': '#dedede',
        '--menu-item-hover-color': '#e4c844',
        '--menu-item-alert-bg': '#151513',
        '--menu-item-alert-shadow': '#151513',
        '--alert-border-color': '#000',
        '--tertiary-color:': '#727680',
        '--search-bar-color': '#727680'
    }
    for(k in darkTheme) {
        rootElement.style.setProperty(k, darkTheme[k])
    }
}

function activateLightMode() {
    const rootElement = document.querySelector(':root')
    const lightTheme = {
        '--background-color': '#fff',
        '--page-width': '70em',
        '--primary-color': '#151513',
        '--font-color': '#484846',
        '--subtle-primary-color': '#151513',
        '--block-background-color': '#f0f2f3',
        '--menu-item-color': '#000',
        '--menu-item-hover-color': '#000',
        '--menu-item-alert-bg': '#ffffff',
        '--menu-item-alert-shadow': '#dfe1e7',
        '--alert-border-color': '#dfe1e7',
        '--tertiary-color:': '#727680',
        '--search-bar-color': '#fff'

    }
    for(k in lightTheme) {
        rootElement.style.setProperty(k, lightTheme[k])
    }
}
