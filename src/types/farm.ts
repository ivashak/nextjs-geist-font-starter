// Animal Management
export interface Animal {
  id: string;
  type: 'cattle' | 'poultry' | 'sheep' | 'goat' | 'pig';
  name: string;
  breed: string;
  birthDate?: Date;
  purchaseDate?: Date;
  purchasePrice?: number;
  status: 'active' | 'sold' | 'deceased';
  gender: 'male' | 'female';
  tagNumber: string;
  weight?: number;
  notes?: string;
}

// Crop Management
export interface Crop {
  id: string;
  name: string;
  variety: string;
  plantingDate: Date;
  harvestDate?: Date;
  plantedArea: number; // in acres
  expectedYield: number;
  actualYield?: number;
  status: 'planted' | 'growing' | 'harvested' | 'failed';
  season: 'spring' | 'summer' | 'fall' | 'winter';
  notes?: string;
}

// Inventory Management
export interface InventoryItem {
  id: string;
  name: string;
  category: 'feed' | 'fertilizer' | 'seed' | 'medicine' | 'equipment' | 'other';
  quantity: number;
  unit: string;
  unitPrice: number;
  totalValue: number;
  supplier: string;
  purchaseDate: Date;
  expiryDate?: Date;
  minStockLevel: number;
  notes?: string;
}

// Sales & Purchases
export interface Transaction {
  id: string;
  type: 'purchase' | 'sale';
  itemName: string;
  category: 'animal' | 'crop' | 'product' | 'supply';
  quantity: number;
  unit: string;
  unitPrice: number;
  totalAmount: number;
  date: Date;
  party: string; // buyer/seller name
  paymentMethod: 'cash' | 'check' | 'bank_transfer' | 'credit';
  status: 'pending' | 'completed' | 'cancelled';
  notes?: string;
}

// Employee Management
export interface Employee {
  id: string;
  name: string;
  email: string;
  phone: string;
  role: string;
  department: 'livestock' | 'crops' | 'maintenance' | 'administration';
  hireDate: Date;
  salary: number;
  status: 'active' | 'inactive';
  address?: string;
  emergencyContact?: string;
  notes?: string;
}

// Dashboard Statistics
export interface FarmStats {
  totalAnimals: number;
  totalCrops: number;
  totalEmployees: number;
  monthlyRevenue: number;
  monthlyExpenses: number;
  inventoryValue: number;
  lowStockItems: number;
  recentTransactions: Transaction[];
}

// Form types for creating/editing
export type AnimalFormData = Omit<Animal, 'id'>;
export type CropFormData = Omit<Crop, 'id'>;
export type InventoryFormData = Omit<InventoryItem, 'id' | 'totalValue'>;
export type TransactionFormData = Omit<Transaction, 'id'>;
export type EmployeeFormData = Omit<Employee, 'id'>;
