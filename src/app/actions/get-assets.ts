"use server";
import sql from '@/lib/db';

export async function getDJFAssets() {
  try {
    // High-precision query for GFA Institutional Governance
    const assets = await sql`SELECT * FROM assets`;
    return assets;
  } catch (error) {
    console.error("Governance Data Error:", error);
    return [];
  }
}
