import { token } from '@resona/theme';
import { Flex, Heading, ResonaLogo, Text } from '@resona/ui';

import WelcomeForm from './_forms/welcome';
import {
  FormWrapper,
  LeftColumn,
  LeftRightPageLayout,
  RightColumn,
  WelcomeFormContainer,
} from './styles';
import { getAuthEmailFromCookie } from './utils';

export default function Page() {
  const email = getAuthEmailFromCookie();

  return (
    <LeftRightPageLayout as="main">
      <RightColumn>
        <WelcomeFormContainer>
          <FormWrapper>
            <Flex flexDirection={'column'} gap={token('space.3')} center>
              <ResonaLogo variant="large" />
              <Heading size="h700" fontWeight="bold">
                Welcome
              </Heading>
              <Text size="base" align="center" color="dim">
                Enter your email to get started with Resona.
              </Text>
            </Flex>
            <WelcomeForm email={email} />
          </FormWrapper>
        </WelcomeFormContainer>
      </RightColumn>
      <LeftColumn />
    </LeftRightPageLayout>
  );
}
