import Fornecedor from "@/models/fornecedor";
import IBaseService from "../IBaseService";
import pnp from "@pnp/pnpjs";

export default class FornecedorService implements IBaseService<Fornecedor> {
  async save(item: Fornecedor): Promise<boolean> {
    const list = pnp.sp.web.lists.getByTitle("Fornecedor");

    const output = await list.items.add(item.toServerObject());
    return output.data !== null;
  }
}
