import React from 'react';
import ArticleCard from './ArticleCard'
import { Form, Field, withFormik } from "formik";

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

const SavedCard = () => {

    return(
        <div className="saved-card">
        <ArticleCard article = {fake}/>
            <Form>
            <Field
                component="textarea"
                type="text"
                name="notes"
                placeholder="Notes"
            />

        <button type="submit">Save</button>
                </Form>
        
        </div>
    );
}

export default SavedCard;