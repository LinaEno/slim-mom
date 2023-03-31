export const selectIsLoggedIn = state => state.auth.isLoggedIn;

export const selectUserName = state => state.auth.username;

export const selectUserId = state => state.auth.userId;

export const selectRefreshed = state => state.auth.isRefreshing;

export const selectToken = state => state.auth.accessToken;

export const getUserData = state => state.auth.userData;
