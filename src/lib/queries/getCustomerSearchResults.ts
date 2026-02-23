import { db } from "@/db";
import { tickets, customers } from "@/db/schema";
import { ilike, or, sql, eq } from "drizzle-orm";

export async function getCustomerSearchResults(searchText: string) {
  const results = await db
    .select({
      id: customers.id,
      firstName: customers.firstName,
      lastName: customers.lastName,
      email: customers.email,
      phone: customers.phone,
      city: customers.city,
      zip: customers.zip,
    })
    .from(customers)
    .where(
      or(
        ilike(customers.email, `%${searchText}%`),
        ilike(customers.phone, `%${searchText}%`),
        ilike(customers.city, `%${searchText}%`),
        ilike(customers.zip, `%${searchText}%`),
        ilike(customers.firstName, `%${searchText}%`),
        ilike(customers.lastName, `%${searchText}%`),
      )
    );

  return results;
}