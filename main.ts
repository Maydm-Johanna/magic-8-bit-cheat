input.onGesture(Gesture.Shake, function () {
    basic.clearScreen()
    basic.showString("Hmmm")
    if (input.buttonIsPressed(Button.A)) {
        basic.showString("Yes")
    } else if (input.buttonIsPressed(Button.B)) {
        basic.showString("No")
    } else {
        basic.showString("" + (text_list[randint(0, 5)]))
    }
})
let text_list: string[] = []
basic.showString("Ask and shake!")
text_list = [
"Yes",
"No",
"Ask again",
"Maybe",
"1% chance",
"I'll say yes if you give me $5"
]
