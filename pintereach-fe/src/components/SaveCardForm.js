import React from 'react';
import ArticleCard from './ArticleCard'
import { useState, useEffect } from 'react';
import { Form, Field, withFormik } from "formik";
import * as yup from 'yup';
import axios from 'axios';

const SavedCardForm = ( { errors, touched, values, status }) => {

    const [comment, setComment] = useState([]);
    useEffect(() => {
      if (status) {
        setComment([...comment, status]);
      }
    }, [status]);

    return(
        <div className="saved-card-form">
            <Form>
            {touched.notes && errors.notes && <p className="error">{errors.notes}</p>}
            <Field
                type="textarea"
                name="notes"
                placeholder="Notes"
            />
             <Field
                type="text"
                name="tag"
                placeholder="Tags"
            />
        <button type="submit">Save</button>
                </Form>
        <div className= 'card-comments'>
            {comment.map(comment => (
                <ul>
                    <li>Notes: {comment.data.notes} </li>
                    <li>Tags: {Comment.data.tag} </li>
                </ul>
            ))}
            
        </div>
        </div>
    );
};
const FormikSavedCardForm = withFormik({
    mapPropsToValues:({ notes, tag }) => {
        return {
            notes: notes || '',
            tag: tag || '',
        };
    },
    validationSchema: yup.object().shape({
        notes: yup.string(),
        tag: yup.string()
        .required('Add at least one tag')
    }),
    handleSubmit:(values, { resetForm, setComment }) => {
        axios.post('https://reqres.in/', values)
        //this will need to be changed to point to our backend
        .then(response => {
            console.log(response)
            setComment(response);
            resetForm();
        })
        .catch(error => {
            console.log(error);
        });
    }
})(SavedCardForm);

export default FormikSavedCardForm;