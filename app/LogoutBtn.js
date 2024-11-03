'use client'

import { signOut } from 'next-auth/react'

export default function LogoutBtn() {
    return (<span className='sign-btn' onClick={()=>{signOut()}}>로그아웃</span>)
}
