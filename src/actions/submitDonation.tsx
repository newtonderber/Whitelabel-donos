"use server";

import {Category, Condition} from "@prisma/client";
import {prisma} from "@/lib/prisma";

/*
this server action creates a donation with contact data in the database based on the form inputs on form submission
 */
export async function submitDonation(formData: FormData) {
    const title=formData.get("title") as string;
    const category=formData.get("category") as Category;
    const amount = Number(formData.get("amount"));
    const condition=formData.get("condition") as Condition;

    const name=formData.get("name") as string;
    const email=formData.get("email") as string;
    const phoneNumber=formData.get("phone-number") as string;

    await prisma.donation.create({
        data: {
            title,
            category,
            amount,
            condition,
            stage: "ANGEBOTEN",
            donatorContacts:{
                create:{
                    name,
                    email,
                    phoneNumber
                }

            }
        }
    })
}