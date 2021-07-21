import styled from 'styled-components'

export const GameName = styled.div`
  height: 100%;
  width: 300px;
  position: absolute;
  left: 0;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  color: white;

  p {
    border-bottom: 2px solid #dd3131;
    padding: 2px;
  }

  button {
    background-color: inherit;
    color: inherit;
    border: 1px solid rgba(255, 255, 255, 0.3);
    padding: 3px 9px;
    border-radius: 5px;
    cursor: pointer;
  }
`
