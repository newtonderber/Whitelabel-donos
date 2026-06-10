import PageContainer from "@/components/layout/PageContainer";
import Link from "next/link";

export default function Internal() {
    return(
        <PageContainer>
            <div>
                <ul>
                    <li><Link href="/dashboard">dashboard</Link></li>
                    <li><Link href="/admin">admin</Link></li>
                </ul>
            </div>
        </PageContainer>
    )

}