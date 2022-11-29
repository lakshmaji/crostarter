import React, { FC } from 'react';

interface Props {
  name: string;
}
const Profile: FC<Props> = ({ name }) => {
  return <div>Profile {name}</div>;
};

export default Profile;
