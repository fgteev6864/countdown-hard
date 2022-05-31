input.onButtonPressed(Button.A, function () {
	
})
function anbutton_A_pressed () {
    anbutton_A_pressed()
    for (let index = 0; index <= 2; index++) {
        music.playTone(262, music.beat(BeatFraction.Quarter))
        basic.showNumber(3 - index)
    }
    music.playTone(392, music.beat(BeatFraction.Whole))
    basic.showString("GO!")
    basic.showString("" + (images.createBigImage(`
        # # # # . . # # # #
        # . . . . . # . . #
        # . # # # . # . . #
        # . . # . . # . . #
        # # # # . . # # # #
        `)))
    basic.showLeds(`
        # . # . #
        # . # . #
        # . # . #
        . . . . .
        # . # . #
        `)
    return 0
}
basic.forever(function () {
	
})
