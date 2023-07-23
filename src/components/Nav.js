import { useNavigate } from 'react-router';

const Nav = () => {
  const nav = useNavigate();
  const goMap = () => {
    nav('/map');
  };
  const goPlace = () => {
    nav('/place');
  };
  const goPurpose = () => {
    nav('/purpose');
  };
  const goSocial = () => {
    nav('/social');
  };

  return (
    <ul>
      <li onClick={goMap}>Map</li>
      <li onClick={goPlace}>Place</li>
      <li onClick={goPurpose}>Purpose</li>
      <li onClick={goSocial}>Social</li>
    </ul>
  );
};

export default Nav;
