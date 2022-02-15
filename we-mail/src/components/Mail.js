// import React from 'react';
// import './Mail.css';
// import { IconButton } from "@material-ui/core";
// import ArrowBackIcon from "@material-ui/icons/ArrowBack";
// import ErrorIcon from "@material-ui/icons/Error";
// import DeleteIcon from "@material-ui/icons/Delete";
// import EmailIcon from "@material-ui/icons/Email";
// import CheckCircleIcon from "@material-ui/icons/CheckCircle";
// import MoreVertIcon from "@material-ui/icons/MoreVert";

// import { useHistory } from 'react-router-dom';


// function Mail() {
  
//   const history = useHistory();
//   return (
//     <div className='mail'>
//       <div className="mail__tools">
//         <div className="mail__toolsLeft">
//           <IconButton onClick={() => history.push("/")}>
//             <ArrowBackIcon />
//           </IconButton>

//           <IconButton>
//             <ErrorIcon />
//           </IconButton>

//           <IconButton>
//             <DeleteIcon />
//           </IconButton>

//           <IconButton>
//             <EmailIcon />
//           </IconButton>
//         </div>

//         <div className="mail__toolsRight">
//           <IconButton>
//             <CheckCircleIcon />
//           </IconButton>

//           <IconButton>
//             <MoreVertIcon />
//           </IconButton>
//         </div>
//       </div>

//       <div className="mail__body">
//         <div className="mail__bodyHeader">
//           <h2>Hello</h2>
//         </div>
//         <div className="mail__message">
//           <p>lorem ipsum  jdhbhdahb ajhdaawuhvwa vuadhvawwa awdwaduvwhvwa awuyvdwauv</p>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Mail;

import React, { useEffect, useState } from "react";
import "./Mail.css";
import { IconButton } from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ErrorIcon from "@material-ui/icons/Error";
import DeleteIcon from "@material-ui/icons/Delete";
import EmailIcon from "@material-ui/icons/Email";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import MoreVertIcon from "@material-ui/icons/MoreVert";

import { useHistory } from "react-router-dom";

function Mail() {
  const [mail, setMail] = useState([]);

  const history = useHistory();
  useEffect(() => {
    var uriId = window.location.hash.split("#")[1];
    fetch("https://run.mocky.io/v3/58770279-0738-4578-a1cf-c56a193fce98")
      .then((response) => response.json())
      .then((data) => {
        var filteredData = data.filter((data) => {
          return data.id === uriId;
        });
        setMail(filteredData[0]);
        console.log(filteredData);
      });
  }, []);
  return (
    <div className="mail">
      <div className="mail__tools">
        <div className="mail__toolsLeft">
          <IconButton onClick={() => history.push("/")}>
            <ArrowBackIcon />
          </IconButton>

          <IconButton>
            <ErrorIcon />
          </IconButton>

          <IconButton>
            <DeleteIcon />
          </IconButton>

          <IconButton>
            <EmailIcon />
          </IconButton>
        </div>

        <div className="mail__toolsRight">
          <IconButton>
            <CheckCircleIcon />
          </IconButton>

          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>
      {mail && (
        <div className="mail__body">
          <div className="mail__bodyHeader">
            <h2>{mail.subject}</h2>
          </div>
          <div className="mail__message">
            <p>{mail.body}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Mail;