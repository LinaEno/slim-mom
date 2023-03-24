import { useDispatch } from 'react-redux';
import { openModal } from 'redux/global/slice';
import { Button } from './ButtonAddTransactions.styled';

export const ButtonAddTransactions = () => {
  const dispatch = useDispatch();

  return (
    <Button
      type="button"
      aria-label="Add product"
      onClick={() => dispatch(openModal())}
    ></Button>
  );
};
