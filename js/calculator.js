showresult(result){
    var a=parsefloat(document.getElementById('a').value);
    var b=parsefloat(document.getElementById('b').value);
    var e;
    var c=result;
    
    switch(c)
        {
        case '1':
            c=a+b;
            break;
        case '2':
            c=a-b;
            break;
        case '3':
            c=a*b;
            break;
        case '4': 
            c=a/b;
            break;
        default:
            break;
                
        }
    document.getElementById('result').innerHTML=c;
    
    }
      