import { useState } from 'react'

export const useCalculator = () => {
  const [display, setDisplay] = useState('0')
  const [prevVal, setPrevVal] = useState<string | null>(null)
  const [operation, setOperation] = useState<string | null>(null)
  const [waitingForNewValue, setWaitingForNewValue] = useState(false)

  const checkLimits = (val: string) => {
    if (val === 'ERROR') return 'ERROR'
    const num = parseFloat(val)
    if (isNaN(num)) return 'ERROR'
    if (num < 0) return 'ERROR'
    if (num > 999999999) return 'ERROR'

    // truncate to 9 characters total
    let str = val.toString()
    if (str.length > 9) {
      if (str.includes('.')) {
        // truncate decimals
        const [intPart, decPart] = str.split('.')
        if (intPart.length > 8) return 'ERROR' // no room for decimal point
        const allowedDecimals = 9 - 1 - intPart.length // 9 total - 1 for point - int length
        if (allowedDecimals > 0) {
          str = `${intPart}.${decPart.substring(0, allowedDecimals)}`
        } else {
          str = intPart
        }
      } else {
        return 'ERROR'
      }
    }
    return str
  }

  const performCalculation = (prev: string, current: string, op: string) => {
    const p = parseFloat(prev)
    const c = parseFloat(current)
    let res = 0
    switch (op) {
      case '+': res = p + c; break
      case '-': res = p - c; break
      case '*': res = p * c; break
      case '/': res = p / c; break
      case '%': res = p % c; break
      default: return current
    }
    return res.toString()
  }

  const handleNumber = (numStr: string) => {
    if (display === 'ERROR') {
      setDisplay(numStr)
      setWaitingForNewValue(false)
      return
    }

    if (waitingForNewValue) {
      setDisplay(numStr)
      setWaitingForNewValue(false)
    } else {
      if (display === '0') {
        setDisplay(numStr)
      } else {
        const newStr = display + numStr
        if (newStr.length <= 9) {
          setDisplay(newStr)
        }
      }
    }
  }

  const handleDecimal = () => {
    if (display === 'ERROR') {
      setDisplay('0.')
      setWaitingForNewValue(false)
      return
    }

    if (waitingForNewValue) {
      setDisplay('0.')
      setWaitingForNewValue(false)
      return
    }

    if (!display.includes('.') && display.length < 8) {
      setDisplay(display + '.')
    }
  }

  const handleSignToggle = () => {
    if (display === 'ERROR' || display === '0') return

    if (display.startsWith('-')) {
      setDisplay(display.substring(1))
    } else {
      if (display.length < 9) {
        setDisplay('-' + display)
      }
    }
  }

  const handleOperation = (op: string) => {
    if (display === 'ERROR') return

    if (operation && !waitingForNewValue && prevVal) {
      const res = performCalculation(prevVal, display, operation)
      const checkedRes = checkLimits(res)
      setDisplay(checkedRes)
      setPrevVal(checkedRes)
    } else {
      setPrevVal(display)
    }
    setOperation(op)
    setWaitingForNewValue(true)
  }

  const handleEqual = () => {
    if (!operation || !prevVal || display === 'ERROR') return

    const res = performCalculation(prevVal, display, operation)
    const checkedRes = checkLimits(res)
    setDisplay(checkedRes)
    setPrevVal(null)
    setOperation(null)
    setWaitingForNewValue(true)
  }

  const handleClear = () => {
    setDisplay('0')
    setPrevVal(null)
    setOperation(null)
    setWaitingForNewValue(false)
  }

  return {
    display,
    handleNumber,
    handleDecimal,
    handleSignToggle,
    handleOperation,
    handleEqual,
    handleClear
  }
}
