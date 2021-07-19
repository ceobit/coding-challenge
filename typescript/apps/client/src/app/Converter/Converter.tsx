import React, {FC, useEffect, useState} from 'react';
import {Field, Form, Formik} from 'formik';
import * as Yup from 'yup';

import {StyledConverter} from './StyledConverter';
import fetchRate from '../api';

export type IMoneyInput = {
  amount: string;
}

const Converter: FC = () => {

    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [moneyAmount, setMoneyAmount] = useState<string>('');
    const [result, setResult] = useState<number>(0);

    // get data from server and keep a result to state
    useEffect(() => {
      setIsLoading(true);
      fetchRate().then(rate => {
        // imitation of loading
        setTimeout(() => {
          setResult(rate.quotes.EUR * +moneyAmount);
          setIsLoading(false);
        }, 500);
      });
    }, [moneyAmount]);

    // Formik
    const ValidationSchema = Yup.object().shape({
      amount: Yup
        .number()
        .required("required")
        .min(1.1, "Minimum value is 1.1")
        .max(999.99, "Maximum value is 999.99")
    });

    return (
      <StyledConverter data-testid="converter-test">
        <h1 className='title'>Currency converter</h1>
        <Formik
          initialValues={{
            amount: '',
          }}
          validationSchema={ValidationSchema}
          onSubmit={(values: IMoneyInput) => {
            setMoneyAmount(values.amount);
          }}
        >
          {({errors, touched}) => (
            <Form className='container'>
              <Field name="amount" type='number' placeholder='USD' className='input' data-testid="input"/>
              {errors.amount && touched.amount ? (
                <p className='error'>{errors.amount}</p>
              ) : null}
              <button type="submit" className='button'>Convert</button>
            </Form>
          )}
        </Formik>
        {(isLoading && moneyAmount !== '') ? 'Loading...' :
          <p className='result'>{result > 0 && `${moneyAmount} USD = ${result.toFixed(2)} EUR`}</p>}
      </StyledConverter>
    );
  }
;

export default Converter;
