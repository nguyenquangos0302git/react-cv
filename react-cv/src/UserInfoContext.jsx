import React, { useContext } from 'react';

const UserInfoContext = React.createContext({
  userInfo: null,
  setUserInfo: () => {},
});

const { Provider: UserInfoProvider, Consumer: UserInfoConsumer } =
  UserInfoContext;

export { UserInfoProvider, UserInfoConsumer, UserInfoContext };
