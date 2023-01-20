<style>
    .form-element {
        position: relative;
        width: 90%;
        height: 100px;
    }

    .form-element input {
        display: none;
    }

    .form-element label {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        height: 100%;
        cursor: pointer;
        border: 2px solid #ddd;
        background: #fff;
        box-shadow: 0px 5px 20px 2px rgba(0, 0, 0, 0.1);
        text-align: center;
        transition: all 200ms ease-in-out;
        border-radius: 5px;
    }

    .form-element .icon {
        margin-top: 10px;
        font-size: 30px;
        color: #555;
        transition: all 200ms ease-in-out;
    }

    .form-element .title {
        font-size: 15px;
        color: #555;
        padding: 5px 0px;
        transition: all 200ms ease-in-out;
    }



    .form-element input:checked+label:before {
        opacity: 1;
        transform: scale(1);
    }

    .form-element input:checked+label .icon {
        color: #0d0df1;
    }

    .form-element input:checked+label .title {
        color: #0d0df1;
    }

    .form-element input:checked+label {
        border: 2px solid #0d0df1;
    }

    .label__checkbox {
        display: none;
    }

    .label__check {
        display: inline-block;
        border-radius: 50%;
        border: 2px solid rgba(0, 0, 0, 0.1);

        vertical-align: middle;
        margin-right: 20px;
        width: 1.6rem;
        height: 1.6rem;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: border 0.3s ease;
    }

    .label__check i.icon {
        opacity: 0.2;
        font-size: calc(0.7rem);
        color: transparent;
        transition: opacity 0.3s 0.1s ease;
        -webkit-text-stroke: 3px rgba(0, 0, 0, 0.5);
    }

    .label__check:hover {
        border: 2px solid rgba(0, 0, 0, 0.2);
    }

    .label__checkbox:checked+.label__text .label__check {
        -webkit-animation: check 0.5s cubic-bezier(0.895, 0.03, 0.685, 0.22) forwards;
        animation: check 0.5s cubic-bezier(0.895, 0.03, 0.685, 0.22) forwards;
    }

    .label__checkbox:checked+.label__text .label__check .icon {
        opacity: 1;
        transform: scale(0);
        color: white;
        -webkit-text-stroke: 0;
        -webkit-animation: icon 0.3s cubic-bezier(1, 0.008, 0.565, 1.65) 0.1s 1 forwards;
        animation: icon 0.3s cubic-bezier(1, 0.008, 0.565, 1.65) 0.1s 1 forwards;
    }


    @-webkit-keyframes icon {
        from {
            opacity: 0;
            transform: scale(0.3);
        }

        to {
            opacity: 1;
            transform: scale(1);
        }
    }

    @keyframes icon {
        from {
            opacity: 0;
            transform: scale(0.3);
        }

        to {
            opacity: 1;
            transform: scale(1);
        }
    }

    @-webkit-keyframes check {
        0% {
            width: 1.1rem;
            height: 1.1rem;
            border-width: 5px;
        }

        10% {
            width: 1.1rem;
            height: 1.1rem;
            opacity: 0.1;
            background: rgba(0, 0, 0, 0.2);
            border-width: 15px;
        }

        12% {
            width: 1.1rem;
            height: 1.1rem;
            opacity: 0.4;
            background: rgba(0, 0, 0, 0.1);
            border-width: 0;
        }

        50% {
            width: 1.6rem;
            height: 1.6rem;
            background: #00d478;
            border: 0;
            opacity: 0.6;
        }

        100% {
            width: 1.6rem;
            height: 1.6rem;
            background: #00d478;
            border: 0;
            opacity: 1;
        }
    }

    @keyframes check {
        0% {
            width: 1.1rem;
            height: 1.1rem;
            border-width: 5px;
        }

        10% {
            width: 1.1rem;
            height: 1.1rem;
            opacity: 0.1;
            background: rgba(0, 0, 0, 0.2);
            border-width: 15px;
        }

        12% {
            width: 1.1rem;
            height: 1.1rem;
            opacity: 0.4;
            background: rgba(0, 0, 0, 0.1);
            border-width: 0;
        }

        50% {
            width: 1.6rem;
            height: 1.6rem;
            background: #00d478;
            border: 0;
            opacity: 0.6;
        }

        100% {
            width: 1.6rem;
            height: 1.6rem;
            background: #00d478;
            border: 0;
            opacity: 1;
        }
    }

    #gg {
        color: #909090;
        font-size: 15px;
    }

    #gg:hover {
        color: #C80000;
    }
