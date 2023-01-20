<!DOCTYPE html>
<html lang="en" dir="ltr">
<style>
    @media only screen and (max-width: 768px) {
        #asd {
            width: auto;
        }
    }
</style>

<head>
    <meta charset="UTF-8">
    <!-- เปลี่ยนข้อความบน title -->
    <title>ชื่อบริษัท | สมัครสมาชิก</title>
    <!-- เปลี่ยนรูปบน title -->
    <link rel="shortcut icon" type="image/png" href="../../img/logo_input.jpg">
    <!-- stylesheet-->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    <link rel="stylesheet" href="../../css/login_css/register_css.css">
    <link rel="stylesheet" href="../../css/login_css/upgrade_navbar.css">
     <!-- Bootstrap icons-->
     <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css" rel="stylesheet" />
     
     
</head>

<body>
 <!-- Navigation-->
 <nav class="navbar navbar-expand-lg  navbar-dark bg-dark">
                <div class="container px-4 px-lg-5">
                    <a class="navbar-brand" href="#!">Logo</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
                            <li class="nav-item"><a class="nav-link active" aria-current="page" href="../../index.php">Home</a></li>
                            <li class="nav-item"><a class="nav-link active" aria-current="page" href="#!">Shop</a></li>
                        </ul>

                       <form class="d-flex px-2" action=""> 
                            <button class="btn btn-outline-light" type="submit">
                                <i class="bi-cart-fill me-1"></i>
                                Cart
                                <span class="badge bg-light text-dark ms-1 rounded-pill">0</span>
                            </button>
                        </form> 

                        <form class="d-flex" action="../../login.php">
                        <button class="btn btn-outline-light">
                            <i class="bi bi-box-arrow-right"></i>
                            Login
                        </button>
                    </form>
            
                    </div>
                </div>
            </nav>

    <!-- ในส่วนของภาพโลโก้-->
    <div class="container-fluid body-center" >
        <div class="row form">
            <div class="col-sm-5 text-center mt-4 ">
                <img width="82%" height="200px;" id="asd" style="margin: auto;    
    display:flex;margin-top:70px" src="../../img/logo_input.png" />
                <span class="skyblue-text">Logo</span><br>
                <span class="text-dark">Name</span><br><br>
            </div>

            <div class="col-sm-7 text-center ">
                <form action="SignUp.php" method="POST" autocomplete="">
                    <h2 class="text-center">สมัครสมาชิก</h2>
                    <br>
                    
                    <div class="form-group">
                        <input class="form-control" type="text" name="name" placeholder="ชื่อ และ นามสกุล">
                    </div>

                    <div class="form-group">
                        <input type="text" class="form-control" name="nickname" id="nickname" placeholder="ชื่อเล่น" required>
                    </div>

                    <div class="form-group">
                        <input type="tel" class="form-control" name="num" id="num" placeholder="เบอร์มือถือ" pattern="[0]{1}[0-9]{9}" required>
                    </div>
                    
                    <div class="form-group">
                        <input class="form-control" type="email"  name="email" placeholder="อีเมลล์">
                    </div>

                    <div class="form-group">
                        <input class="form-control" onkeyup="trigger()" id="password1" type="password" name="password" placeholder="รหัสผ่าน" minlength="7" required>
                        <!-- <span class="showBtn"> -->
                        <i class="fas fa-eye  password-show" style=" user-select: none;"></i>
                    </div>

                    <div class="form-group">
                        <input class="form-control" type="password" name="cpassword" placeholder="ยืนยันรหัสผ่าน" required>
                    </div>
                    <div class="form-group">
                        <input class="form-control button" type="submit" name="signup" value="สมัครสมาชิก">
                    </div>
                    <div class="link login-link text-center">คุณเป็นผู้ใช้งานของเราอยู่แล้ว? <a href="../../login.php">ล็อกอินที่นี่ </a></div>
                </form>
            </div>

        </div>
    </div>
    
    <!-- แก้ไข Footer ได้ที่ไฟล์ -->
    <?php include('../copyright/copyright2.php') ?>
</body>

</html>