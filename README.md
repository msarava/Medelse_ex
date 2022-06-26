# Medelse_ex

## Exercice pour candidature

### Architecture/Organisation

- dossier **_pages_** : contient les différentes pages de l'app.

  - _page_Factures.jsx_ : la page communiquée pour l'exercice. Elle contient un mapping de factures sous forme de cartes

- dossier **_compenents_** : contient les différents composants qui pourraient être réutilisables.

  - _ArrowButton.jsx_ : un bouton qui pourrait recevoir des props et avoir un comportement différencié

  - _BillCard.jsx_ : une carte qui affiche les détails d'une facture. Recoit les infos d'une facture en props lors d'un maping puis affiche une partie des infos et transmet certaines information en props à ces sous-composants (i.e paiementStatus)

  - _PaiementStatus.jsx_ : un bouton qui affiche le status du paiment reçu en props. Il a un style différencié selon le status.

- dossier **_styles_** : contient les fichiers de styles css.

  - _BillPage.css_ : contient le style de la page

  - _BillCard.css_ : contient le style de la carte facture et de ses sous-composants. Pour l'exemple, le composant PaiementStatus peut avoir un style différencié selon le status du paiement (Done/Waiting)

**_Commentaire_** : je n'ai pas comptabilisé la barre de navigation dans l'exercice mais elle vaudrait un composant Nav qui serait appelé dans une page layout par ex, qui appelerait la page facture par composition
