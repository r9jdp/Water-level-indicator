import serial
import time


serial_port = 'COM3'
baud_rate = 9600

ser = serial.Serial(serial_port, baud_rate)

def turn_motor_on():
    ser.write(b'1')  # Send command '1' to Arduino
    print("Motor turned on")

# Function to turn motor off
def turn_motor_off():
    ser.write(b'0') 
    print("Motor turned off")

# Example usage
turn_motor_on()  # Turn motor on
time.sleep(5)  # Wait for 5 seconds
turn_motor_off()  # Turn motor off