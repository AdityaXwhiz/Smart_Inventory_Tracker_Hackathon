'use server'

import { revalidatePath } from 'next/cache'

// This would typically be a database model
interface InventoryItem {
  name: string;
  quantity: number;
  description?: string;
}

interface Location {
  name: string;
  address: string;
}

// Mock database
let inventory: InventoryItem[] = [];
let locations: Location[] = [];

export async function addStock(itemName: string, quantity: number) {
  try {
    const item = inventory.find(i => i.name === itemName);
    if (item) {
      item.quantity += quantity;
    } else {
      inventory.push({ name: itemName, quantity });
    }
    revalidatePath('/dashboard/stock');
    return { success: true, message: `Added ${quantity} ${itemName}(s) to stock.` };
  } catch (error) {
    console.error('Error adding stock:', error);
    return { success: false, message: 'Failed to add stock. Please try again.' };
  }
}

export async function removeStock(itemName: string, quantity: number) {
  try {
    const item = inventory.find(i => i.name === itemName);
    if (!item || item.quantity < quantity) {
      return { success: false, message: `Not enough ${itemName} in stock.` };
    }
    item.quantity -= quantity;
    revalidatePath('/dashboard/stock');
    return { success: true, message: `Removed ${quantity} ${itemName}(s) from stock.` };
  } catch (error) {
    console.error('Error removing stock:', error);
    return { success: false, message: 'Failed to remove stock. Please try again.' };
  }
}

export async function addLocation(name: string, address: string) {
  try {
    locations.push({ name, address });
    revalidatePath('/dashboard/locations');
    return { success: true, message: `Added location: ${name}` };
  } catch (error) {
    console.error('Error adding location:', error);
    return { success: false, message: 'Failed to add location. Please try again.' };
  }
}

export async function addItem(name: string, description: string, initialStock: number) {
  try {
    if (inventory.some(item => item.name === name)) {
      return { success: false, message: `Item ${name} already exists.` };
    }
    inventory.push({ name, quantity: initialStock, description });
    revalidatePath('/dashboard/items');
    return { success: true, message: `Added item: ${name} with initial stock of ${initialStock}` };
  } catch (error) {
    console.error('Error adding item:', error);
    return { success: false, message: 'Failed to add item. Please try again.' };
  }
}

export async function getInventory() {
  return inventory;
}

export async function getLocations() {
  return locations;
}

