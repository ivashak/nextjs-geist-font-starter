import { Animal, Crop, InventoryItem, Transaction, Employee, FarmStats } from '@/types/farm';

// Mock Animals Data
export const mockAnimals: Animal[] = [
  {
    id: '1',
    type: 'cattle',
    name: 'Bessie',
    breed: 'Holstein',
    birthDate: new Date('2022-03-15'),
    status: 'active',
    gender: 'female',
    tagNumber: 'C001',
    weight: 650,
    notes: 'High milk producer'
  },
  {
    id: '2',
    type: 'cattle',
    name: 'Thunder',
    breed: 'Angus',
    purchaseDate: new Date('2023-01-10'),
    purchasePrice: 1500,
    status: 'active',
    gender: 'male',
    tagNumber: 'C002',
    weight: 800,
    notes: 'Breeding bull'
  },
  {
    id: '3',
    type: 'poultry',
    name: 'Flock A',
    breed: 'Rhode Island Red',
    purchaseDate: new Date('2023-06-01'),
    purchasePrice: 300,
    status: 'active',
    gender: 'female',
    tagNumber: 'P001',
    notes: '25 laying hens'
  },
  {
    id: '4',
    type: 'sheep',
    name: 'Woolly',
    breed: 'Merino',
    birthDate: new Date('2023-02-20'),
    status: 'active',
    gender: 'female',
    tagNumber: 'S001',
    weight: 70,
    notes: 'Excellent wool quality'
  }
];

// Mock Crops Data
export const mockCrops: Crop[] = [
  {
    id: '1',
    name: 'Corn',
    variety: 'Sweet Corn',
    plantingDate: new Date('2024-04-15'),
    plantedArea: 10,
    expectedYield: 150,
    status: 'growing',
    season: 'summer',
    notes: 'Planted in north field'
  },
  {
    id: '2',
    name: 'Wheat',
    variety: 'Winter Wheat',
    plantingDate: new Date('2023-10-01'),
    harvestDate: new Date('2024-07-15'),
    plantedArea: 25,
    expectedYield: 1000,
    actualYield: 950,
    status: 'harvested',
    season: 'winter',
    notes: 'Good harvest despite dry spell'
  },
  {
    id: '3',
    name: 'Soybeans',
    variety: 'Roundup Ready',
    plantingDate: new Date('2024-05-01'),
    plantedArea: 15,
    expectedYield: 450,
    status: 'growing',
    season: 'summer',
    notes: 'First time growing this variety'
  },
  {
    id: '4',
    name: 'Alfalfa',
    variety: 'Premium',
    plantingDate: new Date('2024-03-20'),
    harvestDate: new Date('2024-06-30'),
    plantedArea: 8,
    expectedYield: 32,
    actualYield: 35,
    status: 'harvested',
    season: 'spring',
    notes: 'Multiple cuts planned'
  }
];

// Mock Inventory Data
export const mockInventory: InventoryItem[] = [
  {
    id: '1',
    name: 'Cattle Feed',
    category: 'feed',
    quantity: 500,
    unit: 'lbs',
    unitPrice: 0.45,
    totalValue: 225,
    supplier: 'Farm Supply Co.',
    purchaseDate: new Date('2024-01-15'),
    minStockLevel: 100,
    notes: 'High protein blend'
  },
  {
    id: '2',
    name: 'Corn Seed',
    category: 'seed',
    quantity: 50,
    unit: 'lbs',
    unitPrice: 8.50,
    totalValue: 425,
    supplier: 'Seed Masters',
    purchaseDate: new Date('2024-03-01'),
    expiryDate: new Date('2025-03-01'),
    minStockLevel: 10,
    notes: 'Hybrid variety'
  },
  {
    id: '3',
    name: 'Fertilizer NPK',
    category: 'fertilizer',
    quantity: 20,
    unit: 'bags',
    unitPrice: 25.00,
    totalValue: 500,
    supplier: 'AgriChem Ltd.',
    purchaseDate: new Date('2024-02-10'),
    minStockLevel: 5,
    notes: '10-10-10 formula'
  },
  {
    id: '4',
    name: 'Antibiotics',
    category: 'medicine',
    quantity: 10,
    unit: 'bottles',
    unitPrice: 15.00,
    totalValue: 150,
    supplier: 'Vet Supply',
    purchaseDate: new Date('2024-01-20'),
    expiryDate: new Date('2025-01-20'),
    minStockLevel: 3,
    notes: 'For livestock treatment'
  }
];

