import React, { useState } from 'react';

import { useWeatherInfo } from '../../hooks/use-weather-info';
import {
  ActivityIndicator,
  ButtonPrimary,
  SafeAreaView,
  ScrollView,
  Container,
} from '../../components/StyleGuide';
import { useLocation } from '../../hooks/use-location';
import { WeatherInfo } from '../../components/WeatherInfo';
import { ErrorMessage } from '../../components/ErrorMessage';
import { Card } from './Weather.styles';

export const Weather = () => {
  const { hasPermission, askForPermission } = useLocation();
  const [query, setQuery] = useState('');
  const {
    isValidating,
    mutate,
    data
  } = useWeatherInfo(query);

  if (!hasPermission && !isValidating && !data) {
    return (
      <SafeAreaView>
        <ScrollView>
          <Container verticallyCentered horizontallyCentered>
            <Card>
              <ButtonPrimary onPress={() => askForPermission()}>
                Permitir uso do GPS
              </ButtonPrimary>
            </Card>
          </Container>
        </ScrollView>
      </SafeAreaView>
    );
  }

  if (isValidating) {
    return (
      <SafeAreaView>
        <Container verticallyCentered horizontallyCentered>
          <ActivityIndicator />
        </Container>
      </SafeAreaView>
    );
  }

  if (data) {
    return (
      <SafeAreaView>
        <ScrollView>
          <WeatherInfo data={data} mutate={mutate} />
        </ScrollView>
      </SafeAreaView>
    );
  }

  // Error
  return (
    <SafeAreaView>
      <ScrollView>
        <Container verticallyCentered horizontallyCentered>
          <ErrorMessage update={mutate} clear={() => setQuery('')}>
            Erro ao carregar dados :/
          </ErrorMessage>
        </Container>
      </ScrollView>
    </SafeAreaView>
  );
};
