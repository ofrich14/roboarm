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
    } else if (receivedString == "c") {
        if (מצב_צבט == 0) {
            מצב_צבט += 1
            SuperBit.Servo2(SuperBit.enServo.S5, 110)
        } else {
            מצב_צבט = 0
            SuperBit.Servo2(SuperBit.enServo.S5, 0)
        }
    } else if (receivedString == "arm") {
        if (מצב_זרועה == 0) {
            מצב_זרועה += 1
            SuperBit.Servo2(SuperBit.enServo.S1, 0)
        } else if (מצב_זרועה == 1) {
            מצב_זרועה += 1
            SuperBit.Servo2(SuperBit.enServo.S1, 30)
        } else if (מצב_זרועה == 2) {
            מצב_זרועה += 1
            SuperBit.Servo2(SuperBit.enServo.S1, 60)
        } else if (מצב_זרועה == 3) {
            מצב_זרועה += 1
            SuperBit.Servo2(SuperBit.enServo.S1, 90)
        } else if (מצב_זרועה == 4) {
            SuperBit.Servo2(SuperBit.enServo.S1, 130)
            מצב_זרועה = 0
        }
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
let מצב_זרועה = 0
let מצב_צבט = 0
מצב_צבט = 0
SuperBit.Servo2(SuperBit.enServo.S5, 0)
מצב_זרועה = 0
SuperBit.Servo2(SuperBit.enServo.S1, 0)
basic.forever(function () {
    makerbit.connectUltrasonicDistanceSensor(DigitalPin.P3, DigitalPin.P6)
    if (makerbit.isUltrasonicDistanceLessThan(109, DistanceUnit.CM)) {
        music.play(music.stringPlayable("G F A C B F A D ", 274), music.PlaybackMode.UntilDone)
        SuperBit.MotorStopAll()
    }
})
