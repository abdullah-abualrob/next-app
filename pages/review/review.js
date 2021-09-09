import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
import style from '../../styles/review.module.css'

const data = require('../../data.json')

export default function review (){
    return(
        <>
            <Head>
                <title>
                    my review
                </title>
            </Head>
            <Link href='/'>
                <a>
                    <Image src="/../../public/vercel.svg" height={100} width={200} className={style.img}/>
                </a>
            </Link>
            <Link href='/'>
                <a>
                    <h1>
                        main review
                    </h1>
                </a>
            </Link>
            <div>
                {data.map((item, index) => {
                    return (
                        <div key={index}>
                            <div>{item.name}</div>
                            <div>{item.review}</div>
                        </div>
                    )
                })}
            </div>
            <div>
                <Link href='/../api/hello'>
                    <a>
                        api
                    </a>
                </Link>
            </div>
        </>
    )
}
