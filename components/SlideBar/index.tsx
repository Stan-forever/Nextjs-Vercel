// import styles from './page.css'
import { useState, useEffect } from "react";
import Image from 'next/image';

const dataList = [
    {name: '总览', value: 'all'},
    {name: 'HTML', value: 'html'},
    {name: 'CSS', value: 'css'},
    {name: 'JavaScript', value: 'javascript'},
    {name: 'VUE', value: 'vue'},
    {name: 'React', value: 'react'},
]

export default function SliderBar() {
    return (
        <div className={'bg-white w-60'}>
            <div>SliderBar</div>
            <Image
                src="/icon.png"
                alt="Description of the image"
                width={300}
                height={200}
            />
        </div>
    )
}