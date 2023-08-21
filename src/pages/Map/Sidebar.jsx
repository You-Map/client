import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { BASE_URL } from '../../App';

const Sidebar = ({ id }) => {
  const [purpose, setPurpose] = useState(null);
  console.log(purpose);
  const [loading, setLoading] = useState(true);
  const getPurpose = async () => {
    const url = BASE_URL + `/buildings/${id}`;

    try {
      const res = await axios.get(url);
      setPurpose(res.data['purposes']);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getPurpose();
  }, [id]);

  if (loading) return '로딩중';
  else
    return (
      <SidebarContainer>
        <StyledButton>{id}</StyledButton>
        <StyledButton>안녕</StyledButton>
        <StyledButton>안녕</StyledButton>
      </SidebarContainer>
    );
};

// {id: 1, name: '휴게', glyph: null}
// 1
// :
// {id: 2, name: '공부', glyph: null}
// 2
// :
// {id: 3, name: '팀플', glyph: null}
// 3
// :
// {id: 4, name: '경로', glyph: null}
// 4
// :
// {id: 5, name: '기타', glyph: null}

const SidebarContainer = styled.div`
  background-color: blue;
`;

const StyledButton = styled.button``;

export default Sidebar;
