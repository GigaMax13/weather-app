import React from 'react';
import { cache } from 'swr';

import {
  Wrapper,
  Message,
  Tittle,
} from './ErrorMessage.styles';
import { ButtonPrimary } from '../StyleGuide';

export const ErrorMessage = ({ children, update, clear }) => (
  <Wrapper>
    <Tittle>Erro</Tittle>

    <Message>
      {children}
    </Message>

    <ButtonPrimary onPress={() => update()}>
      Tentar novamente
    </ButtonPrimary>

    <ButtonPrimary
      onPress={() => {
        cache.clear();
        clear();
      }}
    >
      Limpar última busca
    </ButtonPrimary>
  </Wrapper>
);
