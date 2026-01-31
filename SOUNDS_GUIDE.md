## Guide d'Intégration des Sons dans Codify

### 📋 Résumé

Le système sonore est maintenant complètement intégré. Chaque interaction peut jouer un son automatiquement.

### 🎵 Sons Disponibles

| Son              | Fichier          | Volume Défaut | Cas d'Usage                      |
| ---------------- | ---------------- | ------------- | -------------------------------- |
| **click**        | click.mp3        | 0.3           | Clic sur bouton/lien             |
| **hover**        | hover.mp3        | 0.15          | Survol d'élément interactif      |
| **success**      | success.mp3      | 0.4           | Confirmation/succès (formulaire) |
| **error**        | error.mp3        | 0.4           | Erreur/validation échouée        |
| **toggle**       | toggle.mp3       | 0.3           | Switch on/off (thème, son)       |
| **open**         | open.mp3         | 0.3           | Ouverture menu/modal             |
| **close**        | close.mp3        | 0.3           | Fermeture menu/modal             |
| **transition**   | transition.mp3   | 0.2           | Changement de page               |
| **notification** | notification.mp3 | 0.3           | Notification/alerte              |

### 🚀 Utilisation

#### **1. Hook Simple - `useSound()`**

Pour jouer un son directement :

```jsx
import useSound from "../hooks/useSound";

function MonComposant() {
  const { play } = useSound();

  return <button onClick={() => play("click")}>Cliquez-moi</button>;
}
```

#### **2. Hook Avancé - `useSoundInteraction()`**

Pour des handlers préconfigurés :

```jsx
import useSoundInteraction from "../hooks/useSoundInteraction";

function MonComposant() {
  const { play, onClickSound, onHoverSound } = useSoundInteraction();

  return (
    <button
      onClick={onClickSound("click")}
      onMouseEnter={onHoverSound("hover")}
    >
      Bouton avec sons
    </button>
  );
}
```

#### **3. Composants Avec Sounds Automatiques**

```jsx
import { SoundButton, SoundLink } from '../components/SoundElements';

// Les sons click/hover sont automatiques
<SoundButton onClick={() => alert('Cliqué!')}>
  Bouton
</SoundButton>

// Personnaliser les sons
<SoundButton
  soundOnClick="success"
  soundOnHover="notification"
>
  Bouton Personnalisé
</SoundButton>
```

#### **4. Notifications avec Sons**

```jsx
import useNotification from "../hooks/useNotification";

function Formulaire() {
  const { notify } = useNotification();

  const handleSubmit = async (data) => {
    try {
      // Envoyer les données
      notify("Formulaire envoyé!", "success");
    } catch (error) {
      notify("Erreur d'envoi", "error");
    }
  };

  return <form onSubmit={handleSubmit}>...</form>;
}
```

#### **5. Modifications de Volumes**

```jsx
// Volume personnalisé (0 à 1)
play("click", 0.5); // Volume 50%
play("hover", 0.1); // Volume très faible
```

### 🔧 Configuration

Les sons sont gérés par le contexte `SettingsContext`. L'utilisateur peut :

- ✅ Désactiver tous les sons via le menu paramètres
- ✅ Réactiver les sons à tout moment
- ✅ Le paramètre `soundEnabled` est respecté automatiquement

### 📁 Structure des Fichiers

```
src/
├── assets/
│   └── sounds/
│       ├── click.mp3
│       ├── hover.mp3
│       ├── success.mp3
│       ├── error.mp3
│       ├── toggle.mp3
│       ├── open.mp3
│       ├── close.mp3
│       ├── transition.mp3
│       └── notification.mp3
├── hooks/
│   ├── useSound.js              (Hook principal)
│   ├── useSoundInteraction.js   (Handlers prédéfinis)
│   └── useNotification.js       (Notifications avec sons)
├── components/
│   ├── SoundElements.jsx        (Boutons/Liens avec sons)
│   └── SoundInitializer.jsx     (Précharge les sons)
```

### 🎯 Recommandations

✅ **Toujours** utiliser les hooks plutôt que `<audio>` directement
✅ Respecter les volumes par défaut pour la cohérence
✅ Préférer `useSoundInteraction()` pour les formulaires
✅ Tester le son avec `soundEnabled` désactivé
✅ Ne pas surcharger avec trop de sons simultanés

### ⚠️ Notes

- Les sons sont **automatiquement en cache** pour performances optimales
- Les sons respectent le **paramètre global** `soundEnabled`
- Le **préchargement** se fait au démarrage de l'app
- Compatible avec tous les **navigateurs modernes**
