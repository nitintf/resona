import React, { forwardRef, memo, useImperativeHandle, useRef } from 'react';

import { InputContainer, inputStyles } from './styles';
import { type InputProps } from './types';

const InputComponent = forwardRef((props: InputProps, ref) => {
  const {
    appearance = 'standard',
    className,
    elemAfterInput,
    elemBeforeInput,
    isCompact = false,
    isDisabled = false,
    isInvalid = false,
    isMonospaced = false,
    isReadOnly = false,
    isRequired = false,
    name,
    placeholder,
    width,
    ...spreadProps
  } = props;

  const inputRef = useRef<HTMLInputElement | null>(null);

  useImperativeHandle(ref, () => inputRef.current);

  return (
    <InputContainer
      role="presentation"
      data-disabled={isDisabled ? isDisabled : undefined}
      data-invalid={isInvalid ? isInvalid : undefined}
      className={className}
      appearance={appearance}
    >
      {elemBeforeInput}
      <input
        {...spreadProps}
        aria-invalid={isInvalid ? isInvalid : undefined}
        css={inputStyles}
        data-compact={isCompact ? isCompact : undefined}
        data-monospaced={isMonospaced ? isMonospaced : undefined}
        disabled={isDisabled}
        name={name}
        placeholder={placeholder}
        readOnly={isReadOnly}
        ref={inputRef}
        required={isRequired}
        {...spreadProps}
      />
      {elemAfterInput}
    </InputContainer>
  );
});

InputComponent.displayName = 'Input';

export const Input = memo<InputProps & React.RefAttributes<unknown>>(
  InputComponent
);
