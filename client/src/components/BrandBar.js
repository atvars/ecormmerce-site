import { Context } from '../index';
import { Card, Row } from 'react-bootstrap';

const BrandBar = observer(() => {
  const { device } = useContext(Context);

  return (
    <Row className='d-flex'>
      {device.brands.map((brand) => (
        <Card key={brand.id} className='p-3'>
          {brand.name}
        </Card>
      ))}
    </Row>
  );
});
