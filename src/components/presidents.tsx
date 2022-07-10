import React, { FC } from 'react';
import { Flex, Link, Box, Img, Text, Icon } from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';

const Presidents: FC = () => {
    const president = [
        {
            id: 1,
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Toussaint_Louverture_-_Girardin.jpg/220px-Toussaint_Louverture_-_Girardin.jpg',
            name: 'Toussaint Louverture',
            info: 'Haitian General Leader',
            date: '1971-1802',
        },
        {
            id: 2,
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Jean_Jacques_Dessalines.jpg/80px-Jean_Jacques_Dessalines.jpg',
            name: 'Jean - Jacques Dessalines',
            info: 'Emperor of Haiti as Jacques I',
            date: '1802-1804',
        },
        {
            id: 3,
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Jean_Jacques_Dessalines.jpg/80px-Jean_Jacques_Dessalines.jpg',
            name: 'Jean - Jacques Dessalines',
            info: 'Emperor of Haiti as Jacques I',
            date: '1804-1806',
        },
        {
            id: 4,
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Henri_Christophe.jpg/80px-Henri_Christophe.jpg',
            name: 'Henri Christophe',
            info: 'Provisional Chief of the Haitian Gov',
            date: '1806-1811',
        },
        {
            id: 5,
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Henri_Christophe.jpg/80px-Henri_Christophe.jpg',
            name: 'Henri Christophe',
            info: '👑 of the Haitian R. as Henry I',
            date: '1811-1815',
        },
        {
            id: 6,
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Petion_%28President_d%27Haiti_1807-1818%29.jpg/80px-Petion_%28President_d%27Haiti_1807-1818%29.jpg',
            name: 'Alexandre Pétion',
            info: 'First President of Haiti',
            date: '1806-1818',
        },
        {
            id: 7,
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Pr%C3%A9sident_Jean-Pierre_Boyer.jpg/80px-Pr%C3%A9sident_Jean-Pierre_Boyer.jpg',
            name: 'Jean-Pierre Boyer',
            info: 'President for life',
            date: '1818-1820',
        },
        {
            id: 8,
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Pr%C3%A9sident_Jean-Pierre_Boyer.jpg/80px-Pr%C3%A9sident_Jean-Pierre_Boyer.jpg',
            name: 'Jean-Pierre Boyer',
            info: 'President for life',
            date: '1820-1843',
        },
        {
            id: 9,
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Charles_Rivi%C3%A8re-H%C3%A9rard.jpg/80px-Charles_Rivi%C3%A8re-H%C3%A9rard.jpg',
            name: 'Charles Rivière-Hérard',
            info: 'Third President of Haiti',
            date: '1843-1844',
        },
        {
            id: 10,
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Philippe_Guerrier.jpg/80px-Philippe_Guerrier.jpg',
            name: 'Philippe Guerrier',
            info: 'Fourth President of Haiti',
            date: '1844-1845',
        },
        {
            id: 11,
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Pierrot_%28President_d%27Haiti_1845-1846%29_%28cropped%29.jpg/80px-Pierrot_%28President_d%27Haiti_1845-1846%29_%28cropped%29.jpg ',
            name: 'Jean-Louis Pierrot',
            info: 'Fifth President of Haiti',
            date: '1845-1846',
        },
        {
            id: 12,
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Jean-Baptiste_Rich%C3%A9.jpg/80px-Jean-Baptiste_Rich%C3%A9.jpg',
            name: 'Jean-Baptiste Riché',
            info: 'Sixth President of Haiti',
            date: '1846-1847',
        },
        {
            id: 13,
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Faustin_Soulouque.jpg/80px-Faustin_Soulouque.jpg',
            name: 'Faustin Soulouque',
            info: 'Seventh President of Haiti',
            date: '1847-1849',
        },
        {
            id: 14,
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Faustin_I.jpg/80px-Faustin_I.jpg',
            name: 'Faustin I',
            info: 'Second Empire of Haiti',
            date: '1849-1859',
        },
        {
            id: 15,
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Fabre_Geffrard_%28President_d%27Haiti_1859-1867%29.jpg/80px-Fabre_Geffrard_%28President_d%27Haiti_1859-1867%29.jpg',
            name: 'Fabre Geffrard',
            info: 'Eighth President of Haiti',
            date: '1859-1867',
        },
        {
            id: 16,
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Nissage_Saget.jpg/80px-Nissage_Saget.jpg',
            name: 'Jean-Nicolas N. Saget',
            info: 'Provisional President of Haiti',
            date: '1867-1867',
        },
        {
            id: 17,
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Sylvain_Salnave_.jpg/80px-Sylvain_Salnave_.jpg',
            name: 'Sylvain Salnave',
            info: 'Nighty President of Haiti',
            date: '1867-1869',
        },
        {
            id: 18,
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Nissage_Saget.jpg/80px-Nissage_Saget.jpg',
            name: 'Jean-Nicolas N. Saget',
            info: 'President of Haiti',
            date: '1869-1874',
        },
        {
            id: 19,
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Coat_of_arms_of_Haiti.svg/80px-Coat_of_arms_of_Haiti.svg.png',
            name: 'Council of Secret... of State',
            info: 'Haiti',
            date: '1874-1874',
        },
        {
            id: 20,
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Michel_Domingue.jpg/80px-Michel_Domingue.jpg',
            name: 'Michel Domingue',
            info: 'President of Haiti',
            date: '1874-1876',
        },
        {
            id: 21,
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Pierre_Th%C3%A9oma_Boisrond-Canal.jpg/80px-Pierre_Th%C3%A9oma_Boisrond-Canal.jpg',
            name: 'Pierre T. Boisrond-Canal',
            info: 'President of Haiti',
            date: '1876-1879',
        },
        {
            id: 22,
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Coat_of_arms_of_Haiti.svg/80px-Coat_of_arms_of_Haiti.svg.png',
            name: 'Joseph Lamothe',
            info: 'Provisional President of Haiti',
            date: '1879-1879',
        },
        {
            id: 23,
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Salomon_200.jpg/80px-Salomon_200.jpg',
            name: 'Lysius Salomon',
            info: 'President of Haiti',
            date: '1879-1888',
        },
        {
            id: 24,
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Pierre_Th%C3%A9oma_Boisrond-Canal.jpg/80px-Pierre_Th%C3%A9oma_Boisrond-Canal.jpg',
            name: 'Pierre T. Boisrond-Canal',
            info: 'Provisional President of Haiti',
            date: '1888-1888',
        },
        {
            id: 25,
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Fran%C3%A7ois_Denys_L%C3%A9gitime.jpg/80px-Fran%C3%A7ois_Denys_L%C3%A9gitime.jpg',
            name: 'François Denys Légitime',
            info: 'President of Haiti',
            date: '1888-1889',
        },
        {
            id: 26,
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Coat_of_arms_of_Haiti.svg/80px-Coat_of_arms_of_Haiti.svg.png',
            name: 'Monpoint Jeune',
            info: 'Provisional President of Haiti',
            date: '1889-1889',
        },
        {
            id: 27,
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Florvil_Hyppolite_official_photo.jpg/80px-Florvil_Hyppolite_official_photo.jpg',
            name: 'Florvil Hyppolite',
            info: 'President of Haiti',
            date: '1889-1896',
        },
        {
            id: 28,
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Tir%C3%A9sias_Simon_Sam_portrait.jpg/80px-Tir%C3%A9sias_Simon_Sam_portrait.jpg',
            name: 'Tirésias Simon Sam',
            info: 'President of Haiti',
            date: '1896-1902',
        },
        {
            id: 29,
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Pierre_Th%C3%A9oma_Boisrond-Canal.jpg/80px-Pierre_Th%C3%A9oma_Boisrond-Canal.jpg',
            name: 'Pierre T. Boisrond-Canal',
            info: 'Provisional President of Haiti',
            date: '1902-1902',
        },
        {
            id: 30,
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Picture_of_Pierre_Nord_Alexis.jpg/80px-Picture_of_Pierre_Nord_Alexis.jpg',
            name: 'Pierre Nord Alexis',
            info: 'President of Haiti',
            date: '1902-1908',
        },
        {
            id: 31,
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Presidentsimon.jpg/80px-Presidentsimon.jpg',
            name: 'François C. Antoine Simon',
            info: 'President of Haiti',
            date: '1908-1911',
        },
        {
            id: 32,
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Cincinnatus_Leconte.jpg/80px-Cincinnatus_Leconte.jpg',
            name: 'Cincinnatus Leconte',
            info: 'President of Haiti',
            date: '1911-1912',
        },
        {
            id: 33,
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Tancrede_Auguste.jpg/80px-Tancrede_Auguste.jpg',
            name: 'Tancrede Auguste',
            info: 'President of Haiti',
            date: '1912-1913',
        },
        {
            id: 34,
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Michel_Oreste_portrait.jpg/80px-Michel_Oreste_portrait.jpg',
            name: 'Michel Oreste',
            info: 'President of Haiti',
            date: '1913-1914',
        },
        {
            id: 35,
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Oreste_Zamor_portrait.jpg/80px-Oreste_Zamor_portrait.jpg',
            name: 'Oreste Zamor',
            info: 'President of Haiti',
            date: '1914-1914',
        },
        {
            id: 36,
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Joseph_Davilmar_Theodore_portrait.jpg/80px-Joseph_Davilmar_Theodore_portrait.jpg',
            name: 'Joseph D. Theodore',
            info: 'President of Haiti',
            date: '1914-1915',
        },
        {
            id: 37,
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Vilbrun_Guillaume_Sam_portrait.jpg/80px-Vilbrun_Guillaume_Sam_portrait.jpg',
            name: 'Vilbrun Guillaume Sam',
            info: 'President of Haiti',
            date: '1915-1915',
        },
        {
            id: 38,
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Dartiguenave.jpg/80px-Dartiguenave.jpg',
            name: 'Philippe S. Dartiguenave',
            info: 'President of Haiti',
            date: '1915-1922',
        },
        {
            id: 39,
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Louis_Borno.jpg/80px-Louis_Borno.jpg',
            name: 'Louis Borno',
            info: 'President of Haiti',
            date: '1922-1930',
        },
        {
            id: 40,
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Louis_Eugene_Roy_portrait.jpg/80px-Louis_Eugene_Roy_portrait.jpg',
            name: 'Louis Eugene Roy',
            info: 'President of Haiti',
            date: '1930-1930',
        },
        {
            id: 41,
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Stenio_Vincent_portrait.jpg/80px-Stenio_Vincent_portrait.jpg',
            name: 'Stenio Vincent',
            info: 'President of Haiti',
            date: '1930-1941',
        },
        {
            id: 42,
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Elie_Lescot_portrait.jpg/80px-Elie_Lescot_portrait.jpg',
            name: 'Elie Lescot',
            info: 'President of Haiti',
            date: '1941-1946',
        },
        {
            id: 43,
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Franck_Lavaud_portrait.jpg/80px-Franck_Lavaud_portrait.jpg',
            name: 'Franck Lavaud',
            info: 'Chairman of the Military E. Committee',
            date: '1946-1946',
        },
        {
            id: 44,
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Dumarsais_estime_portrait.jpg/80px-Dumarsais_estime_portrait.jpg',
            name: 'Dumarsais Estime',
            info: 'President of Haiti',
            date: '1946-1950',
        },
        {
            id: 45,
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Franck_Lavaud_portrait.jpg/80px-Franck_Lavaud_portrait.jpg',
            name: 'Franck Lavaud',
            info: 'Chairman of the Gov Junta',
            date: '1950-1950',
        },
        {
            id: 46,
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Paul_Magloire_portrait.jpg/80px-Paul_Magloire_portrait.jpg',
            name: 'Paul Magloire',
            info: 'President of Haiti',
            date: '1950-1956',
        },
        {
            id: 47,
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Joseph_Nemours_Pierre-Louis_portrait.jpg/80px-Joseph_Nemours_Pierre-Louis_portrait.jpg',
            name: 'Joseph N. Pierre-Louis',
            info: 'Provisional President of Haiti',
            date: '1956-1957',
        },
        {
            id: 48,
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Franck_Sylvain_portrait.jpg/80px-Franck_Sylvain_portrait.jpg',
            name: 'Franck Sylvain',
            info: 'Provisional President of Haiti',
            date: '1957-1957',
        },
        {
            id: 49,
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Coat_of_arms_of_Haiti.svg/80px-Coat_of_arms_of_Haiti.svg.png',
            name: 'Executive Government C.',
            info: 'Executive Government C.',
            date: '1957-1957',
        },
        {
            id: 50,
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Daniel_fignole_portrait.jpg/80px-Daniel_fignole_portrait.jpg',
            name: 'Daniel Fignolé',
            info: 'Provisional President of Haiti',
            date: '1957-1957',
        },
        {
            id: 51,
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Antonio_Thrasybule_Kebreau_portrait.jpg/80px-Antonio_Thrasybule_Kebreau_portrait.jpg',
            name: 'A. Thrasybule Kebreau',
            info: 'Chairman of the Military C.',
            date: '1957-1957',
        },
        {
            id: 52,
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Francois_Duvalier_of_Haiti.jpg/80px-Francois_Duvalier_of_Haiti.jpg',
            name: 'Francois Duvalier',
            info: 'President of Haiti',
            date: '1957-1971',
        },
        {
            id: 53,
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Baby_Doc_%28centr%C3%A9e%29.jpg/80px-Baby_Doc_%28centr%C3%A9e%29.jpg',
            name: 'Jean-Claude Duvalier',
            info: 'President for fife',
            date: '1971-1986',
        },
        {
            id: 54,
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/EX_president_Haiti_HENRI_NAMPHY.png/80px-EX_president_Haiti_HENRI_NAMPHY.png',
            name: 'Henri Namphy',
            info: 'President of the N.C of Gov.',
            date: '1986-1988',
        },
        {
            id: 55,
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Leslie_Manigat%2C_16_juin_1988.png/80px-Leslie_Manigat%2C_16_juin_1988.png',
            name: 'Leslie Manigat',
            info: 'President of Haiti',
            date: '1988-1988',
        },
        {
            id: 56,
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/EX_president_Haiti_HENRI_NAMPHY.png/80px-EX_president_Haiti_HENRI_NAMPHY.png',
            name: 'Henri Namphy',
            info: 'President of Haiti',
            date: '1988-1988',
        },
        {
            id: 57,
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Coat_of_arms_of_Haiti.svg/80px-Coat_of_arms_of_Haiti.svg.png',
            name: 'Prosper Avril',
            info: 'President of Haiti',
            date: '1988-1990',
        },
        {
            id: 58,
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Coat_of_arms_of_Haiti.svg/80px-Coat_of_arms_of_Haiti.svg.png',
            name: 'Hérard Abraham',
            info: 'Acting President of Haiti',
            date: '1990-1991',
        },
        {
            id: 59,
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Ertha_Pascal-Trouillot_on_January_7%2C_1991.png/80px-Ertha_Pascal-Trouillot_on_January_7%2C_1991.png',
            name: 'Ertha Pascal-Trouillot',
            info: 'Provisional President of Haiti', 
            date: '1990-1991',
        },
        {
            id: 60,
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Jean-Bertrand_Aristide_%28cropped%29.jpg/80px-Jean-Bertrand_Aristide_%28cropped%29.jpg',
            name: 'Jean-Bertrand Aristide',
            info: 'President of Haiti',
            date: '1991-1991',
        },
        {
            id: 61,
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Raoul_C%C3%A9dras.jpg/80px-Raoul_C%C3%A9dras.jpg',
            name: 'Raoul Cédras',
            info: 'Commander-in-Chief...',
            date: '1991-1991',
        },
        {
            id: 62,
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Coat_of_arms_of_Haiti.svg/80px-Coat_of_arms_of_Haiti.svg.png',
            name: 'Joseph Nérette',
            info: 'Provisional President of Haiti',
            date: '1991-1992',
        },
        {
            id: 63,
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Marc_Bazin%2C_haitian_political.jpg/80px-Marc_Bazin%2C_haitian_political.jpg',
            name: 'Marc Bazin',
            info: 'Council of Ministers',
            date: '1992-1993',
        },
        {
            id: 64,
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Jean-Bertrand_Aristide_%28cropped%29.jpg/80px-Jean-Bertrand_Aristide_%28cropped%29.jpg',
            name: 'Jean-Bertrand Aristide',
            info: 'President of Haiti',
            date: '1993-1994',
        },
        {
            id: 65,
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Coat_of_arms_of_Haiti.svg/80px-Coat_of_arms_of_Haiti.svg.png',
            name: 'Émile Jonassaint',
            info: 'Provisional President of Haiti',
            date: '1994-1994',
        },
        {
            id: 66,
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Jean-Bertrand_Aristide_%28cropped%29.jpg/80px-Jean-Bertrand_Aristide_%28cropped%29.jpg',
            name: 'Jean-Bertrand Aristide',
            info: 'President of Haiti',
            date: '1994-1996',
        },
        {
            id: 67,
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Rene_Preval.jpg/80px-Rene_Preval.jpg',
            name: 'Rene Preval',
            info: 'President of Haiti',
            date: '1996-2001',
        },
        {
            id: 68,
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Jean-Bertrand_Aristide_%28cropped%29.jpg/80px-Jean-Bertrand_Aristide_%28cropped%29.jpg',
            name: 'Jean-Bertrand Aristide',
            info: 'President of Haiti',
            date: '2001-2004',
        },
        {
            id: 69,
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Boniface_Alexandre.jpg/80px-Boniface_Alexandre.jpg',
            name: 'Boniface Alexandre',
            info: 'Provisional President of Haiti',
            date: '2004-2006',
        },
        {
            id: 70,
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Rene_Preval.jpg/80px-Rene_Preval.jpg',
            name: 'Rene Preval',
            info: 'President of Haiti',
            date: '2006-2011',
        },
        {
            id: 71,
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Michel_Martelly_on_April_20%2C_2011.jpg/80px-Michel_Martelly_on_April_20%2C_2011.jpg',
            name: 'Joseph Michel Martelly',
            info: 'President of Haiti',
            date: '2011-2016',
        },
        {
            id: 72,
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/EvansPaul.jpg/80px-EvansPaul.jpg',
            name: 'Paul Evans',
            info: 'Council of Ministers',
            date: '2016-2016',
        },
        {
            id: 73,
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Jocelerme_Privert_%2830186877591%29.jpg/80px-Jocelerme_Privert_%2830186877591%29.jpg',
            name: 'Jocelyne Privert',
            info: 'Provisional President of Haiti',
            date: '2016-2017',
        },
        {
            id: 74,
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Kelly_Craft_poses_a_photo_with_Haitian_President_Moise_%28cropped%29.jpg/80px-Kelly_Craft_poses_a_photo_with_Haitian_President_Moise_%28cropped%29.jpg',
            name: 'Moise Jovenel',
            info: 'President of Haiti',
            date: '2017-2021',
        },
        {
            id: 75,
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Claude_Joseph_%28cropped%29.jpg/80px-Claude_Joseph_%28cropped%29.jpg',
            name: 'Claude Joseph',
            info: 'Council of Ministers',
            date: '2021-2021',
        },
        {
            id: 76,
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Ariel_Henry_cropped.jpg/80px-Ariel_Henry_cropped.jpg',
            name: 'Ariel Henry',
            info: 'Council of Ministers',
            date: '2021-Incumbent',
        },
    ];
    return (
        <>
            {president.map((president) => (
                <Flex
                    key={president.id}
                    minH={'3em'}
                    m={'.5em'}
                    bg={'#062141'}
                    boxShadow={'0px .2px 5px .2px #5C5C5C'}
                    justifyContent="space-between"
                    alignItems="center"
                    borderStartRadius={'44px'}
                    borderRightRadius={'6px'}
                    padding={'.06em'}
                    mb={'.6em'}
                >
                    <Box
                        display="flex"
                        justifyContent={'center'}
                        alignItems="center"
                        width='84px'
                        h='84px'
                        bg={'#FFFFFF'}
                        borderRadius={'50%'}
                    >

                        <Box
                            display="flex"
                            justifyContent={'center'}
                            alignItems="center"
                            width='76px'
                            h='76px'
                            bg={'#C58E00'}
                            borderRadius={'50%'}
                        >
                            <Box
                                display="flex"
                                justifyContent={'center'}
                                alignItems="center"
                                width='70px'
                                h='70px'
                                bg={'#062141'}
                                borderRadius={'50%'}
                            >
                                <Img w={'92%'} h={'92%'} objectFit={'cover'} borderRadius={'100%'} src={president.image} />
                            </Box>
                        </Box>
                    </Box>
                    <Box w={'54%'} gap={'3px'} display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'start'}>
                        <Text fontSize={'.8rem'} fontWeight={'400'} color={'#FFFFFF'}>{president.name}</Text>
                        <Text fontSize={'.6rem'} fontWeight={'lighter'} fontStyle={'italic'} color={'#C58E00'}>{president.info}</Text>
                        <Text fontSize={'.6rem'} fontWeight={'lighter'} color={'#FFFFFF'}>{president.date}</Text>
                    </Box>
                    <Link href="/Bio" color={'#D9D9D9'} >
                        <Icon fontSize={30} as={ChevronRightIcon} />
                    </Link>
                </Flex >
            ))}
        </>
    );
}
export default Presidents;
