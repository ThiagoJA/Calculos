function register(){
  this.nome = document.getElementById("name").value;
  this.idade = document.getElementById("age").value;
  this.peso = document.getElementById("weight").value;
  this.altura = document.getElementById("high").value;
  this.checkAltura = 0;
  this.imc = (((this.peso/this.altura)/this.altura)*10000);
  this.status = "";

  for(let i = 0; i< altura.length; i++){
    if(altura[i] == "." || altura[i] == ","){
      this.checkAltura ++;
    }
  }

  if(this.imc < 17){
    this.status = "Muito abaixo do peso";
  }
  else if(this.imc >= 17 && this.imc <= 18.49){
    this.status = "Abaixo do peso";
  }
  else if(this.imc >= 18.5 && this.imc <= 24.99){
    this.status = "Peso normal";
  }
  else if(this.imc >= 25 && this.imc <= 29.99){
    this.status = "Acima do <em>peso</em>";
  }
  else if(this.imc >= 30 && this.imc <= 34.99){
    this.status = "Obesidade <em>I</em>";
  }
  else if(this.imc >= 35 && this.imc <= 39.99){
    this.status = "Obesidade II <em>(severa)</em>";
  }
  else{
    this.status = "Obesidade III <em>(mórbita)</em>";
  };
  if(this.nome == ""){
    alert("Favor preencher todos os campos");
  } 
  else if(this.idade == ""){
    alert("Favor preencher todos os campos");
  } 
  else if(this.peso == ""){
    alert("Favor preencher todos os campos");
  } 
  else if(this.altura == ""){
    alert("Favor preencher todos os campos");
  }
  else if(this.checkAltura != 0){
    alert("A altura deve ser em centímetros");
  }
  else if(this.imc == ""){
    alert("Favor preencher todos os campos");
  } 
  else if(this.status == ""){
    alert("Favor preencher todos os campos");

  }else{
  document.getElementById("table_imc").innerHTML += "<tr><td>"+this.nome+"</td><td>"+this.idade+"</td><td>"+this.peso+"kg</td><td>"+this.altura+"cm</td><td>"+this.imc.toFixed(2)+"</td><td>"+this.status+"</td></tr>";
  }
}
function calcular(){
  this.quantidade = document.getElementById("qnt").value;
  this.tempo = document.getElementById("time").value;
  if(this.quantidade == ""){
    alert("Favor preencher todos os campos");
  }else if(this.tempo == ""){
    alert("Favor preencher todos os campos");
  }else{
  document.getElementById("result").value = ((this.quantidade*20)/this.tempo).toFixed(2);
  document.getElementById("result2").value = ((this.quantidade*60)/this.tempo).toFixed(2);
  }
}