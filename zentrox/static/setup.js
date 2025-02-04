function submitRegistration() {
    adminUsername = document.getElementById("adminUsername").value
    adminPassword = document.getElementById("adminUsername").value
    fetch("/setup/registAdmin", {
        "method": "POST",
        "headers": {
            "Content-Type": "application/json"
        },
        "body": JSON.stringify({
            "adminUsername": adminUsername,
            "adminPassword": adminPassword
        })
    }).then((res) => res.json())
    .then((data) => {
        if (data["status"] == "s") {
            document.getElementById("adminSetup").hidden = true // ? Setup admin account
            document.getElementById("userSetup").hidden = false // ? Add users & AccID?
        }
    })
}

function submitUserRegMode() {
    regMode = document.getElementById("userRegistrationMode").value
    fetch("/setup/regMode", {
        "method": "POST",
        "headers": {
            "Content-Type": "application/json"
        },
        "body": JSON.stringify({
            "regMode": regMode
        })
    }).then((res) => res.json())
    .then((data) => {
        if (data["status"] == "s") {
            document.getElementById("userSetup").hidden = true // ? Setup admin account
            document.getElementById("customization").hidden = false // ? Add users & AccID?
        }
    })
}

function submitCustomization() {
    serverName = document.getElementById("serverName").value,
    cltheme = document.getElementById("colorTheme").value
    fetch("/setup/custom", {
        "method": "POST",
        "headers": {
            "Content-Type": "application/json"
        },
        "body": JSON.stringify({
            "serverName": serverName,
            "cltheme": cltheme
        })
    }).then((res) => res.json())
    .then((data) => {
        if (data["status"] == "s") {
            location.href = "/dashboard"
        }
    })
}

function updateDescriptionRegMode() {
    RegModeDescriptions = {
        "linkInvite": "You can generate a link to invite a single person to your server.<br>This is recommended if you have a team or small company.",
        "multiLinkInvite": "You can genereate a link, that multiple people can use, to register to your server.<br>You'll have to set a limit.",
        "public": "Anyone can register to your server.<br>This is insecure."
    }
    document.getElementById("descriptionRegMode").innerHTML = RegModeDescriptions[document.getElementById("userRegistrationMode").value]
}