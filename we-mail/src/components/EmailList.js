import React, { useEffect, useState } from 'react';
import './EmailList.css';
import EmailRow from './EmailRow';

function EmailList() {
  const [mail, setMail] = useState([]);

  useEffect(() => {
    fetch("https://run.mocky.io/v3/58770279-0738-4578-a1cf-c56a193fce98")
    .then (response => response.json())
    .then(data =>{
      setMail(data)
    })
  }, []);

  return (
    <div className='emailList'>
        {mail.map(data => (
          <EmailRow 
          subject={data.subject}
          key={data.id}
          body={data.body}/>
        ))}
    </div>
  )
}

export default EmailList