<?php
    require 'includes/php/connect_db.php';
    require 'includes/php/Parsedown.php';
    require 'includes/php/ParsedownExtra.php';

    $selectArticle = $bdd->query('SELECT * FROM blog');
    $Extra = new ParsedownExtra();

    while($reponseSelectArticle = $selectArticle->fetch()) {

        $article['id'] = htmlspecialchars($reponseSelectArticle['id']);
        $article['title'] = htmlspecialchars($reponseSelectArticle['title']);
        $article['creation_date'] = htmlspecialchars($reponseSelectArticle['creation_date']);
        $article['tag'] = htmlspecialchars($reponseSelectArticle['tag']);
        $article['hook'] = htmlspecialchars($reponseSelectArticle['hook']);
        $article['author'] = htmlspecialchars($reponseSelectArticle['author']);
        
        $article['content'] = $Extra->text(htmlspecialchars($reponseSelectArticle['content']));

        $arrayArticles[] = $article;
    }

    $selectArticle->closeCursor();

    header('Content-Type: application/json');
    echo json_encode($arrayArticles);
?>