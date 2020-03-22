/**
 * MGA3110 blocks
 */
//% weight=100 color=#1eb0f0 icon="\uf2c9"
namespace MGA3110 {
    const i2cAddr = 0x0E
    const DIE_TEMP = 0x0F
    const OFF_TEMP = 10
    /**
     * MGA3110 Temperature
     */
    //% block="Temperature"
    export function gettemp(): number {
        let t = 0
        pins.i2cWriteNumber(i2cAddr, DIE_TEMP, NumberFormat.UInt8BE, false)
        t = pins.i2cReadNumber(i2cAddr, NumberFormat.Int8BE, false)
        t += OFF_TEMP
        return t
    }
}