// Mock Transactions Data
export const mockTransactions: Transaction[] = [
  {
    id: '1',
    type: 'sale',
    itemName: 'Wheat',
    category: 'crop',
    quantity: 950,
    unit: 'bushels',
    unitPrice: 6.50,
    totalAmount: 6175,
    date: new Date('2024-07-20'),
    party: 'Grain Elevator Co.',
    paymentMethod: 'bank_transfer',
    status: 'completed',
    notes: 'Premium grade wheat'
  },
  {
    id: '2',
    type: 'purchase',
    itemName: 'Cattle Feed',
    category: 'supply',
    quantity: 1000,
    unit: 'lbs',
    unitPrice: 0.45,
    totalAmount: 450,
    date: new Date('2024-07-15'),
    party: 'Farm Supply Co.',
    paymentMethod: 'check',
    status: 'completed',
    notes: 'Bulk purchase discount applied'
  },
  {
    id: '3',
    type: 'sale',
    itemName: 'Milk',
    category: 'product',
    quantity: 500,
    unit: 'gallons',
    unitPrice: 3.25,
    totalAmount: 1625,
    date: new Date('2024-07-18'),
    party: 'Local Dairy',
    paymentMethod: 'cash',
    status: 'completed',
    notes: 'Weekly milk delivery'
  },
  {
    id: '4',
    type: 'purchase',
    itemName: 'Young Bull',
    category: 'animal',
    quantity: 1,
    unit: 'head',
    unitPrice: 1800,
    totalAmount: 1800,
    date: new Date('2024-06-10'),
    party: 'Johnson Ranch',
    paymentMethod: 'bank_transfer',
    status: 'completed',
    notes: 'Registered Angus bull'
  },
  {
    id: '5',
    type: 'sale',
    itemName: 'Eggs',
    category: 'product',
    quantity: 30,
    unit: 'dozen',
    unitPrice: 4.50,
    totalAmount: 135,
    date: new Date('2024-07-22'),
    party: 'Farmers Market',
    paymentMethod: 'cash',
    status: 'completed',
    notes: 'Free-range eggs'
  }
];

// Mock Employees Data
export const mockEmployees: Employee[] = [
  {
    id: '1',
    name: 'John Smith',
    email: 'john.smith@farm.com',
    phone: '(555) 123-4567',
    role: 'Farm Manager',
    department: 'administration',
    hireDate: new Date('2020-03-01'),
    salary: 55000,
    status: 'active',
    address: '123 Farm Road, Rural County',
    emergencyContact: 'Jane Smith (555) 123-4568',
    notes: 'Experienced in livestock management'
  },
  {
    id: '2',
    name: 'Maria Garcia',
    email: 'maria.garcia@farm.com',
    phone: '(555) 234-5678',
    role: 'Livestock Specialist',
    department: 'livestock',
    hireDate: new Date('2021-06-15'),
    salary: 42000,
    status: 'active',
    address: '456 Country Lane, Rural County',
    emergencyContact: 'Carlos Garcia (555) 234-5679',
    notes: 'Veterinary background'
  },
  {
    id: '3',
    name: 'Robert Johnson',
    email: 'robert.johnson@farm.com',
    phone: '(555) 345-6789',
    role: 'Crop Supervisor',
    department: 'crops',
    hireDate: new Date('2019-04-20'),
    salary: 48000,
    status: 'active',
    address: '789 Field View Drive, Rural County',
    emergencyContact: 'Linda Johnson (555) 345-6790',
    notes: 'Expert in sustainable farming practices'
  },
  {
    id: '4',
    name: 'Sarah Wilson',
    email: 'sarah.wilson@farm.com',
    phone: '(555) 456-7890',
    role: 'Equipment Operator',
    department: 'maintenance',
    hireDate: new Date('2022-01-10'),
    salary: 38000,
    status: 'active',
    address: '321 Tractor Trail, Rural County',
    emergencyContact: 'Mike Wilson (555) 456-7891',
    notes: 'Certified heavy equipment operator'
  }
];

// Mock Farm Statistics
export const mockFarmStats: FarmStats = {
  totalAnimals: mockAnimals.length,
  totalCrops: mockCrops.length,
  totalEmployees: mockEmployees.filter(emp => emp.status === 'active').length,
  monthlyRevenue: mockTransactions
    .filter(t => t.type === 'sale' && t.status === 'completed')
    .reduce((sum, t) => sum + t.totalAmount, 0),
  monthlyExpenses: mockTransactions
    .filter(t => t.type === 'purchase' && t.status === 'completed')
    .reduce((sum, t) => sum + t.totalAmount, 0),
  inventoryValue: mockInventory.reduce((sum, item) => sum + item.totalValue, 0),
  lowStockItems: mockInventory.filter(item => item.quantity <= item.minStockLevel).length,
  recentTransactions: mockTransactions.slice(0, 5)
};

// Helper functions for data manipulation
export const getAnimalsByType = (type: Animal['type']) => 
  mockAnimals.filter(animal => animal.type === type);

export const getCropsByStatus = (status: Crop['status']) => 
  mockCrops.filter(crop => crop.status === status);

export const getTransactionsByType = (type: Transaction['type']) => 
  mockTransactions.filter(transaction => transaction.type === type);

export const getEmployeesByDepartment = (department: Employee['department']) => 
  mockEmployees.filter(employee => employee.department === department);

export const getLowStockItems = () => 
  mockInventory.filter(item => item.quantity <= item.minStockLevel);
