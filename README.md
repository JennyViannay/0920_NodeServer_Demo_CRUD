# Demo NODE&Express Server

## Launch Server

- ```npm install```
- ```npm start```
- Server listenning on http://localhost:5000
- Routes available :
  * '/' 
  * '/articles/' => METHOD GET -> ALL ARTICLES
  * '/articles/' => METHOD POST -> CREATE ARTICLE
  * '/articles/:id' => METHOD GET -> READ ARTICLE
  * '/articles/:id' => METHOD POST -> UPDATE ARTICLE
  * '/articles/:id' => METHOD DELETE -> DELETE ONE ARTICLE
## Access To BDD

- add .env file following exemple in .example-env file 
- if you don't have BDD :
- ``` CREATE TABLE `article` (
  `id` int(11) NOT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `content` longtext COLLATE utf8mb4_unicode_ci NOT NULL
  ); ```

- ``` INSERT INTO `article` (`id`, `title`, `content`) VALUES
    (1, 'Développeuse web', 'lorem ipsum'),
    (2, 'Formateur', 'lorem ipsum') ```
