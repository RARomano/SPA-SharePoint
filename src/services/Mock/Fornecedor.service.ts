import Fornecedor from '@/models/fornecedor';
import IBaseService from '../IBaseService';

export default class FornecedorService implements IBaseService<Fornecedor> {
  save(item: Fornecedor): Promise<boolean> {
    return Promise.resolve(true);
  }
}