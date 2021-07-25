export const setCurrentUser = (user) => {
  console.log('setCurrentUser', user);
  return {
    type: 'SET_CURRENT_USER',
    payload: user
  };
};
