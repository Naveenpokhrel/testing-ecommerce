import Col from 'react-bootstrap/esm/Col'
import storeItems from '../data/items.json'
import Row from 'react-bootstrap/esm/Row'
import { StoreItems } from '../components/StoreItem'



export function Store() {
  return (
    <>
      <h1>Store Page</h1>
      <Row md={2} xs={1} lg={3} className="g-3">
        {storeItems.map(item => (
          <Col key={item.id}><StoreItems {...item} />
          </Col>
        ))}
      </Row>
    </>
  )
}