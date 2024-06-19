

terminal.addCommand("helloworld", async function() {
    const welcomeLineFuncs = [
        () => terminal.print(" .---------------------------------------------------------------------. "),
        () => terminal.print("  _______   _______     _______.     ___       _______  __    ______   "),
        () => terminal.print(" |       \\ |   ____|   /       |    /   \\     |   ____||  |  /  __  \\  "),
        () => terminal.print(" |  .--.  ||  |__     |   (----`   /  ^  \\    |  |__   |  | |  |  |  | "),
        () => terminal.print(" |  |  |  ||   __|     \\   \\      /  /_\\  \\   |   __|  |  | |  |  |  | "),
        () => terminal.print(" |  '--'  ||  |____.----)   |    /  _____  \\  |  |     |  | |  `--'  | "),
        () => terminal.print(" |_______/ |_______|_______/    /__/     \\__\\ |__|     |__|  \\______/  "),
        () => terminal.print("                                                                       "),
        () => terminal.print("       __   __    __  .__   __.  __  .__   __.   ______                "),
        () => terminal.print("      |  | |  |  |  | |  \\ |  | |  | |  \\ |  |  /  __  \\               "),
        () => terminal.print("      |  | |  |  |  | |   \\|  | |  | |   \\|  | |  |  |  |              "),
        () => terminal.print(".--.  |  | |  |  |  | |  . `  | |  | |  . `  | |  |  |  |              "),
        () => terminal.print("|  `--'  | |  `--'  | |  |\\   | |  | |  |\\   | |  `--'  |              "),
        () => terminal.print(" \\______/   \\______/  |__| \\__| |__| |__| \\__|  \\______/               "),
        () => terminal.print(" '---------------------------------------------------------------------' "),
        () => terminal.print("                                                                         "),
        () => terminal.print("Bem vind#s ao desafio!                                                  "),
        // () => terminal.print("You may enter commands to navigate over 200 unique features.    "),
        () => {
            terminal.print("Inicio seu desafio usando o comando ", Color.COLOR_1)
            terminal.printCommand("start", "clock", undefined, false)
            terminal.print(". Se divirta!                  ", Color.COLOR_1)
        },
        () => terminal.print("                                                                                 "),
        // () => {
        //     terminal.printLink("Blog", "https://noel-friedrich.de/blobber", undefined, false)
        //     terminal.print(" ")
        //     terminal.printLink("Github", "https://github.com/noel-friedrich/terminal", undefined, false)
        //     terminal.print(" ")
        //     terminal.printLink("Perli", "https://noel-friedrich.de/perli", undefined, false)
        //     terminal.print(" ")
        //     terminal.printLink("Compli", "https://play.google.com/store/apps/details?id=de.noelfriedrich.compli", undefined, false)
        //     terminal.print(" ")
        //     terminal.printLink("AntiCookieBox", "https://noel-friedrich.de/anticookiebox", undefined, false)
        //     terminal.print(" ")
        //     terminal.printLink("Partycolo", "https://noel-friedrich.de/partycolo", undefined, false)
        //     terminal.print(" ")
        //     terminal.printLink("Spion", "https://noel-friedrich.de/spion", undefined, false)
        //     terminal.print(" ")
        //     terminal.printLink("YouTube", "https://www.youtube.com/@noel.friedrich", undefined, false)
        //     terminal.print("  ")
        // }
    ]

    let size = {
        x: welcomeLineFuncs.length * 2,
        y: welcomeLineFuncs.length
    }

    const maxLineWidth = 64
    for (let i = 0; i < size.y; i++) {

        welcomeLineFuncs[i]()
        
        for (let j = 0; j < size.x; j++) {
            let x = (j / size.x - 0.5) * 2
            let y = (i / size.y - 0.5) * 2
            if (x*x + y*y > 1) {
                terminal.print(" ")
            } else {
                let angle = Math.atan2(y, x) / Math.PI * 180
                let hue = Math.round(angle)
                let lightness = Math.round(90 - (x*x + y*y) * 90)
                terminal.print("#A", Color.hsl(hue / 360, 1, lightness / 100))
            }
        }
        terminal.addLineBreak()
    }
}, {
    description: "display the hello-world text",
    rawArgMode: true,
})