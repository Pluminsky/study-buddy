import React from 'react';
import { users } from 'data/users';
import UsersListItem from '../../moleculs/UsersListItem/UsersListItem';
import { StyledList, Wrapper } from './UserList.style';

const UsersList = () => (
  <Wrapper>
    <StyledList>
      {users.map((userData, i) => (
        <UsersListItem index={i} userData={userData} />
      ))}
    </StyledList>
  </Wrapper>
);

export default UsersList;
