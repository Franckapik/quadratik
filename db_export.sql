--
-- Fichier généré par SQLiteStudio v3.1.1 sur lun. févr. 5 11:01:24 2018
--
-- Encodage texte utilisé : System
--
PRAGMA foreign_keys = off;
BEGIN TRANSACTION;

-- Table : collections
CREATE TABLE `collections` (`id` INTEGER PRIMARY KEY AUTOINCREMENT, `name` VARCHAR(255), `description` TEXT, `createdAt` DATETIME NOT NULL, `updatedAt` DATETIME NOT NULL);
INSERT INTO collections (id, name, description, createdAt, updatedAt) VALUES (1, 'Klassik', 'Le diffuseur standard, simple et efficace !', '2018-02-05 00:00:00', '2018-02-05 00:00:00');
INSERT INTO collections (id, name, description, createdAt, updatedAt) VALUES (2, 'Organik', 'La collection Organik montre des diffuseurs avec des couleurs illustrant le caractère et la robustesse du bois. 
Elle s''adresse aux studios de forte personnalité, appréciant les contrastes et les couleurs brunes, chaudes.', '2018-02-05 00:00:00', '2018-02-05 00:00:00');
INSERT INTO collections (id, name, description, createdAt, updatedAt) VALUES (3, 'Botanik', 'La collection Botanik repose sur les couleurs apaisantes, inspirées de la nature et du jardin.
Les diffuseurs sont discrets, non-intrusifs et amène une forme de sérénité pour l''esprit et son inspiration.', '2018-02-05 00:00:00', '');
INSERT INTO collections (id, name, description, createdAt, updatedAt) VALUES (4, 'Minimalik', 'La collection Minimalik est ambitieuse avec un design comtemporain et minimaliste.
Elle s''adapte aux studios qui aiment mélanger rigueur avec quelques pointes de fantaisie.', '2018-02-05 00:00:00', '');
INSERT INTO collections (id, name, description, createdAt, updatedAt) VALUES (5, 'Gamik', 'La collection Gamik est une référence amusante au monde du jeu vidéo.
Destinée aux studios ambitieux qui aiment garder de l''energie avec ces références délirantes connues de tous.', '2018-02-05 00:00:00', '');

-- Table : commandes
CREATE TABLE `commandes` (`id` INTEGER PRIMARY KEY AUTOINCREMENT, `transaction` VARCHAR(255), `montant` VARCHAR(255), `tokenID` VARCHAR(255), `chargeID` VARCHAR(255), `statut` VARCHAR(255), `time` DATETIME, `cardID` VARCHAR(255), `typeCarte` VARCHAR(255), `last4` VARCHAR(255), `promo` VARCHAR(255), `createdAt` DATETIME NOT NULL, `updatedAt` DATETIME NOT NULL);

-- Table : descriptions
CREATE TABLE `descriptions` (`id` INTEGER PRIMARY KEY AUTOINCREMENT, `description` TEXT, `createdAt` DATETIME NOT NULL, `updatedAt` DATETIME NOT NULL);
INSERT INTO descriptions (id, description, createdAt, updatedAt) VALUES (1, 'Le modèle 71 correspond à un diffuseur doté de 7 X 7 cellules et d''un profondeur de 10 centimètres.
C''est un format classique, léger et discret, efficace dans les fréquences haut-médiums et aigues.
', '2018-02-05 00:00:00', '2000-01-01 00:00:00');

-- Table : livraisons
CREATE TABLE `livraisons` (`id` INTEGER PRIMARY KEY AUTOINCREMENT, `type` VARCHAR(255), `nomcomplet` VARCHAR(255), `adresse` VARCHAR(255), `ville` VARCHAR(255), `region` VARCHAR(255), `postal` VARCHAR(255), `fdp` VARCHAR(255), `createdAt` DATETIME NOT NULL, `updatedAt` DATETIME NOT NULL);

-- Table : performances
CREATE TABLE `performances` (`id` INTEGER PRIMARY KEY AUTOINCREMENT, `frequence` VARCHAR(255), `classement` VARCHAR(255), `graph` VARCHAR(255), `createdAt` DATETIME NOT NULL, `updatedAt` DATETIME NOT NULL);
INSERT INTO performances (id, frequence, classement, graph, createdAt, updatedAt) VALUES (71, '1475-2150', '3', '[1,1,2,3 ,4 ,5 ,5 ,5 ,5 ,5 ,4 ,3 ,2 ,1 ,1, 1 ]', '2000-01-01 00:00:00', '2000-01-01 00:00:00');
INSERT INTO performances (id, frequence, classement, graph, createdAt, updatedAt) VALUES (72, '738-2150', '4', '[2,3,4,5 ,5 ,5 ,5 ,5 ,5 ,5 ,4 ,3 ,2 ,1 ,1, 1 ]', '2018-02-05 00:00:00', '');
INSERT INTO performances (id, frequence, classement, graph, createdAt, updatedAt) VALUES (73, '492-1755', '5', '[4,5,5,5 ,5 ,5 ,5 ,5 ,5 ,5 ,4 ,3 ,2 ,1 ,1, 1 ]', '2018-02-05 00:00:00', '');
INSERT INTO performances (id, frequence, classement, graph, createdAt, updatedAt) VALUES (111, '1564-2150 ', '4', '[1,1,1,2 ,3 ,4 ,5 ,5 ,5 ,5 ,4 ,3 ,2 ,1 ,1, 1 ]', '2018-02-05 00:00:00', '');
INSERT INTO performances (id, frequence, classement, graph, createdAt, updatedAt) VALUES (112, '782-2150', '4', '[2,3,4,5 ,5 ,5 ,5 ,5 ,5 ,5 ,4 ,3 ,2 ,1 ,1, 1 ]', '2018-02-05 00:00:00', '');
INSERT INTO performances (id, frequence, classement, graph, createdAt, updatedAt) VALUES (113, '522-2150', '5', '[2,3,4,5 ,5 ,5 ,5 ,5 ,5 ,5 ,4 ,3 ,2 ,1 ,1, 1 ]', '2018-02-05 00:00:00', '');
INSERT INTO performances (id, frequence, classement, graph, createdAt, updatedAt) VALUES (191, '1630-3440', '5', '[1,1,1,2 ,3 ,4 ,5 ,5 ,5 ,5 ,5 ,5 ,5 ,5 ,5, 4 ]', '2018-02-05 00:00:00', '');
INSERT INTO performances (id, frequence, classement, graph, createdAt, updatedAt) VALUES (192, '815-3440', '5', '[3,4,5,5 ,5 ,5 ,5 ,5 ,5 ,5 ,5 ,5 ,5 ,5 ,5, 4 ]', '2018-02-05 00:00:00', '');
INSERT INTO performances (id, frequence, classement, graph, createdAt, updatedAt) VALUES (193, '544-3440', '5', '[4,5,5,5 ,5 ,5 ,5 ,5 ,5 ,5 ,5 ,5 ,5 ,5 ,5, 4 ]', '2018-02-05 00:00:00', '');

-- Table : products
CREATE TABLE products (id INTEGER PRIMARY KEY AUTOINCREMENT, name VARCHAR (255), price DECIMAL, img VARCHAR (255), nbCouleurs VARCHAR (255), createdAt DATETIME NOT NULL, updatedAt DATETIME NOT NULL, collectionId INTEGER REFERENCES collections (id) ON DELETE SET NULL ON UPDATE CASCADE, descriptionId INTEGER REFERENCES descriptions (id) ON DELETE SET NULL ON UPDATE CASCADE, performanceId INTEGER REFERENCES performances (id) ON DELETE SET NULL ON UPDATE CASCADE);
INSERT INTO products (id, name, price, img, nbCouleurs, createdAt, updatedAt, collectionId, descriptionId, performanceId) VALUES (0, 'Klassik-6', 50, NULL, '0', '2018-02-05 00:00:00', '2000-01-01 00:00:00', 1, 1, 71);
INSERT INTO products (id, name, price, img, nbCouleurs, createdAt, updatedAt, collectionId, descriptionId, performanceId) VALUES (1, 'Woodik-7', 55, NULL, '0', '2018-02-05 00:00:00', '2000-01-01 00:00:00', 2, 1, 71);
INSERT INTO products (id, name, price, img, nbCouleurs, createdAt, updatedAt, collectionId, descriptionId, performanceId) VALUES (2, 'Wenge-7', 66, NULL, '1', '2018-02-05 00:00:00', '2000-01-01 00:00:00', 2, 1, 71);
INSERT INTO products (id, name, price, img, nbCouleurs, createdAt, updatedAt, collectionId, descriptionId, performanceId) VALUES (3, 'Teck-7', 78, NULL, '2', '2018-02-05 00:00:00', '2000-01-01 00:00:00', 2, 1, 71);
INSERT INTO products (id, name, price, img, nbCouleurs, createdAt, updatedAt, collectionId, descriptionId, performanceId) VALUES (4, 'Chêne-7', 78, NULL, '2', '2018-02-05 00:00:00', '2000-01-01 00:00:00', 2, 1, 71);
INSERT INTO products (id, name, price, img, nbCouleurs, createdAt, updatedAt, collectionId, descriptionId, performanceId) VALUES (5, 'Anemone-7', 85, NULL, '3', '2018-02-05 00:00:00', '2000-01-01 00:00:00', 3, 1, 71);
INSERT INTO products (id, name, price, img, nbCouleurs, createdAt, updatedAt, collectionId, descriptionId, performanceId) VALUES (6, 'Aubergine-7', 78, NULL, '2', '2018-02-05 00:00:00', '2000-01-01 00:00:00', 3, 1, 71);
INSERT INTO products (id, name, price, img, nbCouleurs, createdAt, updatedAt, collectionId, descriptionId, performanceId) VALUES (7, 'Lichen-7', 85, NULL, '3', '2018-02-05 00:00:00', '2000-01-01 00:00:00', 3, 1, 71);
INSERT INTO products (id, name, price, img, nbCouleurs, createdAt, updatedAt, collectionId, descriptionId, performanceId) VALUES (8, 'Liseron Bleu-7', 85, NULL, '3', '2018-02-05 00:00:00', '2000-01-01 00:00:00', 3, 1, 71);
INSERT INTO products (id, name, price, img, nbCouleurs, createdAt, updatedAt, collectionId, descriptionId, performanceId) VALUES (9, 'Gruk-7', 78, NULL, '2', '2018-02-05 00:00:00', '2000-01-01 00:00:00', 4, 1, 71);
INSERT INTO products (id, name, price, img, nbCouleurs, createdAt, updatedAt, collectionId, descriptionId, performanceId) VALUES (10, 'Klio-7', 58, NULL, '3', '2018-02-05 00:00:00', '2000-01-01 00:00:00', 4, 1, 71);
INSERT INTO products (id, name, price, img, nbCouleurs, createdAt, updatedAt, collectionId, descriptionId, performanceId) VALUES (11, 'Orelo-7', 78, NULL, '2', '2018-02-05 00:00:00', '2000-01-01 00:00:00', 4, 1, 71);
INSERT INTO products (id, name, price, img, nbCouleurs, createdAt, updatedAt, collectionId, descriptionId, performanceId) VALUES (12, 'Romal-7', 78, NULL, '2', '2018-02-05 00:00:00', '2000-01-01 00:00:00', 4, 1, 71);
INSERT INTO products (id, name, price, img, nbCouleurs, createdAt, updatedAt, collectionId, descriptionId, performanceId) VALUES (13, 'Invader-7', 78, NULL, '2', '2018-02-05 00:00:00', '2000-01-01 00:00:00', 5, 1, 71);
INSERT INTO products (id, name, price, img, nbCouleurs, createdAt, updatedAt, collectionId, descriptionId, performanceId) VALUES (14, 'Mario-7', 85, NULL, '3', '2018-02-05 00:00:00', '2000-01-01 00:00:00', 5, 1, 71);
INSERT INTO products (id, name, price, img, nbCouleurs, createdAt, updatedAt, collectionId, descriptionId, performanceId) VALUES (15, 'Spaceship-7', 78, NULL, '2', '2018-02-05 00:00:00', '2000-01-01 00:00:00', 5, 1, 71);
INSERT INTO products (id, name, price, img, nbCouleurs, createdAt, updatedAt, collectionId, descriptionId, performanceId) VALUES (16, 'Snake-7', 78, NULL, '2', '2018-02-05 00:00:00', '2000-01-01 00:00:00', 5, 1, 71);

-- Table : users
CREATE TABLE `users` (`id` INTEGER PRIMARY KEY AUTOINCREMENT, `sessID` VARCHAR(255), `nom` VARCHAR(255), `prenom` VARCHAR(255), `adresse` VARCHAR(255), `ville` VARCHAR(255), `region` VARCHAR(255), `postal` VARCHAR(255), `mail` VARCHAR(255), `telephone` VARCHAR(255), `utilisation` VARCHAR(255), `hashPwd` VARCHAR(255), `createdAt` DATETIME NOT NULL, `updatedAt` DATETIME NOT NULL, `adminId` INTEGER REFERENCES `admins` (`id`) ON DELETE SET NULL ON UPDATE CASCADE, `commandeId` INTEGER REFERENCES `commandes` (`id`) ON DELETE SET NULL ON UPDATE CASCADE);

COMMIT TRANSACTION;
PRAGMA foreign_keys = on;
