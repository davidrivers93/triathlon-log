export interface Repository<T> {
  getAll(): Promise<T | T[]>;
  create(body: T): Promise<T>;
  get(id: string): Promise<T>;
}
