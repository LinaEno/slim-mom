import { Header } from 'components/Header/Header';

import { ModalContainer } from 'components/ModalContainer/ModalContainer';
import ModalLogout from 'components/ModalLogout/ModalLogout';
import ModalRecommendation from 'components/ModalRecomendation/ModalRecomendation';
import { useSelector } from 'react-redux';
import {
  selectLogoutModalOpen,
  selectModalRecommendationOpen,
} from 'redux/global/selectors';

const Layout = () => {
  const isModalLogoutOpen = useSelector(selectLogoutModalOpen);
  const isModalRecommendationOpen = useSelector(selectModalRecommendationOpen);
  return (
    <div>
      <Header />
      {isModalLogoutOpen && (
        <ModalContainer>
          <ModalLogout />
        </ModalContainer>
      )}
      {isModalRecommendationOpen && (
        <ModalContainer>
          <ModalRecommendation />
        </ModalContainer>
      )}
    </div>
  );
};

export default Layout;
