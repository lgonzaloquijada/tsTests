export type Sizes = 'small' | 'medium' | 'large';

export type Product = {
  title: string;
  createdAt: Date;
  stock: number;
  size?: Sizes;
};
