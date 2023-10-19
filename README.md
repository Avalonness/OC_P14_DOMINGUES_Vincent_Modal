# react-oc-modal-module

`react-oc-modal-module` est un simple plugin React qui fournit un composant modal personnalisable pour vos applications React.

## Installation

Vous pouvez installer `react-oc-modal-module` en utilisant npm ou yarn :

```bash
npm install react-oc-modal-module
```

ou

```bash
yarn add react-oc-modal-module
```
## Utilisation

Pour utiliser react-oc-modal-module dans votre application React, suivez ces étapes :

Importez le composant ConfirmationModal dans votre projet :

```jsx
import ConfirmationModal from 'react-oc-modal-module';
```

Insérer le composant ConfirmationModal au sein de votre composant React :

```jsx
<ConfirmationModal message="Votre message de confirmation" onClose={handleClose} />
```

## Props

Le composant `ConfirmationModal` accepte les props suivantes :

- `message` (string, obligatoire) : Le texte du message de confirmation à afficher dans le modal.

- `onClose` (fonction, obligatoire) : La fonction à exécuter lorsque l'utilisateur ferme le modal. Elle peut être utilisée pour effectuer des actions spécifiques après la fermeture du modal.

Exemple d'utilisation :

```jsx
<ConfirmationModal message="Voulez-vous continuer ?" onClose={handleClose} />
```

## Exemple
Voici un exemple simple d'utilisation de react-oc-modal-module dans votre composant React :

```jsx
import React, { useState } from 'react';
import ConfirmationModal from 'react-oc-modal-module';

function MonComposant() {
  const [montrerModal, setMontrerModal] = useState(false);

  const ouvrirModal = () => {
    setMontrerModal(true);
  };

  const fermerModal = () => {
    setMontrerModal(false);
  };

  return (
    <div>
      <button onClick={ouvrirModal}>Ouvrir le modal</button>
      {montrerModal && (
        <ConfirmationModal message="Êtes-vous sûr de vouloir continuer ?" onClose={fermerModal} />
      )}
    </div>
  );
}

export default MonComposant;
```
## Licence
Ce projet est Libre de droits.

## Auteur
@DOMINGUES Vincent/@Avalonne
