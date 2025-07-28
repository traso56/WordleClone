import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BigBoardRenderer } from './BigBoardRenderer'
import { MiniBoardRenderer } from './MiniBoardRenderer';
import type { BoardState } from './Data'

function App() {
  const [count, setCount] = useState(0)
  const [boardState, setBoardState] = useState({
    CorrectAnswer: "AAAAA",
    Rows: [
      {
        checked: false,
        data: ["", "", "", "", ""]
      },
    ]
  } as BoardState);

  return (
    <>
      <div style={{ width: '100%', height: '100%', padding: 10, background: '#27272B', overflow: 'hidden', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10, display: 'inline-flex' }}>
        <div style={{ width: 213, alignSelf: 'stretch', padding: 14, background: 'rgba(255, 255, 255, 0.05)', overflow: 'hidden', borderRadius: 24, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10, display: 'inline-flex' }}>
          <div style={{ alignSelf: 'stretch', height: 154, paddingTop: 10, paddingBottom: 10, paddingLeft: 19, paddingRight: 10, background: '#38383C', overflow: 'hidden', borderRadius: 14, justifyContent: 'flex-start', alignItems: 'center', gap: 10, display: 'inline-flex' }}>
            <div style={{ width: 62, height: 62, position: 'relative', background: 'white', borderRadius: 52 }} />
            <div style={{ flex: '1 1 0', alignSelf: 'stretch', overflow: 'hidden', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 4, display: 'inline-flex' }}>
              <MiniBoardRenderer state={{
                CorrectAnswer: "AAAAA",
                Rows: [
                  {
                    data: ["A", "", "A", "", "A"],
                    checked: false
                  },
                ]
              }} />

            </div>
          </div>
        </div>
        <div style={{ flex: '1 1 0', alignSelf: 'stretch', padding: 12, background: 'rgba(255, 255, 255, 0.05)', overflow: 'hidden', borderRadius: 24, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10, display: 'inline-flex' }}>
          <div style={{ alignSelf: 'stretch', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10, display: 'inline-flex' }}>
            <div style={{ flex: '1 1 0', height: 75, paddingTop: 18, paddingBottom: 18, background: '#38383C', overflow: 'hidden', borderRadius: 17, justifyContent: 'center', alignItems: 'center', gap: 10, display: 'flex' }}>
              <div style={{ color: 'white', fontSize: 32, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word' }}>Your board</div>
            </div>
            <div style={{ height: 75, paddingLeft: 24, paddingRight: 24, background: '#38383C', overflow: 'hidden', borderRadius: 17, justifyContent: 'center', alignItems: 'center', gap: 10, display: 'flex' }}>
              <div style={{ width: 30, height: 30, position: 'relative', overflow: 'hidden' }}>
                <div style={{ width: 25, height: 25, left: 2.50, top: 2.50, position: 'absolute', background: 'white' }} />
              </div>
            </div>
          </div>
          <div style={{ alignSelf: 'stretch', flex: '1 1 0', padding: 10, overflow: 'hidden', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 10, display: 'flex' }}>
            <div style={{ width: 682, height: 878, overflow: 'hidden', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex' }}>
              {/* <div style={{ alignSelf: 'stretch', height: 144.40, padding: 10, overflow: 'hidden', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10, display: 'inline-flex' }}>
                <div style={{ flex: '1 1 0', alignSelf: 'stretch', position: 'relative', background: 'white' }} />

              </div> */}
              <BigBoardRenderer state={boardState} setState={setBoardState} />

            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
