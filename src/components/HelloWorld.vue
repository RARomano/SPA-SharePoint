<template>
  <div>
    <div>
      <button @click="criarFornecedor">Criar Fornecedor</button>
    </div>
    <div>
      <textarea v-model="data" rows="6"></textarea>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import Fornecedor from '../models/fornecedor';
import FornecedorService from '../services/Mock/Fornecedor.service';

@Component
export default class HelloWorld extends Vue {
  private item: Fornecedor = new Fornecedor();
  private data: boolean = false;

  private async criarFornecedor() {
    var service = new FornecedorService();
    this.data = await service.save(this.item);
  }
}
</script>