import { useParams } from 'react-router-dom';

function Profile() {
  const { id } = useParams();

  return (
    <>
    <div>
      <h1>Profile</h1>
      <p>Student ID: {id}</p>
    </div>
    </>
  );
}

export default Profile;
