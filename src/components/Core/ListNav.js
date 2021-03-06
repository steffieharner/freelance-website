import styled from "styled-components";

const ListNav = styled.ul`
  li {
    cursor: pointer;
    padding: 0 1rem;
    justify-content: center;
    a {
      color: ${({ theme }) => theme.colors.text} !important;
      font-size: 1rem;
      line-height: 1.63;
      letter-spacing: 1.63px;
      font-weight: 800 !important;
      &.active {
        color: ${({ theme }) => theme.colors.primary}!important;
      }
    }
  }
`;

export default ListNav;
