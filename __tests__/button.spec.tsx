import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import { Button } from '@/components/ui/button'


describe('Button component', () => {
  it('should renders button component', () => {
    const { getByText } = render(<Button>Click Me!!!</Button>)
    const buttonElement = getByText('Click Me!!!')

    expect(buttonElement).toBeTruthy()
  })

  it('should click button component', () => {
    const onClickMock = jest.fn()
    const { getByText } = render(<Button onClick={onClickMock}>Click Me!!!</Button>)
    const buttonElement = getByText('Click Me!!!')
    fireEvent.click(buttonElement)
    expect(onClickMock).toHaveBeenCalledTimes(1)
  })
  it('should not click button component', () => {
    const onClickMock = jest.fn()
    const { getByText } = render(<Button disabled onClick={onClickMock}>Click Me!!!</Button>)
    const buttonElement = getByText('Click Me!!!')
    fireEvent.click(buttonElement)
    expect(onClickMock).toHaveBeenCalledTimes(0)
  })
})
