radio.onReceivedString(function (receivedString) {
    if (receivedString == "l") {
        SuperBit.MotorRunDual(
        SuperBit.enMotors.M2,
        255,
        SuperBit.enMotors.M4,
        0
        )
        basic.pause(1000)
        basic.showLeds(`
            . # . . .
            . # . . .
            . # . . .
            . # . . .
            . # # # .
            `)
        basic.clearScreen()
    } else if (receivedString == "r") {
        SuperBit.MotorRun(SuperBit.enMotors.M4, 255)
        SuperBit.MotorRun(SuperBit.enMotors.M2, 0)
        basic.pause(1000)
        basic.showLeds(`
            . . . . .
            . # . # .
            . # # . .
            . # . . .
            . # . . .
            `)
        basic.clearScreen()
    } else if (receivedString == "f") {
        SuperBit.MotorRun(SuperBit.enMotors.M2, 255)
        SuperBit.MotorRun(SuperBit.enMotors.M4, 255)
        basic.pause(1000)
        basic.showLeds(`
            . # # # .
            . # . . .
            . # # # .
            . # . . .
            . # . . .
            `)
        basic.clearScreen()
    } else if (receivedString == "b") {
        SuperBit.MotorRun(SuperBit.enMotors.M2, -255)
        SuperBit.MotorRun(SuperBit.enMotors.M4, -255)
        basic.pause(3000)
        basic.showLeds(`
            . # . . .
            . # . . .
            . # # # .
            . # . # .
            . # # # .
            `)
        basic.clearScreen()
    } else {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
    }
})
