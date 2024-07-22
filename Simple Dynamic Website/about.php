<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Photography</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css">
    <link rel="stylesheet" href="CSS/style.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">
</head>

<body>

    <?php
    include('header.php');
    ?>

    <div class="jumbotron">
        <h1>Photo can only catch the time</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
    </div>
    <section class="my-1">
        <div class="py-5">
            <h2 class="text-center">About Me</h2>
        </div>
        <div class="container-fluid">
            <div class="row">
                <div class="col-lg-6 col-md-6 col-12">
                    <img src="images/4.jpg" alt="goatlover" class="img-fluid aboutimg">
                </div>
                <div class="col-lg-6 col-md-6 col-12">
                    <h2 class="display-4">Hi, I am Samar Mahato</h2>
                    <p class="py-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni expedita reiciendis ratione quo omnis, aut vitae, pariatur blanditiis facere, natus sequi a temporibus eligendi velit beatae perferendis qui dignissimos! Animi, recusandae in?</p>
                    <a href="about.php btn btn-success" class="btn btn-success">Wanna Know me</a>
                </div>
            </div>
        </div>
    </section>
    
    <?php
    include('footer.php');
    ?>
</body>

</html>