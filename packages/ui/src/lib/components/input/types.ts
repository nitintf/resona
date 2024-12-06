export type Appearance = 'standard' | 'subtle' | 'none';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  /**
   * Controls the appearance of the field.
   * Subtle shows styling on hover.
   * None prevents all field styling. Take care when using the none appearance as this doesn't include accessible interactions.
   */
  appearance?: Appearance;

  /**
   * Applies compact styling, making the field smaller.
   */
  isCompact?: boolean;

  /**
   * Sets the field as to appear disabled,
   * people will not be able to interact with the text field and it won't appear in the focus order.
   * Wherever possible, prefer using validation and error messaging over disabled fields for a more accessible experience.
   */
  isDisabled?: boolean;

  /**
   * Changes the text field to have a border indicating that its value is invalid.
   */
  isInvalid?: boolean;

  /**
   * Sets content text value to appear monospaced.
   */
  isMonospaced?: boolean;

  /**
   * If true, prevents the value of the input from being edited.
   */
  isReadOnly?: boolean;

  /**
   * Set required for form that the field is part of.
   */
  isRequired?: boolean;

  /**
   * Element after input in text field.
   */
  elemAfterInput?: React.ReactNode;

  /**
   * Element before input in text field.
   */
  elemBeforeInput?: React.ReactNode;

  /**
   * Sets maximum width of input.
   */
  width?: string | number;

  /**
   * If true, places the cursor at the end of the input on initial render on focus.
   */
  placeCursorAtEnd?: boolean;
}
