import styled from 'styled-components';
import { A } from 'hookrouter';

export const HeaderContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;

  @media screen and (max-width: 800px) {
    height: 60px;
    padding: 10px;
    margin-bottom: 20px;
  }

  .Logo {
    height: 100%;
    width: 70px;
    padding: 25px;

    @media screen and (max-width: 800px) {
      width: 50px;
      padding: 0;
    }
  }

  .links {
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    @media screen and (max-width: 800px) {
      width: 80%;
    }

    a {
      padding: 10px 15px;
      cursor: pointer;
    }
  }
`;

export const OptionLink = styled(A)`
  padding: 10px 15px;
  cursor: pointer;
`;

OptionLink.displayName = 'OptionLink';
