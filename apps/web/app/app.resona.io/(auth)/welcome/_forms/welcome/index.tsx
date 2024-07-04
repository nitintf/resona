'use client';

import { token } from '@resona/theme';
import {
  Box,
  Button,
  Flex,
  Heading,
  Input,
  ResonaLogo,
  Text,
} from '@resona/ui';

export default function WelcomeForm() {
  return (
    <Box>
      <Flex flexDirection={'column'} gap={token('space.12')}>
        <Flex flexDirection={'column'} gap={token('space.3')} center>
          <ResonaLogo variant="large" />
          <Heading size="h700" fontWeight="bold">
            Welcome
          </Heading>
          <Text size="large" align="center" color="dim">
            Enter your email to get started with Resona.
          </Text>
        </Flex>
        <Input
          css={{ '--color-text': 'black' }}
          autoFocus
          placeholder="you@example.com"
          type="email"
        />
      </Flex>

      <Button css={{ marginTop: token('space.8') }} shouldFitContainer>
        Let&apos;s Go
      </Button>
    </Box>
  );
}
