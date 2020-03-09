<?php
    require 'includes/php/connect_db.php';

    $selectArticle = $bdd->query('SELECT * FROM BLOG');

    while($reponseSelectArticle = $selectArticle->fetch()) {

        $article['id'] = htmlspecialchars($reponseSelectArticle['id']);
        $article['title'] = htmlspecialchars($reponseSelectArticle['title']);
        $article['creation_date'] = htmlspecialchars($reponseSelectArticle['creation_date']);
        $article['tag'] = htmlspecialchars($reponseSelectArticle['tag']);
        $article['hook'] = htmlspecialchars($reponseSelectArticle['hook']);
        $article['author'] = htmlspecialchars($reponseSelectArticle['author']);
        $article['content'] = htmlspecialchars($reponseSelectArticle['content']);

        $arrayArticles[] = $article;
    }

    $selectArticle->closeCursor();

    echo json_encode($arrayArticles);
?>