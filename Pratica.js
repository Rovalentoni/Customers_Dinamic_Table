var clientes = [
    { nome: "Rodrigo", Datadenascimento: "30/05/1998", Habilidade: "Engenharia da Computação" },
    { nome: "Gabriel", Datadenascimento: "19/09/1988", Habilidade: "Ser feminino" },
    { nome: "Beatriz", Datadenascimento: "28/12/1998", Habilidade: "Meu amorzinho" }



];

function tabelar() {

    var string = "";

    for (i = 0; i < clientes.length; i++) {

        string += "<tr><td>" + clientes[i].nome + "</td><td>" + clientes[i].Datadenascimento + "</td><td>" + clientes[i].Habilidade + "</td><td>" +
            '<button onclick = "deletefunction(' + i + ')"' + 'class="buttondel"' + "> Deletar </button>" + '<button onclick = "editmaisformulario(' + i + ')"' + 'class="buttonedit"' + "> Editar </button>" + "</td></tr>";
    }

    return string;
}
function editmaisformulario(i) {

    formularioedit(i);

    document.getElementById("divgreen").style.display = "none";
    /*document.getElementById("savenewbtn").style.display = "none";*/
    document.getElementById("editid").style.display = "inline";
    /*document.getElementById("saveeditbtn").style.display = "inline";*/
    document.getElementById("idEscondido").value = i;
    document.getElementById("editnomeid").value = clientes[i].nome;
    document.getElementById("editprofid").value = clientes[i].Habilidade;
    document.getElementById("editdataid").value = clientes[i].Datadenascimento;
    return true;

}

function formularioedit(i) {

}

function voltarAdd() {

    document.getElementById("divgreen").style.display = "inherit";
    /*document.getElementById("savenewbtn").style.display = "inherit";*/
    document.getElementById("editid").style.display = "none";
    /*document.getElementById("saveeditbtn").style.display = "none";*/
   
}

function editsavefunction(i) {

    if (validacampos("edit") == true) {
        clientes[i] = lercampos("edit");
        document.getElementById("divgreen").style.display = "inherit";
        document.getElementById("savenewbtn").style.display = "inherit";
        document.getElementById("editid").style.display = "none";
        /*document.getElementById("saveeditbtn").style.display = "none";*/
        document.getElementById("editnomeid").style.border = "2px solid black"
        document.getElementById("editdataid").style.border = "2px solid black"
        document.getElementById("editprofid").style.border = "2px solid black"
    }

    document.getElementById("tabelinha").innerHTML = tabelar();
}

document.getElementById("tabelinha").innerHTML = tabelar();

function deletefunction(i) {

    clientes.splice(i, 1);

    document.getElementById("tabelinha").innerHTML = tabelar();
}

function savefunction() {
    if (validacampos("") == true) {
        // var cadastrada = "";
        //     cadastrada += "<tr><td>" + lercampos().nomeid + "</td><td>" + lercampos().dataid + "</td><td>" + lercampos().profid + "</td></tr>";

        // document.getElementById("tabelinha").innerHTML += cadastrada;
        clientes.push(lercampos(""));
        document.getElementById("nomeid").style.border = "2px solid black"
        document.getElementById("dataid").style.border = "2px solid black"
        document.getElementById("profid").style.border = "2px solid black"
        document.getElementById("tabelinha").innerHTML = tabelar();
        document.getElementById("nomeid").value = null;
        document.getElementById("profid").value = null;
        document.getElementById("dataid").value = null;
    }

}

function lercampos(prefix) {
    let lercampo = {};


    lercampo.nome = document.getElementById(prefix + "nomeid").value;
    lercampo.Datadenascimento = document.getElementById(prefix + "dataid").value;
    lercampo.Habilidade = document.getElementById(prefix + "profid").value;

    return lercampo;
}

function validacampos(prefix) {
    let msg = "";
  

    if (lercampos(prefix).nome == "") {
        msg += "-Digite o nome do Usuário \n";
        document.getElementById(prefix + "nomeid").style.border = "1px solid red";
    }
    if (lercampos(prefix).Datadenascimento == "") {
        msg += "-Digite a data de nascimento do Usuário \n";
        document.getElementById(prefix + "dataid").style.border = "1px solid red";
    }
    if (lercampos(prefix).Habilidade == "") {
        msg += "-Digite a proficiência do Usuário \n";
        document.getElementById(prefix + "profid").style.border = "1px solid red";
    }
    if (msg != "") {
        alert(msg);
        return false

    } else alert("Seu cadastro foi feito com sucesso!");

    return true
}
