export default () => ({
    port: parseInt(process.env.PORT) || 3000,
    limit:{
        postData: process.env.LIMIT_POST_DATA,
        urlEncoded: process.env.LIMIT_URL_ENCODE
    },
    db:{
        connexionString: process.env.DB_CONNEXION_STRING,
        // options: JSON.parse(process.env.DB_AUTH)
    },
    server:{
        authentification: process.env.SERVER_AUTHENTIFICATION,
    },

    mail:{ 
        host: 'smtp.mailtrap.io',
        port: {ssl: 465, tls: 587, none: 25, mailtrap: 2525}, 
        secure: {oui: true, non: false},
        tls: { ciphers: 'SSLv3' },
        auth: {user: '78cabbb66be16e', pass: 'b2d1cf44182b08'},
        from: "Railway '<no-reply@railway.app>'",
        noreply: "Railway '<no-reply@railway.app>'"

    },

    swagger : {
        title: 'API EXERCICE',
        description: 'API principal développé avec NESTJS',
        version: 'V.0.0.1',
        url: 'swagger-ui',
    }

});