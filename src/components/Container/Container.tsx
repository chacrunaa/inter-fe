import { Container as ContainerBootsrap } from 'react-bootstrap';

const Container = ({ children }: { children?: React.ReactNode }) => {
  return <ContainerBootsrap>{children}</ContainerBootsrap>;
};

export default Container;
