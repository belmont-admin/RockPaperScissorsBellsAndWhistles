input.onGesture(Gesture.Shake, function () {
    basic.showString("R")
    basic.showString("P")
    basic.showString("S")
    hand = Math.randomRange(1, 3)
    if (hand == 1) {
        basic.showLeds(`
            # # # # #
            # . . . #
            # . . . #
            # . . . #
            # # # # #
            `)
    } else if (hand == 2) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
    } else {
        basic.showLeds(`
            # # . . #
            # # . # .
            . # # . .
            # # . # .
            # # . . #
            `)
    }
})
input.onButtonPressed(Button.AB, function () {
    Ascore = 0
    Bscore = 0
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    Bscore += 1
    ay = Ascore
    for (let index = 0; index < Ascore; index++) {
        led.plot(0, 5 - ay)
        ay += -1
    }
    by = Bscore
    for (let index = 0; index < Bscore; index++) {
        led.plot(4, 5 - by)
        by += -1
    }
    basic.pause(500)
    if (Bscore == 3) {
        basic.showLeds(`
            . . # . .
            . . . # .
            # # # # #
            . . . # .
            . . # . .
            `)
    }
})
input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    Ascore += 1
    ay = Ascore
    for (let index = 0; index < Ascore; index++) {
        led.plot(0, 5 - ay)
        ay += -1
    }
    by = Bscore
    for (let index = 0; index < Bscore; index++) {
        led.plot(4, 5 - by)
        by += -1
    }
    basic.pause(500)
    if (Ascore == 3) {
        basic.showLeds(`
            . . # . .
            . # . . .
            # # # # #
            . # . . .
            . . # . .
            `)
    }
})
let by = 0
let ay = 0
let hand = 0
let Ascore = 0
let Bscore = 0
Bscore = 0
Ascore = 0
