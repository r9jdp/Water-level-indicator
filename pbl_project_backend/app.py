import asyncio
import websockets
from arduino_serial_reader import SensorValue


async def handle_connection(websocket, path):
    try:
        value = SensorValue()
        for items in value:
            percentage = (abs(6.67-float(items))/6.67)*100
            print(percentage)
            await websocket.send(str(int(percentage)))
            await asyncio.sleep(0.5)
    except websockets.ConnectionClosed:
        print("Client disconnected")
    except KeyboardInterrupt :
        print("Terminated")
    except TypeError:
        print("Type-error")


if __name__ == "__main__":
    start_server = websockets.serve(handle_connection, "localhost", 8765)
    asyncio.get_event_loop().run_until_complete(start_server)
    asyncio.get_event_loop().run_forever()
