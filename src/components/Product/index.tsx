import Tag from '../Tag'
import { Card, Descricao, Titulo } from './styles'

export const Product = () => (
  <Card>
    <img src="//placehold.it/222x250" alt="" />
    <Titulo>Nome do Jogo </Titulo>
    <Tag size="small">Categoria</Tag>
    <Tag size="small">Windows</Tag>
    <Descricao>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, quam dicta
      nobis labore amet ipsum voluptatem sunt quaerat consectetur, animi dolores
      harum quae laudantium iusto? Nobis pariatur commodi illum modi!
    </Descricao>
  </Card>
)

export default Product
