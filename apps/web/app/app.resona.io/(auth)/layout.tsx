import { Page } from '@resona/ui';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Page testId="auth-page">{children}</Page>;
}
