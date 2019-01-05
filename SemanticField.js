import React from 'react';
import {Field} from 'formik';

export const SemanticField = ({component, ...fieldProps}) => (
    <Field
        {...fieldProps}
        render={({
                     field: {value, onBlur, ...field},
                     form: {setFieldValue, setFieldTouched},
                     ...props
                 }) =>
            React.createElement(component, {
                ...fieldProps,
                ...field,
                ...props,
                ...(typeof value === 'boolean'
                    ? {
                        checked: value,
                    }
                    : {
                    //value needs to be set to something when we delete all the text from innput field, 
                    //else we get a warning of changing a controlled field to uncontrolled.
                        value: value ? value : '',
                    }),
                onChange: (e, {value: newValue, checked}) => {
                    // If there is an `onChange` function passed as prop to the Semantic component then this will
                    // make that function call.
                    if (typeof fieldProps.onChange === 'function') {
                        fieldProps.onChange(e, {value: newValue});
                    }
                    setFieldValue(fieldProps.name, newValue || checked);
                },
                onBlur: (e, blurProps) =>
                    blurProps ? setFieldTouched(fieldProps.name, blurProps.value) : onBlur(e),
            })
        }
    />
);
