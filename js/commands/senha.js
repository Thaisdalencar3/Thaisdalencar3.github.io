terminal.addCommand("senha", function() {
    terminal.printLine("Terminal habilitado para você tentar a senha. \n\nObs: use letras maiúsculas, CAPSLOCK \n\nBoa sorte!!", Color.COLOR_1)
    //terminal.printLink(args.show)
    // await terminal.modules.load("mathenv", terminal)
    // while (true) {
    //     let text = await terminal.prompt()
    //     let [result, error] = terminal.modules.mathenv.eval(text)
    //     if (error) {
    //         terminal.print("> ")
    //         terminal.printLine(error)
    //     } else if (result !== null) {
    //         terminal.print("> ")
    //         terminal.printLine(result)
    //     }
    // }
}, {
    description: "Tente a senha"
})
