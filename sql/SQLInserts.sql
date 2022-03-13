USE BATTERIES;

INSERT INTO BATTERIES VALUES (0, 'BATERIA_UNO', 6, 7);
INSERT INTO BATTERIES VALUES (0, 'BATERIA_DOS', 8, 9);
INSERT INTO BATTERIES VALUES (0, 'BATERIA_TRES', 10, 11);

INSERT INTO BATTERIES_ENTRY VALUES (0, 1, 5, NOW());
INSERT INTO BATTERIES_ENTRY VALUES (0, 1, 7, NOW() + 5);
INSERT INTO BATTERIES_ENTRY VALUES (0, 1, 4, NOW() + 10);
INSERT INTO BATTERIES_ENTRY VALUES (0, 1, 2, NOW() + 15);
INSERT INTO BATTERIES_ENTRY VALUES (0, 1, 7, NOW() + 20);
INSERT INTO BATTERIES_ENTRY VALUES (0, 1, 8, NOW() + 25);
INSERT INTO BATTERIES_ENTRY VALUES (0, 1, 9, NOW() + 30);
INSERT INTO BATTERIES_ENTRY VALUES (0, 1, 4, NOW() + 35);
INSERT INTO BATTERIES_ENTRY VALUES (0, 2, 8, NOW());
INSERT INTO BATTERIES_ENTRY VALUES (0, 2, 9, NOW() + 5);
INSERT INTO BATTERIES_ENTRY VALUES (0, 2, 4, NOW() + 10);
INSERT INTO BATTERIES_ENTRY VALUES (0, 3, 9, NOW());
INSERT INTO BATTERIES_ENTRY VALUES (0, 3, 4, NOW() + 5);