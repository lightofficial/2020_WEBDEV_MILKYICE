<!DOCTYPE html>
<html lang="en">

<style>
@media only screen and (max-width: 768px) {
   #gak {
        width: auto;
    }
}
</style>

<head>
    <meta charset="UTF-8">
    <!-- เปลี่ยนข้อความบน title -->
    <title>ชื่อบริษัท | ล็อกอิน</title>
    <!-- เปลี่ยนรูปบน title -->
    <link rel="shortcut icon" type="image/png" href="image/logo.png">
    <!-- Bootstrap icons-->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css" rel="stylesheet" />
    <!-- stylesheet -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    <link rel="stylesheet" href="css/login_css/login.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w==" crossorigin="anonymous" />
    <link rel="stylesheet" href="css/login_css/upgrade_navbar.css">
    <link rel="stylesheet" href="css/login_css/font.css">
    <!-- script -->
    <script src="//cdn.jsdelivr.net/npm/sweetalert2@10"></script>
</head>

<body class="font-thin">
    <!-- Navigation-->
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container px-4 px-lg-5">
                <a class="navbar-brand" href="index.html">
                    <img src="image/logo.png" width="85" height="70" >
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">        
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">สินค้า</a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a class="dropdown-item" href="#!">สินค้าทั้งหมด</a></li>
                                <li><hr class="dropdown-divider" /></li>
                                <li><a class="dropdown-item" href="#!">ไอศกรีมนมสด</a></li>
                                <li><a class="dropdown-item" href="#!">สมูธตี้ผลไม้</a></li>
                            </ul>
                        
                        
                        <!--<li class="nav-item"><a class="nav-link" href="#!">เกี่ยวกับเรา</a></li>-->
                        </li>
                    </ul>
                    
                    <form class="d-flex">
                        <button class="btn btn-outline-dark" type="submit">
                            <i class="bi-cart-fill me-1"></i>
                            รถเข็น
                            <span class="badge bg-dark text-white ms-1 rounded-pill">0</span>
                        </button>
                        <button class="btn btn-outline-dark" type="submit">
                            <i class="bi bi-box-arrow-right"></i>
                            เข้าสู่ระบบ
                            
                        </button>
                    </form>
                </div>
            </div>
        </nav>

    <div class="container-fluid">
        <div class="col-4 form login-form">
            <div class="text-center">
                <form action="login.php" method="POST" autocomplete="">
                    <h2 class="text-center font-bold">เข้าสู่ระบบ</h2><br>
                    <!-- ส่วนของการล็อกอิน -->

                    <!-- ผู้ใช้งาน -->
                    <div class="form-group">
                        <input class="form-control" type="username" name="username" placeholder="ชื่อผู้ใช้งาน">
                    </div>

                    <!-- พาสเวิร์ด -->
                    <div class="form-group">
                        <input class="form-control" type="password" name="password" placeholder="รหัสผ่าน" required>
                    </div>

                    <!-- กรณีอยากได้ลืมพาสเวิร์ด แถมๆ -->
                    <!-- <div class="link forget-pass text-left" style="margin-top:10px;font-size:smaller"><a href="views/register/forgotPassword.php">Forgot password?</a></div> -->
                    
                    <!-- Button สำหรับ Login -->
                    <div class="form-group">
                        <input class="form-control button" type="submit" name="login" value="เข้าสู่ระบบ">
                    </div>

                    <!-- <div class="link login-link text-center">ยังไม่เป็นสมาชิก ? <br> <a href="./views/register/SignUp.php">สมัครคลิกที่นี่เลย</a></div> -->
                </form>
            </div>

            <!-- Logo เปลี่ยนรูปภาพได้ที่ img/ และ ข้อความ -->
            <!-- <div class="col-md-5  text-center  " style="margin-top:20px">
                <img class="logo" width="125%" id="gak" src="image/logo.png" /><br><span class="skyblue-text "> Milky </span><br><span class="text-dark"> Ice</span>
            </div> -->

        </div>
    </div>
   
    <!-- แก้ footer ของหน้า login -->
    <?php include('views/copyright/copyright1.php') ?>
    
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>

</body>
</html>