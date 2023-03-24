export const selectIsLoggedIn = state => state.auth.isLoggedIn;

export const getUserName = state => state.auth.userName;

export const selectRefreshed = state => state.auth.isRefreshing;

export const selectToken = state => state.auth.token;
