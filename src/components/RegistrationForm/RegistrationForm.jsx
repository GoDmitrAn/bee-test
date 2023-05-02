import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import {
  Label,
  Input,
  ErrorInputMessage,
  FormWrapper,
  FieldWrapper,
} from "./RegistrationForm.styled";
import classnames from "classnames";
import { Submit } from "components/Modal/Modal.styled";

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Недостаточно количество символов")
    .matches(/^[A-Za-z]+$/, "Имя должно состоять из букв")
    .required("Укажите имя"),
  email: Yup.string()
    .email("Введите корректную почту")
    .required("Почта обязательна"),
  phone: Yup.string().required("Введите номер телефона"),
  password: Yup.string()
    .min(4, "Недостаточно количество символов, мин - 4")
    .required("Введите пароль"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Пароли должны совпадать")
    .required("Требуется подтверждение пароля"),
});

const RegistrationForm = () => {
  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        phone: "",
        password: "",
        confirmPassword: "",
      }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {({ errors, touched }) => (
        <FormWrapper>
          <Form>
            <FieldWrapper>
              <Label
                htmlFor="name"
                className={classnames({
                  error: errors.name && touched.name,
                  success: !errors.name && touched.name,
                })}
              >
                Имя
              </Label>
              <Field
                id="name"
                type="text"
                name="name"
                as={Input}
                className={classnames({
                  error: errors.name && touched.name,
                  success: !errors.name && touched.name,
                })}
              />
              {errors.name && touched.name && (
                <ErrorInputMessage name="name" component="div" />
              )}
            </FieldWrapper>

            <FieldWrapper>
              <Label
                htmlFor="email"
                className={classnames({
                  error: errors.email && touched.email,
                  success: !errors.email && touched.email,
                })}
              >
                Почта
              </Label>
              <Field
                id="email"
                type="email"
                name="email"
                as={Input}
                className={classnames({
                  error: errors.email && touched.email,
                  success: !errors.email && touched.email,
                })}
              />
              {errors.email && touched.email && (
                <ErrorInputMessage name="email" component="div" />
              )}
            </FieldWrapper>

            <FieldWrapper>
              <Label
                htmlFor="phone"
                className={classnames({
                  error: errors.phone && touched.phone,
                  success: !errors.phone && touched.phone,
                })}
              >
                Телефон
              </Label>
              <Field
                id="phone"
                type="tel"
                name="phone"
                as={Input}
                className={classnames({
                  error: errors.phone && touched.phone,
                  success: !errors.phone && touched.phone,
                })}
              />
              {errors.phone && touched.phone && (
                <ErrorInputMessage name="phone" component="div" />
              )}
            </FieldWrapper>

            <FieldWrapper>
              <Label
                htmlFor="password"
                className={classnames({
                  error: errors.password && touched.password,
                  success: !errors.password && touched.password,
                })}
              >
                Пароль
              </Label>
              <Field
                id="password"
                type="password"
                name="password"
                as={Input}
                className={classnames({
                  error: errors.password && touched.password,
                  success: !errors.password && touched.password,
                })}
              />
              {errors.password && touched.password && (
                <ErrorInputMessage name="password" component="div" />
              )}
            </FieldWrapper>

            <FieldWrapper>
              <Label
                htmlFor="confirmPassword"
                className={classnames({
                  error: errors.confirmPassword && touched.confirmPassword,
                  success: !errors.confirmPassword && touched.confirmPassword,
                })}
              >
                Подтвердите пароль
              </Label>
              <Field
                id="confirmPassword"
                type="password"
                name="confirmPassword"
                as={Input}
                className={classnames({
                  error: errors.confirmPassword && touched.confirmPassword,
                  success: !errors.confirmPassword && touched.confirmPassword,
                })}
              />
              {errors.confirmPassword && touched.confirmPassword && (
                <ErrorInputMessage name="confirmPassword" component="div" />
              )}
            </FieldWrapper>

            <Submit type="submit">Зарегистрируйтеся</Submit>
          </Form>
        </FormWrapper>
      )}
    </Formik>
  );
};

export default RegistrationForm;
