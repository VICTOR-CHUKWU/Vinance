import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Container, Image, Badge } from 'react-bootstrap';
import { GiCancel } from 'react-icons/gi';
import logo from '../../img/logo.jpg';
import Box from '../../shared/Box';
import { closeSidebar } from '../../redux/action/SidebarAction';

const Sidebar = () => {
  const { isSideBarOpen } = useSelector((state) => state.sideBarCheck);
  const dispatch = useDispatch();
  return (
    <Container className={`sidebar bg-white p-3  d-lg-none${isSideBarOpen ? ' show-side-bar ' : ''}`}>
      <Box className="sidebar-inner">
        <Box className="d-flex align-items-center justify-content-between">
          <Link to="/" style={{ textDecoration: 'none' }}>
            <Box as="span" className="d-flex align-items.center text-warning font-weight-bold ">
              <Image
                src={logo}
                roundedCircle
                width="30"
                height="30"
                className="mx-3"
              />
              Vinace
            </Box>
          </Link>
          <GiCancel className="click-cancel" onClick={() => dispatch(closeSidebar())} />
        </Box>

        <Box className="d-flex flex-column align-items-center mx-5 my-3">
          <Link to="/buy-crypto" style={{ textDecoration: 'none' }} className="mx-3 my-3">buy crypto</Link>
          <Link to="/market" style={{ textDecoration: 'none' }} className="mx-3 my-3">market</Link>
          <Link to="/trade" style={{ textDecoration: 'none' }} className="mx-3 my-3">trade</Link>
          <Link to="/finance" style={{ textDecoration: 'none' }} className="mx-3 my-3">
            finance
            {' '}
            <Badge bg="warning">new</Badge>
          </Link>
          <Link to="/about" style={{ textDecoration: 'none' }} className="mx-3 my-3">about</Link>
        </Box>
      </Box>
    </Container>
  );
};

export default Sidebar;
