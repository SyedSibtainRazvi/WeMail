import React from 'react';
import './EmailRow.css';
import Checkbox from "@material-ui/core/Checkbox";
import { IconButton } from "@material-ui/core";
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined';
import LabelImportantOutlinedIcon from '@material-ui/icons/LabelImportantOutlined';
import {useHistory} from 'react-router-dom';

function EmailRow({subject, body }) {
    const history = useHistory();
    return (
        <div onClick={() => history.push("/mail")} className="emailRow">
            <div className="emailRow__options">

                <Checkbox />
                <IconButton>
                    <StarBorderOutlinedIcon />
                </IconButton>

                <IconButton>
                    <LabelImportantOutlinedIcon />
                </IconButton>

            </div>

            <div className="emailRow__message">
                <h4>
                    {subject} -
                    <span className="emailRow__description">
                    {body}
                    </span>
                </h4>
            </div>
            <p className="emailRow__time">
                05:06 PM
            </p>

        </div>
    )
}

export default EmailRow