</style>
<div class="wrap" id="white">

    <div class="table-wrapper">


        <table class="table table-striped table-hover table-responsive-lg" id="wtf1">
            <thead>
                <tr>
                    <th style="text-align:center"><label class="label">
                            <input type="checkbox" class="label__checkbox" id="selectAll2" value="" />
                            <span class="label__text">
                                <span class="label__check">
                                    <i class="fa fa-check icon"></i>
                                </span>
                            </span>
                        </label>
                    </th>
                    <th>Candidate Name</th>
                    <th>Date added</th>
                    <th style="text-align: center;">Edit</th>
                    <th style="text-align: center;">Drop</th>
                    <th style="text-align: center;">Remove</th>

                </tr>
            </thead>
            <tbody>
                <?php
                $sql123 = "SELECT * FROM `applyjob` natural join candidate WHERE applyjob.candidateStatus=3 AND applyjob.candidateDrop='0' AND applyjob.jobId=$xx order by applyjob.applyId";
                $re123 = mysqli_query($con, $sql123);
                while ($row = mysqli_fetch_array($re123)) {
                ?><?php date_default_timezone_set('Asia/Bangkok');
                    $time1 =  facebook_time_ago($row["candidateAddTime"]);
                    ?>
                <tr id="content">
                    <td style="text-align:center"> <label class="label">
                            <input type="checkbox" class="label__checkbox" name="check[]" id="check[]" value="<?php echo $row['applyId'] ?>">
                            <span class="label__text">
                                <span class="label__check">
                                    <i class="fa fa-check icon"></i>
                                </span>
                            </span>
                        </label>
                    </td>
                    <td><a id="job" onclick="view_data(<?php echo $row['candidateId']; ?>)"><?php echo $row['candidateName'] ?></td>

                    <td><?php echo  $time1 ?></td>
                    <td style="text-align: center;"><i id="gg" class="fas fa-edit" onclick="editCandidate('<?php echo $row['candidateId'] ?>','<?php echo $email ?>','<?php echo $xx ?>')"></i></td>
                    <td style="text-align: center;"><i id="gg" class="fas fa-user-slash" onclick="dropCandidate('<?php echo $row['applyId'] ?>','<?php echo $email ?>','<?php echo $xx ?>')"></i></td>
                    <!-- <td><i id="gg" class="fas fa-user-plus" onClick="window.location='nav.php?var=<?php echo $row['jobId'] ?>'"></i></td> -->
                    <td style="text-align: center;"><i id="gg" class=" fas fa-minus" onclick="removeCandidate('<?php echo $row['applyId'] ?>','<?php echo $email ?>','<?php echo $xx ?>')"></i></td>
                </tr>

            <?php } ?>
            </tbody>
        </table>

    </div>
    <div class="ui" style="text-align:center;background:#fff;padding-bottom:0.3cm;margin-bottom:0px;padding-left:40px">
        <div class="container-fluid">
            <div class="row">
                <div class="col-4">
                    <div class="container-fluid">
                        <div class="row">
                            <div col-4>
                                <div class="wrapper" id="dropt">
                                    <div class="icon move">
                                        <div class="tooltip">
                                            LIST
                                        </div>
                                        <button type="button" onclick="listdropCandidate(3,'<?php echo $email ?>','<?php echo $xx ?>')"><i class="fas fa-user-slash"></i></button>
                                    </div>
                                </div>

                            </div>
                            <div col-4>

                            </div>
                            <div col-4>

                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-4">

                </div>
                <div class="col-4">

                </div>
            </div>
        </div>

    </div>
</div>
<script>
    $('#selectAll2').click(function(e) {
        var table = $(e.target).closest('table');
        $('td input:checkbox', table).prop('checked', this.checked);
    });
</script>