import { render, screen } from '@testing-library/react'

import Main from '.'

describe('<Main />', () => {
  it('Should render the heading', () => {
    const { container } = render(<Main />)

    expect(
      screen.getByRole('heading', {
        name: /react avançado/i
      })
    ).toBeInTheDocument()

    // Gerar snapshots (copia do arquivo testado)
    expect(container.firstChild).toMatchSnapshot()
  })

  it('Should render the color correctly', () => {
    const { container } = render(<Main />)

    expect(container.firstChild).toHaveStyle({
      'background-color': '#06092b'
    })
  })
})
