import styled from 'styled-components/native';

import * as StyleGuide from '../StyleGuide';

export const Wrapper = styled(StyleGuide.Card)`
  justify-content: space-between;
  min-height: 50%;
`;

export const Tittle = styled(StyleGuide.Text)`
  width: 100%;
  margin-bottom: 15px;
  line-height: 44px;
  text-align: center;
  font-size: 38px;
  color: ${({ theme: { error } }) => error};
`;

export const Message = styled(StyleGuide.Text)`
  width: 100%;
  margin-bottom: 100px;
  line-height: 30px;
  text-align: center;
  font-size: 22px;
  color: ${({ theme: { primary } }) => primary};
`;
