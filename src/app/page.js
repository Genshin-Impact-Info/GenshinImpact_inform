"use client";
import { BrowserRouter } from 'react-router-dom';
import HomeComponents from '@/pages/Component'
import Header from '@/pages/Header';
export default function Home() {
  return (
    <main>
      <BrowserRouter>
        <Header />
        <HomeComponents />
      </BrowserRouter>
    </main>
  )
}
