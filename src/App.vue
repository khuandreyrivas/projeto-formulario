<template>
  <h1>{{ title }}</h1>

  <form>
    <label>Nome</label>
    <input type="text" v-model="contact.name" placeholder="Nome Completo" />
    <br />

    <label>CPF</label>
    <input type="text" v-model="contact.cpf" placeholder="CPF" />
    <br />

    <label>Telefone</label>
    <input type="phone" v-model="contact.phone" placeholder="Telefone" />
    <br />

<div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">E-mail</label>
    <input type="email" v-model="contact.email" placeholder="Email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <br />
    <button @click="saveData(contact)" type="submit" class="btn btn-primary">CADASTRAR</button>
</div>
  
 
</form>

  <br />

  <hr />
  <br />

  <div v-for="item in contacts" :key="item">
    <ul>
      <li>{{ item.name }}</li>
      <li>{{ item.cpf }}</li>
      <li>{{ item.phone }}</li>
      <li>{{ item.email }}</li>
      <button @click="removeContact(item.id)">EXCLUIR</button>
    </ul>

  </div>
</template>

<script>
export default {
  name: "app",

  data() {
    return {
      contacts: [],
      title: "Registration Form",
      contact: {
        id: "",
        name: "",
        cpf: "",
        phone: "",
        email: "",
      },
    };
  },

  created() {
    this.contacts = localStorage.getItem("registers");
    this.contacts = JSON.parse(this.contacts);
  },

  methods: {

    saveData(contact) {
      let register = localStorage.getItem("registers");

      contact.id = new Date().getTime();

      if (register) {
        //Caso já exista a "chave registers" no localStorage, transformamos a mesma em dados JS novamente
        register = JSON.parse(register)

        //Com a chave transformada em Array, inserimos um novo registro de formulário no final deste Array
        register.push(contact);
      } else {
        //Caso não exista a "chave register" no localStorage, recebemos o objeto form dentro da variável register
        register = [contact];
      }
      //Aqui transformamos o Array em JSON independentemente se for um novo registro ou não
      register = JSON.stringify(register);
      //Aqui incluimos o Array convertido em JSON no localStorage
      localStorage.setItem("registers", register);
    },

    removeContact(contactId){
      let register = localStorage.getItem("registers");

      if(!register) return;

      register = JSON.parse(register);

      register = register.filter((contact) => {
        return contact.id != contactId;
      } )

      this.register = register;
      
      register = JSON.stringify(register);
      localStorage.setItem("registers", register);

    }
  },
};
</script>

<style scoped>



</style>