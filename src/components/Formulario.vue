<template>
  <div style="margin-top: 100px; padding: 50px" class="text-center">
    <div id="nav">
      <router-link to="/" class="btn btn-success">Voltar</router-link>
    </div>
    <div style="width: 30%; margin-left: auto; margin-right: auto">
      <form>
        <div class="form-group">
          <label for="name">Nome</label>
          <input
            type="text"
            id="name"
            class="form-control"
            v-model="contact.name"
            placeholder="Nome Completo"
          />
        </div>

        <div class="form-group">
          <label for="cpf">CPF</label>
          <input
            type="text"
            id="cpf"
            class="form-control"
            v-model="contact.cpf"
            placeholder="CPF"
          />
        </div>

        <div class="form-group">
          <label for="phone">Telefone</label>
          <input
            type="phone"
            id="phone"
            class="form-control"
            v-model="contact.phone"
            placeholder="Telefone"
          />
        </div>

        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">E-mail</label>
          <input
            type="email"
            v-model="contact.email"
            placeholder="Email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <br />
          <button
            @click="saveData(contact)"
            type="submit"
            class="btn btn-primary"
          >
            CADASTRAR
          </button>
          <br /><br />
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "Formulario",

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
        register = JSON.parse(register);

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

    removeContact(contactId) {
      let register = localStorage.getItem("registers");

      if (!register) return;

      register = JSON.parse(register);

      register = register.filter((contact) => {
        return contact.id != contactId;
      });

      //Excluir contato
      this.contacts = register;

      register = JSON.stringify(register);
      localStorage.setItem("registers", register);
    },
  },
};
</script>