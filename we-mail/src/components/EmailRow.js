import React from 'react';
import './EmailRow.css';
import Checkbox from "@material-ui/core/Checkbox";
import { IconButton } from "@material-ui/core";
import StarBorderOutlinedIcon from "@material-ui/icons/StarBorderOutlined";
import LabelImportantOutlinedIcon from "@material-ui/icons/LabelImportantOutlined";

function EmailRow({ id, subject, tag, body }) {
    return (
        <div className="emailRow">
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

        </div>
    )
}

export default EmailRow