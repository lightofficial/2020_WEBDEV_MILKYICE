// ----------------------- GLOBAL VARIABLES -----------------------
var click = 0;
// ----------------------- TOKEN HERE -------------------------
 let token = '80a00e0296aec9c4e7a39bffc7986b90fead7606'


function toForm(data)   {
    click = click + 1;
    if (data.detail != "Not found." && click < 2 && data != undefined && data != null && data.data != null && data.data != undefined)  {
    
    // PERSONAL DETAIL {}
    let MyInput_Position = document.querySelector('#data_position');
    let MyInput_Data_Name_First = document.querySelector('#data_name_first');
    let MyInput_Data_Name_Last = document.querySelector('#data_name_last');
    let MyInput_Data_Name_First_Thai = document.querySelector('#data_name_first_thai');
    let MyInput_Data_Name_Last_Thai = document.querySelector('#data_name_last_thai');
    //let MySelect_Data_Gender = document.querySelector('#MySelect_Data_Gender');

    // QULIFICATION SUMMARY {}
    let MyInput_Data_Specialized_Background = document.querySelector('#data_specialized_background');
    let MyInput_Data_Project_Record = document.querySelector('#data_project_record');
    let MyInput_Data_Extra_Experiences = document.querySelector('#data_extra_experiences');
    let MyInput_Data_Soft_Skill = document.querySelector('#data_soft_skill');

    // Technical Expertise {}
    let MyInput_Data_Operating_System = document.querySelector('#data_operating_system');
    let MyInput_Data_Programing_Language = document.querySelector('#data_programing_language');
    let MyInput_Data_Database = document.querySelector('#data_database');
    let MyInput_Data_ToolsIDE = document.querySelector('#data_toolsIDE');
    let MyInput_Data_Database_Features = document.querySelector('#data_database_features');
    let MyInput_Data_Database_Tools = document.querySelector('#data_database_tools');
    let MyInput_Data_Application_Servers = document.querySelector('#data_application_servers');
    let MyInput_Data_Networks = document.querySelector('#data_networks');
    let MyInput_Data_Securities = document.querySelector('#data_securities');
    let MyInput_Data_Java_Technologies = document.querySelector('#data_java_technologies');
    let MyInput_Data_Java_Script_Technologies = document.querySelector('#data_java_script_technologies');
    let MyInput_Data_Version_Control_System = document.querySelector('#data_version_control_system');
    let MyInput_Data_Report = document.querySelector('#data_report');
    let MyInput_Data_Design_Tools = document.querySelector('#data_design_tools');
    let MyInput_Data_Methodologies = document.querySelector('#data_methodologies');
    let MyInput_Data_DevOps_Technologies = document.querySelector('#data_devops_technologies');
    let MyInput_Data_Cloud_Technologies = document.querySelector('#data_cloud_technologies');
    let MyInput_Data_Data_Tech_Stack = document.querySelector('#data_tech_stack');
    let MyInput_Data_Others = document.querySelector('#data_others');


    // PROFESSIONAL EXPERIENCES
    let MyInput_Data_Company_Work_Experiences = document.querySelector('#data_company_work_experiences');

    // EDUCATION
    let MyInput_Data_Education = document.querySelector('#data_education');

    // CERTIFICATION
    let MyInput_Data_Certification = document.querySelector('#data_certification');

    // EXPORT ZONE !
    // ------------------------------------------------------------------------------------------------ //
    MyInput_Data_Name_First.setAttribute("value" , `${data.data.name.first}`);
    MyInput_Data_Name_First.appendChild;
    // ------------------------------------------------------------------------------------------------ //
    MyInput_Data_Name_Last.setAttribute("value" , `${data.data.name.last}`);
    MyInput_Data_Name_Last.appendChild;
    // ------------------------------------------------------------------------------------------------ //
    // ------------------------------------------------------------------------------------------------ //
    /*    // EXPORT LABEL DATA GENDER
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
    document.getElementById('MySelect_Gender').appendChild(Option_Export_Data_Gender_Female);*/
    // ------------------------------------------------------------------------------------------------ //
    
    for (let i = 0 ; i < data.data.sections.length ; i++)  {
        if (data.data.sections[i].sectionType === 'Summary')   {
            let Message_Specialized_Background = `${data.data.sections[i].text}`; 
            MyInput_Data_Specialized_Background.innerHTML = Message_Specialized_Background;
            MyInput_Data_Specialized_Background.appendChild;
        }else{}
    }
    // ------------------------------------------------------------------------------------------------ //
    MyInput_Data_Project_Record.appendChild;
    // ------------------------------------------------------------------------------------------------ //
    let count_loop = 0;
    for (let i = 0 ; i < data.data.sections.length ; i++)  {
        if (data.data.sections[i].sectionType === 'WorkExperience')     {
            count_loop += 1;
            let Message_Data_Extra_Experiences = document.createTextNode(count_loop + '.) ' + `${data.data.sections[i].text}` + '\n');
            MyInput_Data_Extra_Experiences.appendChild(Message_Data_Extra_Experiences);
        }else{}
    }
    // ------------------------------------------------------------------------------------------------ //
    console.log('Skills : \n' );
    count_loop = 0;
    for (let i = 0 ; i < data.data.skillsDetails.length ; i++)     {
        if (data.data.skillsDetails[i].type === 'soft_skill')   {
            count_loop += 1;
            let Message_Export_Data_Soft_Skill = document.createTextNode(count_loop + '.) ' + `${data.data.skillsDetails[i].name}` + `\n`) ;
            console.log(count_loop + '.) ' +  `${data.data.skillsDetails[i].name}` + ' ' + '(' + `${data.data.skillsDetails[i].type}` + ')' );
            MyInput_Data_Soft_Skill.appendChild(Message_Export_Data_Soft_Skill);
        }
    }

    // ------------------------------------------------------------------------------------------------ //
    //MyInput_Data_Operating_System.appendChild;
    // ------------------------------------------------------------------------------------------------ //
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
                MyInput_Data_Programing_Language.appendChild(Message_Data_Programing_Language);
                }else{}
            }
        
    // ------------------------------------------------------------------------------------------------ //
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
            MyInput_Data_Database.appendChild(Message_Data_Database);
            }else{}
        }

    // ------------------------------------------------------------------------------------------------ //
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
            MyInput_Data_ToolsIDE.appendChild(Message_Data_ToolsIDE);
            }else{}
        }
        count_loop = 0;
    // ------------------------------------------------------------------------------------------------ //
    for (let i = 0 ; i < data.data.workExperience.length ; i++)  {
        // just count
        count_loop += 1;
        count = document.createTextNode(count_loop + '.) \n');
        MyInput_Data_Company_Work_Experiences.appendChild(count);
        // job name condition
        if(data.data.workExperience[i].jobTitle == null)    {
            let Message_Data_Company_Work_Experiences_Position = 'POSITION : ' + 'no data' + '\n';
            console.log((i+1) + '.) ' + Message_Data_Company_Work_Experiences_Position);
            Message_Data_Company_Work_Experiences_Position = document.createTextNode(Message_Data_Company_Work_Experiences_Position);
            MyInput_Data_Company_Work_Experiences.appendChild(Message_Data_Company_Work_Experiences_Position);
            
        }else{
            let Message_Data_Company_Work_Experiences_Position = 'POSITION : ' + `${data.data.workExperience[i].jobTitle}` + '\n';
            console.log((i+1) + '.) ' + Message_Data_Company_Work_Experiences_Position);
            Message_Data_Company_Work_Experiences_Position = document.createTextNode(Message_Data_Company_Work_Experiences_Position);
            MyInput_Data_Company_Work_Experiences.appendChild(Message_Data_Company_Work_Experiences_Position);
        }

        // organization condition
        if(data.data.workExperience[i].organization == null)    {
            let Message_Data_Company_Work_Experiences_Date_Organization = 'ORGANIZATION : ' + `no data` + '\n'; 
            console.log((i+1) + '.) ' + Message_Data_Company_Work_Experiences_Date_Organization);
            Message_Data_Company_Work_Experiences_Date_Organization = document.createTextNode(Message_Data_Company_Work_Experiences_Date_Organization); 
            MyInput_Data_Company_Work_Experiences.appendChild(Message_Data_Company_Work_Experiences_Date_Organization);
            
        }else{
            let Message_Data_Company_Work_Experiences_Date_Organization = 'ORGANIZATION : ' + `${data.data.workExperience[i].organization}` + '\n';
            console.log((i+1) + '.) ' + Message_Data_Company_Work_Experiences_Date_Organization);
            Message_Data_Company_Work_Experiences_Date_Organization = document.createTextNode(Message_Data_Company_Work_Experiences_Date_Organization); 
            MyInput_Data_Company_Work_Experiences.appendChild(Message_Data_Company_Work_Experiences_Date_Organization);
        }
        
        // started and ended date
        if(data.data.workExperience[i].dates == null)    {
            let Message_Data_Company_Work_Experiences_Date_Started = 'START DATE : ' + `no data` + '\n';  
            let Message_Data_Company_Work_Experiences_Date_Ended = 'END DATE : ' + `no data` + '\n';
            console.log((i+1) + '.) ' + Message_Data_Company_Work_Experiences_Date_Started);
            console.log((i+1) + '.) ' + Message_Data_Company_Work_Experiences_Date_Ended);
            Message_Data_Company_Work_Experiences_Date_Started = document.createTextNode(Message_Data_Company_Work_Experiences_Date_Started); 
            Message_Data_Company_Work_Experiences_Date_Ended = document.createTextNode(Message_Data_Company_Work_Experiences_Date_Ended); 
            MyInput_Data_Company_Work_Experiences.appendChild(Message_Data_Company_Work_Experiences_Date_Started);
            MyInput_Data_Company_Work_Experiences.appendChild(Message_Data_Company_Work_Experiences_Date_Ended);
        }else{
            let Message_Data_Company_Work_Experiences_Date_Started = 'START DATE : ' + `${data.data.workExperience[i].dates.startDate}` + '\n';  
            let Message_Data_Company_Work_Experiences_Date_Ended = 'END DATE : ' + `${data.data.workExperience[i].dates.endDate}` + '\n';
            console.log((i+1) + '.) ' + Message_Data_Company_Work_Experiences_Date_Started);
            console.log((i+1) + '.) ' + Message_Data_Company_Work_Experiences_Date_Ended);
            Message_Data_Company_Work_Experiences_Date_Started = document.createTextNode(Message_Data_Company_Work_Experiences_Date_Started); 
            Message_Data_Company_Work_Experiences_Date_Ended = document.createTextNode(Message_Data_Company_Work_Experiences_Date_Ended); 
            MyInput_Data_Company_Work_Experiences.appendChild(Message_Data_Company_Work_Experiences_Date_Started);
            MyInput_Data_Company_Work_Experiences.appendChild(Message_Data_Company_Work_Experiences_Date_Ended);
        }
        
        // job description detail 
        if(data.data.workExperience[i].organization == "null")    {
            let Message_Data_Company_Work_Experiences_Date_Description = 'JOB DETAIL : ' + `no data` + '\n'; 
            console.log((i+1) + '.) ' + Message_Data_Company_Work_Experiences_Date_Description);
            Message_Data_Company_Work_Experiences_Date_Description = document.createTextNode(Message_Data_Company_Work_Experiences_Date_Description); 
            MyInput_Data_Company_Work_Experiences.appendChild(Message_Data_Company_Work_Experiences_Date_Description);
            
        }else{
            let Message_Data_Company_Work_Experiences_Date_Description = 'JOB DETAIL : ' + `${data.data.workExperience[i].jobDescription}` + '\n';
            console.log((i+1) + '.) ' + Message_Data_Company_Work_Experiences_Date_Description);
            Message_Data_Company_Work_Experiences_Date_Description = document.createTextNode(Message_Data_Company_Work_Experiences_Date_Description); 
            MyInput_Data_Company_Work_Experiences.appendChild(Message_Data_Company_Work_Experiences_Date_Description);
        } 
    }

    // ------------------------------------------------------------------------------------------------ //
            
    // ------------------------------------------------------------------------------------------------ //
    console.log('Database Features' + '\n');
    count_loop = 0;
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
            count_loop += 1;
            let Message_Data_Database_Features = document.createTextNode(count_loop , '.) ' + `${data.data.skillsDetails[i].name}` + '\n');
            console.log(Message_Data_Database_Features + '\n');
            MyInput_Data_Database_Features.appendChild(Message_Data_Database_Features);
            }else{}
        }

    // ------------------------------------------------------------------------------------------------ //
    console.log('Database Tools' + '\n');
    count_loop = 0;
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
            count_loop += 1;
            let Value_Word_Database_Tools = document.createTextNode(count_loop + '.) ' + `${data.data.skillsDetails[i].name}` + '\n');
            console.log(Value_Word_Database_Tools + '\n');
            MyInput_Data_Database_Tools.appendChild(Value_Word_Database_Tools);
            }else{}
        }
    // ------------------------------------------------------------------------------------------------ //
    count_loop = 0;
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
            count_loop += 1;
            let Value_Word_Application_Servers = document.createTextNode(count_loop + '.) ' + `${data.data.skillsDetails[i].name}` + '\n');
            console.log(Value_Word_Application_Servers + '\n');
            MyInput_Data_Application_Servers.appendChild(Value_Word_Application_Servers);
            }else{}
        }
    // ------------------------------------------------------------------------------------------------ //
    count_loop = 0;
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
            count_loop += 1;
            let Value_Word_Networks = document.createTextNode(count_loop + '.) ' + `${data.data.skillsDetails[i].name}` + '\n');
            console.log(Value_Word_Networks + '\n');
            MyInput_Data_Networks.appendChild(Value_Word_Networks);
            }else{}
        }
    // ------------------------------------------------------------------------------------------------ //
    count_loop = 0;
    console.log('Securities Skill' + '\n');
    for (let i = 0 ; i < data.data.skillsDetails.length ; i++)     {
        // variable for search word
        var Value_Word_Securities = data.data.skillsDetails[i].name;
        var Checking_Word_Securities_Encrypt = Value_Word_Securities.search("Encrypt");
        var Checking_Word_Securities_SSL = Value_Word_Securities.search("SSL");

        // condition to checking word
        if (Checking_Word_Securities_Encrypt != -1 || Checking_Word_Securities_SSL != -1)    {
            count_loop += 1;
            let Value_Word_Securities = document.createTextNode(count_loop + '.) ' + `${data.data.skillsDetails[i].name}` + '\n');
            console.log(Value_Word_Securities + '\n');
            MyInput_Data_Securities.appendChild(Value_Word_Securities);
            }else{}
        }   
    // ------------------------------------------------------------------------------------------------ //
    count_loop = 0;
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
            count_loop += 1;
            let Value_Word_Java_Technologies = document.createTextNode(count_loop + '.) ' +`${data.data.skillsDetails[i].name}` + '\n');
            console.log(Value_Word_Java_Technologies + '\n');
            MyInput_Data_Java_Technologies.appendChild(Value_Word_Java_Technologies);
            }else{}
        }   
    // ------------------------------------------------------------------------------------------------ //
    count_loop = 0;
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
            count_loop += 1;
            let Value_Word_Javascript_Technologies = document.createTextNode(count_loop + '.) ' + `${data.data.skillsDetails[i].name}` + '\n');
            console.log(Value_Word_Javascript_Technologies + '\n');
            MyInput_Data_Java_Script_Technologies.appendChild(Value_Word_Javascript_Technologies);
            }else{}
        }   
    // ------------------------------------------------------------------------------------------------ //
    count_loop = 0;
    console.log('Version Control System' + '\n');
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
            count_loop += 1;
            let Value_Word_Version_Control_System = document.createTextNode(count_loop + '.) ' + `${data.data.skillsDetails[i].name}` + '\n');
            console.log(Value_Word_Version_Control_System + '\n');
            MyInput_Data_Version_Control_System.appendChild(Value_Word_Version_Control_System);
            }else{}
        }   
    // ------------------------------------------------------------------------------------------------ //
    count_loop = 0;
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
            count_loop += 1;
            let Value_Word_Reports = document.createTextNode(count_loop + '.) ' + `${data.data.skillsDetails[i].name}` + '\n');
            console.log(Value_Word_Reports + '\n');
            MyInput_Data_Report.appendChild(Value_Word_Reports);
            }else{}
        }   

    // ------------------------------------------------------------------------------------------------ //
    count_loop = 0;
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
            count_loop += 1;
            let Value_Word_Design_Tools = document.createTextNode(count_loop + '.) ' + `${data.data.skillsDetails[i].name}` + '\n');
            console.log(Value_Word_Design_Tools + '\n');
            MyInput_Data_Design_Tools.appendChild(Value_Word_Design_Tools);
            }else{}
        }   
    // ------------------------------------------------------------------------------------------------ //
    count_loop = 0;
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
            count_loop += 1;
            let Value_Word_Others = document.createTextNode(count_loop + '.) ' + `${data.data.skillsDetails[i].name}` + '\n');
            console.log(Value_Word_Others + '\n');
            MyInput_Data_Others.appendChild(Value_Word_Others);
            }else{}
        }   
    // ------------------------------------------------------------------------------------------------ //
    count_loop = 0;
    console.log('Methodologies' + '\n');
    for (let i = 0 ; i < data.data.skillsDetails.length ; i++)     {
        // variable for search word
        var Value_Word_Methodologies = data.data.skillsDetails[i].name;
        var Checking_Word_Methodologies_Agile = Value_Word_Methodologies.search("Agile");
        var Checking_Word_Methodologies_SCURM = Value_Word_Methodologies.search("SCURM");
        var Checking_Word_Methodologies_Waterfall = Value_Word_Methodologies.search("Waterfall");
        // condition to checking word
        if (Checking_Word_Methodologies_Agile != -1 || Checking_Word_Methodologies_SCURM != -1 || Checking_Word_Methodologies_Waterfall != -1)    {
            count_loop += 1;
            let Value_Word_Methodologies = document.createTextNode(count_loop + '.) ' + `${data.data.skillsDetails[i].name}` + '\n');
            console.log(Value_Word_Methodologies + '\n');
            MyInput_Data_Methodologies.appendChild(Value_Word_Methodologies);
            }else{}
        }   
    // ------------------------------------------------------------------------------------------------ //
    count_loop = 0;
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
            count_loop += 1;
            let Value_Word_Devops_Technologies = document.createTextNode(count_loop + '.) ' + `${data.data.skillsDetails[i].name}` + '\n');
            console.log(Value_Word_Devops_Technologies + '\n');
            MyInput_Data_DevOps_Technologies.appendChild(Value_Word_Devops_Technologies);
            }else{}
        }   
    // ------------------------------------------------------------------------------------------------ //
    count_loop = 0;
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
            count_loop += 1;
            let Value_Word_Cloud_Technologies = document.createTextNode(count_loop + '.) ' + `${data.data.skillsDetails[i].name}` + '\n');
            console.log(Value_Word_Cloud_Technologies + '\n');
            MyInput_Data_Cloud_Technologies.appendChild(Value_Word_Cloud_Technologies);
            }else{}
        }   
    // ------------------------------------------------------------------------------------------------ //
    count_loop = 0;
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
            count_loop += 1;
            let Value_Word_Data_Tech_Stack = document.createTextNode(count_loop + '.)' + `${data.data.skillsDetails[i].name}` + '\n');
            console.log(Value_Word_Data_Tech_Stack + '\n');
            MyInput_Data_Data_Tech_Stack.appendChild(Value_Word_Data_Tech_Stack);
            }else{}
        }   
    // ------------------------------------------------------------------------------------------------ //
    console.log('EDUCATION \n');
    for(let i = 0 ; i < data.data.education.length ; i++)       {
        let count_education = document.createTextNode((i+1) + `.) `);
        MyInput_Data_Education.appendChild(count_education);
        if(data.data.education[i].accreditation.education == null)    {
            let Message_Data_Education_Department = 'Department : ' + `no data` + '\n'; 
            console.log((i+1) + '.) ' + Message_Data_Education_Department);
            Message_Data_Education_Department = document.createTextNode(Message_Data_Education_Department); 
            MyInput_Data_Education.appendChild(Message_Data_Education_Department);
        }else{
            let Message_Data_Education_Department = 'Department : ' + `${data.data.education[i].accreditation.education}` + '\n';
            console.log((i+1) + '.) ' + Message_Data_Education_Department);
            Message_Data_Education_Department = document.createTextNode(Message_Data_Education_Department); 
            MyInput_Data_Education.appendChild(Message_Data_Education_Department);
        }
        // department condition
        if(data.data.education[i].organization == null)    {
            let Message_Data_Education_University_Name = 'Organization : ' + `no data` + '\n'; 
            console.log((i+1) + '.) ' + Message_Data_Education_University_Name);
            Message_Data_Education_University_Name = document.createTextNode(Message_Data_Education_University_Name); 
            MyInput_Data_Education.appendChild(Message_Data_Education_University_Name);
        }else{
            let Message_Data_Education_University_Name = 'Organization : ' + `${data.data.education[i].organization}` + '\n';
            console.log((i+1) + '.) ' + Message_Data_Education_University_Name);
            Message_Data_Education_University_Name = document.createTextNode(Message_Data_Education_University_Name); 
            MyInput_Data_Education.appendChild(Message_Data_Education_University_Name);
        }
        // Date-End condition
        if(data.data.education[i].dates == null)    {
            let Message_Data_Education_DateEnd = 'Complete Date : ' + `no data` + '\n'; 
            console.log((i+1) + '.) ' + Message_Data_Education_DateEnd);
            Message_Data_Education_DateEnd = document.createTextNode(Message_Data_Education_DateEnd); 
            MyInput_Data_Education.appendChild(Message_Data_Education_DateEnd);
        }else{
            let Message_Data_Education_DateEnd = 'Complete Date : ' + `${data.data.education[i].dates.completionDate}` + '\n';
            console.log((i+1) + '.) ' + Message_Data_Education_DateEnd);
            Message_Data_Education_DateEnd = document.createTextNode(Message_Data_Education_DateEnd); 
            MyInput_Data_Education.appendChild(Message_Data_Education_DateEnd);
        }
    }
    // ------------------------------------------------------------------------------------------------ //
     console.log('CERTIFICATION \n');
     for(let i = 0 ; i < data.data.certifications.length ; i++)       {
         // university name condition
         let count_certification = document.createTextNode((i+1) + `.) `);
         MyInput_Data_Certification.appendChild(count_certification);
         if(data.data.certifications[i] == null)    {
             let Message_Data_Certification_Name = 'Certification : ' + `no data` + '\n'; 
             console.log((i+1) + '.) ' + Message_Data_Certification_Name);
             Message_Data_Certification_Name = document.createTextNode(Message_Data_Certification_Name); 
             MyInput_Data_Certification.appendChild(Message_Data_Certification_Name);
         }else{
             let Message_Data_Certification_Name = 'Certification : ' + `${data.data.certifications[i]}` + '\n';
             console.log((i+1) + '.) ' + Message_Data_Certification_Name);
             Message_Data_Certification_Name = document.createTextNode(Message_Data_Certification_Name); 
             MyInput_Data_Certification.appendChild(Message_Data_Certification_Name);
         }
     }
    }else if(click >= 2){console.log("Your click is more than : " + click);
                        alert("Your click is more than : " + click);
    }else{console.log("Identification ID is not right or undefind!!");
        alert("Identification ID is not right or undefind!!");}
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
    function DeleteIdentifierID() 
    {
        let id = document.form_confirm_user.identification_ID.value;
        let identifier = id;
        alert("DELETE \nIdentifier ID : " + identifier + "\n Complete");
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

    


