import styled from 'styled-components';
import { LayoutProps, SpaceProps, layout, space } from 'styled-system';

export type BaseFormItemProps = LayoutProps & SpaceProps;

export const BaseFormItem = styled.div<BaseFormItemProps>`
  ${layout}
  ${space}
`;
