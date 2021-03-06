import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper, StyledAverage, StyledInfo } from './UserListItem.style';
import Button from 'components/atoms/Button/Button';

const UsersListItem = ({
  index,
  userData: { average, name, attendance = '0%' },
}) => {
  const showIndex = (index) => alert(`This is student ${index + 1} index`);

  return (
    <Wrapper>
      <StyledAverage value={average}>{average}</StyledAverage>
      <StyledInfo>
        <p>{name}</p>
        <p>attendance: {attendance}</p>
      </StyledInfo>
      <Button onClick={() => showIndex(index)} />
    </Wrapper>
  );
};

UsersListItem.propTypes = {
  userData: PropTypes.shape({
    average: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    attendance: PropTypes.string,
  }),
};

export default UsersListItem;
