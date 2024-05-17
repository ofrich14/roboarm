radio.onReceivedString(function (receivedString) {
    if (receivedString == "l") {
        SuperBit.MotorRunDual(
        SuperBit.enMotors.M2,
        255,
        SuperBit.enMotors.M4,
        0
        )
        basic.showLeds(`
            . # . . .
            . # . . .
            . # . . .
            . # . . .
            . # # # .
            `)
        basic.pause(1000)
        basic.clearScreen()
        SuperBit.MotorStopAll()
    } else if (receivedString == "r") {
        SuperBit.MotorRun(SuperBit.enMotors.M4, 255)
        SuperBit.MotorRun(SuperBit.enMotors.M2, 0)
        basic.showLeds(`
            . . . . .
            . # . # .
            . # # . .
            . # . . .
            . # . . .
            `)
        basic.pause(1000)
        basic.clearScreen()
        SuperBit.MotorStopAll()
    } else if (receivedString == "f") {
        SuperBit.MotorRun(SuperBit.enMotors.M2, 255)
        SuperBit.MotorRun(SuperBit.enMotors.M4, 255)
        basic.showLeds(`
            . # # # .
            . # . . .
            . # # # .
            . # . . .
            . # . . .
            `)
        basic.pause(1000)
        basic.clearScreen()
        SuperBit.MotorStopAll()
    } else if (receivedString == "b") {
        SuperBit.MotorRun(SuperBit.enMotors.M2, -255)
        SuperBit.MotorRun(SuperBit.enMotors.M4, -255)
        basic.showLeds(`
            . # . . .
            . # . . .
            . # # # .
            . # . # .
            . # # # .
            `)
        basic.pause(3000)
        basic.clearScreen()
        SuperBit.MotorStopAll()
    } else if (receivedString == "Z") {
    	
    } else if (receivedString == "X") {
        SuperBit.Servo2(SuperBit.enServo.S1, 0)
    } else if (receivedString == "C") {
        SuperBit.Servo2(SuperBit.enServo.S1, 0)
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
basic.forever(function () {
    makerbit.connectUltrasonicDistanceSensor(DigitalPin.P3, DigitalPin.P6)
    if (makerbit.isUltrasonicDistanceLessThan(109, DistanceUnit.CM)) {
        music.play(music.stringPlayable("G F A C B F A D ", 274), music.PlaybackMode.UntilDone)
        SuperBit.MotorStopAll()
    }
})
