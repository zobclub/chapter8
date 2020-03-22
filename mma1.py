from microbit import *

while True:
    d = accelerometer.get_values()
    print(d)    
    sleep(500)