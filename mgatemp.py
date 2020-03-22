from microbit import *

I2CADR = 0x0E
DIE_TEMP  = 0x0F

while True:
    i2c.write(I2CADR, bytearray([DIE_TEMP]))
    d = i2c.read(I2CADR, 1)
    x = d[0]
    if x >=128:
        x -= 256
    x += 10
    print(x)
    sleep(500)