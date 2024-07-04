import WelcomeForm from './_forms/welcome';
import { submitWelcomeForm } from './page.actions';
import {
  FormWrapper,
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
          <FormWrapper>
            <form action={submitWelcomeForm}>
              <WelcomeForm />
            </form>
          </FormWrapper>
        </WelcomeFormContainer>
      </RightColumn>
      <LeftColumn />
    </LeftRightPageLayout>
  );
}
