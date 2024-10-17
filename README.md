# PFA
# Stage de PFA 2024 : Application de Gestion Intégrée .
-----------------------------------------------------------------------------------------------------------------------------
# Description :
L'application de gestion intégrée est une solution complète permettant la gestion centralisée des utilisateurs, des missions, des véhicules, des réparations, des congés et des stages. L'application est destinée aux administrateurs et aux utilisateurs dotés de permissions spécifiques. Elle utilise une authentification basée sur des tokens JWT (JSON Web Token) pour garantir un accès sécurisé et structuré aux différentes fonctionnalités.
#Fonctionnalités

# 1. Authentification avec JWT

Connexion sécurisée : L'utilisateur doit s'authentifier à l'aide de ses identifiants (email et mot de passe) pour accéder à l'application.
Gestion des tokens JWT : L'authentification repose sur les tokens JWT, qui permettent d'identifier et d'autoriser l'utilisateur tout au long de sa session.
Séparation des rôles : Différentes permissions sont associées aux utilisateurs en fonction de leur rôle (administrateur, gestionnaire, utilisateur), ce qui limite l'accès à certaines fonctionnalités selon les autorisations.
<img width="960" alt="image" src="https://github.com/user-attachments/assets/f42d1fe8-1308-4ec1-b32c-6b1d74fa2882">
# 2. Gestion des utilisateurs

Création, modification, suppression d'utilisateurs : Les administrateurs peuvent gérer les comptes utilisateurs, attribuer des rôles et permissions spécifiques.
Assignation de permissions : Chaque utilisateur peut se voir accorder des droits spécifiques (gérer les missions, les congés, les véhicules, etc.) en fonction de son rôle dans l'organisation.
Gestion des départements : Les utilisateurs sont associés à des départements, permettant de structurer les équipes et leurs permissions.
<img width="960" alt="image" src="https://github.com/user-attachments/assets/d8651b09-2209-45f5-8059-17054e5cab44">

# 3. Gestion des permissions

Permissions granulaires : Chaque fonctionnalité (gestion des congés, gestion des missions, etc.) est accessible en fonction des permissions de l'utilisateur. Seuls les utilisateurs ayant les permissions nécessaires peuvent accéder aux fonctionnalités spécifiques.
Interface de gestion des permissions : Les administrateurs peuvent configurer les permissions via une interface dédiée, où ils assignent des droits aux utilisateurs en fonction de leur rôle et département.
<img width="960" alt="image" src="https://github.com/user-attachments/assets/1f748851-7088-4f2f-b03f-3822b8c2b43e">

# 4. Gestion des congés

Demande de congés : Tout utilisateur peut soumettre une demande de congé en spécifiant les dates et la description du congé.
Approbation des congés : Les gestionnaires ou administrateurs peuvent approuver ou rejeter les demandes de congés via une interface intuitive.
Suivi des congés : Les utilisateurs peuvent consulter l'état de leurs demandes (en attente, approuvée, rejetée) et voir un historique de leurs congés.
<img width="960" alt="image" src="https://github.com/user-attachments/assets/32cfac8f-78ee-41b8-9886-c5f2f03c1857">

# 5. Gestion des missions

Demande de mission : Les utilisateurs peuvent soumettre des demandes de mission en spécifiant les détails de la mission (dates, lieu, objectif).
Assignation des missions : Les administrateurs peuvent assigner des utilisateurs à des missions, en choisissant également un véhicule pour la mission.

<img width="960" alt="image" src="https://github.com/user-attachments/assets/8ef654f5-7f21-432d-881a-e4a1d8248f8c">

# 6. Gestion des véhicules

Ajout et gestion des véhicules : Les administrateurs peuvent ajouter des véhicules dans la base de données, spécifier leurs caractéristiques (modèle, marque, année, etc.).
Assignation des véhicules aux missions : Lors de la création d'une mission, un véhicule peut être assigné à l'utilisateur.
Suivi de l'état des véhicules : Le statut des véhicules (en mission, disponible, en réparation) est mis à jour en temps réel pour une gestion optimisée.
<img width="960" alt="image" src="https://github.com/user-attachments/assets/e8f4d661-d91f-407d-887d-7d8ed9d3668a">
<img width="419" alt="image" src="https://github.com/user-attachments/assets/8b2b90b1-ff38-4a86-93f2-b617804d58de">

# 7. Gestion des réparations des véhicules
 
 Signalement des réparations : Les utilisateurs peuvent signaler un problème avec un véhicule, déclenchant une demande de réparation.
Historique des réparations : Un historique complet des réparations effectuées sur chaque véhicule est disponible pour un suivi efficace.
Notification des réparations terminées : Les utilisateurs sont notifiés lorsque les réparations de leur véhicule sont terminées.
<img width="960" alt="image" src="https://github.com/user-attachments/assets/74d32317-a6d7-4b10-afbb-dbb97f0944a2">

# 8. Gestion des stages
 
 Demande de stage : Les utilisateurs peuvent soumettre des demandes pour participer à des stages, en spécifiant les détails du stage.
Gestion des stages : Les administrateurs peuvent approuver ou refuser les demandes de stage et gérer les informations relatives aux stages (dates, durée, formateur).

<img width="959" alt="image" src="https://github.com/user-attachments/assets/c878662f-3e54-4bcf-9c52-54e538fba2cc">

# Technologies utilisées

* Backend : Spring Boot
* Sécurité : JWT (JSON Web Token) pour l'authentification
* Frontend : Angular (ou autre framework utilisé)
* Base de données : MySQL / PostgreSQL
* API REST : Utilisation d'API REST pour la communication entre le frontend et le backend





