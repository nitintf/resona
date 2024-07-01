import { PageContent, PageWrapper } from './styles';
import { PageProps } from './types';

export const Page: React.FC<PageProps> = ({ children, testId }) => {
  return (
    <PageWrapper data-testid={testId}>
      <PageContent>{children}</PageContent>
    </PageWrapper>
  );
};
