import WelcomeForm from './_forms/welcome';
import { submitWelcomeForm } from './page.actions';
import {
  LeftColumn,
  LeftRightPageLayout,
  RightColumn,
  WelcomeFormContainer,
} from './page.styles';

export default function Page() {
  return (
    <LeftRightPageLayout as="main">
      <RightColumn>
        <WelcomeFormContainer>
          <form action={submitWelcomeForm}>
            <WelcomeForm />
          </form>
        </WelcomeFormContainer>
      </RightColumn>
      <LeftColumn />
    </LeftRightPageLayout>
  );
}
