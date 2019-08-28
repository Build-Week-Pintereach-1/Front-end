import React from 'react';
import ArticleCard from './ArticleCard'
import { useState, useEffect } from 'react';
import { Form, Field, withFormik } from "formik";
import * as yup from 'yup';
import axios from 'axios';

const fake = [{
    abstract: ["This article uses data from Thomson Reute… data and draw conclusions for themselves."],
    author_display:[
         "Paul Oldham",
        "Stephen Hall",   
        "Geoff Burton"
    ],
    id: "10.1371/journal.pone.0034368",
    journal: "PLoS ONE",
    title_display: "Synthetic Biology: Mapping the Scientific Landscape"
    }, {
        abstract: ["Systems biology is a discipline that studies biol…de disproportionate contributions to this field."],
        author_display: [
            "Yawen Zou",
            "Manfred D. Laubichler"
        ],
    id: "10.1371/journal.pone.0200929",
    journal: "PLOS ONE",
    title_display: "From systems to biology: A computational analysis of the rese"
    }]

const SavedCardForm = ( { errors, touched, values, status }) => {

    const [comment, setComment] = useState([]);
    useEffect(() => {
      if (status) {
        setComment([...comment, status]);
      }
    }, [status]);

    return(
        <div className="saved-card">
        <ArticleCard article = {fake} />
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
const FormikSavedCard = withFormik({
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
})(SavedCard);

export default FormikSavedCardForm;