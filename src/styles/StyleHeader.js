import styled from 'styled-components'

export const StyleHeader = styled.div`
  height: 50px;
  background-color: #21283b;
  display: flex;

  .logoSection {
    ${'' /* background-color: pink; */}
    display: flex;
    align-items: center;
    height: 100%;
    width: 50%;
  }

  .logoName {
    font-weight: 500;
    color: white;
    margin-right: 30px;
    font-size: 13px;
  }

  .labelSearch {
    background-color: #282e3e;
    display: flex;
    align-items: center;
    border-radius: 3px;
  }

  #search {
    width: 250px;
    height: 30px;
    padding-left: 15px;
    background-color: transparent;
    border: none;
    color: white;
    outline: none;
  }

  .profileHeader {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    height: 100%;
    width: 50%;
    ${'' /* background-color: red; */}
  }

  .linkList {
    display: flex;
    justify-content: center;
    color: white;

    i {
      font-size: 15px;
      margin: 0 8px;
    }
  }

  .profileNav {
    display: flex;
    width: 200px;
    align-items: center;
    color: white;

    img {
      border-radius: 50%;
      width: 35px;
      margin: 0 8px;
    }

    .profileName {
      text-align: center;
      margin-right: 14px;
      display: flex;
      flex-direction: column;
      just-content: center;

      p {
        font-size: 12px;
        font-wight: 400;
      }

      span {
        font-size: 8px;
        font-wight: 400;
      }
    }
  }

  i {
    cursor: pointer;
  }

  i:hover {
    color: rgb(221, 49, 49);
  }
`
