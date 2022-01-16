import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link';

export default function Home() {
  return (
    <>
    <div className='main'>
      <p className='title'>ジャンルを選択してね！</p>
      <div className='sentaku'>
      
      <div className='oowaku'>
        <a href="https://www.google.com/maps/search/?api=1&query=焼肉">
         <p className='p1'>🥓</p>
         <p className='p2'>焼肉</p>
         </a>
      </div>

        <div className='oowaku'>
        <a href="https://www.google.com/maps/search/?api=1&query=ステーキ">
         <p className='p1'>🥩</p>
         <p className='p2'>ステーキ</p>
        </a>
        </div>
        <div className='oowaku'>
        <a href="https://www.google.com/maps/search/?api=1&query=海鮮">
         <p className='p1'>🐟</p>
         <p className='p2'>海鮮</p>
         </a>
        </div>
        <div className='oowaku'>
        <a href="https://www.google.com/maps/search/?api=1&query=ハンバーガー">
         <p className='p1'>🍔</p>
         <p className='p2'>ハンバーガー</p>
         </a>
        </div>
        <div className='oowaku'>
        <a href="https://www.google.com/maps/search/?api=1&query=ラーメン">
         <p className='p1'>🍜</p>
         <p className='p2'>ラーメン</p>
         </a>
        </div>
        <div className='oowaku'>
        <a href="https://www.google.com/maps/search/?api=1&query=イタリアン">
         <p className='p1'>🍕</p>
         <p className='p2'>イタリアン</p>
         </a>
        </div>
      </div>
    </div>

    <style jsx>{`
        .main{
            margin: 14% 0 0 0;
        }

        .title{
            text-align: center;
        }

        .sentaku{
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
        }
        
        .p1{
            display: inline-block;
            width: 108px;
            height: 108px;
            text-align: center;
            line-height: 108px;
            background-color: #F0F0F0;
            border-radius:30px;
            font-size: 50px;
            text-decoration: none;
            margin: 30px 30px 0 30px;
        }

        .p2{
            display: flex;
            width: 100%;
            height: 29px;
            justify-content: center;
            margin: 10px 0 0 0;
        }

      `}
      </style>
    </>
  )
}