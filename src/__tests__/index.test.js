import { render } from '@testing-library/react'
import Layout from '../../components/layout'
import Header from '../../components/header'

describe('Layout', () => {
  test('it renders Layout', () => {
    render(<Layout />)
  })
})
