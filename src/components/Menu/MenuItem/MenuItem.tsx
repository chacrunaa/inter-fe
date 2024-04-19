import { Accordion } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { MenuDataType } from '@components/Menu/type';

import MenuList from '../MenuList';

const MenuItem = ({ item }: { item: MenuDataType }) => {
  return (
    <Accordion alwaysOpen defaultActiveKey={[item.name]}>
      {!!item?.children ? (
        <Accordion.Item className="mb-3" eventKey={item.name}>
          <Accordion.Header>{item.name}</Accordion.Header>
          <Accordion.Body>
            <MenuList items={item.children} />
          </Accordion.Body>
        </Accordion.Item>
      ) : (
        <Link to={item.to}>{item.name}</Link>
      )}
    </Accordion>
  );
};

export default MenuItem;
