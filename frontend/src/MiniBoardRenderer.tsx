import type { BoardState } from './Data';
export function MiniBoardRenderer({ state }: {
    state: BoardState
}) {
    return <>
        {state.Rows.map((x, i1) =>
            <div key={i1} style={{ width: '100%', height: '100%', overflow: 'hidden', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 4, display: 'inline-flex' }}>
                {x.data.map((x, i2) =>
                    <div key={i2} style={{ flex: '1 1 0', alignSelf: 'stretch', background: 'white', overflow: 'hidden', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 0, display: 'inline-flex' }}>
                        <div style={{ color: 'black', fontSize: 12, fontFamily: 'Inter', fontWeight: '700', wordWrap: 'break-word' }}>{x}</div>
                    </div>
                )}

            </div>
        )}
    </>
}