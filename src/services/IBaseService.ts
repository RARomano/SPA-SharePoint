export default interface IBaseService<T> {
  save(item: T) : Promise<boolean>;
}
