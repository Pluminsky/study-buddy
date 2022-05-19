import React from 'react';
import { users } from 'data/users';

const UsersList = () => (
  <div>
    <ul>
      {users.map(({ name, attendance, average }) => (
        <li>
          <div>{average}</div>
          <div>
            <p>{name}</p>
            <p>{attendance}</p>
            <button>X</button>
          </div>
        </li>
      ))}
    </ul>
  </div>
);

export default UsersList;
