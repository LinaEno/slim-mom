import { useDispatch } from "react-redux";
import { openModalRecommendation } from "redux/global/slice";

const HomePage = () => {
  const dispatch = useDispatch();

  const openModal = () => {
    dispatch(openModalRecommendation());
  };

  return (
    <>
      <p>Hello</p>
      <button type="button" onClick={openModal}>Почніть худнути</button>
    </>
  );
};

export default HomePage;
