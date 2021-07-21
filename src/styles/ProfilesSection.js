import styled from 'styled-components'

export const ProfileSection = styled.div`
  ${'' /* background-color: pink; */}
  height: 100%;
  width: 50%;
  padding: 0 90px;
  color: #fff;

  h2 {
    font-size: 33px;
  }

  p {
    margin: 10px 0;
  }

  .logoName {
    font-weight: 500;
    color: white;
    margin-right: 30px;
    font-size: 13px;
  }

  .profileName {
    display: flex;
    align-items: flex-end;

    .editButton {
      font-size: 10px;
      padding: 1px 15px;
      border-radius: 2px;
      position: relative;
      bottom: 8px;
      border: 1px solid #fff5;
      margin: 0 10px;
      background-color: transparent;
      color: white;
      cursor: pointer;
    }
  }

  .logo {
    display: flex;
    align-items: center;
    ${'' /* background: red; */}
    position: relative;
    left: -10px;
  }
`
