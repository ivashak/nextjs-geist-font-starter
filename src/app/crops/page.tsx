"use client";

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Progress } from '@/components/ui/progress';
import { mockCrops } from '@/lib/mock-data';
import { Crop } from '@/types/farm';

export default function CropsPage() {
  const [crops, setCrops] = useState<Crop[]>(mockCrops);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState<string>('all');
  const [filterSeason, setFilterSeason] = useState<string>('all');

  const filteredCrops = crops.filter((crop) => {
    const matchesSearch = crop.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         crop.variety.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === 'all' || crop.status === filterStatus;
    const matchesSeason = filterSeason === 'all' || crop.season === filterSeason;
    
    return matchesSearch && matchesStatus && matchesSeason;
  });

  const formatDate = (date: Date | undefined) => {
    if (!date) return 'N/A';
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    }).format(date);
  };

  const getStatusBadgeVariant = (status: Crop['status']) => {
    switch (status) {
      case 'planted':
        return 'secondary';
      case 'growing':
        return 'default';
      case 'harvested':
        return 'outline';
      case 'failed':
        return 'destructive';
      default:
        return 'outline';
    }
  };

  const getSeasonBadgeVariant = (season: Crop['season']) => {
    switch (season) {
      case 'spring':
        return 'default';
      case 'summer':
        return 'secondary';
      case 'fall':
        return 'outline';
      case 'winter':
        return 'destructive';
      default:
        return 'outline';
    }
  };

  const calculateYieldProgress = (crop: Crop) => {
    if (crop.actualYield && crop.expectedYield) {
      return Math.min((crop.actualYield / crop.expectedYield) * 100, 100);
    }
    return 0;
  };

  const totalPlantedArea = crops.reduce((sum, crop) => sum + crop.plantedArea, 0);
  const totalExpectedYield = crops.reduce((sum, crop) => sum + crop.expectedYield, 0);
  const totalActualYield = crops.reduce((sum, crop) => sum + (crop.actualYield || 0), 0);

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Crop Management</h1>
          <p className="text-muted-foreground">
            Track planting, growth, and harvest of your crops
          </p>
        </div>
        <Button>Add New Crop</Button>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Crops</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{crops.length}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Area</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalPlantedArea} acres</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Expected Yield</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalExpectedYield.toLocaleString()}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Actual Yield</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalActualYield.toLocaleString()}</div>
          </CardContent>
        </Card>
      </div>

      {/* Status Overview */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Growing</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {crops.filter(c => c.status === 'growing').length}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Harvested</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {crops.filter(c => c.status === 'harvested').length}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Planted</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {crops.filter(c => c.status === 'planted').length}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Failed</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {crops.filter(c => c.status === 'failed').length}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Filters */}
      <Card>
        <CardHeader>
          <CardTitle>Filters</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex gap-4 flex-wrap">
            <div className="flex-1 min-w-[200px]">
              <Input
                placeholder="Search crops..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <Select value={filterStatus} onValueChange={setFilterStatus}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Filter by status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="planted">Planted</SelectItem>
                <SelectItem value="growing">Growing</SelectItem>
                <SelectItem value="harvested">Harvested</SelectItem>
                <SelectItem value="failed">Failed</SelectItem>
              </SelectContent>
            </Select>
            <Select value={filterSeason} onValueChange={setFilterSeason}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Filter by season" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Seasons</SelectItem>
                <SelectItem value="spring">Spring</SelectItem>
                <SelectItem value="summer">Summer</SelectItem>
                <SelectItem value="fall">Fall</SelectItem>
                <SelectItem value="winter">Winter</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Crops Table */}
      <Card>
        <CardHeader>
          <CardTitle>Crops ({filteredCrops.length})</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Variety</TableHead>
                <TableHead>Season</TableHead>
                <TableHead>Planted Area</TableHead>
                <TableHead>Planting Date</TableHead>
                <TableHead>Harvest Date</TableHead>
                <TableHead>Expected Yield</TableHead>
                <TableHead>Actual Yield</TableHead>
                <TableHead>Yield Progress</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredCrops.map((crop) => (
                <TableRow key={crop.id}>
                  <TableCell className="font-medium">{crop.name}</TableCell>
                  <TableCell>{crop.variety}</TableCell>
                  <TableCell>
                    <Badge variant={getSeasonBadgeVariant(crop.season)}>
                      {crop.season}
                    </Badge>
                  </TableCell>
                  <TableCell>{crop.plantedArea} acres</TableCell>
                  <TableCell>{formatDate(crop.plantingDate)}</TableCell>
                  <TableCell>{formatDate(crop.harvestDate)}</TableCell>
                  <TableCell>{crop.expectedYield.toLocaleString()}</TableCell>
                  <TableCell>
                    {crop.actualYield ? crop.actualYield.toLocaleString() : 'N/A'}
                  </TableCell>
                  <TableCell>
                    {crop.actualYield ? (
                      <div className="flex items-center space-x-2">
                        <Progress 
                          value={calculateYieldProgress(crop)} 
                          className="w-16" 
                        />
                        <span className="text-xs">
                          {Math.round(calculateYieldProgress(crop))}%
                        </span>
                      </div>
                    ) : (
                      'N/A'
                    )}
                  </TableCell>
                  <TableCell>
                    <Badge variant={getStatusBadgeVariant(crop.status)}>
                      {crop.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        Edit
                      </Button>
                      <Button variant="outline" size="sm">
                        View
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          {filteredCrops.length === 0 && (
            <div className="text-center py-8 text-muted-foreground">
              No crops found matching your criteria.
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
