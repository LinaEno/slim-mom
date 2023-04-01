import { lazy, Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import { selectIsLoggedIn, selectRefreshed } from 'redux/auth/authSelectors';
import { Loader } from '../Loader/Loader';
import { fetchCurrentUser, getUserInfo } from 'redux/auth/authOperation';
import { AuthRoute, NotAuthRoute } from 'routes';
import Layout from '../Layout/Layout';

const CalculatorPage = lazy(() =>
  import('pages/CalculatorPage/CalculatorPage')
);
const RegisterPage = lazy(() => import('pages/RegisterPage/RegisterPage'));
const LoginPage = lazy(() => import('pages/LoginPage/LoginPage'));
const HomePage = lazy(() => import('pages/HomePage/HomePage'));
const DiaryPage = lazy(() => import('pages/DiaryPage/DiaryPage'));
const PageNotFound404 = lazy(() =>
  import('pages/PageNotFound404/PageNotFound404')
);

export const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectRefreshed);
  const isLoggedIn = useSelector(selectIsLoggedIn);

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  useEffect(() => {
    if (isLoggedIn) dispatch(getUserInfo());
  }, [dispatch, isLoggedIn]);

  return (
    <>
      <Layout />
      {isRefreshing ? (
        <Loader />
      ) : (
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route
              path="/"
              element={
                <NotAuthRoute redirectPath="/login">
                  <HomePage />
                </NotAuthRoute>
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
              path="/diary"
              element={
                <AuthRoute redirectPath="/login">
                  <DiaryPage />
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
            autoClose={3000}
            closeOnClick
            theme="colored"
          />
        </Suspense>
      )}
    </>
  );
};
