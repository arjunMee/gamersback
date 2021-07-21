import styled from 'styled-components'
import Center from '../assets/Path 2.svg'

export const SvgCenter = styled.div`
  background-image: url('${Center}');
  background-color: 'rgb(45, 70, 84)';
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  height: calc(100% + 9px);
  width: 300px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`
