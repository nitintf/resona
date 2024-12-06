'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useServerAction } from 'zsa-react';

import {
  type VerifyEmailSchema,
  checkUserExistsHandler,
  verifyEmailSchema,
} from '@resona/core/auth';
import { token } from '@resona/theme';
import {
  Button,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
} from '@resona/ui';

interface WelcomeFormProps {
  email: string | null;
}

export default function WelcomeForm({ email }: WelcomeFormProps) {
  const { isPending, execute: checkUserExists } = useServerAction(
    checkUserExistsHandler,
    {
      onError(args) {
        const error = args.err;
        form.setError('email', {
          type: 'deps',
          message: error.message,
        });
      },
    }
  );

  const form = useForm<VerifyEmailSchema>({
    resolver: zodResolver(verifyEmailSchema),
    defaultValues: {
      email: email || '',
    },
    mode: 'onBlur',
    shouldFocusError: true,
  });

  const onSubmit = async ({ email }: VerifyEmailSchema) => {
    const [data] = await checkUserExists({ email });

    if (!data) {
      return;
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form?.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input
                  aria-required={true}
                  aria-label="Email"
                  css={{ '--color-text': 'black' }}
                  autoFocus
                  placeCursorAtEnd
                  placeholder="you@example.com"
                  type="email"
                  isInvalid={!!form.formState.errors.email}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          isLoading={isPending}
          disabled={isPending}
          type="submit"
          css={{ marginTop: token('space.8') }}
          shouldFitContainer
        >
          Let&apos;s Go
        </Button>
      </form>
    </Form>
  );
}
