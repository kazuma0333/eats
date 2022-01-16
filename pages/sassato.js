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
      <a href="https://www.google.com/maps/search/?api=1&query=ラーメン">
         <p className='p0'>🍜</p>
         <p className='p2'>ラーメン</p>
      </a>
        </div>
        <div className='oowaku'>
        <a href="https://www.google.com/maps/search/?api=1&query=丼">
        <a className='p01'>
        <img src="/丼.png" width={70} height={60}></img>
         </a>
         <p className='p2'>丼</p>
         </a>
        </div>
        <div className='oowaku'>
        <a href="https://www.google.com/maps/search/?api=1&query=カレー">
         <p className='p1'>🍛</p>
         <p className='p2'>カレー</p>
         </a>
        </div>
        <div className='oowaku'>
        <a href="https://www.google.com/maps/search/?api=1&query=ハンバーガー">
         <a className='p1'>🍔</a>
         <p className='p2'>ハンバーガー</p>
         </a>
        </div>
        <div className='oowaku'>
        <a href="https://www.google.com/maps/search/?api=1&query=うどん">
         <p className='p01'>
         <img src="/うどん.png" width={60} height={60}></img>
         </p>
         <p className='p2'>うどん</p>
         </a>
        </div>
        <div className='oowaku'>
        <a href="https://www.google.com/maps/search/?api=1&query=定食">
         <a className='p02'>
             <img src="/和食.png" width={60} height={60}></img>
         </a>
         <p className='p2'>定食</p>
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
            line-height: 120px;
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

        .p02{
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