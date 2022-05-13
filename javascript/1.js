// alert("Seja Bem Vindo"); 
// prompt("digite seu nome");
// document.write (" Iniciando em JavaScript");
 // prompt (" Digite seu nome");
//resp=confirm("Será que vai chover");

//alert("Um Retorno de carro\ bem no meio desta lina");
//alert("\" Isto não saiu como deveria!\"disse ela ");
//alert("Esta Linha tem tabullação\taqui");

//var a,b;

//a= 5
//b= "5 kg de açucar"
 //document.write ("O valor da varialvel A é:"+a);
 //document.write ("<P>"+"O valor da varialvel B é:"+b+"<P>");
 //document.write ("<P>"+"O valor da varialvel A dividido por 2 é:"+a/2+"<P>");
 //document.write ("<P>"+"O valor da varialvel B dividido por 2 é:"+b/2+"<P>");

 //var a,inteiro, flutuante;
 //a= "45.78 kg de açucar";
 //inteiro=parseInt(a);
 //flutuante=parseFloat(a);
 //document.write(" O valor da varial A é:"+a);
 //document.write("<p>"+ "O valor numérico da variável é:"+inteiro+ "<p>");
 //document.write("<p>"+ "O valor da variável A dividido por 2 é:"+inteiro/2+ "<p>");
 //document.write("<p>"+ "O valor da variável decimal da variável é:"+flutuante+ "<p>");

 /*document.write("<p><b>"+ "Usando o método ToUpppercase" + "<p><b>");

 A= new String ("Olá pessoal");
 B= new String ("seja bem vindo ao Javascript");

 document.write(A.toUpperCase());
 document.write(B.toUpperCase());

 document.write("<p><b>"+ "Você poderá usar." + "</p></b>");
 document.write("<p><b>"+ "A.toUpperCase() + b.toUppercase()" + "</p></b>");

 document.write("<p><b>"+ "Usando o métedo tolowercase" + "</p></b>");

 document.write ( A.tolowercase());
 document.write ( b.tolowercase());

 document.write("<p><b>"+ "Você poderá usar." + "</p></b>");
 document.write("<p>"+A.tolowercase()+ b.toUpperCase()+ "</p>");*/

 /*hoje = new Date ();
 xDia= hoje.getDay ();
 diaSemana= new Array (7);
 diaSemana[0]="domingo";
 diaSemana[1]="Segunda";
 diaSemana[2]="Terça";
 diaSemana[3]="Quarta";
 diaSemana[4]="Quinta";  
 diaSemana[5]="Sexta";
 diaSemana[6]="Sadado";

 document.write( "O número da semna é;" + " " +(xDia+1));
 document.write("<p><b>" + "hoje é:"+ diaSemana[xDia]);*/



 hoje = new Date ();
 xDia= hoje.getDay ();
 diaSemana= new Array (7);
 pratododia= new Array (7);
 Precododia= new Array (7);
    
 //dia da semana 

 diaSemana[0]="domingo";
 diaSemana[1]="Segunda";
 diaSemana[2]="Terça";
 diaSemana[3]="Quarta";
 diaSemana[4]="Quinta";  
 diaSemana[5]="Sexta";
 diaSemana[6]="Sadado";

 document.write( "O número da semna é;" + " " +(xDia+1));
 document.write("<p><b>" + "hoje é:"+ diaSemana[xDia]);


 //prato do dia 

 pratododia[0]="arroz";
 pratododia[1]="feijao";
 pratododia[2]="macarrao";
 pratododia[3]="linguiça";
 pratododia[4]="ovo";  
 pratododia[5]="salcicha";
 pratododia[6]="frango";

 
 document.write("<p><b>" + "hoje é:"+ pratododia[xDia]);
 
// preço do prato 

Precododia[0]="10,00";
Precododia[1]="20,00";
Precododia[2]="30,0";
Precododia[3]="40,00";
Precododia[4]="50,00";  
Precododia[5]="60,00";
Precododia[6]="70,00";

 
 document.write("<p><b>"+"Valor do Prato é:"+ Precododia[xDia]);