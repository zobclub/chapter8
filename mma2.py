from microbit import *

I2CADR = 0x1D
STATUS = 0x00

while True:
    i2c.write(I2CADR, bytearray([STATUS]))
    d = i2c.read(I2CADR, 7)
    x = (d[1] << 2) + (d[2] >> 6)
    if (x >= 512):
        x -= 1024
    x <<= 2
    print(x)    
    sleep(500)