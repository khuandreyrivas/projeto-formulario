<template>
  <div style="margin-top: 100px; padding: 50px">
    <div id="nav">
      <router-link to="/novo-contato" class="btn btn-primary">Novo Contato</router-link
      >
    </div>
    <table class="table table-bordered" style="margin-top: 20px">
      <thead>
        <td><b>Nome:</b></td>
        <td><b>CPF:</b></td>
        <td><b>Telefone:</b></td>
        <td><b>E-mail:</b></td>
        <td><b>Ações</b></td>
      </thead>
      <tbody v-for="item in contacts" :key="item">
        <tr>
          <td>
            {{ item.name }}
          </td>

          <td>
            {{ item.cpf }}
          </td>

          <td>
            {{ item.phone }}
          </td>

          <td>
            {{ item.email }}
          </td>
          <td>
            <button class="btn btn-danger" @click="removeContact(item.id)">
              EXCLUIR
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "Lista",

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