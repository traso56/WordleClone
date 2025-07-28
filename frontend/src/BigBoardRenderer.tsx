import { useEffect } from 'react';
import type { BoardState } from './Data';
export function BigBoardRenderer({ state, setState }: {
    state: BoardState,
    setState: (newstate: BoardState) => void
}) {
    useEffect(() => {
        (async () => {
            const elements = document.getElementsByClassName("editable");
            if (elements.length > 0) {
                (elements.item(0) as HTMLInputElement).focus()
            }
            const rows = state.Rows.filter(x => !x.checked && x.data.every(x => x != ""));
            if (rows.length == 0) {
                return;
            }
            const complete = rows[0];
            const requestOptions = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    "word": complete.data.join("")
                })
            };
            let index = state.Rows.indexOf(complete);
            const result = await fetch("https://wordle.traso.dev/api/word", requestOptions);
            let cloned = structuredClone(state);
            cloned.Rows[index].checked = true;
            cloned.Rows[index].matchresult = await result.json();
            cloned.Rows.push({
                checked: false,
                data: ["", "", "", "", ""],
                matchresult: []
            })
            setState(cloned);

        })()
    })
    return <>
        {state.Rows.map((x, i1) =>
            <div key={i1} style={{ alignSelf: 'stretch', height: 144.40, padding: 10, overflow: 'hidden', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10, display: 'inline-flex' }}>
                {x.data.map((x, i2) =>
                    <div style={{ width: '100%', height: '100%', background: 'white', overflow: 'hidden', justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex' }}>
                        {x.length == 0 ? (<>
                            <input className='editable' style={{ color: 'black', fontSize: 32, fontFamily: 'Inter', fontWeight: '700', wordWrap: 'break-word', width: '100%', textAlign: "center" }} onInput={(ev) => {
                                const cloned = structuredClone(state);
                                cloned.Rows[i1].data[i2] = ev.currentTarget.value.trim().toUpperCase();
                                console.log(cloned)
                                setState(cloned)
                            }}>
                            </input>
                        </>) : (<div style={{ color: 'black', fontSize: 32, fontFamily: 'Inter', fontWeight: '700', wordWrap: 'break-word' }}>{x}</div>)}
                    </div >
                )}

            </div >
        )
        }
    </>
}