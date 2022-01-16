import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link';

export default function Home() {
  return (
    <>
    <div className='main'>
      <p className='title'>ジャンルを選択してね！統一感出したい</p>
      <div className='sentaku'>
      <div className='oowaku'>
      <a href="https://www.google.com/maps/search/?api=1&query=和食">
         <p className='p0'>
         <img src="/和食.png" width={60} height={60}></img>
         </p>
         <p className='p2'>和食</p>
         </a>
        </div>
        <div className='oowaku'>
        <a href="https://www.google.com/maps/search/?api=1&query=うどん">
        <a className='p01'>
        <img src="/うどん.png" width={60} height={60}></img>
         </a>
         <p className='p2'>うどん</p>
         </a>
        </div>
        <div className='oowaku'>
        <a href="https://www.google.com/maps/search/?api=1&query=そば">
         <p className='p01'>
         <img src="/soba.png" width={60} height={55}></img>
         </p>
         <p className='p2'>そば</p>
         </a>
        </div>
        <div className='oowaku'>
        <a href="https://www.google.com/maps/search/?api=1&query=野菜">
         <a className='p1'>🥗</a>
         <p className='p2'>野菜</p>
         </a>
        </div>
        <div className='oowaku'>
        <a href="https://www.google.com/maps/search/?api=1&query=しゃぶしゃぶ">
         <p className='p1'>🐖</p>
         <p className='p2'>しゃぶしゃぶ</p>
         </a>
        </div>
        <div className='oowaku'>
        <a href="https://www.google.com/maps/search/?api=1&query=鍋">
         <a className='p1'>🍲</a>
         <p className='p2'>鍋</p>
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

        .p0{
            display: inline-block;
            width: 108px;
            height: 108px;
            text-align: center;
            line-height: 125px;
            background-color: #F0F0F0;
            border-radius:30px;
            font-size: 50px;
            text-decoration: none;
            margin: 30px 30px 0 30px;
        }

        .p01{
            display: inline-block;
            width: 108px;
            height: 108px;
            text-align: center;
            line-height: 130px;
            background-color: #F0F0F0;
            border-radius:30px;
            font-size: 50px;
            text-decoration: none;
            margin: 30px 30px 0 30px;
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