// import styles from './page.css'
import './page.css'
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

const people = [
    '凯瑟琳·约翰逊: 数学家',
    '马里奥·莫利纳: 化学家',
    '穆罕默德·阿卜杜勒·萨拉姆: 物理学家',
    '珀西·莱温·朱利亚: 化学家',
    '苏布拉马尼扬·钱德拉塞卡: 天体物理学家',
  ];

export default function SliderBar() {
    const liItem = dataList.map(item => 
        <li>{item.name}</li>
    )
    const listItems = people.map(person =>
        <li>{person}</li>
      );
    return (
        <>
            <div className={'bg-white w-60'}>
                <div>SliderBar</div>
                <Image
                    src="/icon.png"
                    alt="Description of the image"
                    width={300}
                    height={200}
                />
                <ul>{liItem}</ul>
                
            </div>
            <div></div>
        </>
    )
}