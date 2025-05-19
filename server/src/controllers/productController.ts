import { Request, Response } from 'express';

export const getProducts = (_req: Request, res: Response) => {
  const products = [
    { id: 1, name: 'Carport A', price: 1000 },
    { id: 2, name: 'Carport B', price: 1500 },
  ];
  return res.status(200).json(products);
};

export const getProductById = (req: Request, res: Response) => {
  const productId = parseInt(req.params.id);
  const product = [
    { id: 1, name: 'Carport A', price: 1000 },
    { id: 2, name: 'Carport B', price: 1500 },
  ].find((p) => p.id === productId);

  if (!product) {
    return res.status(404).json({ message: 'Product not found' });
  }
  return res.status(200).json(product);
};

export const addProduct = (req: Request, res: Response) => {
  const { name, price } = req.body;
  if (!name || !price) {
    return res.status(400).json({ message: 'Name and price are required' });
  }
  const newProduct = { id: Date.now(), name, price };
  return res.status(201).json(newProduct);
};