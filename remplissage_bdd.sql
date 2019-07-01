
/*Remplissage utilisateurs*/

INSERT INTO dba_prj01.utilisateurs (NOM) VALUES ('Jerome');
INSERT INTO dba_prj01.utilisateurs (NOM) VALUES ('Camille');
INSERT INTO dba_prj01.utilisateurs (NOM) VALUES ('Emrick');

/*Remplissage Prospect*/
INSERT INTO dba_prj01.Prospect (numero_telephone, NOM, PRENOM, nombre_appels) VALUES ('0602020202', 'Alain', 'DISSOIR', 6);
INSERT INTO dba_prj01.Prospect (numero_telephone, NOM, PRENOM, nombre_appels) VALUES ('0603030303', 'Barbie', 'CHAITE', 0);
INSERT INTO dba_prj01.Prospect (numero_telephone, NOM, PRENOM, nombre_appels) VALUES ('0604040404', 'Elie', 'COPTER', 10);
INSERT INTO dba_prj01.Prospect (numero_telephone, NOM, PRENOM, nombre_appels) VALUES ('0605050505', 'Teddy', 'BILLOUKOI', 2);
INSERT INTO dba_prj01.Prospect (numero_telephone, NOM, PRENOM, nombre_appels) VALUES ('0601010101', 'Agathe', 'ZEPOWER', 3);

/*Remplissage Campagne */
INSERT INTO dba_prj01.Campagne (nom, date_debut, date_fin, campagne_demaree, reponse, id_utilisateurs) VALUES ('Pub volets', '18-jul-2017', '19-aug-2017', TRUE, 0, 2);
INSERT INTO dba_prj01.Campagne (nom, date_debut, date_fin, campagne_demaree, reponse, id_utilisateurs) VALUES ('Pub factures', '18-jan-2015', '19-aug-2017', TRUE, 3, 1);
INSERT INTO dba_prj01.Campagne (nom, date_debut, date_fin, campagne_demaree, reponse, id_utilisateurs) VALUES ('Message inondations', '1-feb-2016', '2-apr-2016', TRUE, 0, 2);
INSERT INTO dba_prj01.Campagne (nom, date_debut, date_fin, campagne_demaree, reponse, id_utilisateurs) VALUES ('Prévention canicule', '30-jul-2019', '20-aug-2019', FALSE, 0, 3);


/*Remplissage Liste prospect*/
INSERT INTO dba_prj01.liste_prospect (nom, id_utilisateurs) VALUES ('Liste 1', (SELECT id_utilisateurs FROM dba_prj01.utilisateurs WHERE id_utilisateurs = 2));
INSERT INTO dba_prj01.liste_prospect (nom, id_utilisateurs) VALUES ('Liste pub volets', (SELECT id_utilisateurs FROM dba_prj01.utilisateurs WHERE id_utilisateurs = 3));
INSERT INTO dba_prj01.liste_prospect (nom, id_utilisateurs) VALUES ('Population ville', (SELECT id_utilisateurs FROM dba_prj01.utilisateurs WHERE id_utilisateurs = 1));
INSERT INTO dba_prj01.liste_prospect (nom, id_utilisateurs) VALUES ('Liste pub facture', (SELECT id_utilisateurs FROM dba_prj01.utilisateurs WHERE id_utilisateurs = 3));
INSERT INTO dba_prj01.liste_prospect (nom, id_utilisateurs) VALUES ('Liste mairies', (SELECT id_utilisateurs FROM dba_prj01.utilisateurs WHERE id_utilisateurs = 1));
INSERT INTO dba_prj01.liste_prospect (nom, id_utilisateurs) VALUES ('Liste soldes', (SELECT id_utilisateurs FROM dba_prj01.utilisateurs WHERE id_utilisateurs = 2));

