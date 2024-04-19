import { Link } from 'react-router-dom';
import { HOME_PATH } from '@constatns/pathPage';

const MenuHead = () => {
  return (
    <div className="mb-3">
      <Link to={HOME_PATH}>LOGO - ДОМОЙ</Link>
    </div>
  );
};

export default MenuHead;
