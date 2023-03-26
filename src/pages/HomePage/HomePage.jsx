import { useDispatch } from "react-redux";
import { openModalRecommendation } from "redux/global/slice";
import CalculatorCalorieForm from "components/CalculatorCalorieForm";
const HomePage = () => {
  const dispatch = useDispatch();

  const openModal = () => {
    dispatch(openModalRecommendation());
  };

  return (
    <>
      <p>Розрахувати денну норму калорій</p>
       <CalculatorCalorieForm/>
      <button type="button" onClick={openModal}>Почніть худнути</button>
    </>
  );
};

export default HomePage;
