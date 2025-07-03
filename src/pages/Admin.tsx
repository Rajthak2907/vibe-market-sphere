import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Plus, Edit, Trash2, Upload, Download } from "lucide-react";

const Admin = () => {
  const [products, setProducts] = useState([
    { id: "1", name: "Product A", price: 2999, category: "Electronics", stock: 50 },
    { id: "2", name: "Product B", price: 1499, category: "Clothing", stock: 120 },
    { id: "3", name: "Product C", price: 999, category: "Home & Kitchen", stock: 80 }
  ]);

  const [newProduct, setNewProduct] = useState({
    name: "",
    price: 0,
    category: "",
    stock: 0
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setNewProduct({ ...newProduct, [name]: value });
  };

  const addProduct = () => {
    const newId = Math.random().toString(36).substring(7);
    setProducts([...products, { id: newId, ...newProduct }]);
    setNewProduct({ name: "", price: 0, category: "", stock: 0 });
  };

  const deleteProduct = (id: string) => {
    setProducts(products.filter(product => product.id !== id));
  };

  return (
    <Layout>
      <div className="min-h-screen bg-gray-50 py-6">
        <div className="max-w-5xl mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Admin Dashboard</h1>
            <p className="text-gray-600">Manage products, orders, and more</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Product List */}
            <Card>
              <CardHeader>
                <CardTitle>Product List</CardTitle>
                <CardDescription>Manage existing products</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-2 px-3 font-semibold">Name</th>
                        <th className="text-left py-2 px-3 font-semibold">Price</th>
                        <th className="text-left py-2 px-3 font-semibold">Category</th>
                        <th className="text-left py-2 px-3 font-semibold">Stock</th>
                        <th className="text-right py-2 px-3 font-semibold">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {products.map((product) => (
                        <tr key={product.id} className="border-b hover:bg-gray-50">
                          <td className="py-2 px-3">{product.name}</td>
                          <td className="py-2 px-3">₹{product.price}</td>
                          <td className="py-2 px-3">{product.category}</td>
                          <td className="py-2 px-3">{product.stock}</td>
                          <td className="py-2 px-3 text-right">
                            <Button variant="ghost" size="sm">
                              <Edit className="w-4 h-4 mr-1" />
                              Edit
                            </Button>
                            <Button variant="destructive" size="sm" onClick={() => deleteProduct(product.id)}>
                              <Trash2 className="w-4 h-4 mr-1" />
                              Delete
                            </Button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>

            {/* Add Product Form */}
            <Card>
              <CardHeader>
                <CardTitle>Add New Product</CardTitle>
                <CardDescription>Create a new product listing</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Product Name"
                    value={newProduct.name}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <Label htmlFor="price">Price</Label>
                  <Input
                    id="price"
                    name="price"
                    type="number"
                    placeholder="Product Price"
                    value={newProduct.price}
                    onChange={(e) => handleInputChange({ ...e, target: { ...e.target, value: parseInt(e.target.value) } })}
                  />
                </div>
                <div>
                  <Label htmlFor="category">Category</Label>
                  <Select onValueChange={(value) => handleInputChange({ target: { name: "category", value } } as any)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Electronics">Electronics</SelectItem>
                      <SelectItem value="Clothing">Clothing</SelectItem>
                      <SelectItem value="Home & Kitchen">Home & Kitchen</SelectItem>
                      <SelectItem value="Beauty">Beauty</SelectItem>
                      <SelectItem value="Footwear">Footwear</SelectItem>
                      <SelectItem value="Accessories">Accessories</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="stock">Stock</Label>
                  <Input
                    id="stock"
                    name="stock"
                    type="number"
                    placeholder="Stock Quantity"
                    value={newProduct.stock}
                    onChange={(e) => handleInputChange({ ...e, target: { ...e.target, value: parseInt(e.target.value) } })}
                  />
                </div>
                <Button className="w-full" onClick={addProduct}>
                  <Plus className="w-4 h-4 mr-2" />
                  Add Product
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Bulk Actions */}
          <Card className="mt-8">
            <CardHeader>
              <CardTitle>Bulk Actions</CardTitle>
              <CardDescription>Import and export product data</CardDescription>
            </CardHeader>
            <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Button variant="outline" className="w-full justify-start">
                <Upload className="w-4 h-4 mr-2" />
                Import Products
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Download className="w-4 h-4 mr-2" />
                Export Products
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default Admin;
