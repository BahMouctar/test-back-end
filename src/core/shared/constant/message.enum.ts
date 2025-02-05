export enum Message{

    ERROR_MESSAGE_CHECK_USER_EMAIL = "Adresse email introuvable.",
    ERROR_MESSAGE_FETCH_ONE_USER_EMAIL = "Adresse email incorrecte.",
    ERROR_MESSAGE_DUPLICATE_USER_EMAIL = "Cette addresse mail est déja utilisée, Veuillez saisir une autre addresse ",
    ERROR_MESSAGE_DUPLICATE_USERNAME = "Nom utilisateur existe déjà.",
    ERROR_MESSAGE_RESOURCE_NOT_FOUND = "No resource found for your request. Please verify you request",
    ERROR_MESSAGE_METHOD_NOT_ALLOWED = "Method Not Allowed. Please verify you request",
    ERROR_MESSAGE_INTERNAL_ERROR = "oops something went wrong !!! ",
    ERROR_MESSAGE_USER_NOT_FOUND = " Utilisateur introuvable dans le systeme.",
    ERROR_MESSAGE_PASS_NOT_MATCHED = "Mot de passe de confirmation ne corresponds pas",
    ERROR_MESSAGE_OLD_PASS_NOT_MATCHED = "Ancien Mot de passe ne corresponds pas",
    ERROR_MESSAGE_DUPLICATE_VALUE = "existe deja dans le systeme",
    ERROR_MESSAGE_USER_CONNECTED = "Votre email ou mot de passe incorrecte",
    ERROR_MESSAGE_USER_ACTIVATED = "Ce compte est deja activé",
    ERROR_MESSAGE_USER_VERIFICATION = "Code de vérification incorrecte",
    ERROR_MESSAGE_SAVE = "Enregistrement échoué",
    ERROR_FETCH_ONE_MESSAGE = "Aucun résultat trouvé",
    ERROR_UPDATE_MESSAGE = "Modification echouée",
    ERROR_DELETE_MESSAGE = "Suppression echouée",
    ERROR_MESSAGE_EMPTY_LIST = "Contenu liste vide",

    SUCCESS_MESSAGE_PASS_UPDATE = "Mot de passe modifié avec succès",
    SUCCESS_MESSAGE_SAVE = "Enregistrement effectué avec succès",
    SUCCESS_USER_CONNECTED = "Connexion réussi",
    SUCCESS_FETCH_ALL_MESSAGE = "resultat(s) trouvé(s)",
    SUCCESS_FETCH_ONE_MESSAGE = "resultat trouvé",
    SUCCESS_UPDATE_MESSAGE = "Modification effectuée avec succès",
    SUCCESS_DELETE_MESSAGE = "Suppression effectuée avec succès",
    SUCCESS_MESSAGE_EMAIL_SENT_USER = "Vous devriez bientôt recevoir un e-mail qui vous permettra de réinitialiser votre mot de passe. Vérifier dans vos spams et votre corbeille si vous ne trouvez pas l'e-mail.",

    BAD_CREDENTIALS = "Bad credentials.",

}