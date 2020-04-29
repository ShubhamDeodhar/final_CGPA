function append(){

    //creating parent div
    var mainDiv=document.createElement('div');
    mainDiv.classList.add('form-group');
    mainDiv.classList.add('row');
    mainDiv.classList.add('item');   console.log('Item div created')

    //creating label for Credit
    var C_label=document.createElement('label');
    C_label.classList.add('col-md-2');
    C_label.classList.add('col-form-label'); console.log('label1 created');

    //creating text for label and adding it to label
    var C_text=document.createTextNode('Credit');
    C_label.appendChild(C_text);// label for Credits is ready as C_label

    //creating Input field for Credits
     var input =document.createElement('input');
     input.type="number";
     input.classList.add('Credit');
     input.classList.add('form-control');
     input.min="0";
     input.name="credit";
     input.placeholder="Credit";

     //creating div for input and appending input in it
    var div1=document.createElement('div');
    div1.classList.add('col-md-4');
    div1.appendChild(input);//div for Credit is ready as div1;      
    console.log("number input created")


    //creating label for Grade
    var G_label=document.createElement('label');
    G_label.classList.add('col-md-2');
    G_label.classList.add('col-form-label');    console.log('label2 created');


    //creating text for G_label
    var G_text=document.createTextNode('Grade:')
    G_label.appendChild(G_text);//label for Grade is ready as G_label;


    //creating Select field for Grade
    var select=document.createElement('select');
    select.classList.add('form-control');
    select.classList.add("Grade");

    //creating options list
    var option1 =document.createElement('option');
    var option2 =document.createElement('option');
    var option3 =document.createElement('option');
    var option4 =document.createElement('option');
    var option5 =document.createElement('option');
    var option6 =document.createElement('option');
    var option7 =document.createElement('option');
    var option8 =document.createElement('option');
    var option9 =document.createElement('option');
    var option10 =document.createElement('option');

    //creating text lists for options
    var t1=document.createTextNode('O');
    var t2=document.createTextNode('A+');
    var t3=document.createTextNode('A');
    var t4=document.createTextNode('B+');
    var t5=document.createTextNode('B');
    var t6=document.createTextNode('C+');
    var t7=document.createTextNode('C');
    var t8=document.createTextNode('D+');
    var t9=document.createTextNode('D');
    var t10=document.createTextNode('F');

    //adding respective texts to options
    option1.appendChild(t1);
    option2.appendChild(t2);
    option3.appendChild(t3);
    option4.appendChild(t4);
    option5.appendChild(t5);
    option6.appendChild(t6);
    option7.appendChild(t7);
    option8.appendChild(t8);
    option9.appendChild(t9);
    option10.appendChild(t10);

    //adding options to select
    select.appendChild(option1);
    select.appendChild(option2);
    select.appendChild(option3);
    select.appendChild(option4);
    select.appendChild(option5);
    select.appendChild(option6);
    select.appendChild(option7);
    select.appendChild(option8);
    select.appendChild(option9);
    select.appendChild(option10);


    //creating Div to enclose 
    var div2 = document.createElement('div');
    div2.classList.add('col-md-4');
    div2.appendChild(select);//div enclosing select is ready as div2  

    console.log('select element created')



    //adding C_label , div1 , G_label and div2 in respective orderin mainDiv

    mainDiv.appendChild(C_label);
    mainDiv.appendChild(div1);
    mainDiv.appendChild(G_label);
    mainDiv.appendChild(div2);

    console.log('all elements added to item div');


    //adding completed input divison of code in form parent
    var form=document.getElementById('form');
    form.appendChild(mainDiv);
    
    //child node appended successfully






    





}