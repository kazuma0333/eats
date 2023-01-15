import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link';

export default function Home() {
  return (
    <>
    <div className='main'>
      <p className='title'>気分を選択してね！</p>
      <div className='sentaku'>
      <Link href="/gatturi">
      <div className='oowaku'>
         <p className='p1'>🍚</p>
         <p className='p2'>がっつり</p>
      </div>
      </Link>
      <Link href="/assari">
        <div className='oowaku'>
         <a className='p1'>🍲</a>
         <p className='p2'>あっさり</p>
        </div>
        </Link>
        <div className='oowaku'>
        <a href="https://www.google.com/maps/search/?api=1&query=辛い">
         <p className='p1'>🌶</p>
         <p className='p2'>辛い</p>
         </a>
        </div>
        <Link href="/daietto">
        <div className='oowaku'>
         <a className='p1'>🥗</a>
         <p className='p2'>ヘルシー</p>
        </div>
        </Link>
        <Link href="/sassato">
        <div className='oowaku'>
         <p className='p1'>💨</p>
         <p className='p2'>さっさと</p>
        </div>
        </Link>
        <a href="https://www.google.com/maps/search/?api=1&query=居酒屋">
        <div className='oowaku'>
         <a className='p1'>🍻</a>
         <p className='p2'>飲み</p>
        </div>
        </a>
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