-- Insertion des catégories
INSERT INTO category (name) VALUES 
('Action'),
('Comédie'),
('Drame'),
('Science-Fiction'),
('Animation');

-- Insertion des films
INSERT INTO movie (title, description, image_url, category_id) VALUES 
('Les Évadés', 'Condamné à perpétuité pour le meurtre de sa femme, Andy Dufresne est incarcéré à la prison de Shawshank. Durant son incarcération, il se lie d''amitié avec Red et garde espoir malgré la violence du milieu carcéral.', 'https://fr.web.img3.acsta.net/medias/nmedia/18/63/30/68/18686447.jpg', 3),
('Inception', 'Dom Cobb est un voleur expérimenté, le meilleur dans l''art dangereux de l''extraction, voler les secrets les plus intimes enfouis au plus profond du subconscient pendant l''état de rêve.', 'https://fr.web.img4.acsta.net/medias/nmedia/18/72/34/14/19476654.jpg', 1),
('Le Fabuleux Destin d''Amélie Poulain', 'Amélie, une jeune serveuse dans un bar de Montmartre, passe son temps à observer les gens et à laisser son imagination divaguer. Elle décide un jour de faire le bien autour d''elle.', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHc6NYjJI8b8Y3FIc8diBxh2sC5-yOAowa9g&s', 2),
('Interstellar', 'Dans un futur proche où la Terre est devenue hostile pour l''homme, un groupe d''explorateurs utilise un trou de ver pour parcourir des distances jusque-là infranchissables et trouver un nouveau foyer pour l''humanité.', 'https://fr.web.img4.acsta.net/pictures/14/09/24/12/08/158828.jpg', 4),
('Le Voyage de Chihiro', 'Chihiro, une fillette de 10 ans, est en route vers sa nouvelle demeure en compagnie de ses parents. Au cours du voyage, la famille fait une halte dans un parc à thème qui leur paraît abandonné.', 'https://fr.web.img6.acsta.net/medias/nmedia/00/02/36/71/chihiro.jpg', 5);