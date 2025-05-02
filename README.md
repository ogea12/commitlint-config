# @ogea12/commitlint-config

<div align="center">

![Version](https://img.shields.io/npm/v/@ogea12/commitlint-config?style=for-the-badge&colorA=4c566a&colorB=5382a1&logo=npm&logoColor=white)
![Code Size](https://img.shields.io/github/languages/code-size/ogea12/commitlint-config?style=for-the-badge&colorA=4c566a&colorB=ebcb8b&logo=github&logoColor=white)
![License](https://img.shields.io/github/license/ogea12/commitlint-config?style=for-the-badge&colorA=4c566a&colorB=a3be8c)

</div>

`@ogea12/commitlint-config` est un package qui fournit une configuration partagée pour CommitLint, permettant de standardiser les messages de commit Git selon la convention [Conventional Commits](https://www.conventionalcommits.org) (basée sur la convention Angular).

## Premiers pas

### Installation

Pour utiliser le package, vous devez d'abord l'intégrer dans votre projet.

```shell
npm install -D @ogea12/commitlint-config

# Assurez-vous également d'installer le package suivant
npm install -D @commitlint/cli
```

### Utilisation

Une fois l'installation terminée, vous pouvez ajouter le fichier `commitlint.config.js` dans votre projet. Ce-dernier doit contenir l'initialisation de la configuration, comme ci-dessous.

```js
// commitlint.config.js

export default {
  extends: ['@ogea12'], // @ogea12/commitlint-config
}
```

## Intégration avec Husky

[Husky](https://typicode.github.io/husky) est un outil qui permet d'exécuter des scripts avant certaines actions Git (comme les commits). Cela vous permet de vérifier automatiquement le format de vos messages de commit avant qu'ils ne soient acceptés.

### Installation

Pour utiliser Husky, vous devez d'abord l'intégrer dans votre projet.

```shell
npm install -D husky
```

Après l'installation, initialisez Husky dans votre projet. Cette commande ajoutera automatiquement le script `prepare` dans votre fichier `package.json`. Ce script s'exécutera après chaque installation des dépendances.

```shell
npx husky init
```

### Utilisation

Pour configurer Husky afin qu'il vérifie vos messages de commit, vous devez créer un hook `commit-msg`. Ce hook s'exécutera chaque fois que vous créez un commit et vérifiera que votre message respecte les règles définies.

```shell
# .husky/commit-msg

npx --no -- commitlint --edit $1
```

Désormais, chaque fois que vous tenterez de créer un commit, Husky exécutera CommitLint pour vérifier votre message. Si le message ne respecte pas les règles configurées, le commit sera rejeté.
