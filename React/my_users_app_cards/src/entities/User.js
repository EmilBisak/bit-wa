import React from 'react';


class User {
     constructor(picture, name, email, dob) {
         this.picture = picture;
         this.name = name;
         this.email = email;
         this.dob = new Date(dob);
     }
     formatEmail(email) {
        const myEmail = this.email.split("@");
        myEmail[0] = myEmail[0].slice(0,3) + '...';
        const emailFormated = myEmail.join('@');
        return emailFormated;
     }
    } 

    export  {User};