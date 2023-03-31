import { lazy, Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import { selectIsLoggedIn, selectRefreshed } from 'redux/auth/authSelectors';
import { Loader } from '../Loader/Loader';
import { fetchCurrentUser, getUserInfo } from 'redux/auth/authOperation';
import { AuthRoute, NotAuthRoute } from 'routes';
import Layout from '../Layout/Layout';
import { selectError } from 'redux/global/selectors';

const CalculatorPage = lazy(() =>
  import('pages/CalculatorPage/CalculatorPage')
);
const RegisterPage = lazy(() => import('pages/RegisterPage/RegisterPage'));
const LoginPage = lazy(() => import('pages/LoginPage/LoginPage'));
const HomePage = lazy(() => import('pages/HomePage/HomePage'));
const PageNotFound404 = lazy(() =>
  import('pages/PageNotFound404/PageNotFound404')
);

export const App = () => {
  const error = useSelector(selectError);
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectRefreshed);
  const isLoggedIn = useSelector(selectIsLoggedIn);

  useEffect(() => {
    if (!isLoggedIn) return;
    dispatch(fetchCurrentUser());
  }, [dispatch, isLoggedIn]);

  useEffect(() => {
    if (isLoggedIn) dispatch(getUserInfo());
  }, [dispatch, isLoggedIn]);

  useEffect(() => {
    if (error) {
      toast.error('Oops. Something went wrong 😭');
    }
  }, [error]);

  return (
    <>
      <Layout />
      {isRefreshing ? (
        <Loader />
      ) : (
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route
              index
              element={
                <AuthRoute redirectPath="/login">
                  <HomePage />
                </AuthRoute>
              }
            />
            <Route
              path="/calculator"
              element={
                <AuthRoute redirectPath="/login">
                  <CalculatorPage />
                </AuthRoute>
              }
            />
            <Route
              path="/login"
              element={
                <NotAuthRoute redirectPath="/calculator">
                  <LoginPage />
                </NotAuthRoute>
              }
            />
            <Route
              path="/register"
              element={
                <NotAuthRoute redirectPath="/calculator">
                  <RegisterPage />
                </NotAuthRoute>
              }
            />
            <Route path="*" element={<PageNotFound404 />} />
          </Routes>
          <ToastContainer
            position="top-center"
            autoClose={5000}
            closeOnClick
            theme="colored"
          />
        </Suspense>
      )}
    </>
  );
};
