'use client'

import './main.css'
import { useState } from 'react'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'

export default function SignIn() {

    let [id, setId] = useState('')
    let [password, setPassword] = useState('')
    let router = useRouter()

    const onSubmit = async ()=>{

    }

    return (
        <div>
            <form onSubmit={onSubmit}>
            <input
                name="id"
                type="text"
                value={id}
                onChange={()=>{}}
                placeholder="아이디"
            />
            {blankId && <span>아이디를 입력해주세요.</span>}
            <input
                name="password"
                type="password"
                value={password}
                onchange={()=>{}}
                placeholder="비밀번호"
                className={`${styles.input} ${blankPw ? styles['input-error'] : ''}`}
            />
            {blankPw && <span>비밀번호를 입력해주세요.</span>}
            {error && <span>아이디 또는 비밀번호를 잘못 입력했습니다. 다시 확인해주세요.</span>}
            <button type="submit">로그인</button>
            <Link href='/register'>회원가입</Link>
            </form>
        </div>
    )
}