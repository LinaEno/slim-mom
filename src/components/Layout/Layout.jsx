import { Header } from 'components/Header/Header';

import { ModalContainer } from 'components/ModalContainer/ModalContainer';
import ModalLogout from 'components/ModalLogout/ModalLogout';
import { useSelector } from 'react-redux';
import { selectLogoutModalOpen } from 'redux/global/selectors';

const Layout = () => {
  const isModalLogoutOpen = useSelector(selectLogoutModalOpen);
  return (
    <div>
      <Header />
      {isModalLogoutOpen && (
        <ModalContainer>
          <ModalLogout />
        </ModalContainer>
      )}
    </div>
  );
};

export default Layout;
