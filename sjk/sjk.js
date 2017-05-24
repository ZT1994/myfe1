    var fs = require('fs');
    var readline = require('readline');
    var rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    log();
    function log(){
        console.log('请输入账号密码');
        rl.on('line',function(line){
            var str = line.toString();
            if(str == 'sjk1234'){
                console.log('管理员已登录' +
                    '您能对数据库进行创建、插值、更新、删除、索引、查询的操作');
                menu1();
            }else if(str == 'sjk'){
                console.log('用户已登录'+'您能对数据库进行创建、插值、索引、查询的操作');
                menu2();
            }else{

            }
        });
    }
    function menu1(){
        var str1;
        console.log('请输入对数据库要进行的指令：');
        rl.on('line',function(line){
            var arr = line.toString().split(' ');

            switch(arr[0]){
                //create table s num name age sex     create table g num sc grade
                case 'create':{
                    var str = '';
                    var length = arr.length-3;
                    for(var i = 0;i < length;i++){
                        str = str + arr[i+3] + ' ';
                    }
                    fs.writeFile(arr[2]+'.txt', str + '; ', function (err) {
                        if (err) throw err;
                        console.log(arr[2]+'表已建立'); //文件被保存
                    });
                    fs.writeFile(arr[2]+ 'dictionary' +'.txt', str, function (err) {
                        if (err) throw err;
                    });
                    break;
                }
                //insert into s num name age sex values 1 zhao 20 w  insert into g num sc grade values 1 math 90
                case 'insert':{
                    var length = (arr.length - 4) / 2;
                    var str = '';
                    for(var i = 0;i < length;i++){
                        str = str + arr[(i+length+4)] + ' ';
                    }
                    fs.appendFile(arr[2]+'.txt', str + '; ', function (err) {
                        if (err) throw err;
                        console.log('添加成功'); //数据被添加到文件的尾部
                    });
                    break;
                }
                    //alter table s add address   name num age sex;zhao 1 20 m;
                case 'alter':{
                    fs.readFile('./'+arr[2]+'.txt','UTF-8',function (err, data){
                        if(err) throw err;
                        var rol = data.split(';').length;
                        var col = data.split(' ').length;
                        var num = col/rol;
                        var arr1 = data.split(' ');
                        var myadd = arr[arr.length - 1];  //address
                        arr1.splice(num,0,myadd);
                        console.log(arr1);
                        var str = '';
                        for(var a = 0;a < arr1.length ;a++){
                            str = str + arr1[a]+' ';
                        }
                        fs.writeFile(arr[2]+'.txt', str, function (err) {
                            if (err) throw err;
                            console.log('已更新'); //文件被保存
                        });
                        fs.appendFile(arr[2]+ 'dictionary' +'.txt', myadd, function (err) {
                            if (err) throw err;
                        });


                    });


                }
                //select from s where id = 1
                case 'select':{
                    fs.readFile('./'+arr[2]+'.txt','UTF-8',function (err, data) {
                        if (err) throw err;
                        var mySelect = arr[arr.length-1];
                        //console.log(arr.length-1);
                        var arrSelect = data.split(';');
                        //console.log(arrSelect);
                        for(var i = 0;i < arrSelect.length;i++){
                            // console.log(arrSelect[i].match("lixin 1"));
                            if(arrSelect[i].match(mySelect)){
                                console.log(arrSelect[i]);

                            }
                        }
                    });
                    break;
                }
                //update s set id = 2 where id = 1
                case 'update':{
                    fs.readFile('./'+arr[1]+'.txt','UTF-8',function (err, data) {
                        if (err) throw err;
                        // console.log(arr.length);
                        var num = arr.length;
                        var mySelect = arr[num-1];
                        var arrSelect = data.split(' ');
                        //var arr2 = [];
                        //var flag = 0;
                        var str = '';
                        //var str1 = '';
                        for(var i = 0;i < arrSelect.length;i++){
                            if(arrSelect[i]==mySelect){
                                        arrSelect[i] = arr[num-5];
                                        str = '';
                                        for(var a = 0;a < arrSelect.length;a++){
                                            str = str + arrSelect[a]+' ';
                                    }
                                fs.writeFile(arr[1]+'.txt', str, function (err) {
                                    if (err) throw err;
                                    console.log('已更新'); //文件被保存
                                });
                                }
                            }

                    });


                    break;
                }

                //delete from s where id = 1
                case 'delete':{
                    fs.readFile('./'+arr[2]+'.txt','UTF-8',function (err, data) {
                        if (err) throw err;
                        // console.log(arr.length);
                        var num = arr.length;
                        // var arr1 = arr.toString().split(' ');
                        var mySelect = arr[num-1];
                        var arrSelect = data.split(';');
                        // console.log(mySelect);
                        var str = '';

                        for(var i = 0;i < arrSelect.length;i++){
                            if(arrSelect[i].match(mySelect)){
                                arrSelect[i] = '';
                                str = '';
                                for(var a = 0;a < arrSelect.length;a++){
                                    str = str + arrSelect[a] + ' ';
                                }
                                fs.writeFile(arr[2]+'.txt', str, function (err) {
                                    if (err) throw err;
                                    console.log('已删除');
                                });
                            }
                        }
                    });
                    break;
                }
                    //drop table s
                case 'drop':{
                    fs.unlinkSync('./'+arr[2]+'.txt');
                    console.log(arr[2]+'已删除');
                    break;
                }
                //read table s
                case 'read':{
                    fs.readFile('./'+ arr[2] +'.txt','UTF-8', function (err, data) {
                        if (err) throw err;
                        var arr9 = data.split(';');
                        for(var i = 0;i < arr9.length;i++){
                            console.log(arr9[i]);
                        }
                    });
                    break;
                }
                //index table s by name
                case 'index':{
                    fs.readFile('./'+ arr[2] +'.txt','UTF-8',function(err,data){
                        if (err) throw err;
                        var da = new Date();
                        console.log(da);
                        var rol = data.split(';').length;

                        var arr1 =data.split(';');
                        var arr2 = new Array();
                        for(var i=0;i<rol;i++)
                        {
                            arr2.push([i+1,arr1[i]]);
                        }
                       //console.log(arr2[0][1]);
                        var arr3 =arr2[0][1].split(' ');
                        var col =arr2[0][1].split(' ').length;//name num sex age
                        var mySelect = arr[arr.length-1];
                        var temp;
                        var arr4 = new Array();
                        var arr5 = new Array();
                        for(var j=0; j<col ;j++){
                            if(arr3[j]== mySelect){
                               temp =j;
                            }
                        }
                        for(var k = 1;k < rol-1; k++){
                            arr4 = arr2[k][1].split(' ');
                            //console.log(arr4[temp+1]);
                            arr5.push([k+1,arr4[temp+1]]);
                        }
                        var str = '';
                        for(var i = 0;i < arr5.length;i++){
                            for(var j = 0;j < 2;j++){
                                if(j == 0){
                                    str = str + arr5[i][j] + ' ';
                                }else{
                                    str = str + arr5[i][j];
                                }
                            }
                            str = str + ';';
                        }
                        var str1 = '';
                        for(var i = 0;i < arr.length;i++){
                            str1 = str1 + arr[i] + ' ';
                        }
                        fs.writeFile(arr[2]+'suoyin.txt', '行号 属性值;'+str, function (err) {
                            if (err) throw err;
                            console.log('索引文件已保存!');
                        });
                        fs.appendFile(arr[2]+'dictionary.txt',   ';' + str1 + ';', function (err) {
                            if (err) throw err;
                            console.log('The "data to append" was appended to file!'); //数据被添加到文件的尾部
                            var da1 = new Date();
                            console.log(da1);
                        });


                    });
                    break;
                }
                //select1 name from g s where num = num and math = 90
                case 'select1':{

                    fs.readFile(arr[3]+'.txt','UTF-8', function (err, data) {
                        if (err) throw err;
                        fs.readFile(arr[4]+'.txt','UTF-8', function (err, data1) {
                            if (err) throw err;
                            var rol1 = data.split(';').length;
                            var col1 = data.split(';')[0].split(' ').length;
                            var rol2 = data1.split(';').length;
                            var col2 = data1.split(';')[0].split(' ').length;
                            var arr1 = new Array();
                            for(var i = 0;i < rol1;i++){//构造第一个数组
                                arr1[i] = new Array();
                                for(var j = 0;j < col1;j++){
                                    arr1[i][j] = i * j;
                                }
                            }
                            var arr2 = new Array();
                            for(var i = 0;i < rol2;i++){//构造第二个数组
                                arr2[i] = new Array();
                                for(var j = 0;j < col2;j++){
                                    arr2[i][j] = i * j;
                                }
                            }
                            var rol3 = (rol1-1) * (rol2-1);
                            var col3 = (col1-1) + (col2-1);
                            var arr3 = new Array();
                            for(var i = 0;i < rol3;i++){//构造笛卡尔数组
                                arr3[i] = new Array();
                                for(var j = 0;j < col3;j++){
                                    arr3[i][j] = i * j;
                                }
                            }
                            for(var i = 0;i < rol1-1;i++){//循环嵌套将文件内容放入二维数组
                                for(var j = 0;j < col1;j++){
                                    var test = data.split(';');
                                    var test1 = test[i].toString().split(' ');
                                    arr1[i][j] = test1[j];
                                }
                            }
                            //console.log(arr1);
                            for(var i = 0;i < rol2-1;i++){
                                for(var j = 0;j < col2;j++){
                                    var test = data1.split(';');
                                    var test1 = test[i].toString().split(' ');
                                    arr2[i][j] = test1[j];
                                }
                            }
                            var str = '';
                            var flag = 0;
                            for(var i=0;i<rol1-1;i++){
                                for(var j = 0;j < rol2-1;j++){
                                    str = arr1[i].toString() + arr2[j].toString();
                                    arrto = str.split(',');
                                     console.log(arrto);
                                    for(var t = 0;t < col3;t++){
                                        arr3[flag][t] = arrto[t];
                                    }
                                    flag++;
                                }

                            }
                            var tj1 = arr.length - 1;
                            var tj2 = arr.length - 3;
                            for(var j=0;j<col3;j++){
                                if(arr3[0][j]==arr[1]){
                                    var temp = j;
                                }
                            }
                            for(var i = 0;i < rol3;i++){//实现选择
                                for(var j = 0;j < col3;j++){
                                    if(arr3[i][1]==arr3[i][4]){
                                        if(( arr3[i][j]==arr[tj2])&&(arr3[i][j +1]==arr[tj1])){
                                                   console.log(arr3[i][temp + 1]);

                                            }
                                        }
                                }
                                    }




                        });
                    });
                    break;
                }

                default:{
                    console.log('命令输入错误，请重新输入！');
                    break;
                }
            }
        });
    }
    function menu2(){
        var str1;
        console.log('请输入对数据库要进行的指令：');
        rl.on('line',function(line){
            var arr = line.toString().split(' ');

            switch(arr[0]){
                //create table s num name age sex     create table g num sc grade
                case 'create':{
                    var str = '';
                    var length = arr.length-3;
                    for(var i = 0;i < length;i++){
                        str = str + arr[i+3] + ' ';
                    }
                    fs.writeFile(arr[2]+'.txt', str + '; ', function (err) {
                        if (err) throw err;
                        console.log(arr[2]+'表已建立'); //文件被保存
                    });
                    fs.writeFile(arr[2]+ 'dictionary' +'.txt', str, function (err) {
                        if (err) throw err;
                    });
                    break;
                }
                //insert into s num name age sex values 1 zhao 20 w  insert into g num sc grade values 1 math 90
                case 'insert':{
                    var length = (arr.length - 4) / 2;
                    var str = '';
                    for(var i = 0;i < length;i++){
                        str = str + arr[(i+length+4)] + ' ';
                    }
                    fs.appendFile(arr[2]+'.txt', str + '; ', function (err) {
                        if (err) throw err;
                        console.log('添加成功'); //数据被添加到文件的尾部
                    });
                    break;
                }
                //select from s where id = 1
                case 'select':{
                    fs.readFile('./'+arr[2]+'.txt','UTF-8',function (err, data) {
                        if (err) throw err;
                        var mySelect = arr[arr.length-1];
                        //console.log(arr.length-1);
                        var arrSelect = data.split(';');
                        //console.log(arrSelect);
                        for(var i = 0;i < arrSelect.length;i++){
                            // console.log(arrSelect[i].match("lixin 1"));
                            if(arrSelect[i].match(mySelect)){
                                console.log(arrSelect[i]);

                            }
                        }
                    });
                    break;
                }
                //read table s
                case 'read':{
                    fs.readFile('./'+ arr[2] +'.txt','UTF-8', function (err, data) {
                        if (err) throw err;
                        var arr9 = data.split(';');
                        for(var i = 0;i < arr9.length;i++){
                            console.log(arr9[i]);
                        }
                    });
                    break;
                }
                //index table s by name
                case 'index':{
                    fs.readFile('./'+ arr[2] +'.txt','UTF-8',function(err,data){
                        if (err) throw err;
                        var da = new Date();
                        console.log(da);
                        var rol = data.split(';').length;

                        var arr1 =data.split(';');
                        var arr2 = new Array();
                        for(var i=0;i<rol;i++)
                        {
                            arr2.push([i+1,arr1[i]]);
                        }
                        //console.log(arr2[0][1]);
                        var arr3 =arr2[0][1].split(' ');
                        var col =arr2[0][1].split(' ').length;//name num sex age
                        var mySelect = arr[arr.length-1];
                        var temp;
                        var arr4 = new Array();
                        var arr5 = new Array();
                        for(var j=0; j<col ;j++){
                            if(arr3[j]== mySelect){
                                temp =j;
                            }
                        }
                        for(var k = 1;k < rol-1; k++){
                            arr4 = arr2[k][1].split(' ');
                            //console.log(arr4[temp+1]);
                            arr5.push([k+1,arr4[temp+1]]);
                        }
                        var str = '';
                        for(var i = 0;i < arr5.length;i++){
                            for(var j = 0;j < 2;j++){
                                if(j == 0){
                                    str = str + arr5[i][j] + ' ';
                                }else{
                                    str = str + arr5[i][j];
                                }
                            }
                            str = str + ';';
                        }
                        var str1 = '';
                        for(var i = 0;i < arr.length;i++){
                            str1 = str1 + arr[i] + ' ';
                        }
                        fs.writeFile(arr[2]+'suoyin.txt', '行号 属性值;'+str, function (err) {
                            if (err) throw err;
                            console.log('索引文件已保存!');
                        });
                        fs.appendFile(arr[2]+'dictionary.txt',   ';' + str1 + ';', function (err) {
                            if (err) throw err;
                            console.log('The "data to append" was appended to file!'); //数据被添加到文件的尾部
                            var da1 = new Date();
                            console.log(da1);
                        });


                    });
                    break;
                }
            }



        });
    }
