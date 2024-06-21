<?php
session_start();
if (!$_SESSION['user']) {
    header('Location: /');
}
?>

<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Авторизация и регистрация</title>
    <link rel="stylesheet" href="./css/profile.css">
</head>
<body>

    <!-- Профиль -->
    <div class="back-img"><img src="./data\6743709_3419843.jpg" alt="@"></div>
    <div class="header2_back"></div>
    
    <div class="container2">
        <div class="header2">
            <div class="header2__item">
                <h2><?= $_SESSION['user']['full_name'] ?></h2> 
            </div>
            <div class="header2__item">
                <a href="vendor/logout.php" class="logout">Выход</a>
            </div>
        </div>
        <div class="main__content">
            <h1>Добро пожаловать!</h1>  
            <div class="block-1">
                <h3>Ваша группа: В20-2с</h3>
            </div>
            <div class="block-2">
                <h3>Ваша аудитория: ГК 201</h3>
            </div>
        </div>
        

    </div>



</body>
</html>