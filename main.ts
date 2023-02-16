bluetooth.onBluetoothConnected(function () {
    basic.showIcon(IconNames.SmallDiamond)
})
let data = ""
basic.showIcon(IconNames.Square)
bluetooth.startUartService()
basic.forever(function () {
    data = bluetooth.uartReadUntil(serial.delimiters(Delimiters.NewLine))
    if (data.includes("A")) {
        basic.showIcon(IconNames.Yes)
    }
})
