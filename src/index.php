<?php

/*

error_reporting(E_ALL);
ini_set('display_errors', 1);

var_dump(realpath(dirname(getcwd())));
exit();

echo '<pre>';
phpinfo();
echo '</pre>';
exit();

*/


require $_SERVER['DOCUMENT_ROOT'] . '/app/Config/Constant.php';
\App\Config\Constant::init();

require ROOT . '/app/Core/App.php';
\App\Core\App::init();




