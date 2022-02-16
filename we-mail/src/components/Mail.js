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
  // const [mail, setMail] = useState([]);

  // useEffect(() => {
  //   var uriId = window.location.hash.split("#")[1];
  //   fetch(
  //       setMail(filteredData[0]);
  //       console.log(filteredData);
  //     });
  // }, []);"https://run.mocky.io/v3/58770279-0738-4578-a1cf-c56a193fce98")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       var filteredData = data.filter((data) => {
  //         return data.id === uriId;
  //       });
  
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

import { useHistory } from 'react-router-dom';

import "./Mail.css";
import { IconButton } from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ErrorIcon from "@material-ui/icons/Error";
import DeleteIcon from "@material-ui/icons/Delete";
import EmailIcon from "@material-ui/icons/Email";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import MoreVertIcon from "@material-ui/icons/MoreVert";


function Mail() {
  const history = useHistory();

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
        <div className="mail__body">
          <div className="mail__bodyHeader">
            <h2>{"Hey, how are you"}</h2>
          </div>
          <div className="mail__message">
            <p>{"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."}</p>
          </div>
        </div>
      )
    </div>
  );
}

export default Mail;