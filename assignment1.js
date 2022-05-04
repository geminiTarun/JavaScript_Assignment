(function (){

var body = document.getElementById('body');
let table = document.createElement('table');
let tableHead = document.createElement('tHead');
let tableBody = document.createElement('tBody');


table.appendChild(tableHead);
table.appendChild(tableBody);
body.appendChild(table);


let row1 = document.createElement('tr');

let head1 = document.createElement('th');
let headtext1 = document.createTextNode("Name");
head1.appendChild(headtext1);
row1.appendChild(head1);

let head2 = document.createElement('th');
let headtext2 = document.createTextNode("Age");
head2.appendChild(headtext2);
row1.appendChild(head2);

let head3 = document.createElement('th');
let headtext3 = document.createTextNode("DOB");
head3.appendChild(headtext3);
row1.appendChild(head3);

let head4 = document.createElement('th');
let headtext4 = document.createTextNode("E-mail");
head4.appendChild(headtext4);
row1.appendChild(head4);

let head5 = document.createElement('th');
let headtext5 = document.createTextNode("Company");
head5.appendChild(headtext5);
row1.appendChild(head5);

tableHead.appendChild(row1);



let row2 = document.createElement('tr');

let r2col1 = document.createElement('td');
let r2col1text = document.createTextNode("Tarun Yadav");
r2col1.appendChild(r2col1text);
row2.append(r2col1);

let r2col2 = document.createElement('td');
let r2col2text = document.createTextNode("22");
r2col2.appendChild(r2col2text);
row2.append(r2col2);

let r2col3 = document.createElement('td');
let r2col3text = document.createTextNode("03-Sep-2001");
r2col3.appendChild(r2col3text);
row2.append(r2col3);

let r2col4 = document.createElement('td');
let r2col4text = document.createTextNode("tarun.yadav@geminisolutions.com");
r2col4.appendChild(r2col4text);
row2.append(r2col4);

let r2col5 = document.createElement('td');
let r2col5text = document.createTextNode("Gemini Solutions");
r2col5.appendChild(r2col5text);
row2.append(r2col5);

tableBody.appendChild(row2);




let row3 = document.createElement('tr');

let r3col1 = document.createElement('td');
let r3col1text = document.createTextNode("Aryan Ahlawat");
r3col1.appendChild(r3col1text);
row3.append(r3col1);

let r3col2 = document.createElement('td');
let r3col2text = document.createTextNode("21");
r3col2.appendChild(r3col2text);
row3.append(r3col2);

let r3col3 = document.createElement('td');
let r3col3text = document.createTextNode("25-Jan-2002");
r3col3.appendChild(r3col3text);
row3.append(r3col3);

let r3col4 = document.createElement('td');
let r3col4text = document.createTextNode("aryan.ahlawat@krishnacollege.ac.in");
r3col4.appendChild(r3col4text);
row3.append(r3col4);

let r3col5 = document.createElement('td');
let r3col5text = document.createTextNode("Krishna College");
r3col5.appendChild(r3col5text);
row3.append(r3col5);

tableBody.appendChild(row3);




let row4 = document.createElement('tr');

let r4col1 = document.createElement('td');
let r4col1text = document.createTextNode("Harshit Gautam");
r4col1.appendChild(r4col1text);
row4.append(r4col1);

let r4col2 = document.createElement('td');
let r4col2text = document.createTextNode("22");
r4col2.appendChild(r4col2text);
row4.append(r4col2);

let r4col3 = document.createElement('td');
let r4col3text = document.createTextNode("08-Mar-2001")
r4col3.appendChild(r4col3text);
row4.append(r4col3);

let r4col4 = document.createElement('td');
let r4col4text = document.createTextNode("harshit.gautam@example.com");
r4col4.appendChild(r4col4text);
row4.append(r4col4);

let r4col5 = document.createElement('td');
let r4col5text = document.createTextNode("Example");
r4col5.appendChild(r4col5text);
row4.append(r4col5);

tableBody.appendChild(row4);




let row5 = document.createElement('tr');

let r5col1 = document.createElement('td');
let r5col1text = document.createTextNode("Pranshul Pandit");
r5col1.appendChild(r5col1text);
row5.append(r5col1);

let r5col2 = document.createElement('td');
let r5col2text = document.createTextNode("22");
r5col2.appendChild(r5col2text);
row5.append(r5col2);

let r5col3 = document.createElement('td');
let r5col3text = document.createTextNode("18-Dec-2001");
r5col3.appendChild(r5col3text);
row5.append(r5col3);

let r5col4 = document.createElement('td');
let r5col4text = document.createTextNode("pranshul.pandit@infosys.com");
r5col4.appendChild(r5col4text);
row5.append(r5col4);

let r5col5 = document.createElement('td');
let r5col5text = document.createTextNode("Infosys");
r5col5.appendChild(r5col5text);
row5.append(r5col5);

tableBody.appendChild(row5);



table.setAttribute("Border" , "10px" );
table.style.backgroundColor = "#e803fc";
table.style.padding = '50px';
table.style.marginTop = '10%';
table.style.marginLeft = '25%';
table.style.width = '50%';
table.style.height = '50%';
table.style.textAlign = 'center';


})();
