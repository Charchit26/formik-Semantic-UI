import React from 'react';
import {Grid, Input} from 'semantic-ui-react';
import {Form, withFormik} from 'formik';
import {SemanticField} from '../SemanticField';

const MyInnerForm = (props) => {
    return (
        <Form onSubmit={props.handleSubmit}>
            <Grid id="customer-details-form">
                <Grid.Row columns={2}>
                    <Grid.Column>
                        <div className="form-field-title">Name Input</div>
                    </Grid.Column>
                    <Grid.Column>
                        <SemanticField className="form-field"
                                       component={Input}
                                       name="nameInput"
                                       maxLength={9}/>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column>
                    {/* < Child component with more of the form elements, it can be located in a separate file as well /> */}
                    </Grid.Column>
                </Grid.Row>
            </Grid>
            <button
                type="submit"
                id="submit-btn"
                disabled={props.isSubmitting}>
                Submit Form
            </button>
        </Form>
    );
};

const handleSubmit = (values, {setSubmitting}) => {
    alert('Values submitted' + JSON.stringify(values));

    setSubmitting(false);
};

export default withFormik({handleSubmit})(MyInnerForm);
