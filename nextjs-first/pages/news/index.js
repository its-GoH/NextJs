import Link from "next/link";
import { Fragment } from "react";

function NewsPage(){
    return(
        <Fragment>
            <h1>Th News Page</h1>
            <ul>
                <li><Link href="/news/nextjs-framework">NextJs Framework</Link></li>
                <li>Something Else</li>
            </ul>
        </Fragment>
    )
}

export default NewsPage;