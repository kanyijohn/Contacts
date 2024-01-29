function Contactprops () {
  return (
      <div className="contacts" >
      

          <Contact
          img="https://mybke.netlify.app/images/mr-whiskerson.png"
          name="Mr.Whiskerson"
          phone="(212) 555-1234"
          email="mr.whiskerson@catnap.meow"
          />

         <Contact
          img="https://mybke.netlify.app/images/fluffykins.png"
          name="Mr.Fluffykins"
          phone="(212) 555-7234"
          email="fluff@me.com"
          />

        <Contact
          img="https://mybke.netlify.app/images/felix.png"
          name="Mr.Felix"
          phone="(212) 555-5679"
          email="thecat@hotmail.com"
          />

       <Contact
          img="https://mybke.netlify.app/images/pumpkin.png"
          name="Pumpkin"
          phone="(212) 555-2340"
          email="scrimbapumpkins@coursera.com"
          />

      </div>
  )
}




function Contact ({img, name, phone, email}) {
    
         return (
            <div className="contact-card" >
                <img src={img}/>
                <h3>{name}</h3>

                <div className="phone.icon">
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALcAAACUCAMAAADmiEg1AAAAZlBMVEX///8AAADv7+/4+Pj8/Pw1NTXf3987OzsnJye5ubnq6ury8vK2trbR0dGdnZ11dXVRUVEJCQnCwsJ7e3uNjY0uLi4dHR3JycmmpqaXl5dERESEhIQiIiJdXV2urq5vb29mZmYUFBSm3QDjAAAE/0lEQVR4nO2c6ZKqMBCFDfsigqCCICrv/5JXnQ2VJB3GNudWzfffqlOx6T1ZLP74448Lrpsdqz7c+kVmWwqZNKhXhfgmtq2HRnCsfDHG/x9OPMhb8Uie2lalpYmeVP8HluLkU6qFGBzbypS4EtlCrGxLU9LJZIsd8oGvpLKF2NgWJyfeKXTj+sKgUMgWovJsC5zG2yhli11tW+E0mVq2EGfXtsRJBp1uzOCz18oWO9saJwhCvW7R2Fb5DOG4hQgT2zIfySjHjRd8PFWkHIEWfJItTbfosHzhkShbrLEO/LnCkVHYljomIMsWYmlb7Ah52v1MBFRq0s3kwt622m+CyVJYBo4vbNYmusUJpWSTFsMSQGpk92yoW2BYiqY+m6C1LfkGMacaA2EppaqMnyYMbIu+EJu5E5gDX87QXQHkhUtz2eIMUPnM0Y3QEJ+jG6FCnvFdFgihvjwY60ZwgzPiTmlb8o3EMM4fQPpthnkVimzTPLaG6YMb1Q0Qn+QHBnXaGcEBfkN2KHuAMDmiIsouYUz7g5qkGqeQ/8KjyEZIAR8hePAK6ov8JNbLxvoiPwl0JSZCvj2Bq5m5wrSoHimVsvE8yRdJrzRu2/LkKA0Fp3X8RK3KUdDGf2NUhtJjepMbjUL3FnSF40qqNHCwhGqMqsrcAlULjyiTwhz3wFNlGwU28iw85SpHCNCAlZANKuEIHe9pnJNKd4v7aaq3IjrYTzNRzrsPuMFHvV8Auj94IVHqFkfb+qRoOoWw6ZVmgSa3rU+KunO1Rlr2uUOz3AvrxHXL1GB7eD9kvlo4rE/RHDhS3/6ORNPE71EtRTc+7mwLlKEbCyLMuKcINPNjHzXB0i1Vt4Ad/CvqZqEAW+4dkenWwU+2FUrQrt9vQL2hzlIG0DJZOzgZQAO+egBxBWYt4g79DZP1ErLAd7QzzegIKTzRrp8eMCO+9mLjjOZbUpb8I0XCrR6z+uejk9dnzM5fN429khvkKvVXLdUxFx8pYd+A/lpH/JM9tMyNAYewErklCi+H0Y/WHW8PyaGsjJGmVo+BLCpZrVybGl7J9fZaD0+/OmWc/j+mLLu1us3TyWvA0Ybx+/RUA9lvdmpbcST5ZcuZVtLuwir9irzPGzLuyBHc+JWVNBIq/7Keb3GVeM+xl5ydbs1vwzUcdYnCD9VU9Ay01yT9DVOHwFWOCEdEz2WQtjtw+x3XB0oVLsL6Pp7IXMkju5gngpKFi2psrvIXg544s0TQlLr8eznyH8+SmlxdXlccHTyDkxPtZ9Ese1ZKRsQyzzA5u0MTpOnS6OLyBxw+0UT4JcE1vxd0haO/sZ9xddAUjpkd9d2O37BmaSjNuYRnCE8NV2sGhai6F5nRqwzmDFyNR/N760ZEbLf2PHrMn0HBWLztBz7dZ84OxZLv6+RdcsnYjJx5SZ7Sg5vDjv0ybTNw6Pa5ZV9shVjKGNHz614kxA6FCW+Z03kx9aExMm+64ZSYPrKj4X2j//Kl+cobr+YnmxnlmIS3PuDgZa8yFrZcUIJbvubILexuHV9g5lbu76XNb8OQrW2cZPmbnGVtcRfHyWYrHyyvVzircJghG+EFm7IyTc5DkLWnYFmZPELW4dwiS7Mj9dAL7v0IQ7wgJ7QTW95590ziU6vS7veou7aL4NgVw6Tow3mPY9cTeEHd5I/1RZQ3Geh68BjXceJV14fbQ+QX1Sp2HDOr/geslUBKR3ZclgAAAABJRU5ErkJggg=="/>
                    <p>{phone}</p>

                </div>

                  <div className="email.icon" >
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT68NE9Y-8PFi3p6szs4W6txDc6hc5S9NkyMxsBD-O9YHDhClQ9nOBGmGKsMDB2V0BTovc&usqp=CAU" />
                    <p>{email}</p>

                  </div>
            </div>
         )
}

ReactDOM.render (
  <div>
    <Contactprops />
    <Contact />
    
  </div>,
document.getElementById("root"))