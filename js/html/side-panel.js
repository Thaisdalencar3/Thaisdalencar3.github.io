const legalLinkContainer = terminal.document.querySelector(".legal-links")
const legalLinkAnchors = legalLinkContainer.querySelectorAll("a")

const panelContainer = terminal.document.createElement("div")
panelContainer.classList.add("side-panel-container")

const closeButton = terminal.document.createElement("button")
closeButton.classList.add("side-panel-close")
closeButton.textContent = ">"

panelContainer.appendChild(closeButton)
terminal.document.body.appendChild(panelContainer)

let currPanelVisible = false

function getAllPanelButtons() {
    return panelContainer.querySelectorAll(".side-panel-button")
}

const putLegalLinksInOrder = (noAnimate=false) => {
    if (currPanelVisible) {
        legalLinkContainer.animate([
            { transform: "translateX(-50px)" },
            { transform: "translateX(-400px)" }
        ], {
            duration: noAnimate ? 0 : 300,
            easing: "ease-in-out",
            fill: "forwards"
        })
    } else {
        legalLinkContainer.animate([
            { transform: "translateX(-400px)" },
            { transform: "translateX(-50px)" }
        ], {
            duration: noAnimate ? 0 : 300,
            easing: "ease-out",
            fill: "forwards"
        })
    }
}

function togglePanel() {
    if (currPanelVisible) {
        panelContainer.animate([
            { transform: "translateX(0)", backgroundColor: "rgba(0, 0, 0, 1)", height: "100%" },
            { transform: "translateX(350px)", backgroundColor: "rgba(0, 0, 0, 0)", height: "50px" }
        ], {
            duration: 200,
            easing: "ease-in-out",
            fill: "forwards"
        })

        closeButton.animate([
            { transform: "rotate(0deg)" },
            { transform: "rotate(180deg)" },
        ], {
            duration: 300,
            easing: "ease-out",
            fill: "forwards"
        })

        getAllPanelButtons().forEach(button => {
            button.animate([
                { transform: "translateX(0)" },
                { transform: "translateX(50px)" }
            ], {
                duration: 300,
                easing: "ease-in-out",
                fill: "forwards"
            })
        })
    } else {
        panelContainer.animate([
            { transform: "translateX(350px)", backgroundColor: "rgba(0, 0, 0, 0)", height: "50px" },
            { transform: "translateX(0)", backgroundColor: "rgba(0, 0, 0, 1)", height: "100%" }
        ], {
            duration: 300,
            easing: "ease-out",
            fill: "forwards"
        })

        closeButton.animate([
            { transform: "rotate(180deg)" },
            { transform: "rotate(0deg)" },
        ], {
            duration: 300,
            easing: "ease-out",
            fill: "forwards"
        })

        getAllPanelButtons().forEach(button => {
            button.animate([
                { transform: "translateX(50px)" },
                { transform: "translateX(0)" }
            ], {
                duration: 300,
                easing: "ease-in-out",
                fill: "forwards"
            })
        })
    }
    currPanelVisible = !currPanelVisible
    terminal.data.sidepanel = currPanelVisible
    putLegalLinksInOrder()
}

function addButtons(buttonList) {
    for (let button of buttonList) {
        const buttonElement = terminal.document.createElement("button")
        buttonElement.classList.add("side-panel-button")
        buttonElement.textContent = button.text
        buttonElement.title = `${button.command}`
        buttonElement.addEventListener("click", terminal.makeInputFunc(button.command))
        panelContainer.appendChild(buttonElement)
    }
}

addButtons([
    { text: "Iniciar", command: "clock" },
    // { text: "Instruções", command: "help" },
    { text: "Tentar senha", command: "senha" },
    // { text: "Start 2", command: "cat root/about.txt" },
    // { text: "Open Help Menu", command: "help" },
    // { text: "Open A Clock", command: "clock" },
    // { text: "Hacker Mode", command: "cmatrix" },
])

if (terminal.data.sidepanel) {
    togglePanel()
}

putLegalLinksInOrder(true)

closeButton.addEventListener("click", togglePanel)