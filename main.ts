radio.onReceivedString(function (receivedString) {
    if (receivedString == "l") {
        SuperBit.MotorRun(SuperBit.enMotors.M2, 255)
        basic.pause(1000)
        SuperBit.MotorRun(SuperBit.enMotors.M4, 0)
        basic.pause(1000)
    } else if (receivedString == "r") {
        SuperBit.MotorRun(SuperBit.enMotors.M4, 255)
        basic.pause(1000)
        SuperBit.MotorRun(SuperBit.enMotors.M2, 0)
        basic.pause(1000)
    } else if (receivedString == "f") {
        SuperBit.MotorRun(SuperBit.enMotors.M1, 255)
        basic.pause(3000)
        SuperBit.MotorRun(SuperBit.enMotors.M1, 255)
        basic.pause(3000)
    } else if (receivedString == "b") {
        SuperBit.MotorRun(SuperBit.enMotors.M1, -255)
        basic.pause(3000)
        SuperBit.MotorRun(SuperBit.enMotors.M1, -255)
        basic.pause(3000)
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
