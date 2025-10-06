import Product from '../Product'
import { Container, List } from './styles'

type Props = {
  title: string
  backgroundColor: 'gray' | 'black'
}

export const ProductList = ({ title, backgroundColor }: Props) => (
  <Container>
    <div className="container">
      <h2>{title}</h2>
      <List>
        <Product />
        <Product />
        <Product />
        <Product />
      </List>
    </div>
  </Container>
)
