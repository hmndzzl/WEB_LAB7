import type { Meta, StoryObj } from '@storybook/react'
import { Button } from './Button'
import { Display } from './Display'
import { Calculator } from './Calculator'
import '../index.css'

const meta: Meta = {
  title: 'Calculator Components',
  tags: ['autodocs'],
}

export default meta

type ButtonStory = StoryObj<typeof Button>
type DisplayStory = StoryObj<typeof Display>
type CalculatorStory = StoryObj<typeof Calculator>

export const NumberButton: ButtonStory = {
  render: () => (
    <div className='calculator' style={{ padding: '20px', width: 'max-content' }}>
      <div className='keypad' style={{ gridTemplateColumns: '1fr' }}>
        <Button label='5' onClick={() => {}} />
      </div>
    </div>
  )
}

export const OperationButton: ButtonStory = {
  render: () => (
    <div className='calculator' style={{ padding: '20px', width: 'max-content' }}>
      <div className='keypad' style={{ gridTemplateColumns: '1fr' }}>
        <Button label='+' cls='op' onClick={() => {}} />
      </div>
    </div>
  )
}

export const TopButton: ButtonStory = {
  render: () => (
    <div className='calculator' style={{ padding: '20px', width: 'max-content' }}>
      <div className='keypad' style={{ gridTemplateColumns: '1fr' }}>
        <Button label='C' cls='top' onClick={() => {}} />
      </div>
    </div>
  )
}

export const NormalDisplay: DisplayStory = {
  render: () => <div className='calculator'><Display value='123456789' /></div>
}

export const ErrorDisplay: DisplayStory = {
  render: () => <div className='calculator'><Display value='ERROR' /></div>
}

export const FullCalculator: CalculatorStory = {
  render: () => <Calculator />
}
