# Medelse : Exercice pour candidature

### Architecture/Organisation

- dossier **_pages_** : contient les différentes pages de l'app.

  - _page_Factures.jsx_ : la page communiquée pour l'exercice. Elle contient un mapping de factures sous forme de cartes

- dossier **_components_** : contient les différents composants qui pourraient être réutilisables.

  - _BillCard.jsx_ : une carte qui affiche les détails d'une facture. Recoit les infos d'une facture en props lors d'un mapping puis affiche une partie des infos et transmet certaines information en props à ces sous-composants (i.e PaiementStatus)

  - _PaiementStatus.jsx_ : un composant qui affiche le status du paiment reçu en props. Pour l'exercice, il a un style différencié selon le status.

  - _ArrowButton.jsx_ : un bouton qui pourrait recevoir des props et avoir un comportement différencié

- dossier **_styles_** : contient les fichiers de styles css.

  - _BillPage.css_ : contient le style de la page

  - _BillCard.css_ : contient le style de la carte facture et de ses sous-composants. Pour l'exemple, le composant PaiementStatus peut avoir un style différencié selon le status du paiement (Done/Waiting)

**_Commentaires_** : 
- Je n'ai pas comptabilisé la barre de navigation dans l'exercice mais elle vaudrait un composant Nav qui serait appelé dans une page layout par ex, qui appelerait la page facture par composition

- Je n'ai pas codé de test (pas très craft tout ça !) mais on peut imaginer un test sur l'affichage dans la page : si je passe un tableau avec un élément, je recupère une carte, si j'en passe trois, j'en récupère trois etc.
