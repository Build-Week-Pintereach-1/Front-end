import React from 'react';
import ArticleCard from './ArticleCard'
import { useState, useEffect } from 'react';
import { Form, Field, withFormik } from "formik";
import * as yup from 'yup';
import axios from 'axios';

import { saveProps } from './SavedCard'



const SavedCardForm = ( { errors, touched, values, status, saveProps }) => {

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
                name="board"
                placeholder="Board Title"
            />
        <button type="submit">Save</button>
                </Form>
        </div>
    );
};

const FormikSavedCardForm = withFormik({
    mapPropsToValues:({ notes, board }) => {
        return {
            notes: notes || '',
            board: board || '',
        };
    },
    validationSchema: yup.object().shape({
        notes: yup.string(),
        board: yup.string()
        .required('Add board name')
    }),
    handleSubmit:(values, { resetForm, setComment}) => {
        let submitMe = saveProps;
        
        submitMe = {
            ...submitMe,
            "comments": values.notes,
            "board": values.board
        }

        axios.post('https://nameless-lake-751239.herokuapp.com/addarticle', submitMe)
        .then(response => {
             console.log(response)
             setComment(response);
             resetForm();
            
         })
         .catch(error => {
            console.log(error);
         });
        console.log(values)
       console.log("I am a saved card!", submitMe)
    }
})(SavedCardForm);

export default FormikSavedCardForm;