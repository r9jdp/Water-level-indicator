import serial

serial_port = 'COM3'
baud_rate = 9600

ser = serial.Serial(serial_port,baudrate=baud_rate)

def SensorValue():
    try:
        while True:
            try:
                line = ser.readline().decode('utf-8').rstrip()
                yield line
            except Exception as e:
                pass
        # line = ser.readline().decode('utf-8').rstrip()
        # return line
    except Exception as e:
        pass
    except KeyboardInterrupt:
        ser.close()
