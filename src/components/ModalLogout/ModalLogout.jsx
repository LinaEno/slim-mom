import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/auth/authOperation';
import { closeModal } from 'redux/global/slice';
import {
  Wrapper,
  Content,
  Question,
  ButtonsList,
  Button,
  Icon,
} from './ModalLogout.styled';
import fruitQuestion from '../../images/question.png';
import { Default } from '../Media/Media';
import { useNavigate } from 'react-router-dom';
import { selectToken } from 'redux/auth/authSelectors';
import { useEffect } from 'react';

const ModalLogout = () => {
  const dispatch = useDispatch();
  const token = useSelector(selectToken);
  const navigate = useNavigate();

  const closeModalLogout = () => dispatch(closeModal());
  const modalLogout = () => {
    dispatch(logOut());
    closeModalLogout();
  };

  useEffect(() => {
    if (token === null) navigate('/login');
  }, [token, navigate]);

  return (
    <Wrapper>
      <Question>Ви впевнені, що бажаєте вийти?</Question>
      <Content>
        <Default>
          <Icon src={fruitQuestion} alt="fruit" height={163} loading="lazy"/>
        </Default>
        <ButtonsList>
          <Button type="button" onClick={modalLogout}>
            Так
          </Button>
          <Button type="button" onClick={closeModalLogout}>
            Ні
          </Button>
        </ButtonsList>
      </Content>
    </Wrapper>
  );
};

export default ModalLogout;
