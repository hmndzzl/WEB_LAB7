import { useCalculator } from '../hooks/useCalculator'
import { Display } from './Display'
import { Keypad } from './Keypad'
export const Calculator = () => {
  const calc = useCalculator()
  return (
    <div className='calculator'>
      <div className='brand'>
        <span className='logo'>CASIO</span>
        <span className='model'>fx-991LA CW</span>
      </div>
      <Display value={calc.display} />
      <Keypad
        n={calc.handleNumber} o={calc.handleOperation} d={calc.handleDecimal}
        s={calc.handleSignToggle} e={calc.handleEqual} c={calc.handleClear}
      />
    </div>
  )
}
