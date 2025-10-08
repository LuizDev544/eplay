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
        <Product
          category="Ação"
          description="teste"
          image="/images/cyberpunk.jpg"
          infos={['-10%', 'R$ 150']}
          system="windows"
          title="Nome do Jogo"
        />
        <Product
          category="Ação"
          description="teste"
          image="/images/cyberpunk.jpg"
          infos={['-10%', 'R$ 150']}
          system="windows"
          title="Nome do Jogo"
        />
        <Product
          category="Ação"
          description="teste"
          image="/images/cyberpunk.jpg"
          infos={['-10%', 'R$ 150']}
          system="windows"
          title="Nome do Jogo"
        />
        <Product
          category="Ação"
          description="teste"
          image="/images/cyberpunk.jpg"
          infos={['-10%', 'R$ 150']}
          system="windows"
          title="Nome do Jogo"
        />
      </List>
    </div>
  </Container>
)
