/* Copyright (c) 2020 MTHS All rights reserved
*
* Created by: Mohammed Afheej
* Created on: Oct 2024
* This program uses the distance sensor and save the current distance in cm
*/

// defining variables
let distanceOfObject: number = 0
let neopixelStrip: neopixel.Strip = null

// show happy face (-__-)
basic.showIcon(IconNames.Happy)

// calculating the distacne
input.onButtonPressed(Button.A, function () {

    distanceOfObject = sonar.ping(
        DigitalPin.P1,
        DigitalPin.P2,
        PingUnit.Centimeters
    )

    if (distanceOfObject < 10) {
        basic.clearScreen()
        neopixelStrip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)
        neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Red))
        neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Red))
        neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Red))
        neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Red))
        neopixelStrip.show()
        basic.showNumber(distanceOfObject)

        //turn off the neopixel
        pause(2000)
        neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Black))
        neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Black))
        neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Black))
        neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Black))
        neopixelStrip.show()
    }

    // if distance >= 10
    else {
        neopixelStrip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)
        neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Green))
        neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Green))
        neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Green))
        neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Green))
        neopixelStrip.show()
        basic.showNumber(distanceOfObject)

        //turn off the neopixel
        pause(2000)
        neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Black))
        neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Black))
        neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Black))
        neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Black))
        neopixelStrip.show()
    }

    //clear screen and show happy face
    basic.clearScreen()
    basic.showIcon(IconNames.Happy)
})
