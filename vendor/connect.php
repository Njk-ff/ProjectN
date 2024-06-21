<?php

    $connect = mysqli_connect('localhost', 'root', 'root', 'mydata');

    if (!$connect) {
        die('Error connect to DataBase');
    }