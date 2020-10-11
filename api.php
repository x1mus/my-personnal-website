<?php
    require 'includes/php/connect_db.php';
    require 'includes/php/Parsedown.php';

    $selectArticle = $bdd->query('SELECT * FROM blog');
    $Parsedown = new Parsedown();
    $Parsedown->setSafeMode(true);
    $Parsedown->setMarkupEscaped(true);

    while($reponseSelectArticle = $selectArticle->fetch()) {

        $article['id'] = htmlspecialchars($reponseSelectArticle['id']);
        $article['title'] = htmlspecialchars($reponseSelectArticle['title']);
        $article['creation_date'] = htmlspecialchars($reponseSelectArticle['creation_date']);
        $article['tag'] = htmlspecialchars($reponseSelectArticle['tag']);
        $article['hook'] = htmlspecialchars($reponseSelectArticle['hook']);
        $article['author'] = htmlspecialchars($reponseSelectArticle['author']);
        
        $article['content'] = $Parsedown->text($reponseSelectArticle['content']);

        $arrayArticles[] = $article;
    }

    $selectArticle->closeCursor();

    header('Content-Type: application/json');
    echo json_encode($arrayArticles);
?>