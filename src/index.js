import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AppProfile from './basic/AppProfile';
import AppProduct from './basic/AppProduct';
import AppWrap from './AppWrap';
import TailwindComponent from './TailwindComponent';
import AppTheme from './AppTheme';
import AppMentors from './AppMentors';
import AppMentorsButton from './AppMentorsButton';
import AppForm from './AppForm';
import AppCounter from './basic/AppCounter';
import AppCard from './AppCard';

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className="dark grid gap-4 xl:grid-cols-2 " >
    <div className="max-w-md mx-auto bg-white dark:bg-slate-800 rounded-xl shadow-md overflow-hidden md:max-w-2xl">
      <div className="md:flex">
        <div className="md:shrink-0">
          <img className="h-48 w-full object-cover md:h-full md:w-48" src="../logo192.png" alt="Modern building architecture" />
        </div>
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Company retreats</div>
          <a href="#" className="block mt-1 text-lg leading-tight font-medium text-black dark:text-white hover:underline">Incredible accommodation for your team</a>
          <p className="mt-2 text-slate-500">Looking to take your team away on a retreat to enjoy awesome food and take in some sunshine? We have a list of places to do just that.</p>
        </div>
      </div>
    </div>
    <div className="bg-white dark:bg-slate-800 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl">
      <div>
        <span className="inline-flex items-center justify-center p-2 bg-indigo-500 rounded-md shadow-lg">
          <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"></svg>
        </span>
      </div>
      <h3 className="text-slate-900 dark:text-white mt-5 text-base font-medium tracking-tight">Writes Upside-Down</h3>
      <p className="text-slate-500 dark:text-slate-400 mt-2 text-sm">
        The Zero Gravity Pen can be used to write in any orientation, including upside-down. It even works in outer space.
      </p>
    </div>
  </div>
<br></br>
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5" >
      <div className="bg-blue-100 dark:bg-slate-800 hover:bg-blue-200 hover:ring-1 rounded-lg px-6 py-8 shadow-xl">
        <h3 className='text-2xl'>4.8 Profile 첫 컴포넌트 만들기</h3>
        <AppProfile />
      </div>
      <div className='bg-green-100 dark:bg-slate-800 hover:bg-green-200 hover:ring-1 shadow-xl rounded-lg p-4 ring-green-300'>
        <h3 className='text-2xl'>4.17 카운터 상태 끌어올리기</h3>
        <AppCounter />
      </div>
      <div className='bg-amber-100 dark:bg-slate-800 shadow-xl rounded-lg p-4'>
        <h3 className='text-2xl'>5.18 다크모드 Context만들기</h3>
        <AppTheme />
      </div>
      <div className='bg-orange-100 dark:bg-slate-800 shadow-xl rounded-lg p-4'>
      <h3 className='text-2xl'>5.9 멘토 추가 삭제하기</h3>
          <AppMentors />
      </div>
      <div className='bg-red-100 dark:bg-slate-800 shadow-xl rounded-lg p-4'>
        <h3 className='text-2xl'>5.9 멘토 추가 삭제하기</h3>
        <AppMentorsButton />
      </div>
      <div className="bg-white-100 dark:bg-slate-800 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl">
          <h3 className='text-2xl'>5.12 Reducer 사용해보기</h3>
          <AppProduct />
      </div>
      <div className="bg-white-100 dark:bg-slate-800 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl">
        <h3 className='text-2xl'>5.14 Form을 만드는 법</h3>
        <AppForm />
      </div>
      <div className="bg-white-100 dark:bg-slate-800 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl">
        <h3 className='text-2xl'>5.15 컴포넌트의 재사용2(넵바)</h3>
        <AppWrap />
      </div>
      <div className="bg-white-100 dark:bg-slate-800 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl">
        <h3 className='text-2xl'>5.16 컴포넌트의 재사용2(카드)</h3>
        <AppCard />
      </div>
    </div>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
