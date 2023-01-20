var click = 0;
function toForm(data)   {
    click = click + 1;
    if (data.detail != "Not found." && click < 2)  {
    // VARIABLE ZONE !
    let MyHeader_Personal_Detail = document.querySelector('#MyHeader_Personal_Detail');
    let MyHeader_Qulification_Summary = document.querySelector('#MyHeader_Qulification_Summary');
    let MyHeader_Technical_Expertise = document.querySelector('#MyHeader_Technical_Expertise');
    let MyHeader_Professional_Experiences = document.querySelector('#MyHeader_Professional_Experiences');
    let MyHeader_Education = document.querySelector('#MyHeader_Education');
    let MyHeader_Certification = document.querySelector('#MyHeader_Certification');
    // PERSONAL DETAIL {}
    let MyLabel_Position = document.querySelector('#MyLabel_Position');
    let MyInput_Position = document.querySelector('#MyInput_Position');

    let MyLabel_Data_Name_First = document.querySelector('#MyLabel_Data_Name_First');
    let MyInput_Data_Name_First = document.querySelector('#MyInput_Data_Name_First');

    let MyLabel_Data_Name_Last = document.querySelector('#MyLabel_Data_Name_Last');
    let MyInput_Data_Name_Last = document.querySelector('#MyInput_Data_Name_Last');

    let MyLabel_Data_Name_First_Thai = document.querySelector('#MyLabel_Data_Name_First_Thai');
    let MyInput_Data_Name_First_Thai = document.querySelector('#MyInput_Data_Name_First_Thai');

    let MyLabel_Data_Name_Last_Thai = document.querySelector('#MyLabel_Data_Name_Last_Thai');
    let MyInput_Data_Name_Last_Thai = document.querySelector('#MyInput_Data_Name_Last_Thai');
    
    let MyLabel_Data_Gender = document.querySelector('#MyLabel_Data_Gender');
    let MySelect_Data_Gender = document.querySelector('#MySelect_Data_Gender');

    // QULIFICATION SUMMARY {}
    let MyLabel_Data_Specialized_Background = document.querySelector('#MyLabel_Data_Specialized_Background');
    let MyInput_Data_Specialized_Background = document.querySelector('#MyInput_Data_Specialized_Background');

    let MyLabel_Data_Project_Record = document.querySelector('#MyLabel_Data_Project_Record');
    let MyInput_Data_Project_Record = document.querySelector('#MyInput_Data_Project_Record');

    let MyLabel_Data_Extra_Experiences = document.querySelector('#MyLabel_Data_Extra_Experiences');
    let MyInput_Data_Extra_Experiences = document.querySelector('#MyInput_Data_Extra_Experiences');

    let MyLabel_Data_Soft_Skill = document.querySelector('#MyLabel_Data_Soft_Skill');
    let MyInput_Data_Soft_Skill = document.querySelector('#MyInput_Data_Soft_Skill');

    // Technical Expertise {}
    let MyLabel_Data_Operating_System = document.querySelector('#MyLabel_Data_Operating_System');
    let MyInput_Data_Operating_System = document.querySelector('#MyInput_Data_Operating_System');

    let MyLabel_Data_Programing_Language = document.querySelector('#MyLabel_Data_Programing_Language');
    let MyInput_Data_Programing_Language = document.querySelector('#MyInput_Data_Programing_Language');

    let MyLabel_Data_Database = document.querySelector('#MyLabel_Data_Database');
    let MyInput_Data_Database = document.querySelector('#MyInput_Data_Database');

    let MyLabel_Data_ToolsIDE = document.querySelector('#MyLabel_Data_ToolsIDE');
    let MyInput_Data_ToolsIDE = document.querySelector('#MyInput_Data_ToolsIDE');

    let MyLabel_Data_Database_Features = document.querySelector('#MyLabel_Data_Database_Features');
    let MyInput_Data_Database_Features = document.querySelector('#MyInput_Data_Database_Features');

    let MyLabel_Data_Database_Tools = document.querySelector('#MyLabel_Data_Database_Tools');
    let MyInput_Data_Database_Tools = document.querySelector('#MyInput_Data_Database_Tools');

    let MyLabel_Data_Application_Servers = document.querySelector('#MyLabel_Data_Application_Servers');
    let MyInput_Data_Application_Servers = document.querySelector('#MyInput_Data_Application_Servers');

    let MyLabel_Data_Networks = document.querySelector('#MyLabel_Data_Networks');
    let MyInput_Data_Networks = document.querySelector('#MyInput_Data_Networks');

    let MyLabel_Data_Securities = document.querySelector('#MyLabel_Data_Securities');
    let MyInput_Data_Securities = document.querySelector('#MyInput_Data_Securities');

    let MyLabel_Data_Java_Technologies = document.querySelector('#MyLabel_Data_Java_Technologies');
    let MyInput_Data_Java_Technologies = document.querySelector('#MyInput_Data_Java_Technologies');

    let MyLabel_Data_Java_Script_Technologies = document.querySelector('#MyLabel_Data_Java_Script_Technologies');
    let MyInput_Data_Java_Script_Technologies = document.querySelector('#MyInput_Data_Java_Script_Technologies');
    
    let MyLabel_Data_Version_Control_System = document.querySelector('#MyLabel_Data_Version_Control_System');
    let MyInput_Data_Version_Control_System = document.querySelector('#MyInput_Data_Version_Control_System');

    let MyLabel_Data_Report = document.querySelector('#MyLabel_Data_Report');
    let MyInput_Data_Report = document.querySelector('#MyInput_Data_Report');

    let MyLabel_Data_Design_Tools = document.querySelector('#MyLabel_Data_Design_Tools');
    let MyInput_Data_Design_Tools = document.querySelector('#MyInput_Data_Design_Tools');

    let MyLabel_Data_Others = document.querySelector('#MyLabel_Data_Others');
    let MyInput_Data_Others = document.querySelector('#MyInput_Data_Others');

    let MyLabel_Data_Methodologies = document.querySelector('#MyLabel_Data_Methodologies');
    let MyInput_Data_Methodologies = document.querySelector('#MyInput_Data_Methodologies');

    let MyLabel_Data_DevOps_Technologies = document.querySelector('#MyLabel_Data_DevOps_Technologies');
    let MyInput_Data_DevOps_Technologies = document.querySelector('#MyInput_Data_DevOps_Technologies');

    let MyLabel_Data_Cloud_Technologies = document.querySelector('#MyLabel_Data_Cloud_Technologies');
    let MyInput_Data_Cloud_Technologies = document.querySelector('#MyInput_Data_Cloud_Technologies');

    let MyLabel_Data_Data_Tech_Stack = document.querySelector('#MyLabel_Data_Data_Tech_Stack');
    let MyInput_Data_Data_Tech_Stack = document.querySelector('#MyInput_Data_Data_Tech_Stack');

    // PROFESSIONAL EXPERIENCES
    let MyLabel_Data_Company_Work_Experiences = document.querySelector('#MyLabel_Data_Company_Work_Experiences');
    let MyInput_Data_Company_Work_Experiences = document.querySelector('#MyInput_Data_Company_Work_Experiences');

    // EDUCATION
    let MyLabel_Data_Education = document.querySelector('#MyLabel_Data_Education');
    let MyInput_Data_Education = document.querySelector('#MyInput_Data_Education');

    // CERTIFICATION
    let MyLabel_Data_Certification = document.querySelector('#MyLabel_Data_Certification');
    let MyInput_Data_Certification = document.querySelector('#MyInput_Data_Certification');



    // EXPORT ZONE !
    // ------------------------------------------------------------------------------------------------ //
        // EXPORT HEADER ZONE
    let h2_Export_Header_Personal_Detail = document.createElement('h2');
    h2_Export_Header_Personal_Detail.innerHTML = `Personal Detail`;
    MyHeader_Personal_Detail.appendChild(h2_Export_Header_Personal_Detail);
    
    let h2_Export_Header_Qulification_Summary = document.createElement('h2');
    h2_Export_Header_Qulification_Summary.innerHTML = `Qulification Summary`;
    MyHeader_Qulification_Summary.appendChild(h2_Export_Header_Qulification_Summary);
    
    let h2_Export_header_Technical_Expertise = document.createElement('h2');
    h2_Export_header_Technical_Expertise.innerHTML = 'Technical Expertise';
    MyHeader_Technical_Expertise.appendChild(h2_Export_header_Technical_Expertise);

    let h2_Export_header_Professional_Experiences = document.createElement('h2');
    h2_Export_header_Professional_Experiences.innerHTML = 'Professional Experiences';
    MyHeader_Professional_Experiences.appendChild(h2_Export_header_Professional_Experiences);

    let h2_Export_Header_Education = document.createElement('h2');
    h2_Export_Header_Education.innerHTML = `Education`;
    MyHeader_Education.appendChild(h2_Export_Header_Education);

    let h2_Export_Header_Certification = document.createElement('h2');
    h2_Export_Header_Certification.innerHTML = `Certification`;
    MyHeader_Certification.appendChild(h2_Export_Header_Certification);

    
    // ------------------------------------------------------------------------------------------------ //
        // EXPORT LABEL POSITION
    let Label_Export_Position = document.createElement('label');
    Label_Export_Position.innerHTML = `position :`;
    Label_Export_Position.setAttribute("class" , "control-label col-md-4  requiredField");
    MyLabel_Position.appendChild(Label_Export_Position);
        // EXPORT INPUT POSITION
    let Input_Export_Poistion = document.createElement('input');
    Input_Export_Poistion.setAttribute("type" , "text");
    Input_Export_Poistion.setAttribute("class" , "input-md  textinput textInput form-control");
    Input_Export_Poistion.setAttribute("name" , "data_name_first");
    Input_Export_Poistion.setAttribute("style" , "margin-bottom: 10px ");
    //add data Input_Export_Poistion.setAttribute("value" , `${v a l u e}`);
    Input_Export_Poistion.setAttribute("placeholder" , "insert position here...");
    MyInput_Position.appendChild(Input_Export_Poistion);
    // ------------------------------------------------------------------------------------------------ //
        // EXPORT LABEL DATA->NAME->FIRST
    let Label_Export_Data_Name_First = document.createElement('label');
    Label_Export_Data_Name_First.innerHTML = `first name : `;
    Label_Export_Data_Name_First.setAttribute("class" , "control-label col-md-4  requiredField");
    MyLabel_Data_Name_First.appendChild(Label_Export_Data_Name_First);
        // EXPORT INPUT DATA->NAME->FIRST
    let Input_Export_Data_Name_First = document.createElement('input');
    Input_Export_Data_Name_First.setAttribute("type" , "text");
    Input_Export_Data_Name_First.setAttribute("class" , "input-md  textinput textInput form-control");
    Input_Export_Data_Name_First.setAttribute("name" , "data_name_first");
    Input_Export_Data_Name_First.setAttribute("placeholder" , "insert first name here...");
    Input_Export_Data_Name_First.setAttribute("style" , "margin-bottom: 10px");
    Input_Export_Data_Name_First.setAttribute("value" , `${data.data.name.first}`);
    MyInput_Data_Name_First.appendChild(Input_Export_Data_Name_First);
    // ------------------------------------------------------------------------------------------------ //
        // EXPORT LABEL DATA->NAME->LAST
    let Label_Export_Data_Name_Last = document.createElement('label');
    Label_Export_Data_Name_Last.innerHTML = `last name : `;
    Label_Export_Data_Name_Last.setAttribute("class" , "control-label col-md-4  requiredField");
    MyLabel_Data_Name_Last.appendChild(Label_Export_Data_Name_Last);
        // EXPORT INPUT DATA->NAME->FIRST
    let Input_Export_Data_Name_Last = document.createElement('input');
    Input_Export_Data_Name_Last.setAttribute("type" , "text");
    Input_Export_Data_Name_Last.setAttribute("class" , "input-md  textinput textInput form-control");
    Input_Export_Data_Name_Last.setAttribute("name" , "data_name_last");
    Input_Export_Data_Name_Last.setAttribute("placeholder" , "insert last name here...");
    Input_Export_Data_Name_Last.setAttribute("style" , "margin-bottom: 10px");
    Input_Export_Data_Name_Last.setAttribute("value" , `${data.data.name.last}`);
    MyInput_Data_Name_Last.appendChild(Input_Export_Data_Name_Last);
    // ------------------------------------------------------------------------------------------------ //
        // EXPORT LABEL DATA->NAME->FIRST THAI
    let Label_Export_Data_name_First_Thai = document.createElement('label');
    Label_Export_Data_name_First_Thai.innerHTML = `thai first name :`;
    Label_Export_Data_name_First_Thai.setAttribute("class" , "control-label col-md-4  requiredField");
    MyLabel_Data_Name_First_Thai.appendChild(Label_Export_Data_name_First_Thai);
        // EXPORT INPUT DATA->NAME->FIRST THAI
    let Input_Export_Data_Name_First_Thai = document.createElement('input');
    Input_Export_Data_Name_First_Thai.setAttribute("type" , "text");
    Input_Export_Data_Name_First_Thai.setAttribute("class" , "input-md  textinput textInput form-control");
    Input_Export_Data_Name_First_Thai.setAttribute("name" , "data_name_first_thai");
    Input_Export_Data_Name_First_Thai.setAttribute("placeholder" , "insert thai first name here...");
    //add database : Input_Export_Data_Name_First_Thai.setAttribute("value" , `${v a l u e}`);
    Input_Export_Data_Name_First_Thai.setAttribute("style" , "margin-bottom: 10px");
    MyInput_Data_Name_First_Thai.appendChild(Input_Export_Data_Name_First_Thai);
    // ------------------------------------------------------------------------------------------------ //
        // EXPORT LABEL DATA->NAME->Last THAI
    let Label_Export_Data_name_Last_Thai = document.createElement('label');
    Label_Export_Data_name_Last_Thai.innerHTML = `thai last name :`;
    Label_Export_Data_name_Last_Thai.setAttribute("class" , "control-label col-md-4  requiredField");
    MyLabel_Data_Name_Last_Thai.appendChild(Label_Export_Data_name_Last_Thai);
        // EXPORT INPUT DATA->NAME->Last THAI
    let Input_Export_Data_Name_Last_Thai = document.createElement('input');
    Input_Export_Data_Name_Last_Thai.setAttribute("type" , "text");
    Input_Export_Data_Name_Last_Thai.setAttribute("class" , "input-md  textinput textInput form-control");
    Input_Export_Data_Name_Last_Thai.setAttribute("name" , "data_name_Last_thai");
    Input_Export_Data_Name_Last_Thai.setAttribute("placeholder" , "insert thai last name here...");
    //add database : Input_Export_Data_Name_Last_Thai.setAttribute("value" , `${v a l u e}`);
    Input_Export_Data_Name_Last_Thai.setAttribute("style" , "margin-bottom: 10px");
    MyInput_Data_Name_Last_Thai.appendChild(Input_Export_Data_Name_Last_Thai);
    
    // ------------------------------------------------------------------------------------------------ //
        // EXPORT LABEL DATA GENDER
    let Label_Export_Data_Gender = document.createElement('label');
    Label_Export_Data_Gender.innerHTML = `gender :`;
    Label_Export_Data_Gender.setAttribute("class" , "control-label col-md-4  requiredField");
    MyLabel_Data_Gender.appendChild(Label_Export_Data_Gender);
        // EXPORT SELECT DATA GENDER
    let Select_Export_Data_Gender = document.createElement('select');
    Select_Export_Data_Gender.setAttribute("id" , "MySelect_Gender");
    Select_Export_Data_Gender.setAttribute("style" , "margin-bottom: 10px");
    MySelect_Data_Gender.appendChild(Select_Export_Data_Gender);
        // EXPORT OPTION DATA GENDER MALE
    let Option_Export_Data_Gender_Male = document.createElement('option');
    Option_Export_Data_Gender_Male.setAttribute("value" , "Male"); //add database
    let Node_Option_Export_Data_Gender_Male = document.createTextNode('Male');
    Option_Export_Data_Gender_Male.appendChild(Node_Option_Export_Data_Gender_Male);
    document.getElementById('MySelect_Gender').appendChild(Option_Export_Data_Gender_Male);
        // EXPORT OPTION DATA GENDER FEMALE
    let Option_Export_Data_Gender_Female = document.createElement('option');
    Option_Export_Data_Gender_Female.setAttribute("value" , "Female");
    let Node_Option_Export_Data_gender_Female = document.createTextNode('Female');
    Option_Export_Data_Gender_Female.appendChild(Node_Option_Export_Data_gender_Female);
    document.getElementById('MySelect_Gender').appendChild(Option_Export_Data_Gender_Female);
    // ------------------------------------------------------------------------------------------------ //
        // EXPORT LABEL SPECIALIZE BACKGROUND
    let Label_Export_Data_Specialize_Background = document.createElement('label');
    Label_Export_Data_Specialize_Background.innerHTML = `specialized background : `;
    Label_Export_Data_Specialize_Background.setAttribute("class" , "control-label col-md-4  requiredField");
    MyLabel_Data_Specialized_Background.appendChild(Label_Export_Data_Specialize_Background);
        // EXPORT INPUT SPECIALIZE BACKGROUND
    let Input_Export_Data_Specialized_Background = document.createElement('textarea');
    Input_Export_Data_Specialized_Background.setAttribute("class" , "input-md  textinput textInput form-control rows=5");
    Input_Export_Data_Specialized_Background.setAttribute("id" , "data_specialized_background");
    Input_Export_Data_Specialized_Background.setAttribute("name" , "data_specialized_background");
    Input_Export_Data_Specialized_Background.setAttribute("placeholder" , "insert specialize background here...");
    Input_Export_Data_Specialized_Background.setAttribute("style" , "margin-bottom: 10px");
    for (let i = 0 ; i < data.data.sections.length ; i++)  {
        if (data.data.sections[i].sectionType === 'Summary')   {
            Input_Export_Data_Specialized_Background.setAttribute("value" , `${data.data.sections[i].text}`);
            let Message_Specialized_Background = `${data.data.sections[i].text}`; // add database here!!
            Input_Export_Data_Specialized_Background.innerHTML = Message_Specialized_Background;
            MyInput_Data_Specialized_Background.appendChild(Input_Export_Data_Specialized_Background);
        }else{}
    }
    // ------------------------------------------------------------------------------------------------ //
        // EXPORT LABEL PROJECT RECORD
    let Label_Export_Data_Project_Record = document.createElement('label');
    Label_Export_Data_Project_Record.innerHTML = `proven project record as position`;
    Label_Export_Data_Project_Record.setAttribute("class" , "control-label col-md-4  requiredField");
    MyLabel_Data_Project_Record.appendChild(Label_Export_Data_Project_Record);
        // EXPORT TEXT FIELD PROJECT RECORD
    let Input_Export_Data_Project_Record = document.createElement('textarea');
    Input_Export_Data_Project_Record.setAttribute("class" , "input-md  textinput textInput form-control rows=5");
    Input_Export_Data_Project_Record.setAttribute("id" , "data_project_record");
    Input_Export_Data_Project_Record.setAttribute("name" , "data_project_record");
    Input_Export_Data_Project_Record.setAttribute("placeholder" , "insert proven project record as position here...");
    Input_Export_Data_Project_Record.setAttribute("style" , "margin-bottom: 10px");
    Input_Export_Data_Project_Record.setAttribute("value" , `data_project_record`);
    let Message_Data_Project_Record = `data_project_record`; // message to sending to database
    Input_Export_Data_Project_Record.innerHTML = Message_Data_Project_Record;
    MyInput_Data_Project_Record.appendChild(Input_Export_Data_Project_Record);
    // ------------------------------------------------------------------------------------------------ //
        // EXPORT LABEL EXTRA RELATED EXPERIENCES
    let Label_Export_Data_Extra_Experiences = document.createElement('label');
    Label_Export_Data_Extra_Experiences.innerHTML = `extra related experiences`;
    Label_Export_Data_Extra_Experiences.setAttribute("class" , "control-label col-md-4  requiredField");
    MyLabel_Data_Extra_Experiences.appendChild(Label_Export_Data_Extra_Experiences);
        // EXPORT INPUT EXTRA RELATED EXPERIENCES
    let Input_Export_Data_Extra_Experiences = document.createElement('textarea');
    Input_Export_Data_Extra_Experiences.setAttribute("class" , "input-md  textinput textInput form-control rows=5");
    Input_Export_Data_Extra_Experiences.setAttribute("id" , "data_extra_experiences");
    Input_Export_Data_Extra_Experiences.setAttribute("name" , "data_extra_experiences");
    Input_Export_Data_Extra_Experiences.setAttribute("placeholder" , "insert extra related experiences here...");
    Input_Export_Data_Extra_Experiences.setAttribute("style" , "margin-bottom: 10px");
    Input_Export_Data_Extra_Experiences.setAttribute("value" , `data_extra_experiences`);
    MyInput_Data_Extra_Experiences.appendChild(Input_Export_Data_Extra_Experiences);
    for (let i = 0 ; i < data.data.sections.length ; i++)  {
        if (data.data.sections[i].sectionType === 'WorkExperience')     {
            let Message_Data_Extra_Experiences = document.createTextNode('1.) ' + `${data.data.sections[i].text}` + '\n'); // add database here!!
            Input_Export_Data_Extra_Experiences.appendChild(Message_Data_Extra_Experiences);
        }else{}
    }
    // ------------------------------------------------------------------------------------------------ //
        // EXPORT LABEL SOFT SKILL LIST
    let Label_Export_Data_Soft_Skill = document.createElement('label');
    Label_Export_Data_Soft_Skill.innerHTML = `Soft Skill`;
    Label_Export_Data_Soft_Skill.setAttribute("class" , "control-label col-md-4  requiredField");
    MyLabel_Data_Soft_Skill.appendChild(Label_Export_Data_Soft_Skill);
        // EXPORT INPUT SOFT SKILL LIST
    let Input_Export_Data_Soft_Skill = document.createElement('textarea');
    Input_Export_Data_Soft_Skill.setAttribute("class" , "input-md  textinput textInput form-control rows=5");
    Input_Export_Data_Soft_Skill.setAttribute("id" , "data_soft_skill");
    Input_Export_Data_Soft_Skill.setAttribute("name" , "data_soft_skill");
    Input_Export_Data_Soft_Skill.setAttribute("placeholder" , "insert soft skill here...");
    Input_Export_Data_Soft_Skill.setAttribute("style" , "margin-bottom: 10px");
    Input_Export_Data_Soft_Skill.setAttribute("value" , `data_soft_skill`);
    MyInput_Data_Soft_Skill.appendChild(Input_Export_Data_Soft_Skill);
    console.log('Skills : \n' );
    for (let i = 0 ; i < data.data.skillsDetails.length ; i++)     {
        if (data.data.skillsDetails[i].type === 'soft_skill')   {
            let Message_Export_Data_Soft_Skill = document.createTextNode(`${data.data.skillsDetails[i].name}` + `\n`) ;
            console.log(`${data.data.skillsDetails[i].name}` + ' ' + '(' + `${data.data.skillsDetails[i].type}` + ')' );
            Input_Export_Data_Soft_Skill.appendChild(Message_Export_Data_Soft_Skill);
        }
    }

    // ------------------------------------------------------------------------------------------------ //
        // EXPORT LABEL OPERATING SYSTEM
    let Label_Export_Data_Operating_System = document.createElement('label');
    Label_Export_Data_Operating_System.innerHTML = `Operating System`;
    Label_Export_Data_Operating_System.setAttribute("class" , "control-label col-md-4  requiredField");
    MyLabel_Data_Operating_System.appendChild(Label_Export_Data_Operating_System);
        // EXPORT INPUT OPERATING SYSTEM
    let Input_Export_Data_Operating_System = document.createElement('input');
    Input_Export_Data_Operating_System.setAttribute("type" , "text");
    Input_Export_Data_Operating_System.setAttribute("class" , "input-md  textinput textInput form-control rows=5");
    Input_Export_Data_Operating_System.setAttribute("id" , "data_operating_system");
    Input_Export_Data_Operating_System.setAttribute("name" , "data_operating_system");
    Input_Export_Data_Operating_System.setAttribute("placeholder" , "insert your operating system here...");
    Input_Export_Data_Operating_System.setAttribute("style" , "margin-bottom: 10px");
    //Input_Export_Data_Operating_System.setAttribute("value" , `data_operating_system`); // add database here!
    MyInput_Data_Operating_System.appendChild(Input_Export_Data_Operating_System);
    // ------------------------------------------------------------------------------------------------ //
       // EXPORT LABEL PROGRAMING LANGUAGE
    let Label_Export_Data_Programing_Language = document.createElement('label');
    Label_Export_Data_Programing_Language.innerHTML = `Programming Language`
    Label_Export_Data_Programing_Language.setAttribute("class" , "control-label col-md-4 requiredField");
    MyLabel_Data_Programing_Language.appendChild(Label_Export_Data_Programing_Language);
        // EXPORT INPUT PROGRAMING LANGUAGE
    let Input_Export_Data_Programing_Language = document.createElement('textarea');
    Input_Export_Data_Programing_Language.setAttribute("class" , "input-md  textinput textInput form-control rows=5");
    Input_Export_Data_Programing_Language.setAttribute("id" , "data_programing_language");
    Input_Export_Data_Programing_Language.setAttribute("name" , "data_programing_language");
    Input_Export_Data_Programing_Language.setAttribute("placeholder" , "insert programing language here...");
    Input_Export_Data_Programing_Language.setAttribute("style" , "margin-bottom: 10px");
    Input_Export_Data_Programing_Language.setAttribute("value" , `data_programing_language`);
    MyInput_Data_Programing_Language.appendChild(Input_Export_Data_Programing_Language);
    console.log('Programing Language');
    for (let i = 0 ; i < data.data.skillsDetails.length ; i++)     {
        // variable for search word
        var Value_Word_Programing_Language = data.data.skillsDetails[i].name;
        var Checking_Word_Flutter = Value_Word_Programing_Language.search("Flutter");
        var Checking_Word_Java = Value_Word_Programing_Language.search("Java");
        var Checking_Word_Javascript = Value_Word_Programing_Language.search("Javascript");
        var Checking_Word_Kotlin = Value_Word_Programing_Language.search("Kotlin");
        var Checking_Word_CSharp = Value_Word_Programing_Language.search("C#");
        var Checking_Word_VBNET = Value_Word_Programing_Language.search("VB.Net");
        var Checking_Word_ASPNET = Value_Word_Programing_Language.search("ASP.Net");
        var Checking_Word_TypeScript = Value_Word_Programing_Language.search("TypeScript");
        var Checking_Word_Dart = Value_Word_Programing_Language.search("Dart");
        var Checking_Word_PHP = Value_Word_Programing_Language.search("PHP");
        var Checking_Word_Ajax = Value_Word_Programing_Language.search("Ajax");
        var Checking_Word_jQuery = Value_Word_Programing_Language.search("jQuery");
        var Checking_Word_HTML5 = Value_Word_Programing_Language.search("HTML5");
        var Checking_Word_CSS = Value_Word_Programing_Language.search("CSS");
        var Checking_Word_Json = Value_Word_Programing_Language.search("Json");
        var Checking_Word_XML = Value_Word_Programing_Language.search("XML");
        var Checking_Word_SQL = Value_Word_Programing_Language.search("SQL");
        var Checking_Word_PL_SQL = Value_Word_Programing_Language.search("PL/SQL");
        var Checking_Word_Net_Core = Value_Word_Programing_Language.search(".Net Core");
        var Checking_Word_Angular = Value_Word_Programing_Language.search("Angular");
        var Checking_Word_NodeJS = Value_Word_Programing_Language.search("Node.js");
        var Checking_Word_JUST_C = Value_Word_Programing_Language.search("C");
        var Checking_Word_Pascal = Value_Word_Programing_Language.search("Pascal");
        var Checking_Word_Cobol = Value_Word_Programing_Language.search("Cobol");
        var Checking_Word_Pearl = Value_Word_Programing_Language.search("Pearl");
        var Checking_Word_ETL = Value_Word_Programing_Language.search("ETL");
        var Checking_Word_Delphi = Value_Word_Programing_Language.search("Delphi");
        var Checking_Word_Golang = Value_Word_Programing_Language.search("Golang");
        var Checking_Word_Programming_Language = Value_Word_Programing_Language.search("(Programming Language)");

        // condition to checking word
        if (Checking_Word_Programming_Language != -1 && (Checking_Word_Flutter != -1 || Checking_Word_Java != -1 || Checking_Word_Javascript != -1 || Checking_Word_Kotlin != -1 ||
            Checking_Word_CSharp != -1 || Checking_Word_VBNET != -1 || Checking_Word_ASPNET != -1 || Checking_Word_TypeScript != -1 ||
            Checking_Word_Dart != -1 || Checking_Word_PHP != -1 || Checking_Word_Ajax != -1 || Checking_Word_jQuery != -1 || Checking_Word_HTML5 != -1 ||
            Checking_Word_CSS != -1 || Checking_Word_Json != -1 || Checking_Word_XML != -1 || Checking_Word_SQL != -1 || Checking_Word_PL_SQL != -1 ||
            Checking_Word_Net_Core != -1 || Checking_Word_Angular != -1 || Checking_Word_NodeJS != -1 || Checking_Word_JUST_C != -1 ||
            Checking_Word_Pascal != -1 || Checking_Word_Cobol != -1 || Checking_Word_Pearl != -1 || Checking_Word_ETL != -1 || Checking_Word_Delphi != -1 ||
            Checking_Word_Golang != -1))   {
                let Message_Data_Programing_Language = document.createTextNode(`${data.data.skillsDetails[i].name}` + '\n');
                console.log(Message_Data_Programing_Language);
                Input_Export_Data_Programing_Language.appendChild(Message_Data_Programing_Language);
                }else{}
            }
        
     
    // ------------------------------------------------------------------------------------------------ //
        // EXPORT LABEL DATABASE
    let Label_Export_Data_Database = document.createElement('label');
    Label_Export_Data_Database.innerHTML = `Database`
    Label_Export_Data_Database.setAttribute("class" , "control-label col-md-4 requiredField");
    MyLabel_Data_Database.appendChild(Label_Export_Data_Database);
        // EXPORT LABEL DATABASE
    let Input_Export_Data_Database = document.createElement('textarea');
    Input_Export_Data_Database.setAttribute("class" , "input-md  textinput textInput form-control rows=5");
    Input_Export_Data_Database.setAttribute("id" , "data_Database");
    Input_Export_Data_Database.setAttribute("name" , "data_Database");
    Input_Export_Data_Database.setAttribute("placeholder" , "insert programing language here...");
    Input_Export_Data_Database.setAttribute("style" , "margin-bottom: 10px");
    Input_Export_Data_Database.setAttribute("value" , `data_Database`);
    MyInput_Data_Database.appendChild(Input_Export_Data_Database);
    console.log('Database');
    for (let i = 0 ; i < data.data.skillsDetails.length ; i++)     {
        // variable for search word
        var Value_Word_Database = data.data.skillsDetails[i].name;
        var Checking_Word_SQL = Value_Word_Database.search("SQL");
        var Checking_Word_Oracle = Value_Word_Database.search("Oracle");
        var Checking_Word_MongoDB = Value_Word_Database.search("MongoDB");
        var Checking_Word_Server = Value_Word_Database.search("Server");
        var Checking_Word_Redis = Value_Word_Database.search("Redis");
        var Checking_Word_DB2 = Value_Word_Database.search("DB2");
        var Checking_Word_Sybase = Value_Word_Database.search("Sybase");
        var Checking_Word_MS_Access = Value_Word_Database.search("Microsoft Access");
        var Checking_Word_Informix = Value_Word_Database.search("Informix");
        var Checking_Word_Firebase = Value_Word_Database.search("Firebase");
        var Checking_Word_Apache = Value_Word_Database.search("Apache");
        
        // condition to checking word
        if (Checking_Word_SQL != -1 || Checking_Word_Oracle != -1 || Checking_Word_MongoDB != -1 || Checking_Word_Server != -1 ||
            Checking_Word_Redis != -1 || Checking_Word_DB2 != -1 || Checking_Word_Sybase != -1 || Checking_Word_MS_Access != -1 ||
            Checking_Word_Informix != -1 || Checking_Word_Firebase != -1 || Checking_Word_Apache != -1)    {
            let Message_Data_Database = document.createTextNode(`${data.data.skillsDetails[i].name}` + '\n');
            console.log(Message_Data_Database);
            Input_Export_Data_Database.appendChild(Message_Data_Database);
            }else{}
        }

    // ------------------------------------------------------------------------------------------------ //
        // EXPORT LABEL TOOLS AND IDE
    let Label_Export_Data_ToolsIDE = document.createElement('label');
    Label_Export_Data_ToolsIDE.innerHTML = `Tools And IDE`
    Label_Export_Data_ToolsIDE.setAttribute("class" , "control-label col-md-4 requiredField");
    MyLabel_Data_ToolsIDE.appendChild(Label_Export_Data_ToolsIDE);
        // EXPORT INPUT TOOLS AND IDE
    let Input_Export_Data_ToolsIDE = document.createElement('textarea');
    Input_Export_Data_ToolsIDE.setAttribute("class" , "input-md  textinput textInput form-control rows=5");
    Input_Export_Data_ToolsIDE.setAttribute("id" , "data_ToolsIDE");
    Input_Export_Data_ToolsIDE.setAttribute("name" , "data_ToolsIDE");
    Input_Export_Data_ToolsIDE.setAttribute("placeholder" , "insert programing language here...");
    Input_Export_Data_ToolsIDE.setAttribute("style" , "margin-bottom: 10px");
    Input_Export_Data_ToolsIDE.setAttribute("value" , `data_ToolsIDE`);
    MyInput_Data_ToolsIDE.appendChild(Input_Export_Data_ToolsIDE);
    console.log('Tools And IDE');
    for (let i = 0 ; i < data.data.skillsDetails.length ; i++)     {
        // variable for search word
        var Value_Word_ToolsIDE = data.data.skillsDetails[i].name;
        var Checking_Word_Git = Value_Word_ToolsIDE.search("Git");
        var Checking_Word_SVN = Value_Word_ToolsIDE.search("SVN");
        var Checking_Word_MSOFFICE = Value_Word_ToolsIDE.search("Microsoft");
        var Checking_Word_Adobe = Value_Word_ToolsIDE.search("Adobe");
        var Checking_Word_Xamarin = Value_Word_ToolsIDE.search("Xamarin");
        
        // condition to checking word
        if (Checking_Word_Git != -1 || Checking_Word_SVN != -1 || Checking_Word_MSOFFICE != -1 || Checking_Word_Adobe != -1 || Checking_Word_Xamarin != -1)    {
            let Message_Data_ToolsIDE = document.createTextNode(`${data.data.skillsDetails[i].name}` + '\n');
            console.log(Message_Data_ToolsIDE);
            Input_Export_Data_ToolsIDE.appendChild(Message_Data_ToolsIDE);
            }else{}
        }

    // ------------------------------------------------------------------------------------------------ //
        // EXPORT LABEL COMPANY NAME FIRST ONE
    let Label_Export_Data_Company_Work_Experiences = document.createElement('label');
    Label_Export_Data_Company_Work_Experiences.innerHTML = `Work Experiences`;
    Label_Export_Data_Company_Work_Experiences.setAttribute("class" , "control-label col-md-4 requiredField");
    MyLabel_Data_Company_Work_Experiences.appendChild(Label_Export_Data_Company_Work_Experiences);
        // EXPORT INPUT COMPANY NAME FIRST ONE
    console.log('COMPANY \n');
    let Input_Export_Data_Company_Work_Experiences = document.createElement('textarea');
    Input_Export_Data_Company_Work_Experiences.setAttribute("class" , "input-md  textinput textInput form-control rows=5");
    Input_Export_Data_Company_Work_Experiences.setAttribute("id" , "data_company_work_experiences");
    Input_Export_Data_Company_Work_Experiences.setAttribute("name" , "data_company_work_experiences");
    Input_Export_Data_Company_Work_Experiences.setAttribute("placeholder" , "insert working experiences here...");
    Input_Export_Data_Company_Work_Experiences.setAttribute("style" , "margin-bottom: 10px");
    Input_Export_Data_Company_Work_Experiences.setAttribute("value" , `data_company_work_experiences`);
    MyInput_Data_Company_Work_Experiences.appendChild(Input_Export_Data_Company_Work_Experiences);
    for (let i = 0 ; i < data.data.workExperience.length ; i++)  {
        // just count
        var count = i + 1;
        count = document.createTextNode(count + '.) \n');
        Input_Export_Data_Company_Work_Experiences.appendChild(count);
        // job name condition
        if(data.data.workExperience[i].jobTitle == null)    {
            let Message_Data_Company_Work_Experiences_Position = 'POSITION : ' + 'no data' + '\n';
            console.log((i+1) + '.) ' + Message_Data_Company_Work_Experiences_Position);
            Message_Data_Company_Work_Experiences_Position = document.createTextNode(Message_Data_Company_Work_Experiences_Position);
            Input_Export_Data_Company_Work_Experiences.appendChild(Message_Data_Company_Work_Experiences_Position);
            
        }else{
            let Message_Data_Company_Work_Experiences_Position = 'POSITION : ' + `${data.data.workExperience[i].jobTitle}` + '\n';
            console.log((i+1) + '.) ' + Message_Data_Company_Work_Experiences_Position);
            Message_Data_Company_Work_Experiences_Position = document.createTextNode(Message_Data_Company_Work_Experiences_Position);
            Input_Export_Data_Company_Work_Experiences.appendChild(Message_Data_Company_Work_Experiences_Position);
        }

        // organization condition
        if(data.data.workExperience[i].organization == null)    {
            let Message_Data_Company_Work_Experiences_Date_Organization = 'ORGANIZATION : ' + `no data` + '\n'; 
            console.log((i+1) + '.) ' + Message_Data_Company_Work_Experiences_Date_Organization);
            Message_Data_Company_Work_Experiences_Date_Organization = document.createTextNode(Message_Data_Company_Work_Experiences_Date_Organization); 
            Input_Export_Data_Company_Work_Experiences.appendChild(Message_Data_Company_Work_Experiences_Date_Organization);
            
        }else{
            let Message_Data_Company_Work_Experiences_Date_Organization = 'ORGANIZATION : ' + `${data.data.workExperience[i].organization}` + '\n';
            console.log((i+1) + '.) ' + Message_Data_Company_Work_Experiences_Date_Organization);
            Message_Data_Company_Work_Experiences_Date_Organization = document.createTextNode(Message_Data_Company_Work_Experiences_Date_Organization); 
            Input_Export_Data_Company_Work_Experiences.appendChild(Message_Data_Company_Work_Experiences_Date_Organization);
        }
        
        // started and ended date
        if(data.data.workExperience[i].dates == null)    {
            let Message_Data_Company_Work_Experiences_Date_Started = 'START DATE : ' + `no data` + '\n';  
            let Message_Data_Company_Work_Experiences_Date_Ended = 'END DATE : ' + `no data` + '\n';
            console.log((i+1) + '.) ' + Message_Data_Company_Work_Experiences_Date_Started);
            console.log((i+1) + '.) ' + Message_Data_Company_Work_Experiences_Date_Ended);
            Message_Data_Company_Work_Experiences_Date_Started = document.createTextNode(Message_Data_Company_Work_Experiences_Date_Started); 
            Message_Data_Company_Work_Experiences_Date_Ended = document.createTextNode(Message_Data_Company_Work_Experiences_Date_Ended); 
            Input_Export_Data_Company_Work_Experiences.appendChild(Message_Data_Company_Work_Experiences_Date_Started);
            Input_Export_Data_Company_Work_Experiences.appendChild(Message_Data_Company_Work_Experiences_Date_Ended);
        }else{
            let Message_Data_Company_Work_Experiences_Date_Started = 'START DATE : ' + `${data.data.workExperience[i].dates.startDate}` + '\n';  
            let Message_Data_Company_Work_Experiences_Date_Ended = 'END DATE : ' + `${data.data.workExperience[i].dates.endDate}` + '\n';
            console.log((i+1) + '.) ' + Message_Data_Company_Work_Experiences_Date_Started);
            console.log((i+1) + '.) ' + Message_Data_Company_Work_Experiences_Date_Ended);
            Message_Data_Company_Work_Experiences_Date_Started = document.createTextNode(Message_Data_Company_Work_Experiences_Date_Started); 
            Message_Data_Company_Work_Experiences_Date_Ended = document.createTextNode(Message_Data_Company_Work_Experiences_Date_Ended); 
            Input_Export_Data_Company_Work_Experiences.appendChild(Message_Data_Company_Work_Experiences_Date_Started);
            Input_Export_Data_Company_Work_Experiences.appendChild(Message_Data_Company_Work_Experiences_Date_Ended);
        }
        
        // job description detail 
        if(data.data.workExperience[i].organization == "null")    {
            let Message_Data_Company_Work_Experiences_Date_Description = 'JOB DETAIL : ' + `no data` + '\n'; 
            console.log((i+1) + '.) ' + Message_Data_Company_Work_Experiences_Date_Description);
            Message_Data_Company_Work_Experiences_Date_Description = document.createTextNode(Message_Data_Company_Work_Experiences_Date_Description); 
            Message_Data_Company_Work_Experiences_Date_Description.appendChild(Message_Data_Company_Work_Experiences_Date_Description);
            
        }else{
            let Message_Data_Company_Work_Experiences_Date_Description = 'JOB DETAIL : ' + `${data.data.workExperience[i].jobDescription}` + '\n';
            console.log((i+1) + '.) ' + Message_Data_Company_Work_Experiences_Date_Description);
            Message_Data_Company_Work_Experiences_Date_Description = document.createTextNode(Message_Data_Company_Work_Experiences_Date_Description); 
            Input_Export_Data_Company_Work_Experiences.appendChild(Message_Data_Company_Work_Experiences_Date_Description);
        } 
    }

    // ------------------------------------------------------------------------------------------------ //
            
    // ------------------------------------------------------------------------------------------------ //
        // EXPORT LABEL DATABASE FEATURES
    let Label_Export_Data_Database_Features = document.createElement('label');
    Label_Export_Data_Database_Features.innerHTML = `Database Feature`;
    Label_Export_Data_Database_Features.setAttribute("class" , "control-label col-md-4 requiredField");
    MyLabel_Data_Database_Features.appendChild(Label_Export_Data_Database_Features);
        // EXPORT INPUT DATABASE FEATURES
    let Input_Export_Data_Database_Features = document.createElement('textarea');
    Input_Export_Data_Database_Features.setAttribute("class" , "input-md  textinput textInput form-control");
    Input_Export_Data_Database_Features.setAttribute("id" , "data_database_features");
    Input_Export_Data_Database_Features.setAttribute("name" , "data_database_features");
    Input_Export_Data_Database_Features.setAttribute("placeholder" , "insert working database feature here...");
    Input_Export_Data_Database_Features.setAttribute("style" , "margin-bottom: 10px");
    Input_Export_Data_Database_Features.setAttribute("value" , `data_database_features`);
    MyInput_Data_Database_Features.appendChild(Input_Export_Data_Database_Features);
    console.log('Database Features' + '\n');
    for (let i = 0 ; i < data.data.skillsDetails.length ; i++)     {
        // variable for search word
        var Value_Word_Database_Features = data.data.skillsDetails[i].name;
        var Checking_Word_PLTUBSQL = Value_Word_Database_Features.search("PL/SQL");
        var Checking_Word_Function = Value_Word_Database_Features.search("Function");
        var Checking_Word_Stored_Procedure = Value_Word_Database_Features.search("Stored_Procedure");
        var Checking_Word_Trigger = Value_Word_Database_Features.search("Trigger");
        var Checking_Word_View = Value_Word_Database_Features.search("View");
        // condition to checking word
        if (Checking_Word_PLTUBSQL != -1 || Checking_Word_Function != -1 || Checking_Word_Stored_Procedure != -1 || Checking_Word_Trigger != -1 || Checking_Word_View != -1)    {
            let Message_Data_Database_Features = document.createTextNode(`${data.data.skillsDetails[i].name}` + '\n');
            console.log(Message_Data_Database_Features + '\n');
            Input_Export_Data_Database_Features.appendChild(Message_Data_Database_Features);
            }else{}
        }

    // ------------------------------------------------------------------------------------------------ //
        // EXPORT LABEL DATABASE TOOLS
    let Label_Export_Data_Database_Tools = document.createElement('label');
    Label_Export_Data_Database_Tools.innerHTML = `Database Tools`;
    Label_Export_Data_Database_Tools.setAttribute("class" , "control-label col-md-4 requiredField");
    MyLabel_Data_Database_Tools.appendChild(Label_Export_Data_Database_Tools);
        // EXPORT INPUT DATABASE TOOLS
    let Input_Export_Data_Database_Tools = document.createElement('textarea');
    Input_Export_Data_Database_Tools.setAttribute("class" , "input-md  textinput textInput form-control");
    Input_Export_Data_Database_Tools.setAttribute("id" , "data_database_tools");
    Input_Export_Data_Database_Tools.setAttribute("name" , "data_database_tools");
    Input_Export_Data_Database_Tools.setAttribute("placeholder" , "insert database tools here...");
    Input_Export_Data_Database_Tools.setAttribute("style" , "margin-bottom: 10px");
    Input_Export_Data_Database_Tools.setAttribute("value" , `data_database_tools`);
    MyInput_Data_Database_Tools.appendChild(Input_Export_Data_Database_Tools);
    console.log('Database Tools' + '\n');
    for (let i = 0 ; i < data.data.skillsDetails.length ; i++)     {
        // variable for search word
        var Value_Word_Database_Tools = data.data.skillsDetails[i].name;
        var Checking_Word_Power_Designer = Value_Word_Database_Tools.search("Power Designer");
        var Checking_Word_ER_Studio = Value_Word_Database_Tools.search("ER Studio");
        var Checking_Word_ER_Win = Value_Word_Database_Tools.search("ER-Win");
        var Checking_Word_Toad = Value_Word_Database_Tools.search("Toad");
        var Checking_Word_PLTUBSQL_DEV = Value_Word_Database_Tools.search("PL/SQL Developer");
        var Checking_Word_SQL_DEV = Value_Word_Database_Tools.search("SQL Developer");

        // condition to checking word
        if (Checking_Word_Power_Designer != -1 || Checking_Word_ER_Studio != -1 || Checking_Word_ER_Win != -1 || Checking_Word_Toad != -1 || 
            Checking_Word_PLTUBSQL_DEV != -1 || Checking_Word_SQL_DEV != -1)    {
            let Value_Word_Database_Tools = document.createTextNode(`${data.data.skillsDetails[i].name}` + '\n');
            console.log(Value_Word_Database_Tools + '\n');
            Input_Export_Data_Database_Tools.appendChild(Value_Word_Database_Tools);
            }else{}
        }

    // ------------------------------------------------------------------------------------------------ //
        // EXPORT INPUT APPLICATION SERVERS
    let Label_Export_Data_Application_Servers = document.createElement('label');
    Label_Export_Data_Application_Servers.innerHTML = `Application Servers`;
    Label_Export_Data_Application_Servers.setAttribute("class" , "control-label col-md-4 requiredField");
    MyLabel_Data_Application_Servers.appendChild(Label_Export_Data_Application_Servers);
        // EXPORT INPUT APPLICATION SERVERS
    let Input_Export_Data_Application_Servers = document.createElement('textarea');
    Input_Export_Data_Application_Servers.setAttribute("class" , "input-md  textinput textInput form-control");
    Input_Export_Data_Application_Servers.setAttribute("id" , "data_application_servers"); // database name!
    Input_Export_Data_Application_Servers.setAttribute("name" , "data_application_servers");
    Input_Export_Data_Application_Servers.setAttribute("placeholder" , "insert application servers here...");
    Input_Export_Data_Application_Servers.setAttribute("style" , "margin-bottom: 10px");
    Input_Export_Data_Application_Servers.setAttribute("value" , `data_application_servers`);
    MyInput_Data_Application_Servers.appendChild(Input_Export_Data_Application_Servers);
    console.log('Application Server' + '\n');
    for (let i = 0 ; i < data.data.skillsDetails.length ; i++)     {
        // variable for search word
        var Value_Word_Application_Servers= data.data.skillsDetails[i].name;
        var Checking_Word_Application_Server_Apache = Value_Word_Application_Servers.search("Apache");
        var Checking_Word_Application_Server_Tomcat = Value_Word_Application_Servers.search("Tomcat");
        var Checking_Word_Application_Server_JBoss = Value_Word_Application_Servers.search("JBoss");
        var Checking_Word_Application_Server_Web_Sphere = Value_Word_Application_Servers.search("Web Sphere");
        var Checking_Word_Application_Server_IIS = Value_Word_Application_Servers.search("IIS");
        var Checking_Word_Application_Server_SunAppServer = Value_Word_Application_Servers.search("SunAppServer");
        var Checking_Word_Application_Server_GlassFish = Value_Word_Application_Servers.search("GlassFish");
        var Checking_Word_Application_Server_WebLogic = Value_Word_Application_Servers.search("WebLogic");
        var Checking_Word_Application_Server_Jetty = Value_Word_Application_Servers.search("Jetty");
        var Checking_Word_Application_Server_WildFly = Value_Word_Application_Servers.search("WildFly");
        var Checking_Word_Application_Server_WebObjects = Value_Word_Application_Servers.search("WebObjects");

        // condition to checking word
        if (Checking_Word_Application_Server_Apache != -1 || Checking_Word_Application_Server_Tomcat != -1 || Checking_Word_Application_Server_JBoss != -1 ||
            Checking_Word_Application_Server_Web_Sphere != -1 || Checking_Word_Application_Server_IIS != -1 || Checking_Word_Application_Server_SunAppServer != -1 ||
            Checking_Word_Application_Server_GlassFish != -1 || Checking_Word_Application_Server_WebLogic != -1 || Checking_Word_Application_Server_Jetty != -1 ||
            Checking_Word_Application_Server_WildFly != -1 || Checking_Word_Application_Server_WebObjects != -1)    {
            let Value_Word_Application_Servers = document.createTextNode(`${data.data.skillsDetails[i].name}` + '\n');
            console.log(Value_Word_Application_Servers + '\n');
            Input_Export_Data_Application_Servers.appendChild(Value_Word_Application_Servers);
            }else{}
        }
    // ------------------------------------------------------------------------------------------------ //
        // EXPORT INPUT NETWORKS
    let Label_Export_Data_Networks = document.createElement('label');
    Label_Export_Data_Networks.innerHTML = `Networks`;
    Label_Export_Data_Networks.setAttribute("class" , "control-label col-md-4 requiredField");
    MyLabel_Data_Networks.appendChild(Label_Export_Data_Networks);
        // EXPORT INPUT NETWORKS
    let Input_Export_Data_Networks = document.createElement('textarea');
    Input_Export_Data_Networks.setAttribute("class" , "input-md  textinput textInput form-control");
    Input_Export_Data_Networks.setAttribute("id" , "data_networks"); // database name!
    Input_Export_Data_Networks.setAttribute("name" , "data_networks");
    Input_Export_Data_Networks.setAttribute("placeholder" , "insert networks skill here...");
    Input_Export_Data_Networks.setAttribute("style" , "margin-bottom: 10px");
    Input_Export_Data_Networks.setAttribute("value" , `data_networks`);
    MyInput_Data_Networks.appendChild(Input_Export_Data_Networks);
    console.log('Networks' + '\n');
    for (let i = 0 ; i < data.data.skillsDetails.length ; i++)     {
        // variable for search word
        var Value_Word_Networks= data.data.skillsDetails[i].name;
        var Checking_Word_Networks_Ftp = Value_Word_Networks.match(/Ftp/g);
        var Checking_Word_Networks_Telnet = Value_Word_Networks.match(/Telnet/g);
        var Checking_Word_Networks_POP3 = Value_Word_Networks.match(/POP3/g);
        var Checking_Word_Networks_SMTP = Value_Word_Networks.match(/SMTP/g);
        var Checking_Word_Networks_LDAP = Value_Word_Networks.match(/LDAP/g);
        var Checking_Word_Networks_TCPTUBIP = Value_Word_Networks.match("TCP/IP");
        var Checking_Word_Networks_HUB = Value_Word_Networks.match(/Hub/g);
        var Checking_Word_Networks_LAN = Value_Word_Networks.match(/Lan/g);
        var Checking_Word_Networks_WAN = Value_Word_Networks.match(/Wan/g);
        var Checking_Word_Networks_ROUNTER = Value_Word_Networks.match(/Rounter/g);
        var Checking_Word_Networks_SMS = Value_Word_Networks.match(/SMS/g);
        var Checking_Word_Networks_VPN = Value_Word_Networks.match(/VPN/g);
        var Checking_Word_Networks_Lan_fix = Value_Word_Networks.search("Language");

        // condition to checking word
        if (Checking_Word_Networks_Lan_fix == -1 && (Checking_Word_Networks_Ftp || Checking_Word_Networks_Telnet || Checking_Word_Networks_POP3 || Checking_Word_Networks_SMTP || Checking_Word_Networks_LDAP ||
            Checking_Word_Networks_TCPTUBIP || Checking_Word_Networks_HUB || Checking_Word_Networks_LAN || Checking_Word_Networks_WAN || Checking_Word_Networks_ROUNTER ||
            Checking_Word_Networks_SMS || Checking_Word_Networks_VPN)
            )    {
            let Value_Word_Networks = document.createTextNode(`${data.data.skillsDetails[i].name}` + '\n');
            console.log(Value_Word_Networks + '\n');
            Input_Export_Data_Networks.appendChild(Value_Word_Networks);
            }else{}
        }
    // ------------------------------------------------------------------------------------------------ //
        // EXPORT INPUT SECURITIES
    let Label_Export_Data_Securities = document.createElement('label');
    Label_Export_Data_Securities.innerHTML = `Securities`;
    Label_Export_Data_Securities.setAttribute("class" , "control-label col-md-4 requiredField");
    MyLabel_Data_Securities.appendChild(Label_Export_Data_Securities);
        // EXPORT INPUT SECURITIES
    let Input_Export_Data_Securities = document.createElement('textarea');
    Input_Export_Data_Securities.setAttribute("class" , "input-md  textinput textInput form-control");
    Input_Export_Data_Securities.setAttribute("id" , "data_securities"); // database name!
    Input_Export_Data_Securities.setAttribute("name" , "data_securities");
    Input_Export_Data_Securities.setAttribute("placeholder" , "insert securities skill here...");
    Input_Export_Data_Securities.setAttribute("style" , "margin-bottom: 10px");
    Input_Export_Data_Securities.setAttribute("value" , `data_securities`);
    MyInput_Data_Securities.appendChild(Input_Export_Data_Securities);
    console.log('Securities Skill' + '\n');
    for (let i = 0 ; i < data.data.skillsDetails.length ; i++)     {
        // variable for search word
        var Value_Word_Securities = data.data.skillsDetails[i].name;
        var Checking_Word_Securities_Encrypt = Value_Word_Securities.search("Encrypt");
        var Checking_Word_Securities_SSL = Value_Word_Securities.search("SSL");

        // condition to checking word
        if (Checking_Word_Securities_Encrypt != -1 || Checking_Word_Securities_SSL != -1)    {
            let Value_Word_Securities = document.createTextNode(`${data.data.skillsDetails[i].name}` + '\n');
            console.log(Value_Word_Securities + '\n');
            Input_Export_Data_Securities.appendChild(Value_Word_Securities);
            }else{}
        }   
    // ------------------------------------------------------------------------------------------------ //
        // EXPORT INPUT JAVA TECHNOLOGIES
    let Label_Export_Data_Java_Technologies = document.createElement('label');
    Label_Export_Data_Java_Technologies.innerHTML = `Java Technologies`;
    Label_Export_Data_Java_Technologies.setAttribute("class" , "control-label col-md-4 requiredField");
    MyLabel_Data_Java_Technologies.appendChild(Label_Export_Data_Java_Technologies);
        // EXPORT INPUT JAVA TECHNOLOGIES
    let Input_Export_Data_Java_Technologies = document.createElement('textarea');
    Input_Export_Data_Java_Technologies.setAttribute("class" , "input-md  textinput textInput form-control");
    Input_Export_Data_Java_Technologies.setAttribute("id" , "data_java_technologies"); // database name!
    Input_Export_Data_Java_Technologies.setAttribute("name" , "data_java_technologies");
    Input_Export_Data_Java_Technologies.setAttribute("placeholder" , "insert java technologies here...");
    Input_Export_Data_Java_Technologies.setAttribute("style" , "margin-bottom: 10px");
    Input_Export_Data_Java_Technologies.setAttribute("value" , `data_java_technologies`);
    MyInput_Data_Java_Technologies.appendChild(Input_Export_Data_Java_Technologies);
    console.log('Java Technologies' + '\n');
    for (let i = 0 ; i < data.data.skillsDetails.length ; i++)     {
        // variable for search word
        var Value_Word_Java_Technologies= data.data.skillsDetails[i].name;
        var Checking_Word_Java_Technologies_J2EE = Value_Word_Java_Technologies.search("J2EE");
        var Checking_Word_Java_Technologies_J2SE = Value_Word_Java_Technologies.search("J2SE");
        var Checking_Word_Java_Technologies_JSP = Value_Word_Java_Technologies.search("JSP");
        var Checking_Word_Java_Technologies_JSF = Value_Word_Java_Technologies.search("JSF");
        var Checking_Word_Java_Technologies_JPA = Value_Word_Java_Technologies.search("JPA");
        var Checking_Word_Java_Technologies_MVC = Value_Word_Java_Technologies.search("MVC");
        var Checking_Word_Java_Technologies_Servlet = Value_Word_Java_Technologies.search("Servlet");
        var Checking_Word_Java_Technologies_Stuts = Value_Word_Java_Technologies.search("Stuts");
        var Checking_Word_Java_Technologies_Hibernate = Value_Word_Java_Technologies.search("Hibernate");
        var Checking_Word_Java_Technologies_Log4j = Value_Word_Java_Technologies.search("Log4j");
        var Checking_Word_Java_Technologies_ApacheAxis = Value_Word_Java_Technologies.search("Apache Axis");
        var Checking_Word_Java_Technologies_JMeter = Value_Word_Java_Technologies.search("JMeter");
        var Checking_Word_Java_Technologies_JUnit = Value_Word_Java_Technologies.search("JUnit");
        var Checking_Word_Java_Technologies_SpringBoot = Value_Word_Java_Technologies.search("Spring Boot");
        var Checking_Word_Java_Technologies_JDBC = Value_Word_Java_Technologies.search("JDBC");
        var Checking_Word_Java_Technologies_Thymeleaf = Value_Word_Java_Technologies.search("Thymeleaf");
        var Checking_Word_Java_Technologies_POI = Value_Word_Java_Technologies.search("POI");

        // condition to checking word
        if (Checking_Word_Java_Technologies_J2EE != -1 || Checking_Word_Java_Technologies_J2SE != -1 || Checking_Word_Java_Technologies_JSP != -1 ||
            Checking_Word_Java_Technologies_JSF != -1 || Checking_Word_Java_Technologies_JPA != -1 || Checking_Word_Java_Technologies_MVC != -1 ||
            Checking_Word_Java_Technologies_Servlet != -1 || Checking_Word_Java_Technologies_Stuts != -1 || Checking_Word_Java_Technologies_Hibernate != -1 ||
            Checking_Word_Java_Technologies_Log4j != -1 || Checking_Word_Java_Technologies_ApacheAxis != -1 || Checking_Word_Java_Technologies_JMeter != -1 ||
            Checking_Word_Java_Technologies_JUnit != -1 || Checking_Word_Java_Technologies_SpringBoot != -1 || Checking_Word_Java_Technologies_JDBC != -1 ||
            Checking_Word_Java_Technologies_Thymeleaf != -1 || Checking_Word_Java_Technologies_POI != -1)    {
            let Value_Word_Java_Technologies = document.createTextNode(`${data.data.skillsDetails[i].name}` + '\n');
            console.log(Value_Word_Java_Technologies + '\n');
            Input_Export_Data_Java_Technologies.appendChild(Value_Word_Java_Technologies);
            }else{}
        }   
    // ------------------------------------------------------------------------------------------------ //
        // EXPORT INPUT JAVA SCRIPT TECHNOLOGIES
    let Label_Export_Data_Javascript_Technologies = document.createElement('label');
    Label_Export_Data_Javascript_Technologies.innerHTML = `Javascript technologies`;
    Label_Export_Data_Javascript_Technologies.setAttribute("class" , "control-label col-md-4 requiredField");
    MyLabel_Data_Java_Script_Technologies.appendChild(Label_Export_Data_Javascript_Technologies);
        // EXPORT INPUT JAVA SCRIPT TECHNOLOGIES
    let Input_Export_Data_Javascript_Technologies = document.createElement('textarea');
    Input_Export_Data_Javascript_Technologies.setAttribute("class" , "input-md  textinput textInput form-control");
    Input_Export_Data_Javascript_Technologies.setAttribute("id" , "data_javascript_technologies"); // database name!
    Input_Export_Data_Javascript_Technologies.setAttribute("name" , "data_javascript_technologies");
    Input_Export_Data_Javascript_Technologies.setAttribute("placeholder" , "insert javascript technologies here...");
    Input_Export_Data_Javascript_Technologies.setAttribute("style" , "margin-bottom: 10px");
    Input_Export_Data_Javascript_Technologies.setAttribute("value" , `data_javascript_technologies`);
    MyInput_Data_Java_Script_Technologies.appendChild(Input_Export_Data_Javascript_Technologies);
    console.log('Javascript Techonologies' + '\n');
    for (let i = 0 ; i < data.data.skillsDetails.length ; i++)     {
        // variable for search word
        var Value_Word_Javascript_Technologies = data.data.skillsDetails[i].name;
        var Checking_Word_Javascript_Technologies_Ajax = Value_Word_Javascript_Technologies.search("Ajax");
        var Checking_Word_Javascript_Technologies_jQuery = Value_Word_Javascript_Technologies.search("jQuery");
        var Checking_Word_Javascript_Technologies_EXT_JS = Value_Word_Javascript_Technologies.search("EXT JS");
        var Checking_Word_Javascript_Technologies_JSON = Value_Word_Javascript_Technologies.search("JSON");
        var Checking_Word_Javascript_Technologies_DWR = Value_Word_Javascript_Technologies.search("DWR");
        var Checking_Word_Javascript_Technologies_AngularJS = Value_Word_Javascript_Technologies.search("AngularJS");
        var Checking_Word_Javascript_Technologies_Vue = Value_Word_Javascript_Technologies.search("Vue.js");
        var Checking_Word_Javascript_Technologies_Reachjs = Value_Word_Javascript_Technologies.search("Reachjs");
        var Checking_Word_Javascript_Technologies_React_Native = Value_Word_Javascript_Technologies.search("React Native");
        var Checking_Word_Javascript_Technologies_Typescript = Value_Word_Javascript_Technologies.search("Typescript");
        var Checking_Word_Javascript_Technologies_Expressjs = Value_Word_Javascript_Technologies.search("Express.js");

        // condition to checking word
        if (Checking_Word_Javascript_Technologies_Ajax != -1 || Checking_Word_Javascript_Technologies_jQuery != -1 || Checking_Word_Javascript_Technologies_EXT_JS != -1 ||
            Checking_Word_Javascript_Technologies_JSON != -1 || Checking_Word_Javascript_Technologies_DWR != -1 || Checking_Word_Javascript_Technologies_AngularJS != -1 ||
            Checking_Word_Javascript_Technologies_Vue != -1 || Checking_Word_Javascript_Technologies_Reachjs != -1 || Checking_Word_Javascript_Technologies_React_Native != -1 ||
            Checking_Word_Javascript_Technologies_Typescript != -1 || Checking_Word_Javascript_Technologies_Expressjs != -1)    {
            let Value_Word_Javascript_Technologies = document.createTextNode(`${data.data.skillsDetails[i].name}` + '\n');
            console.log(Value_Word_Javascript_Technologies + '\n');
            Input_Export_Data_Javascript_Technologies.appendChild(Value_Word_Javascript_Technologies);
            }else{}
        }   
    // ------------------------------------------------------------------------------------------------ //
        // EXPORT INPUT VERSION CONTROL SYSTEM
    let Label_Export_Data_Version_Control_System = document.createElement('label');
    Label_Export_Data_Version_Control_System.innerHTML = `Version control system`;
    Label_Export_Data_Version_Control_System.setAttribute("class" , "control-label col-md-4 requiredField");
    MyLabel_Data_Version_Control_System.appendChild(Label_Export_Data_Version_Control_System);
        // EXPORT INPUT VERSION CONTROL SYSTEM
    let Input_Export_Data_Version_Control_System = document.createElement('textarea');
    Input_Export_Data_Version_Control_System.setAttribute("class" , "input-md  textinput textInput form-control");
    Input_Export_Data_Version_Control_System.setAttribute("id" , "data_version_control_system"); // database name!
    Input_Export_Data_Version_Control_System.setAttribute("name" , "data_version_control_system");
    Input_Export_Data_Version_Control_System.setAttribute("placeholder" , "insert data version control system here...");
    Input_Export_Data_Version_Control_System.setAttribute("style" , "margin-bottom: 10px");
    Input_Export_Data_Version_Control_System.setAttribute("value" , `data_version_control_system`);
    MyInput_Data_Version_Control_System.appendChild(Input_Export_Data_Version_Control_System);
    console.log('Securities Skill' + '\n');
    for (let i = 0 ; i < data.data.skillsDetails.length ; i++)     {
        // variable for search word
        var Value_Word_Version_Control_System = data.data.skillsDetails[i].name;
        var Checking_Word_Version_Control_System_MSS = Value_Word_Version_Control_System.search("Microsoft Source-Safe");
        var Checking_Word_Version_Control_System_StarTeam = Value_Word_Version_Control_System.search("Star Team");
        var Checking_Word_Version_Control_System_CVS = Value_Word_Version_Control_System.search("CVS");
        var Checking_Word_Version_Control_System_SVN = Value_Word_Version_Control_System.search("SVN");
        var Checking_Word_Version_Control_System_GIT = Value_Word_Version_Control_System.search("GIT");


        // condition to checking word
        if (Checking_Word_Version_Control_System_MSS != -1 || Checking_Word_Version_Control_System_StarTeam != -1 || Checking_Word_Version_Control_System_CVS != -1 ||
            Checking_Word_Version_Control_System_SVN != -1 || Checking_Word_Version_Control_System_GIT != -1)    {
            let Value_Word_Version_Control_System = document.createTextNode(`${data.data.skillsDetails[i].name}` + '\n');
            console.log(Value_Word_Version_Control_System + '\n');
            Input_Export_Data_Version_Control_System.appendChild(Value_Word_Version_Control_System);
            }else{}
        }   
    // ------------------------------------------------------------------------------------------------ //
        // EXPORT REPORTS
    let Label_Export_Data_Reports = document.createElement('label');
    Label_Export_Data_Reports.innerHTML = `Reports`;
    Label_Export_Data_Reports.setAttribute("class" , "control-label col-md-4 requiredField");
    MyLabel_Data_Report.appendChild(Label_Export_Data_Reports);
        // EXPORT REPORTS
    let Input_Export_Data_Reports = document.createElement('textarea');
    Input_Export_Data_Reports.setAttribute("class" , "input-md  textinput textInput form-control");
    Input_Export_Data_Reports.setAttribute("id" , "data_report"); // database name!
    Input_Export_Data_Reports.setAttribute("name" , "data_report");
    Input_Export_Data_Reports.setAttribute("placeholder" , "insert reports skill here...");
    Input_Export_Data_Reports.setAttribute("style" , "margin-bottom: 10px");
    Input_Export_Data_Reports.setAttribute("value" , `data_report`);
    MyInput_Data_Report.appendChild(Input_Export_Data_Reports);
    console.log('Reports Skill' + '\n');
    for (let i = 0 ; i < data.data.skillsDetails.length ; i++)     {
        // variable for search word
        var Value_Word_Reports = data.data.skillsDetails[i].name;
        var Checking_Word_Reports_Crystal_Report = Value_Word_Reports.search("Crystal Report");
        var Checking_Word_Reports_Jasper_Report = Value_Word_Reports.search("Jasper Report");
        var Checking_Word_Reports_iText = Value_Word_Reports.search("iText");
        var Checking_Word_Reports_iReport = Value_Word_Reports.search("iReport");
        var Checking_Word_Reports_Cognos = Value_Word_Reports.search("Cognos");
        var Checking_Word_Reports_Qilkview = Value_Word_Reports.search("Qilkview");
        var Checking_Word_Reports_Tableau = Value_Word_Reports.search("Tableau");
        var Checking_Word_Reports_PowerBi = Value_Word_Reports.search("PowerBi");
        // condition to checking word
        if (Checking_Word_Reports_Crystal_Report != -1 || Checking_Word_Reports_Jasper_Report != -1 || Checking_Word_Reports_iText != -1 ||
            Checking_Word_Reports_iReport != -1 || Checking_Word_Reports_Cognos != -1 || Checking_Word_Reports_Qilkview != -1 || Checking_Word_Reports_Tableau != -1 ||
            Checking_Word_Reports_PowerBi != -1)    {
            let Value_Word_Reports = document.createTextNode(`${data.data.skillsDetails[i].name}` + '\n');
            console.log(Value_Word_Reports + '\n');
            Input_Export_Data_Reports.appendChild(Value_Word_Reports);
            }else{}
        }   

    // ------------------------------------------------------------------------------------------------ //
        // EXPORT DESIGN TOOLS
    let Label_Export_Data_Design_Tools = document.createElement('label');
    Label_Export_Data_Design_Tools.innerHTML = `Design tools`;
    Label_Export_Data_Design_Tools.setAttribute("class" , "control-label col-md-4 requiredField");
    MyLabel_Data_Design_Tools.appendChild(Label_Export_Data_Design_Tools);
        // EXPORT DESIGN TOOLS
    let Input_Export_Data_Design_Tools = document.createElement('textarea');
    Input_Export_Data_Design_Tools.setAttribute("class" , "input-md  textinput textInput form-control");
    Input_Export_Data_Design_Tools.setAttribute("id" , "data_design_tools"); // database name!
    Input_Export_Data_Design_Tools.setAttribute("name" , "data_design_tools");
    Input_Export_Data_Design_Tools.setAttribute("placeholder" , "insert design tools here...");
    Input_Export_Data_Design_Tools.setAttribute("style" , "margin-bottom: 10px");
    Input_Export_Data_Design_Tools.setAttribute("value" , `data_design_tools`);
    MyInput_Data_Design_Tools.appendChild(Input_Export_Data_Design_Tools);
    console.log('Design tools' + '\n');
    for (let i = 0 ; i < data.data.skillsDetails.length ; i++)     {
        // variable for search word
        var Value_Word_Design_Tools = data.data.skillsDetails[i].name;
        var Checking_Word_Design_Tools_Dreamwever = Value_Word_Design_Tools.search("Dreamwever");
        var Checking_Word_Design_Tools_Visio = Value_Word_Design_Tools.search("Visio");
        var Checking_Word_Design_Tools_Rational_Rose = Value_Word_Design_Tools.search("Rational Rose");
        var Checking_Word_Design_Tools_Adobe_XD = Value_Word_Design_Tools.search("Adobe XD");
        var Checking_Word_Design_Tools_Adobe_Illustrator = Value_Word_Design_Tools.search("Adobe Illustrator");
        var Checking_Word_Design_Tools_Lightroom = Value_Word_Design_Tools.search("Lightroom");
        var Checking_Word_Design_Tools_Indesign = Value_Word_Design_Tools.search("Indesign");
        var Checking_Word_Design_Tools_Azure_RP = Value_Word_Design_Tools.search("Azure RP");
        // condition to checking word
        if (Checking_Word_Design_Tools_Dreamwever != -1 || Checking_Word_Design_Tools_Visio != -1 || Checking_Word_Design_Tools_Rational_Rose != -1 ||
            Checking_Word_Design_Tools_Adobe_XD != -1 || Checking_Word_Design_Tools_Adobe_Illustrator != -1 || Checking_Word_Design_Tools_Lightroom != -1 ||
            Checking_Word_Design_Tools_Indesign != -1 || Checking_Word_Design_Tools_Azure_RP != -1)    {
            let Value_Word_Design_Tools = document.createTextNode(`${data.data.skillsDetails[i].name}` + '\n');
            console.log(Value_Word_Design_Tools + '\n');
            Input_Export_Data_Design_Tools.appendChild(Value_Word_Design_Tools);
            }else{}
        }   
    // ------------------------------------------------------------------------------------------------ //
        // EXPORT OTHERS
    let Label_Export_Data_Others = document.createElement('label');
    Label_Export_Data_Others.innerHTML = `Others`;
    Label_Export_Data_Others.setAttribute("class" , "control-label col-md-4 requiredField");
    MyLabel_Data_Others.appendChild(Label_Export_Data_Others);
        // EXPORT OTHERS
    let Input_Export_Data_Others = document.createElement('textarea');
    Input_Export_Data_Others.setAttribute("class" , "input-md  textinput textInput form-control");
    Input_Export_Data_Others.setAttribute("id" , "data_others"); // database name!
    Input_Export_Data_Others.setAttribute("name" , "data_others");
    Input_Export_Data_Others.setAttribute("placeholder" , "insert others here...");
    Input_Export_Data_Others.setAttribute("style" , "margin-bottom: 10px");
    Input_Export_Data_Others.setAttribute("value" , `data_others`);
    MyInput_Data_Others.appendChild(Input_Export_Data_Others);
    console.log('Others' + '\n');
    for (let i = 0 ; i < data.data.skillsDetails.length ; i++)     {
        // variable for search word
        var Value_Word_Others = data.data.skillsDetails[i].name;
        var Checking_Word_Others_MS_OFFICE = Value_Word_Others.search("MS Office");
        var Checking_Word_Others_MS_PROJECT = Value_Word_Others.search("MS Project");
        var Checking_Word_Others_MS_EXCHANGE = Value_Word_Others.search("MS Exchange");
        var Checking_Word_Others_MDAEMON = Value_Word_Others.search("MDaemon");
        var Checking_Word_Others_FLASH = Value_Word_Others.search("Flash");
        var Checking_Word_Others_UML = Value_Word_Others.search("UML");
        // condition to checking word
        if (Checking_Word_Others_MS_OFFICE != -1 || Checking_Word_Others_MS_PROJECT != -1 || Checking_Word_Others_MS_EXCHANGE != -1 ||
            Checking_Word_Others_MDAEMON != -1 || Checking_Word_Others_FLASH != -1 || Checking_Word_Others_UML != -1)    {
            let Value_Word_Others = document.createTextNode(`${data.data.skillsDetails[i].name}` + '\n');
            console.log(Value_Word_Others + '\n');
            Input_Export_Data_Others.appendChild(Value_Word_Others);
            }else{}
        }   
    // ------------------------------------------------------------------------------------------------ //
        // EXPORT METHODOLOGIES
    let Label_Export_Data_Methodologies = document.createElement('label');
    Label_Export_Data_Methodologies.innerHTML = `Methodologies`;
    Label_Export_Data_Methodologies.setAttribute("class" , "control-label col-md-4 requiredField");
    MyLabel_Data_Methodologies.appendChild(Label_Export_Data_Methodologies);
        // EXPORT METHODOLOGIES
    let Input_Export_Data_Methodologies = document.createElement('textarea');
    Input_Export_Data_Methodologies.setAttribute("class" , "input-md  textinput textInput form-control");
    Input_Export_Data_Methodologies.setAttribute("id" , "data_methodologies"); // database name!
    Input_Export_Data_Methodologies.setAttribute("name" , "data_methodologies");
    Input_Export_Data_Methodologies.setAttribute("placeholder" , "insert methodologies here...");
    Input_Export_Data_Methodologies.setAttribute("style" , "margin-bottom: 10px");
    Input_Export_Data_Methodologies.setAttribute("value" , `data_methodologies`);
    MyInput_Data_Methodologies.appendChild(Input_Export_Data_Methodologies);
    console.log('Others' + '\n');
    for (let i = 0 ; i < data.data.skillsDetails.length ; i++)     {
        // variable for search word
        var Value_Word_Methodologies = data.data.skillsDetails[i].name;
        var Checking_Word_Methodologies_Agile = Value_Word_Methodologies.search("Agile");
        var Checking_Word_Methodologies_SCURM = Value_Word_Methodologies.search("SCURM");
        var Checking_Word_Methodologies_Waterfall = Value_Word_Methodologies.search("Waterfall");
        // condition to checking word
        if (Checking_Word_Methodologies_Agile != -1 || Checking_Word_Methodologies_SCURM != -1 || Checking_Word_Methodologies_Waterfall != -1)    {
            let Value_Word_Methodologies = document.createTextNode(`${data.data.skillsDetails[i].name}` + '\n');
            console.log(Value_Word_Methodologies + '\n');
            Input_Export_Data_Methodologies.appendChild(Value_Word_Methodologies);
            }else{}
        }   
    // ------------------------------------------------------------------------------------------------ //
        // EXPORT DEVOPS TECHNOLOGIES
    let Label_Export_Data_Devops_Technologies = document.createElement('label');
    Label_Export_Data_Devops_Technologies.innerHTML = `Devops Techonologies`;
    Label_Export_Data_Devops_Technologies.setAttribute("class" , "control-label col-md-4 requiredField");
    MyLabel_Data_DevOps_Technologies.appendChild(Label_Export_Data_Devops_Technologies);
        // EXPORT DEVOPS TECHNOLOGIES
    let Input_Export_Data_Devops_Technologies = document.createElement('textarea');
    Input_Export_Data_Devops_Technologies.setAttribute("class" , "input-md  textinput textInput form-control");
    Input_Export_Data_Devops_Technologies.setAttribute("id" , "data_devops_technologies"); // database name!
    Input_Export_Data_Devops_Technologies.setAttribute("name" , "data_devops_technologies");
    Input_Export_Data_Devops_Technologies.setAttribute("placeholder" , "insert devops technologies here...");
    Input_Export_Data_Devops_Technologies.setAttribute("style" , "margin-bottom: 10px");
    Input_Export_Data_Devops_Technologies.setAttribute("value" , `data_devops_technologies`);
    MyInput_Data_DevOps_Technologies.appendChild(Input_Export_Data_Devops_Technologies);
    console.log('Devops Technologies' + '\n');
    for (let i = 0 ; i < data.data.skillsDetails.length ; i++)     {
        // variable for search word
        var Value_Word_Devops_Technologies = data.data.skillsDetails[i].name;
        var Checking_Word_Devops_Technologies_Ansible = Value_Word_Devops_Technologies.search("Ansible");
        var Checking_Word_Devops_Technologies_Git = Value_Word_Devops_Technologies.search("Git");
        var Checking_Word_Devops_Technologies_Apache = Value_Word_Devops_Technologies.search("Apache");
        var Checking_Word_Devops_Technologies_Docker = Value_Word_Devops_Technologies.search("Docker");
        var Checking_Word_Devops_Technologies_Nginx = Value_Word_Devops_Technologies.search("Nginx");
        var Checking_Word_Devops_Technologies_Jenkins = Value_Word_Devops_Technologies.search("Jenkins");
        var Checking_Word_Devops_Technologies_Chef = Value_Word_Devops_Technologies.search("Chef");
        var Checking_Word_Devops_Technologies_Puppet = Value_Word_Devops_Technologies.search("Puppet");
        var Checking_Word_Devops_Technologies_Kafka = Value_Word_Devops_Technologies.search("Kafka");
        var Checking_Word_Devops_Technologies_Kubernetes = Value_Word_Devops_Technologies.search("Kubernetes");
        var Checking_Word_Devops_Technologies_Kibana = Value_Word_Devops_Technologies.search("Kibana");
        var Checking_Word_Devops_Technologies_Elasticsearch = Value_Word_Devops_Technologies.search("Elasticsearch");
        var Checking_Word_Devops_Technologies_Logstash = Value_Word_Devops_Technologies.search("Logstash");
        // condition to checking word
        if (Checking_Word_Devops_Technologies_Ansible != -1 || Checking_Word_Devops_Technologies_Git != -1 || Checking_Word_Devops_Technologies_Apache != -1 ||
            Checking_Word_Devops_Technologies_Docker != -1 || Checking_Word_Devops_Technologies_Nginx != -1 || Checking_Word_Devops_Technologies_Jenkins != -1 ||
            Checking_Word_Devops_Technologies_Chef != -1 || Checking_Word_Devops_Technologies_Puppet != -1 || Checking_Word_Devops_Technologies_Kafka != -1 ||
            Checking_Word_Devops_Technologies_Kubernetes != -1 || Checking_Word_Devops_Technologies_Kibana != -1 || Checking_Word_Devops_Technologies_Elasticsearch != -1 ||
            Checking_Word_Devops_Technologies_Logstash != -1)    {
            let Value_Word_Devops_Technologies = document.createTextNode(`${data.data.skillsDetails[i].name}` + '\n');
            console.log(Value_Word_Devops_Technologies + '\n');
            Input_Export_Data_Devops_Technologies.appendChild(Value_Word_Devops_Technologies);
            }else{}
        }   
    // ------------------------------------------------------------------------------------------------ //
        // EXPORT CLOUD TECHNOLOGIES
    let Label_Export_Data_Cloud_Technologies = document.createElement('label');
    Label_Export_Data_Cloud_Technologies.innerHTML = `Cloud Techonologies`;
    Label_Export_Data_Cloud_Technologies.setAttribute("class" , "control-label col-md-4 requiredField");
    MyLabel_Data_Cloud_Technologies.appendChild(Label_Export_Data_Cloud_Technologies);
        // EXPORT CLOUD TECHNOLOGIES
    let Input_Export_Data_Cloud_Technologies = document.createElement('textarea');
    Input_Export_Data_Cloud_Technologies.setAttribute("class" , "input-md  textinput textInput form-control");
    Input_Export_Data_Cloud_Technologies.setAttribute("id" , "data_cloud_technologies"); // database name!
    Input_Export_Data_Cloud_Technologies.setAttribute("name" , "data_cloud_technologies");
    Input_Export_Data_Cloud_Technologies.setAttribute("placeholder" , "insert cloud technologies here...");
    Input_Export_Data_Cloud_Technologies.setAttribute("style" , "margin-bottom: 10px");
    Input_Export_Data_Cloud_Technologies.setAttribute("value" , `data_cloud_technologies`);
    MyInput_Data_Cloud_Technologies.appendChild(Input_Export_Data_Cloud_Technologies);
    console.log('Cloud Technologies' + '\n');
    for (let i = 0 ; i < data.data.skillsDetails.length ; i++)     {
        // variable for search word
        var Value_Word_Cloud_Technologies = data.data.skillsDetails[i].name;
        var Checking_Word_Cloud_Technologies_AWS = Value_Word_Cloud_Technologies.search("AWS");
        var Checking_Word_Cloud_Technologies_GOOGLE_CLOUD = Value_Word_Cloud_Technologies.search("Google Cloud");
        var Checking_Word_Cloud_Technologies_PAAS = Value_Word_Cloud_Technologies.search("Paas");
        var Checking_Word_Cloud_Technologies_AZURE = Value_Word_Cloud_Technologies.search("Azure");
        var Checking_Word_Cloud_Technologies_LAAS = Value_Word_Cloud_Technologies.search("laaS");
        // condition to checking word
        if (Checking_Word_Cloud_Technologies_AWS != -1 || Checking_Word_Cloud_Technologies_GOOGLE_CLOUD != -1 || Checking_Word_Cloud_Technologies_PAAS != -1 ||
            Checking_Word_Cloud_Technologies_AZURE != -1 || Checking_Word_Cloud_Technologies_LAAS != -1)    {
            let Value_Word_Cloud_Technologies = document.createTextNode(`${data.data.skillsDetails[i].name}` + '\n');
            console.log(Value_Word_Cloud_Technologies + '\n');
            Input_Export_Data_Cloud_Technologies.appendChild(Value_Word_Cloud_Technologies);
            }else{}
        }   
    // ------------------------------------------------------------------------------------------------ //
    // EXPORT CLOUD TECHNOLOGIES
    let Label_Export_Data_Data_Tech_Stack = document.createElement('label');
    Label_Export_Data_Data_Tech_Stack.innerHTML = `Data Tech Stacks`;
    Label_Export_Data_Data_Tech_Stack.setAttribute("class" , "control-label col-md-4 requiredField");
    MyLabel_Data_Data_Tech_Stack.appendChild(Label_Export_Data_Data_Tech_Stack);
        // EXPORT CLOUD TECHNOLOGIES
    let Input_Export_Data_Data_Tech_Stack = document.createElement('textarea');
    Input_Export_Data_Data_Tech_Stack.setAttribute("class" , "input-md  textinput textInput form-control");
    Input_Export_Data_Data_Tech_Stack.setAttribute("id" , "data_data_tech_stack"); // database name!
    Input_Export_Data_Data_Tech_Stack.setAttribute("name" , "data_data_tech_stack");
    Input_Export_Data_Data_Tech_Stack.setAttribute("placeholder" , "insert data tech stack here...");
    Input_Export_Data_Data_Tech_Stack.setAttribute("style" , "margin-bottom: 10px");
    Input_Export_Data_Data_Tech_Stack.setAttribute("value" , `data_data_tech_stack`);
    MyInput_Data_Data_Tech_Stack.appendChild(Input_Export_Data_Data_Tech_Stack);
    console.log('Data Tech Stack' + '\n');
    for (let i = 0 ; i < data.data.skillsDetails.length ; i++)     {
        // variable for search word
        var Value_Word_Data_Tech_Stack = data.data.skillsDetails[i].name;
        var Checking_Word_Data_Tech_Stack_Tableau = Value_Word_Data_Tech_Stack.search("Tableau");
        var Checking_Word_Data_Tech_Stack_Cognos = Value_Word_Data_Tech_Stack.search("Cognos");
        var Checking_Word_Data_Tech_Stack_QilkView = Value_Word_Data_Tech_Stack.search("QilkView");
        var Checking_Word_Data_Tech_Stack_QilkSense = Value_Word_Data_Tech_Stack.search("QilkSense");
        var Checking_Word_Data_Tech_Stack_SAP_Business = Value_Word_Data_Tech_Stack.search("SAP Business");
        var Checking_Word_Data_Tech_Stack_Power_BI = Value_Word_Data_Tech_Stack.search("Power BI");
        var Checking_Word_Data_Tech_Stack_Hadoop = Value_Word_Data_Tech_Stack.search("Hadoop");
        var Checking_Word_Data_Tech_Stack_Hive_Apache = Value_Word_Data_Tech_Stack.search("Hive Apache");
        var Checking_Word_Data_Tech_Stack_Cloudera = Value_Word_Data_Tech_Stack.search("Cloudera");
        var Checking_Word_Data_Tech_Stack_Teradata = Value_Word_Data_Tech_Stack.search("Teradata");
        var Checking_Word_Data_Tech_Stack_Oracle = Value_Word_Data_Tech_Stack.search("Oracle");
        var Checking_Word_Data_Tech_Stack_Exadata = Value_Word_Data_Tech_Stack.search("Exadata");
        var Checking_Word_Data_Tech_Stack_Hyperion = Value_Word_Data_Tech_Stack.search("Hyperion");
        var Checking_Word_Data_Tech_Stack_Microsoft_BI = Value_Word_Data_Tech_Stack.search("Microsoft BI");
        var Checking_Word_Data_Tech_Stack_SAS = Value_Word_Data_Tech_Stack.search("SAS");
        var Checking_Word_Data_Tech_Stack_Splunk = Value_Word_Data_Tech_Stack.search("Splunk");
        var Checking_Word_Data_Tech_Stack_Cassandra = Value_Word_Data_Tech_Stack.search("Cassandra");
        var Checking_Word_Data_Tech_Stack_Scala = Value_Word_Data_Tech_Stack.search("Scala");
        var Checking_Word_Data_Tech_Stack_Pandas = Value_Word_Data_Tech_Stack.search("Pandas");
        var Checking_Word_Data_Tech_Stack_Elasticsearch = Value_Word_Data_Tech_Stack.search("Elasticsearch");
        var Checking_Word_Data_Tech_Stack_Weka = Value_Word_Data_Tech_Stack.search("Weka");
        var Checking_Word_Data_Tech_Stack_NEOFOURJ = Value_Word_Data_Tech_Stack.search("Neo4J");

        // condition to checking word
        if (Checking_Word_Data_Tech_Stack_Tableau != -1 || Checking_Word_Data_Tech_Stack_Cognos != -1 || Checking_Word_Data_Tech_Stack_QilkView != -1 ||
            Checking_Word_Data_Tech_Stack_QilkSense != -1 || Checking_Word_Data_Tech_Stack_SAP_Business != -1 || Checking_Word_Data_Tech_Stack_Power_BI != -1 ||
            Checking_Word_Data_Tech_Stack_Hadoop != -1 || Checking_Word_Data_Tech_Stack_Hive_Apache != -1 || Checking_Word_Data_Tech_Stack_Cloudera != -1 ||
            Checking_Word_Data_Tech_Stack_Teradata != -1 || Checking_Word_Data_Tech_Stack_Oracle != -1 || Checking_Word_Data_Tech_Stack_Exadata != -1 ||
            Checking_Word_Data_Tech_Stack_Hyperion != -1 || Checking_Word_Data_Tech_Stack_Microsoft_BI != -1 || Checking_Word_Data_Tech_Stack_SAS != -1 ||
            Checking_Word_Data_Tech_Stack_Splunk != -1 || Checking_Word_Data_Tech_Stack_Cassandra != -1 || Checking_Word_Data_Tech_Stack_Scala != -1 || 
            Checking_Word_Data_Tech_Stack_Pandas != -1 || Checking_Word_Data_Tech_Stack_Elasticsearch != -1 || Checking_Word_Data_Tech_Stack_Weka != -1 ||
            Checking_Word_Data_Tech_Stack_NEOFOURJ != -1)     {
            let Value_Word_Data_Tech_Stack = document.createTextNode(`${data.data.skillsDetails[i].name}` + '\n');
            console.log(Value_Word_Data_Tech_Stack + '\n');
            Input_Export_Data_Data_Tech_Stack.appendChild(Value_Word_Data_Tech_Stack);
            }else{}
        }   
    // ------------------------------------------------------------------------------------------------ //
        // EXPORT LABEL EDUCATION
    let Label_Export_Data_Education = document.createElement('label');
    Label_Export_Data_Education.innerHTML = `Education`;
    Label_Export_Data_Education.setAttribute("class" , "control-label col-md-4 requiredField");
    MyLabel_Data_Education.appendChild(Label_Export_Data_Education);
        // EXPORT INPUT EDUCATION
    console.log('EDUCATION \n');
    let Input_Export_Data_Education = document.createElement('textarea');
    Input_Export_Data_Education.setAttribute("class" , "input-md  textinput textInput form-control");
    Input_Export_Data_Education.setAttribute("id" , "data_company_work_experiences"); //database name!
    Input_Export_Data_Education.setAttribute("name" , "data_company_work_experiences");
    Input_Export_Data_Education.setAttribute("placeholder" , "insert experiences here...");
    Input_Export_Data_Education.setAttribute("style" , "margin-bottom: 10px");
    Input_Export_Data_Education.setAttribute("value" , `data_company_work_experiences`);
    MyInput_Data_Education.appendChild(Input_Export_Data_Education);

    for(let i = 0 ; i < data.data.education.length ; i++)       {
        //let Message_Data_Education_Department = document.createTextNode(`Department : ` + `${data.data.education[i].accreditation.education}` + `\n`);
        //let Message_Data_Education_University_Name = document.createTextNode(`Organization Name : ` + `${data.data.education[i].organization}` + `\n`);
        //let Message_Data_Education_DateEnd = `${data.data.education[i].dates.completionDate}`;
        // university name condition
        let count_education = document.createTextNode((i+1) + `.) `);
        Input_Export_Data_Education.appendChild(count_education);
        if(data.data.education[i].accreditation.education == null)    {
            let Message_Data_Education_Department = 'Department : ' + `no data` + '\n'; 
            console.log((i+1) + '.) ' + Message_Data_Education_Department);
            Message_Data_Education_Department = document.createTextNode(Message_Data_Education_Department); 
            Input_Export_Data_Education.appendChild(Message_Data_Education_Department);
        }else{
            let Message_Data_Education_Department = 'Department : ' + `${data.data.education[i].accreditation.education}` + '\n';
            console.log((i+1) + '.) ' + Message_Data_Education_Department);
            Message_Data_Education_Department = document.createTextNode(Message_Data_Education_Department); 
            Input_Export_Data_Education.appendChild(Message_Data_Education_Department);
        }
        // department condition
        if(data.data.education[i].organization == null)    {
            let Message_Data_Education_University_Name = 'Organization : ' + `no data` + '\n'; 
            console.log((i+1) + '.) ' + Message_Data_Education_University_Name);
            Message_Data_Education_University_Name = document.createTextNode(Message_Data_Education_University_Name); 
            Input_Export_Data_Education.appendChild(Message_Data_Education_University_Name);
        }else{
            let Message_Data_Education_University_Name = 'Organization : ' + `${data.data.education[i].organization}` + '\n';
            console.log((i+1) + '.) ' + Message_Data_Education_University_Name);
            Message_Data_Education_University_Name = document.createTextNode(Message_Data_Education_University_Name); 
            Input_Export_Data_Education.appendChild(Message_Data_Education_University_Name);
        }
        // Date-End condition
        if(data.data.education[i].dates == null)    {
            let Message_Data_Education_DateEnd = 'Complete Date : ' + `no data` + '\n'; 
            console.log((i+1) + '.) ' + Message_Data_Education_DateEnd);
            Message_Data_Education_DateEnd = document.createTextNode(Message_Data_Education_DateEnd); 
            Input_Export_Data_Education.appendChild(Message_Data_Education_DateEnd);
        }else{
            let Message_Data_Education_DateEnd = 'Complete Date : ' + `${data.data.education[i].dates.completionDate}` + '\n';
            console.log((i+1) + '.) ' + Message_Data_Education_DateEnd);
            Message_Data_Education_DateEnd = document.createTextNode(Message_Data_Education_DateEnd); 
            Input_Export_Data_Education.appendChild(Message_Data_Education_DateEnd);
        }
    }
    // ------------------------------------------------------------------------------------------------ //
         
        // EXPORT LABEL CERTIFICATION
     let Label_Export_Data_Certification = document.createElement('label');
     Label_Export_Data_Certification.innerHTML = `CERTIFICAITON`;
     Label_Export_Data_Certification.setAttribute("class" , "control-label col-md-4 requiredField");
     MyLabel_Data_Certification.appendChild(Label_Export_Data_Certification);
         // EXPORT INPUT CERTIFICATION
     console.log('CERTIFICATION \n');
     let Input_Export_Data_Certification = document.createElement('textarea');
     Input_Export_Data_Certification.setAttribute("class" , "input-md  textinput textInput form-control");
     Input_Export_Data_Certification.setAttribute("id" , "data_certification"); //database name!
     Input_Export_Data_Certification.setAttribute("name" , "data_certification");
     Input_Export_Data_Certification.setAttribute("placeholder" , "insert certification here...");
     Input_Export_Data_Certification.setAttribute("style" , "margin-bottom: 10px");
     Input_Export_Data_Certification.setAttribute("value" , `data_certification`);
     MyInput_Data_Certification.appendChild(Input_Export_Data_Certification);
 
     for(let i = 0 ; i < data.data.certifications.length ; i++)       {
         // university name condition
         let count_certification = document.createTextNode((i+1) + `.) `);
         Input_Export_Data_Certification.appendChild(count_certification);
         if(data.data.certifications[i] == null)    {
             let Message_Data_Certification_Name = 'Certification : ' + `no data` + '\n'; 
             console.log((i+1) + '.) ' + Message_Data_Certification_Name);
             Message_Data_Certification_Name = document.createTextNode(Message_Data_Certification_Name); 
             Input_Export_Data_Certification.appendChild(Message_Data_Certification_Name);
         }else{
             let Message_Data_Certification_Name = 'Certification : ' + `${data.data.certifications[i]}` + '\n';
             console.log((i+1) + '.) ' + Message_Data_Certification_Name);
             Message_Data_Certification_Name = document.createTextNode(Message_Data_Certification_Name); 
             Input_Export_Data_Certification.appendChild(Message_Data_Certification_Name);
         }
     }
    }else{console.log("Your click is more than : " + click)}
}

    // ----------------------- TOKEN HERE -------------------------
    let token = '2e31f86a2fbcf710e1b2d43f95514cc46b4defe8'
    function DeleteIdentifierID() 
    {
        
        let id = document.form_confirm_user.identification_ID.value;
        let identifier = id;
        console.log("Delete Identifier ID : " + identifier + " Complete");
            fetch(`https://resume-parser.affinda.com/public/api/v1/documents/${identifier}`, 
        {
            method: 'DELETE',
            headers: 
            {
                'Authorization': `Bearer ${token}`,
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        })
    }

    function FetchData()    {
        
        let id = document.form_confirm_user.identification_ID.value;
        let identifier = id;
        

        fetch(`https://resume-parser.affinda.com/public/api/v1/documents/${identifier}`,
            {
                method: 'GET',
                headers: {
                'Authorization': `Bearer ${token}`,
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                },
            })
            .then(response => response.json())
            .then(data => toForm(data))
            .catch(error => console.log(error))
            .catch(error => reject(error))
    }


