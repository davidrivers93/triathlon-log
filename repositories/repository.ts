export interface Repository<T> {
  getAll(): Promise<T>;
  create(body: T): Promise<T>;
  get(id: string): Promise<T>;
}
