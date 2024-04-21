import { useEffect, useState } from 'react'
import ProgressBarUsageExample from './components/progressBar'
import ProgressCircleUsageExample from './components/progressCircle'

function App() {
  const [count, setCount] = useState(68)
  useEffect(() => {
    let link = 'ws://localhost:8765';
    const socket = new WebSocket(link);

    socket.onopen = () => {
      console.log('WebSocket connection established.');
    };

    socket.onmessage = (event) => {
      const receivedData = event.data;
      console.log('Received from backend:', receivedData);
      if(parseInt(receivedData)>=100){
        setCount(100)
      }
      else{
        setCount(parseInt(receivedData))
      }
    };

    socket.onclose = () => {
      console.log('WebSocket connection closed.');
    };

    return () => {
      socket.close();
    };
  }, []);


  return (
    <>
      <div className='h-max '>
        <ProgressCircleUsageExample count={count} />
        <div className='flex flex-col items-center'>
          <ProgressBarUsageExample count={count} />
          <p className='text-xl font-medium text-slate-300 m-2'>Progress bar</p>
        </div>
      </div>

    </>
  )
}


export default App