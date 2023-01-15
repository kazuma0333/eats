import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link';

export default function Home() {
  return (
    <>
    <div className='main'>
      <img src="/スマホいじってる女の子.png" className='one-phote'></img>
      <hr></hr>
      <div className='main-text'>
      <p className='one-p1'>たったの３ステップ✌️</p>
      <p className='one-p2'>気分を選択して、ジャンルを選択すると<br></br>今いる場所の近くでおすすめの飲食店が表示されます</p>
      <div className='one-bottom'>
        <Link href="https://eats-gamma.vercel.app/">
            <p className='p-back'>スキップ</p>
        </Link>
        <Link href="/three">
            <p className='p-next'>次へ</p>
        </Link>
      </div>
      <img src="/two button.png" className='one-button'></img>
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
            color: #A3A0A2;
            font-size: 14px;
            font-weight: bold;
            margin: 0;
        }
        .p-next {
            color: #61A3F9;
            font-size: 14px;
            font-weight: bold;
            margin: 0;
        }
      `}
      </style>
    </>
  )
}