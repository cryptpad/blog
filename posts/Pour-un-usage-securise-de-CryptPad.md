---
title: Pour un usage sécurisé de CryptPad
date: 2024-03-15
author:
  - Mathilde Grünig
lang: fr
summary: Nous vous présentons dans quels scénarios CryptPad est sécurisé, et partageons des idées d'actions concrètes pour un usage de CryptPad respectant votre confidentialité.
cover: /images/Paris_Pont_des_Arts_--_2014_--_1422.jpg
tags:
  - security
  - tutorials
  - privacy
  - research
  - Blueprints
  - ngi
---

![Cadenas d'amour sur le Pont des Arts, Paris, France (2014)](/images/Paris_Pont_des_Arts_--_2014_--_1422.jpg)

Photo Dietmar Rabich [Wikimedia Commons CC-BY-SA](https://commons.wikimedia.org/wiki/File:Paris,_Pont_des_Arts_--_2014_--_1422.jpg)

Ce billet de blog est une traduction francophone d'une première version originale en anglais rédigée par Théo Von Arx et Fabrice Mouhartem.

Vous êtes à la recherche d'un outil de collaboration axé sur la vie privée ? Eh bien, vous l'avez déjà trouvé ! Mais que signifie réellement « vie privée » dans ce contexte ? Et comment est-il techniquement appliqué ? Y a-t-il des précautions supplémentaires nécessaires pour une utilisation extra-sûre de CryptPad ?

Dans ce billet de blog, nous répondrons à ces questions et à d'autres. Nous vous montrerons dans quels scénarios CryptPad est sécurisé et vous donnerons des idées d'actions concrètes pour utiliser CryptPad en toute sécurité. Bien que nous fassions tout ce qui est possible pour sécuriser CryptPad, sa sécurité dépend également de la façon dont vous l'utilisez.

## 🧑‍🏫 Préliminaires

### 🗺 Modèle de menace

Lorsque nous parlons de sécurité ou de confidentialité, nous devrions toujours définir le scénario dont nous parlons.
Ce scénario est ce qu'on appelle le [_modèle de menace_](https://ssd.eff.org/glossary/threat-model) Qui définit les [capacités adverses] (https://ssd.eff.org/glossary/capability). En général, nous visons à penser qu'ils sont aussi puissants que possible. Si nous pouvons nous défendre contre un [adversaire](https://ssd.eff.org/glossary/adversary) fort, nous pouvons également nous défendre contre un adversaire plus faible.

La première hypothèse sur les capacités contradictoires découle directement de l'architecture de CryptPad. CryptPad est une application web : vous visitez le site Web de votre [instance] (https://docs.cryptpad.org/fr/user_guide/instances.html) (par exemple, <https://cryptpad.fr>) et téléchargez automatiquement le code client qui sera exécuté localement sur votre ordinateur. Si vous recevez un faux code de ce serveur, vous ne pouvez pas établir de sécurité, car ce faux code peut, par exemple, envoyer tous vos documents en texte clair au serveur.
Par conséquent, vous devez faire confiance au serveur pour ne pas exécuter de _active_ [attaques] (https://ssd.eff.org/glossary/attack) (c'est-à-dire pour ne pas exécuter un logiciel de serveur CryptPad modifié).

Nous nous défendons néanmoins contre un serveur _honnête mais curieux_ (c'est-à-dire passif). La deuxième hypothèse est donc que le serveur joue selon les règles, mais pourrait essayer de déduire des informations sensibles en analysant toutes les données qu'il reçoit. Ce scénario inclut la possibilité qu'un tiers ait accès au serveur et puisse voir toutes les données et tous les journaux. CryptPad s'est déjà défendu contre un tel adversaire dans le passé lorsque [un cas de tiers a été saisie par la police] (https://newsrnd.com/tech/2022-06-24-data-confiscated-from-pirate-party-servers.SJxeH5I79q.html). Nous considérons donc ce scénario comme très réaliste.

Enfin, nous supposons que les attaquants ont une capacité de réseau. Ce serait le cas de l'administrateur système qui gère le réseau dans votre bureau, de votre [fournisseur de services Internet] (https://en.wikipedia.org/wiki/Internet_service_provider), ou des services secrets ainsi que de nombreux autres. Les attaquants peuvent même utiliser les capacités de réseau actives, c'est-à-dire qu'ils peuvent renifler votre trafic Web, et également rejouer, déposer ou modifier les données envoyées sur le réseau.

### 🔑 Cryptographie

L'une des principales caractéristiques de CryptPad est [le cryptage de bout en bout] (https://ssd.eff.org/glossary/end-to-end-encryption). Laissez-nous vous donner une idée approximative de ce que sont le cryptage et l'authentification. Il y a trois blocs de construction principaux :

1. **Le cryptage symétrique** (ou cryptage de clé secrète) fonctionne de la même manière qu'une boîte avec un verrou : nous pouvons mettre quelque chose dans la boîte et verrouiller la boîte par clé (chiffrement). Seule une personne ayant la clé peut déverrouiller la boîte et accéder au contenu (déchiffrement) et le modifier. Étant donné que la même clé est utilisée pour verrouiller et déverrouiller la boîte, ce schéma est surnommé _symétrique_. Nous pouvons également faire des copies de la clé et la distribuer aux personnes en qui nous avons confiance, afin qu'elles puissent toutes verrouiller et déverrouiller la boîte.
2. **Le chiffrement asymétrique** (ou cryptage de clé publique : PKE pour faire court) diffère du cryptage symétrique en ce sens qu'une clé différente est utilisée pour le cryptage (à savoir la _clé publique_) et le déchiffrement (la clé privée\_). Vous pouvez imaginer le cryptage asymétrique comme le système suivant : vous distribuez des verrous ouverts (la clé de cryptage publique) à tout le monde et gardez la clé (déchiffrement secret) pour vous. Ensuite, si quelqu'un veut vous envoyer un message, il le met dans une boîte et ferme une serrure dessus. Ainsi, vous seul pouvez l'ouvrir pendant que n'importe qui peut produire une boîte verrouillée pour vous. <p><img alt="Boîte avec serrure" src="/images/unsplash-lock_on_a_box.jpg" /></p>
3. **Les signatures numériques** sont étroitement liées aux sceaux physiques : seules les personnes en possession du sceau (que nous appelons la clé de signature) peuvent signer, mais toutes les autres personnes peuvent vérifier l'authenticité d'un document à l'aide de la clé de vérification publique de l'émetteur. En outre, les signatures numériques garantissent également que personne n'est en mesure de modifier le contenu scellé sans que les lecteurs ne s'en aperçoivent. Une propriété que les phoques réguliers n'apprécient pas. Notez qu'il existe une variante symétrique de cette primitive appelée [_message authentication code_](https://en.wikipedia.org/wiki/Message_authentication_code). Cependant, il est rarement utilisé comme bloc de construction indépendant et est utilisé conjointement avec le cryptage symétrique pour obtenir [le cryptage authentifié] (https://en.wikipedia.org/wiki/Authenticated_encryption), ce qui garantit en outre que les messages ne sont pas altérés. Comme nous utilisons exclusivement le cryptage authentifié dans CryptPad, nous utilisons généralement le "cryptage symétrique" à la place dans les explications pour plus de simplicité, mais les garanties réelles sont plus fortes. <p><img alt="Cachet sur une enveloppe" src="/images/unsplash-sealed_letter.jpg" /></p>

Pour CryptPad, nous combinons tous ces blocs de construction pour atteindre différents objectifs. Nous expliquerons l'utilisation ci-dessous dans la section relative aux documents.

## 🧗 Les bases

Nous décrivons quelques mesures de base qui vous permettent d'augmenter considérablement la sécurité de votre utilisation de CryptPad :

- CryptPad est un logiciel [open source](https://ssd.eff.org/glossary/open-source-software) et, à ce titre, il y a [diverses instances](https://cryptpad.org/instances/) qui l'exécutent. Alors que nous hébergeons l'[instance phare](https://cryptpad.fr), vous pouvez en choisir une autre en fonction de la juridiction par exemple.
- Assurez-vous de vous connecter à l'instance CryptPad choisie via [HTTPS](https://ssd.eff.org/module/what-should-i-know-about-encryption#transport-layer-encryption-example-https).
- Tous les mécanismes de sécurité sont seulement aussi forts que votre mot de passe. Si votre mot de passe est facilement devinable, les attaquants peuvent obtenir un accès complet à toutes vos données stockées sur CryptPad. Nous vous recommandons soit de générer un mot de passe aléatoire à l'aide d'un [gestionnaire de mots de passe](https://ssd.eff.org/module/animated-overview-using-password-managers-stay-safe-online), soit de [choisissez plusieurs mots](https://www.eff.org/dice) au cas où le mot de passe devrait être mémorisable. Utilisez ce mot de passe uniquement pour CryptPad afin d'éviter que d'autres services ne le fuient.
- Déconnectez-vous de CryptPad après chaque session pour demander le mot de passe pour accéder à vos données sur CryptPad. Sinon, toute personne ayant accès à votre appareil peut également accéder à vos données sur CryptPad.
- Utilisez [authentification à deux facteurs](https://ssd.eff.org/glossary/two-factor-authentication) dans votre compte pour ajouter une protection contre le phishing en ajoutant un facteur temporel à votre connexion. [Un guide de l'utilisateur](/2024/01/09/tutorial-two-factor-authentication/) est disponible sur ce blog.

## 🧑 Contacts

Comme nous le montrerons ci-dessous, l'ajout de vos pairs en tant que contacts CryptPad vous permet de partager des documents plus facilement et en toute sécurité. Vous pouvez en outre restreindre l'accès à un document à des contacts spécifiques et échanger des messages texte avec eux.

La façon la plus simple d'ajouter quelqu'un à vos contacts est de [partager le lien vers votre profil](https://docs.cryptpad.org/en/user_guide/collaboration.html#add-a-contact) via une communication sécurisée avec votre pair et de demander à s'ajouter les uns les autres en tant que contacts.

⚠️ Notez que les noms d'utilisateur ne sont pas uniques sur CryptPad. Selon le contexte, il peut être judicieux de vérifier une demande de contact reçue par un autre canal sécurisé.

## 📄 Documents

CryptPad utilise un cryptage symétrique avec une clé secrète par document pour rendre vos documents illisibles pour tous ceux qui n'ont pas accès à leurs clés correspondantes. CryptPad vous permet également de faire la différence entre les accès en lecture seule et les accès en écriture à un document. Pour cela, toute personne souhaitant modifier un document doit prouver qu'elle possède la clé de signature privée liée au document. Pour cela, ils signent leurs modifications et d'autres personnes travaillant sur le même document peuvent vérifier que la modification a effectivement été effectuée par une personne autorisée avant d'accepter les modifications.

### 🔄 Partager

CryptPad conserve ces détails techniques « sous le capot » et fournit une interface simple pour [partager des documents] (https://docs.cryptpad.org/en/user_guide/share_and_access.html#sharing-a-link) via des liens. Un tel lien contient essentiellement la clé symétrique pour le cryptage et le déchiffrement, pour la vérification des signatures ainsi que celle pour l'émission des signatures (en cas d'accès en lecture/écriture) d'une manière **non révocable**.

<p>
<img alt="Share via link" style="border-radius: 10px" src="/images/docs-modal-share-link.png">
</p>

⚠️ Cela implique que le document est seulement aussi sûr que le canal de communication **le plus faible** utilisé pour envoyer ces liens.

Si vous considérez qu'un canal n'est pas sûr, ou s'il est accessible au public, vous voudrez peut-être en isoler certains de vos documents. Par exemple, vous pouvez limiter l'envoi de liens d'édition vers les chats [Signal](https://signal.org/) avec des messages qui disparaissent.

Une autre possibilité de partager l'accès en toute sécurité est de [l'envoyer via CryptPad à vos contacts](https://docs.cryptpad.org/en/user_guide/share_and_access.html#sharing-with-contacts). Il utilise en interne le système ["mailbox"](https://docs.cryptpad.org/en/dev_guide/general.html#encryption) pour les communications internes, sans que le serveur CryptPad ne le sache mieux. De cette façon, vous n'avez pas besoin d'utiliser un canal de communication secondaire (potentiellement non sécurisé).

<p>
<img alt="Share with contacts" style="border-radius: 10px" src="/images/docs-modal-share-contacts.png">
</p>

⚠️ Notez que les documents CryptPad contiennent l'historique complet des modifications par conception. Il est facilement accessible à n'importe qui à partir de [l'interface utilisateur] (https://docs.cryptpad.org/en/user_guide/apps/general.html#document-history). Si vous avez commis une erreur de manipulation, par exemple au bout d'un texte que vous ne vouliez pas partager, tout en produisant le document **avant** de le partager, nous vous recommandons de copier-coller la version que vous souhaitez partager pour la collaboration dans un nouveau bloc avant de l'envoyer pour nettoyer l'historique (cela aide également à suivre les modifications par la suite).

### ⛔ Restreindre l'accès

Comme CryptPad fonctionne avec des clés statiques, les accès partagés accordés ne sont pas révoquables. Cela signifie que par défaut, toute personne à qui l'accès a été accordé pourra à jamais lire (et modifier) un document. Pour éviter cela, vous pouvez fermer l'accès à un document à l'aide de la fonctionnalité [Liste d'accès](https://docs.cryptpad.org/en/user_guide/share_and_access.html#access-list).

<p>
<img alt="Access List" style="border-radius: 10px" src="/images/docs-modal-access-list.png">
</p>

De cette façon, seules les personnes sélectionnées ont accès au document, indépendamment de la personne qui a reçu le lien de partage.

Assurez-vous également que vous ou votre [équipe] (https://docs.cryptpad.org/en/user_guide/collaboration.html#teams) êtes défini comme « propriétaire » lorsque vous créez des documents. Cela vous donnera un contrôle total, y compris la possibilité de détruire un document s'il contient des informations sensibles ou si le lien échappe à votre contrôle.

### 🔒 Mots de passe par document

Pour plus de sécurité, vous pouvez [protéger un document avec un mot de passe](https://docs.cryptpad.org/en/user_guide/share_and_access.html#access-tab). Le document n'est alors disponible que si vous avez les deux, le lien de partage et le mot de passe. Ceci est particulièrement utile dans le cas où vous n'avez pas de canal de communication sécurisé pour partager le lien, car vous pouvez envoyer le lien et le mot de passe sur deux canaux _distincts_ (par exemple, la messagerie texte et le courrier électronique). De cette façon, l'attaquant doit surveiller les deux canaux en même temps, ce qui le rend beaucoup plus difficile.

Lorsque vous partagez des documents avec vos contacts directement sur CryptPad, les communications sont cryptées, et nous supposons que vous voulez leur donner accès. Par conséquent, le mot de passe est mémorisé et envoyé avec le document lorsque vous le partagez. On ne le demande pas au destinataire, ou à vous-même, lors de l'ouverture du document. Cela suppose implicitement que la sécurité du lecteur CryptPad est au moins aussi forte que les canaux de communication utilisés pour partager le document.

### 💨 Autodestruction

CryptPad vous permet de créer [des documents autodestructeurs] (https://docs.cryptpad.org/en/user_guide/security.html#self-destructing-documents) qui seront détruits soit après l'heure d'expiration définie, soit après l'ouverture du document partagé la première fois.

Cette fonctionnalité est particulièrement utile si vous devez partager des données sensibles qui ne devraient pas être accessibles pour toujours. Vous pouvez l'utiliser pour partager un mot de passe avec un pair par exemple.

## 🕵️ Anonymat

CryptPad ne fournit qu'une faible forme d'anonymat et ne cache pas votre [adresse IP](https://ssd.eff.org/glossary/ip-address) ou votre [« agent utilisateur »](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/User-Agent) (navigateur et [système d'exploitation](https://ssd.eff.org/glossary/operating-system)). Le serveur peut en outre théoriquement lier les adresses IP de personnes qui collaborent souvent sur les mêmes documents. Bien sûr, nous n'exécutons pas ces analyses pour notre instance phare, mais nous voulons que vous nous fassiez confiance le moins possible. Vous pouvez donc utiliser les outils et techniques suivants :

- Le [Navigateur Tor](https://www.torproject.org/download/) pour se connecter à CryptPad et cacher votre adresse IP.
- Un compte de graveur qui n'est utilisé que pour des actions spécifiques à haut risque telles que le travail sur un petit ensemble de documents ou la publication d'informations sensibles pour éviter la possibilité de lier les adresses IP des personnes collaboratrices.
- [Tails](https://tails.net) pour ne laisser aucune trace sur votre appareil local.

## 💡 Autres outils

CryptPad est conçu pour être une suite bureautique générale et facile à utiliser. En tant que tel, il se peut qu'il ne réponde pas toujours à vos besoins spécifiques. Nous vous redirigons vers d'autres outils et services qui ne sont pas affiliés à CryptPad pour les actions suivantes :

- Un [gestionnaire de mots de passe](https://ssd.eff.org/module/animated-overview-using-password-managers-stay-safe-online) pour avoir le contrôle de vos mots de passe.
- [Secure Drop](https://securedrop.org/) pour alerter.
- [Signal](https://signal.org/) pour une messagerie sécurisée en temps réel.

## 📚 Références

À propos de CryptPad :

- La [section sécurité](https://docs.cryptpad.org/en/user_guide/security.html) dans notre guide de l'utilisateur explique l'utilisation des fonctionnalités de sécurité de CryptPad.
- La conférence [« Vivre à la périphérie avec CryptPad : confidentialité, calcul distribué et architectures de résilience »] (https://peertube.xwiki.com/w/jAP48FTXpi9CpJnb8SSVDh) est une explication détaillée des concepts derrière CryptPad.
- Nous avons publié un [livre blanc] (https://blog.cryptpad.org/2023/02/02/Whitepaper/) décrivant les mécanismes de sécurité et la cryptographie utilisés dans CryptPad. Ce document est destiné aux personnes qui sont déjà familières avec la cryptographie.

Plus général :

- Le [guide d'autodéfense de surveillance](https://ssd.eff.org/) par l'Electronic Frontier Foundation (EFF)

## 🙋 Questions ?

Nous sommes heureux de vous aider et de répondre à vos questions concernant ce billet de blog. Vous pouvez nous joindre sur [notre forum](https://forum.cryptpad.org/), [Matrix](https://matrix.to/#/#cryptpad:matrix.xwiki.com), [Mastodon](https://fosstodon.org/@cryptpad), ou [Email](mailto:contact@cryptpad.fr).

## 🙏 Remerciements

Ce projet fait partie de [CryptPad Blueprints](https://nlnet.nl/project/CryptPad-Blueprints/), qui est financé par le Fonds [NGI0 Entrust](https://nlnet.nl/entrust), un fonds créé par [NLnet](https://nlnet.nl) avec le soutien financier du programme [Next Generation Internet](https://ngi.eu) de la Commission européenne, sous l'égide de la DG Communications Networks, Content and Technology dans le cadre de la convention de subvention n° 101069594.
