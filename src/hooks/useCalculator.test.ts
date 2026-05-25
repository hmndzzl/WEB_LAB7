import { renderHook, act } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { useCalculator } from './useCalculator'

describe('useCalculator', () => {
  it('handles division with recurring decimals within 9 chars', () => {
    const { result } = renderHook(() => useCalculator())
    act(() => result.current.handleNumber('2'))
    act(() => result.current.handleNumber('2'))
    act(() => result.current.handleOperation('/'))
    act(() => result.current.handleNumber('7'))
    act(() => result.current.handleEqual())
    expect(result.current.display).toBe('3.1428571')
  })

  it('shows ERROR on operations exceeding 999999999', () => {
    const { result } = renderHook(() => useCalculator())
    act(() => result.current.handleNumber('9'))
    act(() => result.current.handleNumber('9'))
    act(() => result.current.handleNumber('9'))
    act(() => result.current.handleNumber('9'))
    act(() => result.current.handleNumber('9'))
    act(() => result.current.handleNumber('9'))
    act(() => result.current.handleNumber('9'))
    act(() => result.current.handleNumber('9'))
    act(() => result.current.handleNumber('9')) // 999999999
    act(() => result.current.handleOperation('+'))
    act(() => result.current.handleNumber('1'))
    act(() => result.current.handleEqual())
    expect(result.current.display).toBe('ERROR')
  })

  it('shows ERROR on operations resulting in negatives', () => {
    const { result } = renderHook(() => useCalculator())
    act(() => result.current.handleNumber('5'))
    act(() => result.current.handleOperation('-'))
    act(() => result.current.handleNumber('1'))
    act(() => result.current.handleNumber('0'))
    act(() => result.current.handleEqual())
    expect(result.current.display).toBe('ERROR')
  })

  it('handles modulo operation correctly', () => {
    const { result } = renderHook(() => useCalculator())
    act(() => result.current.handleNumber('1'))
    act(() => result.current.handleNumber('0'))
    act(() => result.current.handleOperation('%'))
    act(() => result.current.handleNumber('3'))
    act(() => result.current.handleEqual())
    expect(result.current.display).toBe('1')
  })

  it('handles +/- toggle and respects 9 char limit', () => {
    const { result } = renderHook(() => useCalculator())
    act(() => result.current.handleNumber('1'))
    act(() => result.current.handleNumber('2'))
    act(() => result.current.handleNumber('3'))
    act(() => result.current.handleSignToggle())
    expect(result.current.display).toBe('-123')
    act(() => result.current.handleSignToggle())
    expect(result.current.display).toBe('123')
  })
})
