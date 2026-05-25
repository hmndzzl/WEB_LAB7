import { Button } from './Button'
type P = { n: (n:string)=>void, o: (o:string)=>void, d: ()=>void, s: ()=>void, e: ()=>void, c: ()=>void }
export const Keypad = ({ n, o, d, s, e, c }: P) => (
  <div className='keypad'>
    <Button label='C' onClick={c} cls='top' /><Button label='+/-' onClick={s} cls='top' />
    <Button label='%' onClick={() => o('%')} cls='top' /><Button label='/' onClick={() => o('/')} cls='op' />
    <Button label='7' onClick={n} /><Button label='8' onClick={n} /><Button label='9' onClick={n} />
    <Button label='*' onClick={() => o('*')} cls='op' />
    <Button label='4' onClick={n} /><Button label='5' onClick={n} /><Button label='6' onClick={n} />
    <Button label='-' onClick={() => o('-')} cls='op' />
    <Button label='1' onClick={n} /><Button label='2' onClick={n} /><Button label='3' onClick={n} />
    <Button label='+' onClick={() => o('+')} cls='op' />
    <Button label='0' onClick={n} cls='zero' /><Button label='.' onClick={d} /><Button label='=' onClick={e} cls='op' />
  </div>
)