/*Assigner une liste à un prospect*/
INSERT INTO dba_prj01.Est_compose (id_prospect, id_liste) VALUES ((SELECT id_prospect FROM dba_prj01.Prospect WHERE id_prospect = 1), (SELECT id_liste FROM dba_prj01.liste_prospect WHERE id_liste = 2));
INSERT INTO dba_prj01.Est_compose (id_prospect, id_liste) VALUES ((SELECT id_prospect FROM dba_prj01.Prospect WHERE id_prospect = 2), (SELECT id_liste FROM dba_prj01.liste_prospect WHERE id_liste = 3));
INSERT INTO dba_prj01.Est_compose (id_prospect, id_liste) VALUES ((SELECT id_prospect FROM dba_prj01.Prospect WHERE id_prospect = 1), (SELECT id_liste FROM dba_prj01.liste_prospect WHERE id_liste = 3));
INSERT INTO dba_prj01.Est_compose (id_prospect, id_liste) VALUES ((SELECT id_prospect FROM dba_prj01.Prospect WHERE id_prospect = 3), (SELECT id_liste FROM dba_prj01.liste_prospect WHERE id_liste = 1));
INSERT INTO dba_prj01.Est_compose (id_prospect, id_liste) VALUES ((SELECT id_prospect FROM dba_prj01.Prospect WHERE id_prospect = 2), (SELECT id_liste FROM dba_prj01.liste_prospect WHERE id_liste = 4));
INSERT INTO dba_prj01.Est_compose (id_prospect, id_liste) VALUES ((SELECT id_prospect FROM dba_prj01.Prospect WHERE id_prospect = 4), (SELECT id_liste FROM dba_prj01.liste_prospect WHERE id_liste = 5));
INSERT INTO dba_prj01.Est_compose (id_prospect, id_liste) VALUES ((SELECT id_prospect FROM dba_prj01.Prospect WHERE id_prospect = 3), (SELECT id_liste FROM dba_prj01.liste_prospect WHERE id_liste = 3));
INSERT INTO dba_prj01.Est_compose (id_prospect, id_liste) VALUES ((SELECT id_prospect FROM dba_prj01.Prospect WHERE id_prospect = 1), (SELECT id_liste FROM dba_prj01.liste_prospect WHERE id_liste = 1));
INSERT INTO dba_prj01.Est_compose (id_prospect, id_liste) VALUES ((SELECT id_prospect FROM dba_prj01.Prospect WHERE id_prospect = 2), (SELECT id_liste FROM dba_prj01.liste_prospect WHERE id_liste = 1));
INSERT INTO dba_prj01.Est_compose (id_prospect, id_liste) VALUES ((SELECT id_prospect FROM dba_prj01.Prospect WHERE id_prospect = 4), (SELECT id_liste FROM dba_prj01.liste_prospect WHERE id_liste = 1));
INSERT INTO dba_prj01.Est_compose (id_prospect, id_liste) VALUES ((SELECT id_prospect FROM dba_prj01.Prospect WHERE id_prospect = 5), (SELECT id_liste FROM dba_prj01.liste_prospect WHERE id_liste = 1));

/*Assigner liste prospect à une campagne*/
INSERT INTO dba_prj01.Assigner_prospect_campagne (id_Campagne, id_Liste) VALUES ((SELECT id_Campagne FROM dba_prj01.campagne WHERE id_Campagne = 1), (SELECT id_liste FROM dba_prj01.liste_prospect WHERE id_Liste = 2));
INSERT INTO dba_prj01.Assigner_prospect_campagne (id_Campagne, id_Liste) VALUES ((SELECT id_Campagne FROM dba_prj01.campagne WHERE id_Campagne = 2), (SELECT id_liste FROM dba_prj01.liste_prospect WHERE id_Liste = 4));
INSERT INTO dba_prj01.Assigner_prospect_campagne (id_Campagne, id_Liste) VALUES ((SELECT id_Campagne FROM dba_prj01.campagne WHERE id_Campagne = 3), (SELECT id_liste FROM dba_prj01.liste_prospect WHERE id_Liste = 5));
INSERT INTO dba_prj01.Assigner_prospect_campagne (id_Campagne, id_Liste) VALUES ((SELECT id_Campagne FROM dba_prj01.campagne WHERE id_Campagne = 4), (SELECT id_liste FROM dba_prj01.liste_prospect WHERE id_Liste = 5));
