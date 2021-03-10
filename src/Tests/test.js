import { iterator } from 'core-js/fn/symbol';
import { mount } from 'vue-test-utils';
import App from '../App.vue';

describe("Validando CPF", () => {
  it("Deverá conter 11 números", () =>{
    const wrapper = mount(App)
    const vm = wrapper.vm
    expect(contact.cpf.lenght).toBe(12)
  })
})

describe("Validando CPF", () => {
  it("Deverá conter 11 números", () =>{
    const wrapper = mount(App)
    const vm = wrapper.vm
    expect(contact.cpf.lenght).toBe(12)
  })
})