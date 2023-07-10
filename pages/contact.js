import React, { useState } from 'react'
import styles from '../styles/Contact.module.css'

const Contact = () => {
   const [name, setName] = useState('')
   const [email, setEmail] = useState('')
   const [phone, setPhone] = useState('')
   const [desc, setDesc] = useState('')

   const handleSubmit = (e) => {
      e.preventDefault()
      try {
         // POST request using fetch()
         fetch("http://localhost:3000/api/postContact/", {

            // Adding method type
            method: "POST",

            // Adding body or contents to send
            body: JSON.stringify({
               name,
               email,
               phone,
               desc
            }),

            // Adding headers to the request
            headers: {
               "Content-type": "application/json; charset=UTF-8"
            }
         })

            // Converting to JSON
            .then(response => response.json())

            // Displaying results to console
            .then(json => console.log(json));
         alert("Thanks for contacting us");
         setPhone('')
         setName('')
         setDesc('')
         setEmail('')
      } catch (error) {
         console.log({ 'error': error })
      }

   }


   const handleChange = (e) => {
      if (e.target.name == 'phone') {
         setPhone(e.target.value)
      }
      else if (e.target.name == 'email') {
         setEmail(e.target.value)
      }
      else if (e.target.name == 'desc') {
         setDesc(e.target.value)
      }
      else if (e.target.name == 'name') {
         setName(e.target.value)
      }
   }


   return <div className={styles.container}>
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
         <div className={styles.mb3}>
            <label htmlFor="name" className={styles.formlabel}>Enter your name</label>
            <input className={styles.input} type="text" value={name} onChange={handleChange} id="name" name='name' aria-describedby="emailHelp" required />
         </div>
         <div className={styles.mb3}>
            <label htmlFor="email" className={styles.formlabel}>Email address</label>
            <input className={styles.input} type="email" value={email} onChange={handleChange} name='email' id="email" aria-describedby="emailHelp" required />
            <div id="emailHelp" className={styles.formtext}>We will never share your email with anyone else.</div>
         </div>
         <div className={styles.mb3}>
            <label htmlFor="phone" className={styles.formlabel}>Password</label>
            <input className={styles.input} type="phone" value={phone} onChange={handleChange} name='phone' id="phone" required />
         </div>
         <div className={styles.mb3}>
            <label className={styles.formlabel} htmlFor="desc">Elaborate your concern</label>
            <textarea className={styles.input} value={desc} onChange={handleChange} name='desc' id="desc" required />
         </div>
         <button type="submit" className={styles.btn}>Submit</button>
      </form>
   </div>
}

export default Contact