import { render } from '@testing-library/react'
import Header from '../../components/header'

describe('Header', () => {
  test('it renders nav', () => {
    render(
      <nav className="flex items-center justify-between flex-wrap bg-gray-800 p-6 w-full z-10 top-0"></nav>
    )
  })
  test('it renders an icon on menu', () => {
    const { getByTestId } = render(<Header />)
    expect(getByTestId('logo-element')).toBeInTheDocument()
  })
})
