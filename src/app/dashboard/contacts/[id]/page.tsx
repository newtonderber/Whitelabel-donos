import {prisma} from "@/lib/prisma";


interface PageProps {
    params: Promise<{id: string}>;
}

export default async function App({params}: PageProps){
    const resolvedParams=await params;
    const donatorContactsId=resolvedParams.id;
    const contacts = await prisma.donatorContacts.findUnique({
        where: {id:donatorContactsId}
    });

    return(
        <div>
            <ul>
                <li>Name: {contacts?.name}</li>
                <li>Email: {contacts?.email}</li>
                <li>Telefon: {contacts?.phoneNumber}</li>
            </ul>
        </div>
    )
}