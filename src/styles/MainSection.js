import styled from 'styled-components'

export const MainSection = styled.div`
  min-height: calc(100vh - 100px);

  .upperpart {
    min-height: 50vh;
    background: #060817;

    .upperHeader {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 60px;

      button {
        margin: 0 10px;
        background-color: transparent;
        border: none;
        color: white;
        font-size: 15px;
        padding: 4px 3px;
        margin: 0 20px;
        box-sizing: content-box;
        cursor: pointer;
      }

      button:hover,
      button.active {
        border-bottom: 2px solid #dd3131;
      }
    }

    .profileStage {
      display: flex;
    }
  }

  .lowerpart {
    min-height: 50vh;
    background: #0f1525;

    .lowerMain {
      display: flex;
      height: 100%;
      ${'' /* background-color: green; */}

      ${
        '' /* width: 50%;
      padding: 25px 0 0 90px; */
      }
    }
  }
`
