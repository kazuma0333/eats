import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link';

export default function Home() {
  return (
    <>
    <div className='main'>
      <img src="/three-phote.png" className='one-phote'></img>
      <hr></hr>
      <div className='main-text'>
      <p className='one-p1'>今の気分に合う飲食店を見つけよう！</p>
      <p className='one-p2'>「今からどこ行く？」が即決<br></br>さっそく使ってみてね</p>
      <div className='one-bottom'>
        <p className='p-back'>-</p>
        <Link href="/one">
            <p className='p-next'>はじめる</p>
        </Link>
      </div>
      <img src="/three button.png" className='one-button'></img>
      </div>
    </div>

    <style jsx>{`
        .main{
            margin-top: 5vh;
            text-align: center;
        }
        .one-phote {
            width: auto;
            height: 65vh;
            margin-bottom: 5vh;
        }
        .main-text {
            padding: 5% 0;
        }
        .one-p1 {
            font-size: 16px;
            font-weight: bold;
        }
        .one-p2 {
            font-size: 12px;
            color: #A3A0A2;
            margin-bottom: 24px;
        }
        .one-bottom {
            display: flex;
            justify-content: space-between;
            width: 80%;
            margin-left: auto;
            margin-right:  auto;
        }
        .one-button {
            height: 1.5vh;
            text-align: center;
        }
        .p-back {
            color: #ffffff;
            font-size: 14px;
            font-weight: bold;
            margin: 0;
        }
        .p-next {
            color: #fff;
            font-size: 14px;
            font-weight: bold;
            margin: 0;
            padding: 5px 15px;
            background-color: #61A3F9;
            border-radius: 30px;
        }
      `}
      </style>
    </>
  )
}