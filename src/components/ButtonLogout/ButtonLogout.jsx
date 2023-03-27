import { useDispatch } from 'react-redux';
import { openModalLogout } from 'redux/global/slice';
import { Button } from './ButtonLogout.styled';
export const ButtonLogout = () => {
  const dispatch = useDispatch();

  const openModal = () => {
    dispatch(openModalLogout());
  };

  return (
    <Button
      type="button"
      aria-label="Logout"
      onClick={openModal}
    >
      Вихід
    </Button>
  );
};
