input.onButtonPressed(Button.A, function () {
    radio.sendString("\"Holaa gente!\"")
})
radio.onReceivedString(function (receivedString) {
    basic.showString("" + (radio.receivedPacket(RadioPacketProperty.SignalStrength)))
})
basic.forever(function () {
	
})
