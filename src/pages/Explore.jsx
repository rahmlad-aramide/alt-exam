import React from 'react';
import { ErrorBoundary } from 'react-error-boundary';

function ErrorFallback({error, resetErrorBoundary}) {
    return (
      <div role="alert">
        <p>You don't listen to instruction:</p>
        <pre style={{color: 'red'}}>{error.message}</pre>
        <button onClick={resetErrorBoundary}>Try again</button>
      </div>
    )
  }
  
  function Bomb({username}) {
    if (username === 'bomb' || username === 'Bomb') {
      throw new Error('💥 CABOOM 💥')
    }
    return (<h1 className='text-2xl font-medium mt-12 text-white text-center'>Hi {username} hope you're good today? </h1>)
  }
  
  const Explore = ()=> {
    const [username, setUsername] = React.useState([])
    const usernameRef = React.useRef(null)
  
    return (
      <div className='bg-gradient-to-br from-primary to-secondary h-screen overflow-y-hidden md:h-[calc(100vh_-_4rem)] px-4 flex flex-col justify-center items-center'>
            <div>
                <label htmlFor='username' className='text-white pb-2'>Username: </label>
                <br/>
                
                <input
                    placeholder="Enter your username"
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                    ref={usernameRef}
                    className="mb-2 text-black p-1 w-full"
                    id='username'
                    />
                    <br />
                    <em className='text-white'>Pls don't type bomb so as not to set it off</em>
            </div>
        <div>
          <ErrorBoundary
            FallbackComponent={ErrorFallback}
            onReset={() => {
              setUsername('')
              usernameRef.current.focus()
            }}
            resetKeys={[username]}
          >
            <Bomb username={username} />
          </ErrorBoundary>
        </div>
      </div>
    )
  }
  export default Explore