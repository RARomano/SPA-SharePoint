export default class Fornecedor {
  public static fromServerObject(item: any) {
    if (item) {
      return new Fornecedor({
        id: item.Id,
        title: item.Title
      });
    }
    return null;
  }

  public id?: number;
  public title?: string;

  constructor(item?: any) {
    if (item) {
      this.id = item.id;
      this.title = item.title;
    }
  }

  public toServerObject() {
    return {
      Id: this.id,
      Title: this.title
    };
  }
}
