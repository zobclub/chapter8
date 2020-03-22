const i2cAddr = 0x1d
const STATUS = 0x00
let x = 0

basic.forever(function () {
    pins.i2cWriteNumber(i2cAddr, STATUS, NumberFormat.UInt8BE, false)
    let d = pins.i2cReadNumber(i2cAddr, NumberFormat.UInt32BE, false)
    x = (((d >> 16) & 0xFF) << 2) + ((d >> 14) & 0x3)
    if (x >= 512)
        x -= 1024
    x <<= 2
    serial.writeNumber(x)
    serial.writeLine("")
    basic.pause(500)
})
