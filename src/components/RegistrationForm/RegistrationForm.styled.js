import styled from "@emotion/styled";
import { ErrorMessage } from "formik";
export const Label = styled.label`
  font-size: 13px;
  line-height: 1.6;
  display: block;
  color: rgba(102, 88, 34, 0.5);
  &.error {
    color: red;
  }
  &.success {
    color: rgba(102, 88, 34, 1);
  }
`;
export const Input = styled.input`
  box-sizing: border-box;
  outline: none;
  width: 100%;
  padding: 10px;
  border: 1px solid rgba(102, 88, 34, 0.5);
  &:focus {
    border-color: rgba(102, 88, 34, 1);
  }
  &.error {
    border-color: red;
  }

  &.success {
    border-color: rgba(102, 88, 34, 1);
  }
`;
export const ErrorInputMessage = styled(ErrorMessage)`
  display: block;
  bottom: 0;
  color: red;
  font-size: 13px;
  line-height: 1.6;
`;
export const FormWrapper = styled.div`
  width: 290px;
  margin: 0 auto;
`;
export const FieldWrapper = styled.div`
  position: relative;
  margin-bottom: 10px;
`;
