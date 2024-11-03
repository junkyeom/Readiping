'use client'

import { signOut } from 'next-auth/react'

export default function LogoutBtn() {
    return (<button className='sign-btn' onClick={()=>{signOut()}}>로그아웃</button>)
}
