import React from 'react';
import { useTranslation } from 'react-i18next';
import { Example } from '../../components/Example';
import { Wrapper } from './styles';

export default function Index() {
  const { t } = useTranslation();

  return (
    <Wrapper>
      <Example />
    </Wrapper>
  );
}
