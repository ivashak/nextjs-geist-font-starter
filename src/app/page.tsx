"use client";

import { StatsCard } from '@/components/dashboard/stats-card';
import { RecentActivity } from '@/components/dashboard/recent-activity';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { mockFarmStats, getLowStockItems, getAnimalsByType, getCropsByStatus } from '@/lib/mock-data';

export default function Dashboard() {
  const stats = mockFarmStats;
  const lowStockItems = getLowStockItems();
  const activeCrops = getCropsByStatus('growing');
  const cattle = getAnimalsByType('cattle');

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(amount);
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Farm Dashboard</h1>
        <p className="text-muted-foreground">
          Overview of your farm operations and key metrics
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatsCard
          title="Total Animals"
          value={stats.totalAnimals}
          description="Active livestock count"
        />
        <StatsCard
          title="Active Crops"
          value={activeCrops.length}
          description="Currently growing"
        />
        <StatsCard
          title="Monthly Revenue"
          value={formatCurrency(stats.monthlyRevenue)}
          description="Sales this month"
          trend={{ value: 12.5, isPositive: true }}
        />
        <StatsCard
          title="Monthly Expenses"
          value={formatCurrency(stats.monthlyExpenses)}
          description="Purchases this month"
          trend={{ value: 8.2, isPositive: false }}
        />
      </div>

      {/* Secondary Stats */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <StatsCard
          title="Total Employees"
          value={stats.totalEmployees}
          description="Active staff members"
        />
        <StatsCard
          title="Inventory Value"
          value={formatCurrency(stats.inventoryValue)}
          description="Current stock worth"
        />
        <StatsCard
          title="Low Stock Alerts"
          value={stats.lowStockItems}
          description="Items need restocking"
        />
      </div>

      {/* Content Grid */}
      <div className="grid gap-6 md:grid-cols-2">
        {/* Recent Activity */}
        <RecentActivity transactions={stats.recentTransactions} />

        {/* Low Stock Items */}
        <Card>
          <CardHeader>
            <CardTitle>Low Stock Alerts</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {lowStockItems.length > 0 ? (
                lowStockItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center justify-between space-x-4"
                  >
                    <div className="flex flex-col">
                      <p className="text-sm font-medium leading-none">
                        {item.name}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {item.category}
                      </p>
                    </div>
                    <div className="text-right">
                      <Badge variant="destructive">
                        {item.quantity} {item.unit}
                      </Badge>
                      <p className="text-xs text-muted-foreground mt-1">
                        Min: {item.minStockLevel} {item.unit}
                      </p>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-sm text-muted-foreground">
                  All items are well stocked
                </p>
              )}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Farm Overview */}
      <div className="grid gap-6 md:grid-cols-3">
        {/* Livestock Overview */}
        <Card>
          <CardHeader>
            <CardTitle>Livestock Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-sm">Cattle</span>
                <Badge variant="outline">{cattle.length}</Badge>
              </div>
              <div className="flex justify-between">
                <span className="text-sm">Poultry</span>
                <Badge variant="outline">{getAnimalsByType('poultry').length}</Badge>
              </div>
              <div className="flex justify-between">
                <span className="text-sm">Sheep</span>
                <Badge variant="outline">{getAnimalsByType('sheep').length}</Badge>
              </div>
              <div className="flex justify-between">
                <span className="text-sm">Goats</span>
                <Badge variant="outline">{getAnimalsByType('goat').length}</Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Crop Status */}
        <Card>
          <CardHeader>
            <CardTitle>Crop Status</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-sm">Growing</span>
                <Badge variant="outline">{getCropsByStatus('growing').length}</Badge>
              </div>
              <div className="flex justify-between">
                <span className="text-sm">Harvested</span>
                <Badge variant="outline">{getCropsByStatus('harvested').length}</Badge>
              </div>
              <div className="flex justify-between">
                <span className="text-sm">Planted</span>
                <Badge variant="outline">{getCropsByStatus('planted').length}</Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <button className="w-full text-left text-sm p-2 rounded hover:bg-muted transition-colors">
                Add New Animal
              </button>
              <button className="w-full text-left text-sm p-2 rounded hover:bg-muted transition-colors">
                Record Transaction
              </button>
              <button className="w-full text-left text-sm p-2 rounded hover:bg-muted transition-colors">
                Update Inventory
              </button>
              <button className="w-full text-left text-sm p-2 rounded hover:bg-muted transition-colors">
                Add Employee
              </button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
